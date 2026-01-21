import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'

// Phosphor Icons - import from main package
import {
  PhArrowDown,
  PhArrowSquareOut,
  PhBrowser,
  PhCalendar,
  PhChartBar,
  PhCode,
  PhCompass,
  PhEnvelopeSimple,
  PhFolderNotch,
  PhGear,
  PhGearSix,
  PhGithubLogo,
  PhLinkedinLogo,
  PhMapPin,
  PhPaperPlaneTilt,
  PhRobot,
  PhRocketLaunch,
  PhTerminal,
  PhUser
} from '@phosphor-icons/vue'

const app = createApp(App)

// Register Phosphor Icons globally
app.component('ph-arrow-down', PhArrowDown)
app.component('ph-arrow-square-out', PhArrowSquareOut)
app.component('ph-browser', PhBrowser)
app.component('ph-calendar', PhCalendar)
app.component('ph-chart-bar', PhChartBar)
app.component('ph-code', PhCode)
app.component('ph-compass', PhCompass)
app.component('ph-envelope-simple', PhEnvelopeSimple)
app.component('ph-folder-notch', PhFolderNotch)
app.component('ph-gear', PhGear)
app.component('ph-gear-six', PhGearSix)
app.component('ph-github-logo', PhGithubLogo)
app.component('ph-linkedin-logo', PhLinkedinLogo)
app.component('ph-map-pin', PhMapPin)
app.component('ph-paper-plane-tilt', PhPaperPlaneTilt)
app.component('ph-robot', PhRobot)
app.component('ph-rocket-launch', PhRocketLaunch)
app.component('ph-terminal', PhTerminal)
app.component('ph-user', PhUser)

app.mount('#app')
