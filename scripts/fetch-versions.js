import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../src/data');
const APPS_FILE = path.join(DATA_DIR, 'apps.ts');
const OUTPUT_FILE = path.join(DATA_DIR, 'versions.json');

async function extractUrls(fileContent) {
  const urls = {};
  
  const blocks = fileContent.split('{').slice(1);
  for (const block of blocks) {
    const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
    const urlMatch = block.match(/latestJsonUrl:\s*['"]([^'"]+)['"]/);
    
    if (slugMatch && urlMatch) {
      urls[slugMatch[1]] = urlMatch[1];
    }
  }
  
  return urls;
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    try {
      const output = execSync(`curl -sL "${url}"`, { encoding: 'utf-8' });
      resolve(JSON.parse(output));
    } catch (e) {
      reject(e);
    }
  });
}

async function fetchVersions() {
  console.log('Fetching latest version information...');
  
  try {
    const appsContent = await fs.readFile(APPS_FILE, 'utf-8');
    const urls = await extractUrls(appsContent);
    const versions = {};

    for (const [slug, url] of Object.entries(urls)) {
      console.log(`Fetching latest.json for ${slug} from ${url}...`);
      try {
        const data = await fetchJson(url);
        versions[slug] = {
          version: data.version || 'Unknown',
          pubDate: data.pub_date || data.pubDate || undefined
        };
        console.log(`✅ ${slug}: v${versions[slug].version}`);
      } catch (error) {
        console.warn(`⚠️ Failed to fetch version for ${slug}: ${error.message}`);
      }
    }

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(versions, null, 2));
    console.log(`Successfully wrote versions to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Failed to update versions:', error);
    process.exit(1);
  }
}

fetchVersions();