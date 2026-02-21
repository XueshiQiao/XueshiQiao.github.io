const colorMap: Record<string, string> = {
  Rust: 'border-orange-400/40 text-orange-300',
  Tauri: 'border-yellow-400/40 text-yellow-300',
  'Tauri v2': 'border-yellow-400/40 text-yellow-300',
  React: 'border-cyan-400/40 text-cyan-300',
  TypeScript: 'border-blue-400/40 text-blue-300',
  Swift: 'border-orange-500/40 text-orange-300',
  SwiftUI: 'border-purple-400/40 text-purple-300',
  'Win32 API': 'border-gray-400/40 text-gray-300',
};

const defaultColor = 'border-slate-400/40 text-slate-300';

export default function TechBadge({ name }: { name: string }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorMap[name] || defaultColor}`}
    >
      {name}
    </span>
  );
}
