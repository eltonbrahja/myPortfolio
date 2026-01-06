export interface Project {
  id: number;
  title: string;
  category: 'Web Design' | 'Graphic Design' | 'Branding';
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}