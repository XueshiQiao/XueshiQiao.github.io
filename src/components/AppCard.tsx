import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import TechBadge from './TechBadge';
import versions from '../data/versions.json';

export default function AppCard({ app }: { app: App }) {
  const appVersion = (versions as any)[app.slug]?.version;

  return (
    <Link to={`/app/${app.slug}`} className="block h-full">
      <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-white/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex items-center gap-4">
            <img
              src={import.meta.env.BASE_URL + app.icon.slice(1)}
              alt={app.name}
              className="w-14 h-14 rounded-xl"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-white leading-tight">{app.name}</h3>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">{app.platform}</p>
            </div>
          </div>
          {appVersion && (
            <span className="shrink-0 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              v{appVersion}
            </span>
          )}
        </div>

        <p className="text-slate-300 text-sm mb-4 flex-1 leading-relaxed">{app.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-accent-blue text-sm font-medium group-hover:text-blue-400 transition-colors">
            View details &rarr;
          </span>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </Link>
  );
}