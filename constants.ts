import { Project, Service, Section } from './types';
import { Layout, Palette, Globe, Code, PenTool, Smartphone } from 'lucide-react';

export const NAV_LINKS = [
  { id: Section.HOME, label: 'Home' },
  { id: Section.ABOUT, label: 'Chi Sono' },
  { id: Section.SERVICES, label: 'Servizi' },
  { id: Section.PORTFOLIO, label: 'Portfolio' },
  { id: Section.CONTACT, label: 'Contatti' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Web Design & Development',
    description: 'Siti web moderni, responsive e performanti costruiti con tecnologie all\'avanguardia (React, Tailwind, Next.js).',
    icon: 'layout',
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'Materiale visivo d\'impatto per social media, stampa e pubblicità digitale.',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Creazione di loghi e identità visive complete per rendere il tuo brand unico e riconoscibile.',
    icon: 'pen-tool',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Moda',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Piattaforma e-commerce minimale per un brand di moda emergente.',
    tags: ['React', 'Shopify', 'UX/UI'],
    link: 'https://example.com/fashion-store'
  },
  {
    id: 2,
    title: 'Rebranding Aziendale',
    category: 'Branding',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Riprogettazione completa dell\'identità visiva per una startup tech.',
    tags: ['Logo', 'Brand Book', 'Stationery'],
    link: 'https://example.com/rebrand'
  },
  {
    id: 3,
    title: 'App Finanziaria',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Dashboard intuitiva per la gestione delle finanze personali.',
    tags: ['Dashboard', 'React', 'Data Viz'],
    link: 'https://example.com/finance-app'
  },
  {
    id: 4,
    title: 'Poster Evento Musicale',
    category: 'Graphic Design',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Serie di poster promozionali per un festival jazz estivo.',
    tags: ['Print', 'Typography', 'Art Direction'],
    link: 'https://example.com/jazz-festival'
  },
  {
    id: 5,
    title: 'Sito Ristorante Luxury',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Sito vetrina con sistema di prenotazione per un ristorante stellato.',
    tags: ['Animation', 'Photography', 'Booking'],
    link: 'https://example.com/restaurant'
  },
  {
    id: 6,
    title: 'Social Media Kit',
    category: 'Graphic Design',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Template editabili per post Instagram e LinkedIn.',
    tags: ['Social Media', 'Canva', 'Content'],
    link: 'https://example.com/social-kit'
  },
];

export const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale del portfolio di Elton Brahja.
Il tuo compito è rispondere alle domande dei visitatori sui servizi di Elton.
Elton è un Web Developer e Graphic Designer professionista con sede in Italia.

I suoi servizi includono:
- Creazione siti web (Siti vetrina, E-commerce, Landing page)
- Sviluppo Frontend (React, TypeScript, Tailwind CSS)
- Graphic Design (Loghi, Branding, Materiale pubblicitario)
- UI/UX Design

Stile di comunicazione:
- Professionale ma amichevole.
- Rispondi in italiano.
- Sii conciso.
- Se ti chiedono prezzi, rispondi che dipendono dalla complessità del progetto e invita l'utente a contattare Elton tramite il form o email per un preventivo.
- Se ti chiedono contatti, suggerisci di usare il form nella sezione Contatti o scrivere a info@eltonbrahja.com.

Non inventare progetti che non esistono.
`;