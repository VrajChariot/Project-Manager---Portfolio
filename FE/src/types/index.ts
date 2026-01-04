export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  duration: string;
  role: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
