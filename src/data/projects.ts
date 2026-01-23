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
    id: 'onboarding-flow',
    title: 'Product Onboarding Flow',
    description: 'Guided onboarding experience for iubenda product configuration.',
    longDescription: 'Multi-step onboarding flow to help users easily create and configure products. Involved in architectural decisions with multiple stakeholders, defining API contracts between frontend and backend, and ensuring a seamless user experience.',
    tech: ['Vue.js', 'API Design', 'Product Strategy', 'Multi-team Collaboration'],
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
    id: 'github-experiments',
    title: 'Open Source Experiments',
    description: 'Collection of learning projects and technical experiments exploring different languages and paradigms.',
    longDescription: 'Various projects exploring Go fundamentals, time tracking tools, and other technical experiments. Each one a step in continuous learning and skill development.',
    tech: ['Go', 'TypeScript', 'Node.js', 'Experimentation'],
    type: 'personal',
    github: 'https://github.com/camilgun'
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
