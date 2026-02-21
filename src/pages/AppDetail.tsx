import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { apps } from '../data/apps';
import TechBadge from '../components/TechBadge';
import ScreenshotGallery from '../components/ScreenshotGallery';
import versions from '../data/versions.json';

export default function AppDetail() {
  const { slug } = useParams<{ slug: string }>();
  const app = apps.find((a) => a.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!app) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">App not found</h1>
        <Link to="/" className="text-accent-blue hover:underline">
          &larr; Back to all apps
        </Link>
      </div>
    );
  }

  const appVersion = (versions as any)[app.slug]?.version;
  const pubDate = (versions as any)[app.slug]?.pubDate;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-block text-slate-400 hover:text-white transition-colors mb-8 text-sm"
      >
        &larr; Back to all apps
      </Link>

      <div className="flex items-center gap-5 mb-8">
        <img
          src={app.icon.startsWith('http') ? app.icon : import.meta.env.BASE_URL + app.icon.slice(1)}
          alt={app.name}
          className="w-20 h-20 rounded-2xl"
        />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {app.name}
            </h1>
            {appVersion && (
              <span className="px-2.5 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-medium border border-accent-blue/30">
                v{appVersion}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1 text-slate-400 text-sm">
            <span>{app.platform}</span>
            {pubDate && (
              <>
                <span>&bull;</span>
                <span>Updated: {new Date(pubDate).toLocaleDateString()}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-lg leading-relaxed mb-10">
        {app.description}
      </p>

      {app.screenshots.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Screenshots</h2>
          <ScreenshotGallery images={app.screenshots} />
        </section>
      )}

      {(app.brewCommand || app.platform.includes('Windows')) && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
          <div className="flex flex-col gap-4">
            {app.brewCommand && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm font-medium text-slate-400 mb-3">macOS - Install via Homebrew</p>
                <div 
                  className="flex items-center justify-between bg-dark-900/50 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-dark-900/80 hover:border-accent-blue/50 transition-all group/cmd"
                  onClick={(e) => handleCopy(e, app.brewCommand!)}
                  title="Copy install command"
                >
                  <code className="text-sm font-mono text-slate-300 overflow-x-auto mr-4">{app.brewCommand}</code>
                  <button className="text-slate-400 group-hover/cmd:text-accent-blue transition-colors shrink-0 p-1">
                    {copied ? (
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )}
            
            {app.platform.includes('Windows') && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm font-medium text-slate-400 mb-3">Windows & macOS</p>
                <a 
                  href={`${app.githubUrl}/releases/latest`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-dark-900/50 border border-white/10 rounded-lg px-4 py-2.5 hover:bg-dark-900/80 hover:border-accent-blue/50 transition-all text-sm font-medium text-slate-300 hover:text-white group/win"
                  title="Download latest release"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover/win:text-accent-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Latest Release
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {app.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-slate-300 text-sm"
            >
              <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {app.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </section>

      <div className="flex gap-4">
        <a
          href={app.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-glass-border px-6 py-3 text-white font-medium transition-colors"
        >
          View on GitHub
        </a>
        {app.downloadUrl && (
          <a
            href={app.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-blue hover:bg-blue-500 px-6 py-3 text-white font-medium transition-colors"
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
}
