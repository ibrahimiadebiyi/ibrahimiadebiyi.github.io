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
    code: 'CSCI 1133',
    title: 'Introduction to Computing and Programming Concepts',
    role: 'Teaching Assistant' ,
    institution: 'University of Minnesota',
    terms: ['Fall 2022', 'Spring 2023', 'Fall 2023', 'Spring 2024'],
    instructor: '',
    blurb: '',
    links: []
  },
  {
    code: 'CSCI 1133',
    title: 'Introduction to Computing and Programming Concepts',
    role: 'Course Coordinator' ,
    institution: 'University of Minnesota',
    terms: ['Fall 2024', 'Spring 2025', 'Summer 2025', 'Fall 2025', 'Spring 2026', 'Summer 2026', 'Fall 2026'],
    instructor: '',
    blurb: 'I coordinate the undergraduate TA team for the course and run behind the scene logisitics. A hybrid teaching/support role as I also give lectures at times.',
    links: []
    }
];