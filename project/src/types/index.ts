import { LucideIcon } from 'lucide-react';

export interface SubNavItem {
  id: string;
  label: string;
}

export interface NavItems {
  id: string;
  label: string;
  icon: LucideIcon;
  subItems?: SubNavItem[];
}

export interface Comment {
  name: string;
  email: string;
  message: string;
  id: number;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}