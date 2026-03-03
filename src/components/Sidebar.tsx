'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROJECT } from '@/lib/constants';

const links = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M2 6.5L8 2l6 4.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z" />
        <path d="M6 14V9h4v5" />
      </svg>
    ),
  },
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="1" y="1" width="6" height="6" rx="1" />
        <rect x="9" y="1" width="6" height="6" rx="1" />
        <rect x="1" y="9" width="6" height="6" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    href: '/core',
    label: 'Core',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4v4l3 2" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">SNIPE</div>
      <div className="sidebar-tagline">AI Sniper</div>

      <nav className="sidebar-nav">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`sidebar-link ${pathname === l.href ? 'active' : ''}`}
          >
            {l.icon}
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green)' }} className="animate-pulse-gold" />
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Agent Online</span>
        </div>
        <a
          href={PROJECT.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-muted)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          @snaboratory
        </a>
      </div>
    </aside>
  );
}
