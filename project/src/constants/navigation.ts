import {
  GraduationCap,
  BookOpen,
  BookText,
  Volume2,
} from 'lucide-react';
import { NavItems } from '../types';

export const navItems: NavItems[] = [
  {
    id: 'home',
    label: 'Home',
    icon: GraduationCap,
  },
  {
    id: 'learn',
    label: 'Learn',
    icon: BookOpen,
    subItems: [
      { id: 'grammar', label: 'Grammar' },
      { id: 'vocabulary', label: 'Vocabulary' },
      { id: 'pronunciation', label: 'Pronunciation' },
    ],
  },
  {
    id: 'practice',
    label: 'Practice',
    icon: BookText,
    subItems: [
      { id: 'speaking', label: 'Speaking' },
      { id: 'writing', label: 'Writing' },
      { id: 'listening', label: 'Listening' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: Volume2,
    subItems: [
      { id: 'exercises', label: 'Exercises' },
      { id: 'tests', label: 'Tests' },
      { id: 'materials', label: 'Materials' },
    ],
  },
];