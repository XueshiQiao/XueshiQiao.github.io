import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { App } from '../data/apps';
import TechBadge from './TechBadge';
import versions from '../data/versions.json';

export default function AppCard({ app }: { app: App }) {
  const appVersion = (versions as any)[app.slug]?.version;
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Link to={`/app/${app.slug}`} className="block h-full group outline-none">
      <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative overflow-hidden transition-all duration-500">
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-5 gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={app.icon.startsWith('http') ? app.icon : import.meta.env.BASE_URL + app.icon.slice(1)}
                  alt={app.name}
                  className="w-16 h-16 rounded-2xl shadow-lg border border-white/10 relative z-10 bg-dark-800 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-blue transition-colors">{app.name}</h3>
                </div>
                <p className="text-sm font-medium text-slate-400 mt-1">{app.platform}</p>
              </div>
            </div>
            {appVersion && (
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shadow-sm">
                v{appVersion}
              </span>
            )}
          </div>

          <p className="text-slate-300 text-sm mb-3 leading-relaxed relative z-10">{app.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {app.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {(app.brewCommand || app.platform.includes('Windows')) && (
          <div className="mb-6 relative z-10 space-y-3">
            {app.brewCommand && (
              <div>
                <div className="text-[10px] text-slate-500 mb-1.5 font-bold uppercase tracking-widest">macOS - Install via Homebrew</div>
                <div 
                  className="flex items-center justify-between bg-dark-900/50 border border-white/10 rounded-lg p-2.5 cursor-pointer hover:bg-dark-900/80 hover:border-accent-blue/50 transition-all group/cmd"
                  onClick={(e) => handleCopy(e, app.brewCommand!)}
                  title="Copy install command"
                >
                  <code className="text-xs font-mono text-slate-300 truncate mr-3 flex-1">{app.brewCommand}</code>
                  <button className="text-slate-400 group-hover/cmd:text-accent-blue transition-colors shrink-0 p-1">
                    {copied ? (
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )}
            
            {app.platform.includes('Windows') && (
              <div>
                <div className="text-[10px] text-slate-500 mb-1.5 font-bold uppercase tracking-widest">Windows & macOS</div>
                <a 
                  href={`${app.githubUrl}/releases/latest`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-start gap-2.5 bg-dark-900/50 border border-white/10 rounded-lg p-2.5 hover:bg-dark-900/80 hover:border-accent-blue/50 transition-all text-sm font-medium text-slate-300 hover:text-white group/win"
                  title="Download latest release"
                >
                  <svg className="w-4 h-4 text-slate-400 group-hover/win:text-accent-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto relative z-10">
          <span className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors flex items-center gap-1">
            View details 
            <svg className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </Link>
  );
}
