import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  metrics: string[];
  skills: string[];
  icon?: LucideIcon;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Power Systems' | 'IoT Hardware' | 'PCB Design' | 'Battery Research' | 'Embedded';
  description: string;
  specs: string[];
  stack: string[];
  image?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface LeadershipItem {
  role: string;
  org: string;
  stats: string;
  description: string;
}