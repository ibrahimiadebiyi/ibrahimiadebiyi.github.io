export type TeachingLink = {
  label: string;
  href: string;
};

export type Teaching = {
  code: string;          // 'CSCI 5609'
  title: string;         // 'Visualization'
  role: string;          // 'Teaching Assistant' | 'Grader' | 'Guest Lecturer'
  institution: string;   // 'University of Minnesota'
  terms: string[];       // ['Fall 2025', 'Spring 2026'] — sorts and displays cleanly
  instructor?: string;   // whose course it was, if worth naming
  blurb?: string;        // one line: what you actually did
  links?: TeachingLink[];
};

export const teaching: Teaching[] = [
  {
    code: '',
    title: '',
    role: '',
    institution: 'University of Minnesota',
    terms: [''],
    instructor: '',
    blurb: '',
    links: []
  }
];