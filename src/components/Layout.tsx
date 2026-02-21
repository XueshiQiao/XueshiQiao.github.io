import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-blue/30 selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-dark-900/70 backdrop-blur-xl transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-xl tracking-tight hover:opacity-80 transition-opacity flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm shadow-lg shadow-accent-blue/20">
              JW
            </span>
            Joey's Workbench
          </Link>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/XueshiQiao" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-8 w-full">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Joey. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}
