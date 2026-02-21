export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  features: string[];
  techStack: string[];
  platform: string;
  githubUrl: string;
  downloadUrl?: string;
}

export const apps: App[] = [
  {
    slug: 'pastepaw',
    name: 'PastePaw',
    tagline: 'A powerful yet beautiful clipboard history manager',
    description:
      'PastePaw is a beautiful clipboard history manager for Windows, built with Rust + Tauri + React + TypeScript. It automatically saves everything you copy, lets you search through your history, organize clips into folders, and even includes AI-powered features for summarizing, translating, and explaining code.',
    icon: '/images/pastepaw/icon.png',
    screenshots: [
      '/images/pastepaw/screenshot-light.png',
      '/images/pastepaw/screenshot-dark.png',
      '/images/pastepaw/screenshot-win-light.png',
      '/images/pastepaw/screenshot-win-dark.png',
    ],
    features: [
      'All data stored locally for privacy',
      'Modern dark/light theme with instant switching',
      'Search through clipboard history',
      'Organize clips into custom folders',
      'Application exceptions for sensitive apps',
      'Customizable hotkey to open history',
      'AI-powered summarize, translate, and code explain',
      'Customizable AI actions and system prompts',
      'Infinite scroll through unlimited history',
      'Multi-display support',
    ],
    techStack: ['Rust', 'Tauri', 'React', 'TypeScript'],
    platform: 'macOS / Windows',
    githubUrl: 'https://github.com/XueshiQiao/PastePaw',
  },
  {
    slug: 'netstat-cat',
    name: 'Netstat Cat',
    tagline: 'A powerful network monitoring tool',
    description:
      'Netstat Cat is a lightweight desktop application built with Tauri v2 and Rust, providing a user-friendly interface for monitoring network connections on macOS and Windows. It serves as a graphical replacement for the command-line netstat tool, with real-time connection tracking and advanced filtering capabilities.',
    icon: '/images/netstat-cat/icon.png',
    screenshots: [
      '/images/netstat-cat/screenshot-light.png',
      '/images/netstat-cat/screenshot-dark.png',
      '/images/netstat-cat/screenshot-query.png',
      '/images/netstat-cat/screenshot-filter.png',
    ],
    features: [
      'Pure local operation — no data transmission',
      'Real-time network connection monitoring',
      'Process identification for each connection',
      'Advanced filtering with semantic queries',
      'Virtualized table for high performance',
      'Dark and light theme support',
      'Auto-refresh mode with configurable intervals',
      'LRU caching for process paths',
    ],
    techStack: ['Rust', 'Tauri v2', 'React', 'TypeScript'],
    platform: 'macOS / Windows',
    githubUrl: 'https://github.com/XueshiQiao/netstat-cat',
  },
  {
    slug: 'globalvimlikenavi',
    name: 'Global Vim-Like Navi',
    tagline: 'Vim-style navigation for your entire OS',
    description:
      'Global Vim-Like Navi is a lightweight Windows utility that brings Vim-style navigation (H/J/K/L) to the entire operating system. Use CapsLock as a modifier key for arrow keys, word navigation, line start/end, and more — in any application. Built with Rust and the Windows API for zero-latency interception.',
    icon: '/images/globalvimlikenavi/icon.png',
    screenshots: ['/images/globalvimlikenavi/screenshot-main.png'],
    features: [
      'Global Vim-style H/J/K/L navigation',
      'Smart CapsLock handling (modifier vs toggle)',
      'Word, line, and fast-scroll navigation',
      'Editing shortcuts (backspace, new line)',
      'Configurable shell command mappings',
      'System tray with Gaming Mode (pause)',
      'Start with Windows option',
      'Zero-latency native performance',
    ],
    techStack: ['Rust', 'Tauri', 'React', 'TypeScript', 'Win32 API'],
    platform: 'macOS / Windows',
    githubUrl: 'https://github.com/XueshiQiao/GlobalVimLikeNavi',
  },
  {
    slug: 'notifier',
    name: 'Notifier',
    tagline: 'Never miss a prompt again',
    description:
      'Notifier is a macOS app that routes permission requests from AI agentic code tools to native notifications. Built with Swift and SwiftUI, it activates the source app when you click the notification banner, supports callback URLs, and is compatible with Claude Code, Gemini CLI, and any agentic coding tool that supports hooks.',
    icon: '/images/notifier/icon.png',
    screenshots: [
      '/images/notifier/screenshot-01.png',
      '/images/notifier/screenshot-02.png',
    ],
    features: [
      'Native macOS experience with Swift & SwiftUI',
      'Click notification to activate source app',
      'Support for callback_url and PID-based activation',
      'Parses source app icon from PID',
      'Compatible with Claude Code and Gemini CLI',
      'Works with any terminal (Terminal, Ghostty, Tabby)',
      'Simple HTTP server on localhost:8000',
    ],
    techStack: ['Swift', 'SwiftUI'],
    platform: 'macOS',
    githubUrl: 'https://github.com/XueshiQiao/Notifier',
  },
];
