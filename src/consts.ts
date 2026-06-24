export const SITE_TITLE = 'Minimal Zo Brain';
export const SITE_TAGLINE = 'Give Zo one spec. Get a brain built around your real life.';
export const SITE_DESCRIPTION =
  'Minimal Zo Brain is a specification-first setup system for Zo Computer. Hand Zo one file — spec.md — and it interviews you and builds a personal, AI-readable brain from your real work, projects, people, and decisions.';

export const SPEC_GIST_URL = 'https://gist.github.com/Jeff-Kazzee/f5409e0f20b0a7c71560d2353a9df02a';
export const RAW_SPEC_URL =
  'https://gist.githubusercontent.com/Jeff-Kazzee/f5409e0f20b0a7c71560d2353a9df02a/raw/spec.md';
export const SPEC_REPO_URL = 'https://github.com/Jeff-Kazzee/zo-computer-second-brain';
export const WEBSITE_REPO_URL = 'https://github.com/Jeff-Kazzee/minimal-zo-brain-site';

// Calls to action. The gist is the primary CTA because it holds the full spec.
export const CTA = {
  spec: SPEC_GIST_URL,
  copy: SPEC_GIST_URL,
  download: RAW_SPEC_URL,
};

export interface NavItem {
  href: string;
  label: string;
  blurb: string;
}

export const NAV: NavItem[] = [
  {
    href: '/',
    label: 'Minimal Zo Brain',
    blurb: 'The offer, in one screen.',
  },
  {
    href: '/how-it-works/',
    label: 'How It Works',
    blurb: 'You hand Zo a spec. Zo builds the brain with you.',
  },
  {
    href: '/depths/',
    label: 'Depths',
    blurb: 'Starter, Beginner, Intermediate, Pro — pick how deep to go.',
  },
  {
    href: '/what-zo-creates/',
    label: 'What Zo Creates',
    blurb: 'Markdown you own: areas, sources, truth, relationships, memory.',
  },
  {
    href: '/why-not-a-template/',
    label: 'Why It’s Not a Template',
    blurb: 'A spec builds around you. A template freezes before it knows you.',
  },
  {
    href: '/faq/',
    label: 'FAQ',
    blurb: 'Repo, GitHub, privacy, and the knowledge-graph question.',
  },
];

// Make internal links safe whether the site is served from '/' or from a
// project subpath like '/repo/'. Astro exposes the configured base as
// import.meta.env.BASE_URL.
export function withBase(path: string): string {
  const raw = import.meta.env.BASE_URL;
  const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;
  if (path === '/') return base + '/';
  return base + path;
}
