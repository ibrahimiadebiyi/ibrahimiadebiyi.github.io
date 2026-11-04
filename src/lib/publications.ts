export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: PublicationLink[];
  image?: string;     // '/images/vp-rafiah.png'
  imageAlt?: string;  // short description for screen readers
};

export const publications: Publication[] = [
  {
    title: 'Modeling Visualization as an Affective Trigger for Human Decision-Making The VP-RAFIAH Framework',
    authors: 'Ibrahim Ismail-Adebiyi et al.',
    venue: 'IEEE VIS (Poster)',
    year: 2026,
    links: [
      { label: 'conference link', href: 'https://ieeevis.org/year/2026/program/content/78d6ee8d-c56d-4a9d-aedc-502c11fbf65f/' },
      { label: 'abstract', href: 'pdfs/VPRAFIAH_Abstract.pdf' },
      { label: 'poster', href: 'pdfs/VPRAFIAH_Poster.pdf' }
    ],
    image: 'img/VPRAFIAH.png',
    imageAlt: 'Preview image of poster presented at conference',
  }
];