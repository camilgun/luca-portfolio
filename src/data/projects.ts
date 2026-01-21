export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  type: 'work' | 'personal' | 'startup'
  link?: string
  github?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'cmp-rewrite',
    title: 'CMP Configurator Rewrite',
    description: 'Riscrittura completa del Consent Management Platform configurator da legacy jQuery a Vue.js moderna.',
    longDescription: 'Progetto di punta in iubenda: trasformazione di un\'applicazione legacy in una soluzione Vue.js scalabile e manutenibile. Gestione stato complesso, i18n per mercati globali, integrazione con sistemi di compliance GDPR.',
    tech: ['Vue.js', 'Vuex', 'SCSS', 'i18n', 'REST API'],
    type: 'work',
    featured: true
  },
  {
    id: 'radar',
    title: 'Radar Compliance Scanner',
    description: 'Tool backend per scanning automatico di siti web per verifiche di compliance legale.',
    longDescription: 'Sistema Node.js che utilizza Puppeteer per analizzare automaticamente i siti dei clienti, identificare cookie, tracker e potenziali problemi di compliance. Migrazione a TypeScript per robustezza.',
    tech: ['Node.js', 'Express', 'Puppeteer', 'TypeScript'],
    type: 'work',
    featured: true
  },
  {
    id: 'asana-tools',
    title: 'Custom Automation Tools',
    description: 'Suite di tool in Go per estendere le funzionalit\u00e0 di Asana con automazioni personalizzate.',
    longDescription: 'Side project per automatizzare workflow e integrare Asana con altri sistemi. Creazione automatica task, sincronizzazione, reporting custom.',
    tech: ['Go', 'REST API', 'Asana API', 'Automation'],
    type: 'personal',
    featured: true
  },
  {
    id: 'ctrlalttrack',
    title: 'CtrlAltTrack',
    description: 'Applicazione di tracking sviluppata in TypeScript.',
    tech: ['TypeScript', 'Node.js'],
    type: 'personal',
    github: 'https://github.com/camilgun/CtrlAltTrack'
  },
  {
    id: 'ticktrack',
    title: 'Ticktrack',
    description: 'Tool per time tracking personale.',
    tech: ['TypeScript'],
    type: 'personal',
    github: 'https://github.com/camilgun/Ticktrack'
  },
  {
    id: 'go-vanilla',
    title: 'GoVanillaNoFramework',
    description: 'Esperimento: applicazione Go pura senza framework, per comprendere le basi del linguaggio.',
    tech: ['Go'],
    type: 'personal',
    github: 'https://github.com/camilgun/GoVanillaNoFramework'
  },
  {
    id: 'braimage',
    title: 'Braimage Platform',
    description: 'Piattaforma HealthTech per integrare dati medici e migliorare la diagnosi della demenza.',
    longDescription: 'Startup co-fondata nel 2018. Software di data integration accessibile remotamente dai medici, per visualizzare e analizzare dati complessi relativi a malattie come la demenza.',
    tech: ['Data Visualization', 'Healthcare', 'Full Stack'],
    type: 'startup'
  }
]
