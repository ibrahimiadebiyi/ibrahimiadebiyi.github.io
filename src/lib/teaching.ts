export type TeachingLink = {
  label: string;
  href: string;
};

export type Teaching = {
  code: string;          
  title: string;         
  role: string;     
  institution: string;
  terms: string[];        
  instructor?: string;   
  blurb?: string;       
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