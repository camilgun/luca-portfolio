export interface Skill {
  name: string
  level: number // 1-100
  years?: number
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  color: 'violet' | 'cyan' | 'pink' | 'orange' | 'green'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'browser',
    color: 'cyan',
    skills: [
      { name: 'Vue.js (2 & 3)', level: 95, years: 5 },
      { name: 'JavaScript (ES6+)', level: 95, years: 10 },
      { name: 'TypeScript', level: 85, years: 4 },
      { name: 'HTML5 / CSS3', level: 95, years: 12 },
      { name: 'SCSS / Sass', level: 90, years: 6 },
      { name: 'jQuery (Legacy)', level: 85, years: 8 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'terminal',
    color: 'violet',
    skills: [
      { name: 'Node.js', level: 80, years: 5 },
      { name: 'Go', level: 70, years: 2 },
      { name: 'Express', level: 80, years: 5 },
      { name: 'REST APIs', level: 90, years: 8 },
      { name: 'Ruby on Rails (basics)', level: 50, years: 2 }
    ]
  },
  {
    id: 'data',
    name: 'Data & BI',
    icon: 'chart-bar',
    color: 'pink',
    skills: [
      { name: 'SQL', level: 90, years: 10 },
      { name: 'Oracle OBIEE', level: 85, years: 6 },
      { name: 'Oracle Hyperion', level: 80, years: 5 },
      { name: 'Data Warehousing', level: 75, years: 5 },
      { name: 'ETL Processes', level: 70, years: 4 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: 'gear',
    color: 'orange',
    skills: [
      { name: 'Git', level: 95, years: 10 },
      { name: 'Webpack', level: 85, years: 4 },
      { name: 'Vite', level: 80, years: 2 },
      { name: 'Docker', level: 65, years: 3 },
      { name: 'Puppeteer', level: 85, years: 4 }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: 'robot',
    color: 'green',
    skills: [
      { name: 'Claude Code', level: 85, years: 1 },
      { name: 'AI Prompt Engineering', level: 80, years: 2 },
      { name: 'Task Automation', level: 85, years: 5 },
      { name: 'Codex', level: 70, years: 1 }
    ]
  }
]

export const softSkills: string[] = [
  'Product Thinking',
  'Cross-functional Collaboration',
  'Technical Leadership',
  'Code Review',
  'Mentoring',
  'Agile Methodologies',
  'Problem Solving',
  'Stakeholder Management'
]
