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
    title: 'Il Primo Sito',
    subtitle: 'IT Consultant - Freelance',
    location: 'Italia',
    description: 'Web development, network configuration, system management. Il mio primo sito venduto a 50 euro. Non sapevo ancora cosa fosse il CSS!',
    quote: '50 euro per un sito HTML. Era solo l\'inizio.',
    color: 'cyan',
    skills: ['HTML', 'CSS', 'PHP', 'WordPress']
  },
  {
    id: 'neonisi',
    year: '2012',
    title: 'Prima Startup',
    subtitle: 'Co-founder - Neonisi Inc',
    location: 'Italia',
    description: 'La mia prima avventura imprenditoriale. Software development projects con tanto entusiasmo e poca esperienza.',
    color: 'pink',
    skills: ['Software Development', 'Entrepreneurship']
  },
  {
    id: 'cse-start',
    year: '2013',
    title: 'Il Salto nel Corporate',
    subtitle: 'BI Consultant - CSE Consorzio Servizi Bancari',
    location: 'San Lazzaro di Savena',
    description: 'Entro nel mondo della Business Intelligence bancaria. Dashboard, report, Oracle BI. Un mondo completamente diverso dal web.',
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
    description: 'Progetti per grandi banche italiane. Imparo a tradurre esigenze business in soluzioni tecniche. Risk management, CRM, reporting complesso.',
    color: 'violet',
    skills: ['Financial Reporting', 'Risk Analytics', 'ETL']
  },
  {
    id: 'braimage',
    year: '2018',
    title: 'Tech for Good',
    subtitle: 'Co-founder & Tech Lead - Braimage',
    location: 'Bologna',
    description: 'Startup HealthTech per migliorare la diagnosi della demenza. Software che integra dati medici complessi per aiutare i medici.',
    quote: 'La tecnologia deve servire le persone, non il contrario.',
    isMilestone: true,
    color: 'pink',
    skills: ['Data Visualization', 'Healthcare Tech', 'Product Management']
  },
  {
    id: 'sabbatical',
    year: '2019',
    title: 'Il Reset',
    subtitle: 'Anno Sabbatico',
    location: 'Italia',
    description: 'Dopo 6 anni nel corporate, mi fermo. Rifletto, viaggio, studio frontend moderno. Riscopro quanto amo scrivere codice.',
    quote: 'A volte bisogna fermarsi per capire dove si vuole andare.',
    isMilestone: true,
    color: 'orange',
    skills: ['Vue.js', 'Modern JavaScript', 'Self-reflection']
  },
  {
    id: 'iubenda-junior',
    year: '2019',
    title: 'Ricominciare da Zero',
    subtitle: 'Junior Developer - iubenda',
    location: 'Bologna',
    description: 'A 32 anni, riparto come junior. Backend con Node.js, Express, Puppeteer per il Radar. Frontend con jQuery e Bootstrap. La miglior decisione della mia carriera.',
    quote: 'Junior a 32 anni? La miglior decisione che potessi prendere.',
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
    description: 'Contribuisco alla riscrittura completa del CMP Configurator in Vue.js. Architettura, localizzazione, cross-team collaboration.',
    color: 'cyan',
    skills: ['Vue.js', 'Vuex', 'i18n', 'SCSS']
  },
  {
    id: 'iubenda-senior',
    year: '2024',
    title: 'Senior & Modernization',
    subtitle: 'Senior Frontend Developer - iubenda',
    location: 'Recanati (Remote)',
    description: 'Migrazione Sprockets a Webpack, A/B testing con Growthbook, code review, clean code principles. Leadership tecnica.',
    color: 'violet',
    skills: ['Webpack', 'Growthbook', 'Code Review', 'Mentoring']
  },
  {
    id: 'iubenda-pe',
    year: '2025',
    title: 'Product Engineer',
    subtitle: 'Product Engineer & Senior Dev - iubenda',
    location: 'Recanati (Remote)',
    description: 'Unisco product ownership e contributo tecnico. CS UI module, one-click onboarding flow. Tech + Product thinking insieme.',
    isMilestone: true,
    color: 'green',
    skills: ['Product Ownership', 'Vue.js', 'Technical Strategy']
  },
  {
    id: 'present',
    year: 'Oggi',
    title: 'AI Enthusiast',
    subtitle: 'Il Futuro \u00e8 Gi\u00e0 Qui',
    description: 'Claude Code per il coding quotidiano, side projects in Go, sperimentazione continua. Custom Automation Tools per Asana. Mai smettere di imparare.',
    quote: 'Il codice migliore \u00e8 quello che non devi scrivere.',
    color: 'pink',
    skills: ['Claude Code', 'Go', 'AI Tools', 'Automation']
  }
]
