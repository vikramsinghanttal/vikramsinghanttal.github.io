export const site = {
  name: 'Vikram Singh',
  title: 'Vikram Singh',
  tagline: 'System Simulations and RAN1/2 3GPP Standardization AT Tejas Networks.',
  role: 'Staff Research Engineer',
  org: 'Tejas Networks',
  url: 'https://vikramsinghanttal.github.io/IIT-Kanpur/',
  // Burner alias routed via Cloudflare Email Routing to a private inbox.
  // To change: edit here, then update the CF Email Routing rule.
  email: 'vikram.singh.anttal@gmail.com',
  description:
    'Personal website of Vikram Singh, Staff Research Engineer at Tejas Networks. System Simulations and RAN1/2 3GPP Standardization.',
  social: {
    github: 'https://github.com/vikramsinghanttal',
    linkedin: 'https://www.linkedin.com/in/vikramsi/',
    scholar: 'https://scholar.google.com/citations?user=OL3fFvAAAAAJ&hl=en',
    orcid: '',
  },
  nav: [
    { label: 'About', href: '/about/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Blogs', href: '/blog/' },
    { label: 'CV', href: '/Vikram_CV_July2026.pdf' },
  ],
  links: {
    TejasResearch: 'https://www.tejasnetworks.com/advanced-technologies/',
    iitk: 'https://www.iitk.ac.in/',
    akj: 'https://home.iitk.ac.in/~adityaj/',
  },
  experience: [
    {
      org: 'Tejas Networks',
      url: 'https://www.tejasnetworks.com/advanced-technologies/',
      period: '2024–Present',
      roles: [
        {
          title: 'Staff Research Engineer',
          period: '2026–Present',
          summary: 'Leading a team driving 3GPP RAN1/RAN2 6G standardization contributions and intellectual property development across emerging wireless technologies. Driving academic collaborations to advance long-term, standards-driven research and algorithm/AI-ML models development for 6G wireless systems. Helped overcome compute resource constraints by optimizing system-level simulation frameworks and leveraging high-performance computing infrastructure to improve simulation scale, efficiency, and turnaround time.',
        },
        {
          title: 'Lead Research Engineer',
          period: '2024–2026',
          summary: 'Contributed to 3GPP Release 19 5G-Advanced RAN1 standardization activities focused on AI/ML-enabled positioning, beam management, and CSI compression. Authored and filed standards-related patents spanning AI/ML, Integrated Sensing and Communication (ISAC), RAN Digital Twins, and 6G AI/ML use cases for intellectual property development. Led the design and development of a system-level simulation platform used for the evaluation, validation, and performance assessment of 3GPP RAN1 proposals and study items.',
        },
      ],
    },
    {
      org: 'Gigayasa Wireless',
      url: 'https://github.com/GigayasaWireless',
      period: '2021-2024',
      roles: [
        {
          title: 'Founder and Chief of Technology (CTO)',
          period: '2021-2024',
          summary: 'Progressed through multiple roles, starting as an individual researcher and developer before taking on increasing leadership responsibilities as the company scaled. At the company\'s peak, managed a team of 24 members, overseeing technology strategy, product development, cross-functional coordination, product outreach, marketing, and developer experience initiatives.',
        },
      ],
    },
    {
      org: 'Center of Excellence in Wireless & Information Technology (CEWiT), Indian Institute of Technology Madras (IITM)',
      url: 'https://cewit.org.in/',
      period: '2018–2021',
      roles: [
        {
          title: 'Senior Research Engineer',
          period: '2021–2021',
          summary: 'Executed three independent research projects focused on the standardization of Reduced Capability (RedCap) positioning, sidelink positioning, and pre-standardization studies on AI/ML-enabled air-interface enhancements within 3GPP RAN1. Conducted feasibility study and performance evaluations to identify standards impact via system-level simulations, identify opportunities for intellectual property filing.',
        },
        {
          title: 'Research Engineer',
          period: '2018-2021',
          summary: 'Initiated the 3GPP standardization activities in wireless positioning and authored standards-related patents in the area. Drove the development of a 3GPP-compliant positioning system simulator and led the implementation and evaluation of positioning algorithms aligned with evolving 3GPP specifications.',
        },
      ],
    },

    {
      org: 'Intel Corporation, India',
      url: 'https://www.intel.com/content/www/us/en/homepage.html',
      period: '2018-2018',
      roles: [
        {
          title: 'System on Chip (SoC) Design Engineer',
          period: '2018-2018',
          summary: 'I was a System on Chip (SoC) Design Engineer in Scalable Performance CPU Development Group (SDG). Responsible for Physical Design and Verification for 3rd Gen Intel Xeon Scalable Processors (Ice Lake).',
        },
      ],
    },

    {
      org: 'Indian Institute of Technology Kanpur (IITK)',
      url: 'https://www.iitk.ac.in/',
      period: '2016–2018',
      roles: [
        {
          title: 'Masters of Technology in Signal Processing and Communication, Department of Electrical Engineering',
          period: '2016–2018',
          summary: 'Advisor: <a class="link-quiet" href="https://home.iitk.ac.in/~adityaj/" target="_blank" rel="noopener noreferrer">Aditya K. Jagannatham</a>. <br> Masters Dissertation: "Adaptive Schemes for Spatio-Temporally Correlated Multiuser MIMO Channel Estimation." Developed novel algorithms for multi-user channel estimation and tracking in massive MIMO systems, leveraging temporal and spatial correlation models to improve downlink precoding performance under varying complexity constraints.',
        },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof site;
