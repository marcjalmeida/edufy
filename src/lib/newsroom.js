// Shared editorial design tokens + helpers
export const desks = [
  { slug: 'us-immigration', name: 'US Immigration', accent: '#b91c1c' },
  { slug: 'united-states', name: 'United States', accent: '#1e3a8a' },
  { slug: 'brazil', name: 'Brazil', accent: '#166534' },
  { slug: 'brazil-public-integrity', name: 'Brazil Public Integrity', accent: '#7c2d12' },
  { slug: 'world', name: 'World', accent: '#374151' },
  { slug: 'war-security', name: 'War & Security', accent: '#57534e' },
  { slug: 'breaking', name: 'Breaking', accent: '#dc2626' },
];

export const classifications = {
  'CONFIRMED FACT': '#166534', 'PRIMARY DOCUMENT': '#1d4ed8', 'OFFICIAL STATEMENT': '#1e40af',
  'COURT RULING': '#4c1d95', 'CHARGE': '#b45309', 'ALLEGATION': '#dc2626',
  'ONGOING INVESTIGATION': '#92400e', 'MEDIA REPORT': '#6b7280', 'ANALYSIS': '#7c3aed', 'UNVERIFIED CLAIM': '#991b1b',
};

export const priorities = { P1: '#dc2626', P2: '#ea580c', P3: '#2563eb', P4: '#6b7280' };

export function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export const esc = (s) => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
