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
};

export const publications: Publication[] = [
  {
    title: 'Attention Is All You Need',
    authors: 'Ashish Vaswani et al.',
    venue: 'NeurIPS',
    year: 2017,
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/1706.03762' },
      { label: 'code', href: 'https://github.com/tensorflow/tensor2tensor' }
    ]
  }
];