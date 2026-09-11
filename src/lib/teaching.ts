export type TeachingLink = {
  label: string;
  href: string;
};

export type Teaching = {
  title: string;
  instructors: string;
  venue: string;
  year: number;
  links: TeachingLink[];
};

export const teaching: Teaching[] = [
  // {
  //   title: 'Attention Is All You Need',
  //   authors: 'Ashish Vaswani et al.',
  //   venue: 'NeurIPS',
  //   year: 2017,
  //   links: [
  //     { label: 'paper', href: 'https://arxiv.org/abs/1706.03762' },
  //     { label: 'code', href: 'https://github.com/tensorflow/tensor2tensor' }
  //   ]
  // }
];