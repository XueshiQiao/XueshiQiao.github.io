import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import TechBadge from './TechBadge';

export default function AppCard({ app }: { app: App }) {
  return (
    <Link to={`/app/${app.slug}`} className="block">
      <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={import.meta.env.BASE_URL + app.icon.slice(1)}
            alt={app.name}
            className="w-14 h-14 rounded-xl"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{app.name}</h3>
            <p className="text-sm text-slate-400">{app.platform}</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4 flex-1">{app.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-accent-blue text-sm font-medium">
            View details &rarr;
          </span>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </Link>
  );
}
