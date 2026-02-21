import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 border-b border-glass-border bg-dark-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center">
          <Link to="/" className="text-white font-semibold text-lg hover:text-accent-blue transition-colors">
            Apps by Joey
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-glass-border py-8 text-center text-sm text-slate-500">
        <p>Built with React, TypeScript & Tailwind CSS</p>
      </footer>
    </div>
  );
}
