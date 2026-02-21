import Hero from '../components/Hero';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
    </>
  );
}
