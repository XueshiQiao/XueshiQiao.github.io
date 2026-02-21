# How to Add a New App

## Step 1: Add Images

Drop your app icon and screenshots into `public/images/<app-name>/`:

```
public/images/my-new-app/
├── icon.png
├── screenshot-1.png
└── screenshot-2.png
```

## Step 2: Add an Entry to the Apps Array

Open `src/data/apps.ts` and add a new object to the `apps` array:

```ts
{
  slug: 'my-new-app',
  name: 'My New App',
  tagline: 'One-line description',
  description: 'Longer description...',
  icon: '/images/my-new-app/icon.png',
  screenshots: [
    '/images/my-new-app/screenshot-1.png',
    '/images/my-new-app/screenshot-2.png',
  ],
  features: ['Feature one', 'Feature two'],
  techStack: ['Rust', 'Tauri'],
  platform: 'macOS',
  githubUrl: 'https://github.com/...',
  downloadUrl: 'https://...', // optional
}
```

The homepage card and detail page are generated automatically from this data.

## Optional: Add a Tech Badge Color

If your app uses a tech stack not already in `src/components/TechBadge.tsx`'s `colorMap`, you can add a color entry there. Otherwise it falls back to a neutral gray style.
