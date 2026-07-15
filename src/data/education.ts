export interface Education {
  institution: string;
  type: string;
  program: string;
  year: string;
  location: string;
  logo?: string;
  details?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: 'Devscale Indonesia',
    type: 'Non-Formal',
    program: 'AI-Enabled Python Web Dev',
    year: 'Jan 2026 — May 2026',
    location: 'Online',
    logo: 'https://devscale.id/logo.png',
    details: '10-week intensive program covering FastAPI, AI Integration, RAG Systems, and Production Deployment. Built Luminaprep as final project.',
  },
  {
    institution: 'SMK Informatika Bisnis',
    type: 'Formal',
    program: 'Teknik Komputer & Jaringan (TKJ)',
    year: 'Graduated',
    location: 'Bekasi',
  },
  {
    institution: 'Universitas Bina Nusantara',
    type: 'Formal',
    program: 'International Business Management (IBM) — Business Analytics',
    year: 'Sep 2026 — Expected 2030',
    location: 'Bekasi, Indonesia',
    logo: 'https://kikobzzqdpfbmwppfiem.supabase.co/storage/v1/object/public/media/education/logo-1777091889756',
  },
];
