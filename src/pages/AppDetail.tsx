import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';
import TechBadge from '../components/TechBadge';
import ScreenshotGallery from '../components/ScreenshotGallery';

export default function AppDetail() {
  const { slug } = useParams<{ slug: string }>();
  const app = apps.find((a) => a.slug === slug);

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
          src={import.meta.env.BASE_URL + app.icon.slice(1)}
          alt={app.name}
          className="w-20 h-20 rounded-2xl"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {app.name}
          </h1>
          <p className="text-slate-400 mt-1">{app.platform}</p>
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
