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
    description: 'Complete rewrite of the Consent Management Platform configurator from legacy jQuery to modern Vue.js.',
    longDescription: 'Flagship project at iubenda: transforming a legacy application into a scalable and maintainable Vue.js solution. Complex state management, i18n for global markets, integration with GDPR compliance systems.',
    tech: ['Vue.js', 'Vuex', 'SCSS', 'i18n', 'REST API'],
    type: 'work',
    featured: true
  },
  {
    id: 'radar',
    title: 'Radar Compliance Scanner',
    description: 'Backend tool for automatic website scanning for legal compliance verification.',
    longDescription: 'Node.js system that uses Puppeteer to automatically analyze customer websites, identify cookies, trackers, and potential compliance issues. Migrated to TypeScript for robustness.',
    tech: ['Node.js', 'Express', 'Puppeteer', 'TypeScript'],
    type: 'work',
    featured: true
  },
  {
    id: 'asana-tools',
    title: 'Custom Automation Tools',
    description: 'Suite of Go tools to extend Asana functionality with custom automations.',
    longDescription: 'Side project to automate workflows and integrate Asana with other systems. Automatic task creation, synchronization, custom reporting.',
    tech: ['Go', 'REST API', 'Asana API', 'Automation'],
    type: 'personal',
    featured: true
  },
  {
    id: 'ctrlalttrack',
    title: 'CtrlAltTrack',
    description: 'Tracking application developed in TypeScript.',
    tech: ['TypeScript', 'Node.js'],
    type: 'personal',
    github: 'https://github.com/camilgun/CtrlAltTrack'
  },
  {
    id: 'ticktrack',
    title: 'Ticktrack',
    description: 'Personal time tracking tool.',
    tech: ['TypeScript'],
    type: 'personal',
    github: 'https://github.com/camilgun/Ticktrack'
  },
  {
    id: 'go-vanilla',
    title: 'GoVanillaNoFramework',
    description: 'Experiment: pure Go application without frameworks, to understand the language fundamentals.',
    tech: ['Go'],
    type: 'personal',
    github: 'https://github.com/camilgun/GoVanillaNoFramework'
  },
  {
    id: 'braimage',
    title: 'Braimage Platform',
    description: 'HealthTech platform to integrate medical data and improve dementia diagnosis.',
    longDescription: 'Startup co-founded in 2018. Data integration software accessible remotely by doctors, to visualize and analyze complex data related to diseases like dementia.',
    tech: ['Data Visualization', 'Healthcare', 'Full Stack'],
    type: 'startup'
  }
]
