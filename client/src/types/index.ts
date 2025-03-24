export interface Skill {
  name: string;
  percentage: number;
}

export interface Technology {
  name: string;
  icon: string;
}

export type ProjectCategory = "ui-ux" | "frontend" | "fullstack" | "all";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory[];
  technologies: string[];
  completionLevel: number; // 1-3 dots to show project completion
  link: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
