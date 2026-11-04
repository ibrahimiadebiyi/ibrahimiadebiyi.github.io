export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  image: string;
  alt: string;
  body: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'asl-avatar',
    title: 'Real-time ASL avatar',
    kind: 'Course project, with Yoel Mekbeb, Sahitya Avadhanam, and Owen Kochevar',
    period: '2026',
    image: 'img/asl_avatar1.png',
    alt: 'A 3D avatar mid-sign, both hands raised in front of the chest.',
    body: [
      'Human ASL interpreters cost $50 to $125 an hour, often carry booking minimums, and come in pairs for anything long enough to tire one out. Captions are the usual fallback, but are not a direct translation. ASL has its own grammar, syntax, and structure, and for many Deaf/Hard of Hearing signers English is their second language, not their first. This project asks what a cheap, immediately available interpreter would have to do. Live speech goes into a Meta Quest 3 headset, through Whisper for transcription, through a BART model fine-tuned on the ASLG-PC12 corpus for English-to-gloss translation, and out through a motion-captured signing avatar.',
      
      'A fully loaded sign dictionary exceeded the available memory on standalone hardware, so lookups went through an LFRU cache, LFU and LRU combined, keeping frequent entries and evicting stale ones. Missing entries fell back to fingerspelling, which did add delays and pushed the avatar out of sync when it happened often. Blending between motion-capture clips needs interpolation to avoid visible snapping between signs. This project demonstrated capabilities and was not intended for legal or medical settings.'    ],
    links: [
      { label: 'repo', href: 'https://github.com/ibrahimiadebiyi/ASLApp' }
    ]
  },
    {
    slug: 'code-mixed-benchmark',
    title: 'LLM code-mixed language benchmark',
    kind: 'Research, team project; dataset co-created',
    period: '2025', // not recorded on the old site
    image: 'img/pipeline.png',
    alt: 'An image of the dataset creation pipeline',
    body: [
      'A reproducible pipeline for generating and evaluating English–Arabic code-mixed text using prompt-based methods and the ArzEn-MultiGenre corpus. Evaluation of leading multilingual LLMs used BLEU, cosine similarity, and BERTScore, targeting code-switch boundary detection and handling of underrepresented languages.',
      'The resulting dataset, ArzEn-CodeMixed, is released on HuggingFace. GPT-4.1 prompting strategies generate candidates; native speakers produce naturalistic variants across genres. Linguistic metadata is annotated to support fine-grained evaluation of multilingual models on code-mixed translation.'
    ],
    links: [
      {
        label: 'project site',
        href: 'https://flowery-dryosaurus-880.notion.site/Lost-in-Translation-Benchmarking-LLMs-Response-to-English-Arabic-Code-Switching-1cee0fe4e04f804b9680da97edacf334'
      },
      { label: 'report (PDF)', href: 'pdfs/Saint_Lingual_Final_project_Report.pdf' },
      {
        label: 'HuggingFace',
        href: 'https://huggingface.co/datasets/taha-alnasser/ArzEn-CodeMixed'
      },
      { label: 'repo', href: 'https://github.com/ibrahimiadebiyi/SaintLingual' }
    ]
  },
  // {
  //   slug: 'circadian-gene-regulation',
  //   title: 'Circadian gene regulation in Brassica rapa',
  //   kind: 'Undergraduate research, Greenham Lab',
  //   period: '2023–2024',
  //   image: '',
  //   alt: '',
  //   body: [
  //     'A pipeline identifying roughly 16,700 rhythmic genes in Brassica rapa using JTK and WGCNA, enabling prediction of promoter elements that control time-of-day expression. The work laid groundwork for a neural network to modify temporal gene expression for improved growth and stress tolerance.'
  //   ],
  //   links: [
  //     {
  //       label: 'abstract',
  //       href: 'https://ugresearch.umn.edu/presentation-opportunities/spring-symposium/presenters-2024/Ibrahim-Ismail-Adebiyi'
  //     }
  //   ]
  // },
  // {
  //   slug: 'image-editor',
  //   title: 'Image editor',
  //   kind: 'Open source',
  //   period: '',
  //   image: '',
  //   alt: '',
  //   body: [
  //     'A browser image editing app with a C++ backend. Upload a photo, edit, download the result.'
  //   ],
  //   links: [{ label: 'live', href: 'https://ibrahimiadebiyi.github.io/Image-Editor/' }]
  // },
  {
    slug: 'personal-site',
    title: 'Personal site',
    kind: 'Open source',
    period: '2026',
    image: '',
    alt: '',
    body: [
      'A small academic homepage built with SvelteKit.'
    ],
    links: [
      { label: 'source', href: 'https://github.com/ibrahimiadebiyi/ibrahimiadebiyi.github.io' }
    ]
  }
];