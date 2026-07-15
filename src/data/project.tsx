import { GithubIcon, GlobeIcon } from 'lucide-react';

export const PROJECTS = [
  {
    title: 'Payroll PT PSF',
    href: 'https://payroll-app-ptpsf.hugoedmoundo.fun/',
    dates: 'May 2026',
    active: true,
    openSource: false,
    description:
      'Web-based Corporate Payroll Management System for PT Pangestu Suryaning Family. Automates employee data management, tracks attendance, and processes monthly salary distributions.',
    technologies: ['Laravel 11', 'MySQL', 'Tailwind CSS'],
    links: [
      {
        type: 'Website',
    href: 'https://payroll-app-ptpsf.vercel.app/',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: 'https://kikobzzqdpfbmwppfiem.supabase.co/storage/v1/object/public/media/projects/1780036933079-Screenshot%202026-05-29%20134157.png',
    video: '',
  },
  {
    title: 'Mini Chat',
    href: 'https://hugochat.hugoedm.fun/',
    dates: 'Apr 2026',
    active: true,
    openSource: false,
    description:
      'Real-time chat application built with React and Supabase for testing and experimentation.',
    technologies: ['Vite + React', 'Supabase'],
    links: [
      {
        type: 'Website',
        href: 'https://hugochat.hugoedm.fun/',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: 'https://res.cloudinary.com/dfwutfkbn/image/upload/v1777108920/01464086-f8c2-4f0d-bf3d-600a2fcea288.png',
    video: '',
  },
  {
    title: 'Queue Flow',
    href: 'https://queue.hugoedmoundo.fun/',
    dates: 'Apr 2026',
    active: true,
    openSource: true,
    description:
      'Task queue management application built with Supabase and React.',
    technologies: ['Supabase', 'Vite + React'],
    links: [
      {
        type: 'Website',
        href: 'https://queue.hugoedmoundo.fun/',
        icon: <GlobeIcon className="size-3" />,
      },
      {
        type: 'Repository',
        href: 'https://github.com/HugoEdmoundo/queue-.app',
        icon: <GithubIcon className="size-3" />,
      },
    ],
    image: 'https://kikobzzqdpfbmwppfiem.supabase.co/storage/v1/object/public/media/projects/1775642153396-Screenshot%202026-04-08%20165534.png',
    video: '',
  },
  {
    title: 'Blackjack Game',
    href: 'https://blackjackgame-thisone.vercel.app',
    dates: 'May 2026',
    active: true,
    openSource: false,
    description:
      'Blackjack card game web application with real-time gameplay.',
    technologies: ['Next.js', 'Webpack', 'Deno', 'Redis', 'Upstash'],
    links: [
      {
        type: 'Website',
        href: 'https://blackjackgame-thisone.vercel.app',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: 'https://kikobzzqdpfbmwppfiem.supabase.co/storage/v1/object/public/media/projects/1779419651039-Screenshot%202026-05-22%20101342.png',
    video: '',
  },
];
