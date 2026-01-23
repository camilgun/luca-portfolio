export interface CareerEvent {
  id: string
  year: string
  title: string
  subtitle: string
  company?: string
  location?: string
  description: string
  quote?: string
  isMilestone?: boolean
  color: 'violet' | 'cyan' | 'pink' | 'orange' | 'green'
  skills?: string[]
}

export const careerEvents: CareerEvent[] = [
  {
    id: 'freelance',
    year: '2011',
    title: 'The First Website',
    subtitle: 'IT Consultant - Freelance',
    location: 'Italy',
    description: 'Web development, network configuration, system management. My first website sold for 50 euros. I didn\'t even know what CSS was!',
    quote: '50 euros for an HTML website. It was just the beginning.',
    color: 'cyan',
    skills: ['HTML', 'CSS', 'PHP', 'WordPress']
  },
  {
    id: 'neonisi',
    year: '2012',
    title: 'First Startup',
    subtitle: 'Co-founder - Neonisi Inc',
    location: 'Italy',
    description: 'My first entrepreneurial adventure. Software development projects with lots of enthusiasm and little experience.',
    color: 'pink',
    skills: ['Software Development', 'Entrepreneurship']
  },
  {
    id: 'cse-start',
    year: '2013',
    title: 'The Leap into Corporate',
    subtitle: 'BI Consultant - CSE Consorzio Servizi Bancari',
    location: 'San Lazzaro di Savena',
    description: 'Entering the world of banking Business Intelligence. Dashboards, reports, Oracle BI. A completely different world from the web.',
    isMilestone: true,
    color: 'violet',
    skills: ['OBIEE', 'Oracle Hyperion', 'SQL', 'Data Warehousing']
  },
  {
    id: 'bi-growth',
    year: '2015',
    title: 'Data Driven',
    subtitle: 'Senior BI Consultant',
    company: 'CSE',
    location: 'Bologna',
    description: 'Projects for major Italian banks. Learning to translate business needs into technical solutions. Risk management, CRM, complex reporting.',
    color: 'violet',
    skills: ['Financial Reporting', 'Risk Analytics', 'ETL']
  },
  {
    id: 'braimage',
    year: '2018',
    title: 'Tech for Good',
    subtitle: 'Co-founder & Tech Lead - Braimage',
    location: 'Bologna',
    description: 'HealthTech startup to improve dementia diagnosis. Software that integrates complex medical data to help doctors.',
    quote: 'Technology should serve people, not the other way around.',
    isMilestone: true,
    color: 'pink',
    skills: ['Data Visualization', 'Healthcare Tech', 'Product Management']
  },
  {
    id: 'sabbatical',
    year: '2019',
    title: 'The Reset',
    subtitle: 'Sabbatical Year',
    location: 'Italy',
    description: 'After 6 years in corporate, I stopped. I reflected, traveled, studied modern frontend. I rediscovered how much I love writing code.',
    quote: 'Sometimes you need to stop to understand where you want to go.',
    isMilestone: true,
    color: 'orange',
    skills: ['Vue.js', 'Modern JavaScript', 'Self-reflection']
  },
  {
    id: 'iubenda-junior',
    year: '2019',
    title: 'Starting from Scratch',
    subtitle: 'Junior Developer - iubenda',
    location: 'Bologna',
    description: 'At 32, I started over as a junior. Backend with Node.js, Express, Puppeteer for Radar. Frontend with jQuery and Bootstrap. The best decision of my career.',
    quote: 'Junior at 32? The best decision I could have made.',
    isMilestone: true,
    color: 'cyan',
    skills: ['Node.js', 'Express', 'Puppeteer', 'jQuery', 'TypeScript']
  },
  {
    id: 'iubenda-mid',
    year: '2021',
    title: 'Vue.js Rewrite',
    subtitle: 'Mid Frontend Developer - iubenda',
    location: 'Bologna (Hybrid)',
    description: 'Contributing to the complete rewrite of the CMP Configurator in Vue.js. Architecture, localization, cross-team collaboration.',
    color: 'cyan',
    skills: ['Vue.js', 'Vuex', 'i18n', 'SCSS']
  },
  {
    id: 'iubenda-senior',
    year: '2024',
    title: 'Senior & Modernization',
    subtitle: 'Senior Frontend Developer - iubenda',
    location: 'Recanati (Remote)',
    description: 'Sprockets to Webpack migration, A/B testing with Growthbook, code review, clean code principles. Technical leadership.',
    color: 'violet',
    skills: ['Webpack', 'Growthbook', 'Code Review', 'Mentoring']
  },
  {
    id: 'iubenda-pe',
    year: '2025',
    title: 'Product Engineer',
    subtitle: 'Product Engineer & Senior Dev - iubenda',
    location: 'Recanati (Remote)',
    description: 'Combining product ownership with technical contribution. CS UI module, one-click onboarding flow. Tech + Product thinking together.',
    isMilestone: true,
    color: 'green',
    skills: ['Product Ownership', 'Vue.js', 'Technical Strategy']
  },
  {
    id: 'present',
    year: 'Today',
    title: 'AI Enthusiast',
    subtitle: 'The Future Is Already Here',
    description: 'Claude Code for daily coding, side projects in Go, continuous experimentation. Custom Automation Tools for Asana. Never stop learning.',
    quote: 'The best code is the code you don\'t have to write.',
    color: 'pink',
    skills: ['Claude Code', 'Go', 'AI Tools', 'Automation']
  }
]
