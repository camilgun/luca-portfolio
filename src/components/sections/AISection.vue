<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { fadeInUp, staggerIn } = useScrollAnimation()

const tools = [
  {
    name: 'Claude Code',
    description: 'Il mio compagno di coding quotidiano. Pair programming con AI che capisce il contesto.',
    icon: 'robot',
    color: 'violet'
  },
  {
    name: 'Go + Automation',
    description: 'Custom tools in Go per estendere Asana. Automazione task, integrazione sistemi.',
    icon: 'gear-six',
    color: 'cyan'
  },
  {
    name: 'Codex & Co.',
    description: 'Esperimenti con vari AI coding assistants. Sempre alla ricerca del tool perfetto.',
    icon: 'code',
    color: 'pink'
  },
  {
    name: 'Antigraviti',
    description: 'Esplorazione di nuovi tool AI. La curiosita non ha limiti.',
    icon: 'rocket-launch',
    color: 'orange'
  }
]

onMounted(() => {
  fadeInUp('.ai__intro')
  staggerIn('.ai__tool')
  fadeInUp('.ai__philosophy')
})
</script>

<template>
  <section id="ai" ref="sectionRef" class="ai section">
    <div class="container">
      <div class="section-title">
        <p class="section-title__subtitle">Innovation</p>
        <h2 class="section-title__text ai__title">
          <span class="ai__title-glitch" data-text="AI Enthusiast">AI Enthusiast</span>
        </h2>
      </div>

      <div class="ai__intro">
        <p class="ai__intro-text">
          Il futuro del coding e gia qui. Non uso l'AI per <em>sostituire</em> il pensiero.
          <br>
          <strong>La uso per amplificarlo.</strong>
        </p>
      </div>

      <div class="ai__tools">
        <div
          v-for="tool in tools"
          :key="tool.name"
          class="ai__tool"
          :class="`ai__tool--${tool.color}`"
        >
          <div class="ai__tool-icon">
            <component :is="`ph-${tool.icon}`" :size="32" weight="duotone" />
          </div>
          <h3 class="ai__tool-name">{{ tool.name }}</h3>
          <p class="ai__tool-description">{{ tool.description }}</p>
        </div>
      </div>

      <div class="ai__philosophy">
        <div class="ai__terminal">
          <div class="ai__terminal-header">
            <span class="ai__terminal-dot ai__terminal-dot--red"></span>
            <span class="ai__terminal-dot ai__terminal-dot--yellow"></span>
            <span class="ai__terminal-dot ai__terminal-dot--green"></span>
            <span class="ai__terminal-title">philosophy.md</span>
          </div>
          <div class="ai__terminal-content">
            <code>
              <span class="ai__code-comment"># La mia filosofia</span><br><br>
              <span class="ai__code-key">passion:</span> Sperimentare con ogni nuovo tool AI<br>
              <span class="ai__code-key">goal:</span> Trovare piu tempo per progetti personali<br>
              <span class="ai__code-key">belief:</span> Il codice migliore e quello che non devi scrivere<br>
              <span class="ai__code-key">next:</span> Costruire qualcosa di nuovo con AI<br><br>
              <span class="ai__code-comment"># Il codice che scrive codice</span><br>
              <span class="ai__code-comment"># non e magia. E il presente.</span>
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ai {
  background: linear-gradient(180deg, $bg-dark-800 0%, $bg-dark-900 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba($primary-violet, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba($primary-cyan, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &__title-glitch {
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: $bg-dark-800;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 $primary-pink;
      clip-path: inset(0 0 50% 0);
      animation: glitch 2s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 2px 0 $primary-cyan;
      clip-path: inset(50% 0 0 0);
      animation: glitch 2s infinite linear alternate;
    }
  }

  &__intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto $spacing-3xl;
  }

  &__intro-text {
    font-size: $font-size-xl;
    color: $text-gray-100;
    line-height: 1.8;

    em {
      color: $text-gray-500;
    }

    strong {
      color: $text-white;
      font-size: $font-size-2xl;
      display: block;
      margin-top: $spacing-sm;
      background: $gradient-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__tools {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    margin-bottom: $spacing-3xl;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__tool {
    background: $glass-bg;
    border: 1px solid $glass-border;
    border-radius: $radius-lg;
    padding: $spacing-lg;
    text-align: center;
    transition: all $transition-base;

    &:hover {
      transform: translateY(-5px);
    }

    &--violet:hover {
      border-color: $primary-violet;
      box-shadow: $glow-violet;
    }
    &--cyan:hover {
      border-color: $primary-cyan;
      box-shadow: $glow-cyan;
    }
    &--pink:hover {
      border-color: $primary-pink;
      box-shadow: $glow-pink;
    }
    &--orange:hover {
      border-color: $accent-orange;
      box-shadow: 0 0 40px rgba($accent-orange, 0.4);
    }
  }

  &__tool-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto $spacing-md;
    background: $bg-dark-700;
    border-radius: $radius-lg;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-cyan;
  }

  &__tool-name {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $text-white;
    margin-bottom: $spacing-sm;
  }

  &__tool-description {
    font-size: $font-size-sm;
    color: $text-gray-300;
    line-height: 1.6;
    margin-bottom: 0;
  }

  &__philosophy {
    max-width: 600px;
    margin: 0 auto;
  }

  &__terminal {
    background: #1e1e2e;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  &__terminal-header {
    background: #313244;
    padding: $spacing-sm $spacing-md;
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }

  &__terminal-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &--red { background: #f38ba8; }
    &--yellow { background: #f9e2af; }
    &--green { background: #a6e3a1; }
  }

  &__terminal-title {
    margin-left: auto;
    font-size: $font-size-xs;
    color: $text-gray-500;
    font-family: $font-family-mono;
  }

  &__terminal-content {
    padding: $spacing-lg;

    code {
      font-family: $font-family-mono;
      font-size: $font-size-sm;
      color: $text-gray-100;
      line-height: 1.8;
    }
  }

  &__code-comment {
    color: #6c7086;
  }

  &__code-key {
    color: $primary-cyan;
  }
}
</style>
