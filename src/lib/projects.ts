export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  year: number;
  description: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: 'Personal site',
    year: 2026,
    description: 'A small academic homepage built with SvelteKit.',
    links: [{ label: 'source', href: 'https://github.com/ibrahimiadebiyi/ibrahimiadebiyi.github.io' }]
  }
];