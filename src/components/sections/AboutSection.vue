<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { fadeInUp, staggerIn } = useScrollAnimation()

const quickFacts = [
  { number: '10+', label: 'Years of experience', icon: 'calendar' },
  { number: '2', label: 'Startups founded', icon: 'rocket-launch' },
  { number: '1', label: 'Sabbatical year', icon: 'compass' },
  { number: '100k+', label: 'Lines of Vue.js', icon: 'code' }
]

onMounted(() => {
  fadeInUp('.about__image-wrapper')
  fadeInUp('.about__content', { delay: 0.2 })
  staggerIn('.about__fact')
})
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-title">
        <p class="section-title__subtitle">Who I am</p>
        <h2 class="section-title__text">About Me</h2>
      </div>

      <div class="about__grid">
        <div class="about__image-wrapper">
          <div class="about__image-frame">
            <img
              src="@/assets/images/profile/luca.png"
              alt="Luca Camilletti"
              class="about__image"
            />
          </div>
          <div class="about__image-decoration"></div>
        </div>

        <div class="about__content">
          <p class="about__text about__text--large">
            After <strong>10+ years in tech</strong>, I've learned one thing:
          </p>
          <p class="about__text about__text--highlight">
            There is no linear path.
          </p>
          <p class="about__text">
            I've been a <strong>freelancer</strong>, a <strong>bank consultant</strong>,
            a <strong>startup co-founder</strong> (some failed, some didn't), and then...
            I started over as a <strong>junior</strong>.
          </p>
          <p class="about__text">
            Today I'm a <strong>Product Engineer</strong> at iubenda, where Vue.js meets
            privacy by design.
          </p>
          <p class="about__text about__text--philosophy">
            I write <strong>Go</strong> for fun, talk to <strong>Claude Code</strong>
            for work, and believe the best code is the code you don't have to write.
          </p>
        </div>
      </div>

      <div class="about__facts">
        <div v-for="fact in quickFacts" :key="fact.label" class="about__fact">
          <div class="about__fact-icon">
            <component :is="`ph-${fact.icon}`" :size="28" weight="duotone" />
          </div>
          <span class="about__fact-number">{{ fact.number }}</span>
          <span class="about__fact-label">{{ fact.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background: $bg-dark-800;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-2xl;
    margin-bottom: $spacing-3xl;

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1.5fr;
      align-items: center;
    }
  }

  &__image-wrapper {
    position: relative;
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: $breakpoint-lg) {
      margin: 0;
    }
  }

  &__image-frame {
    position: relative;
    z-index: 2;
    border-radius: $radius-lg;
    overflow: hidden;
    border: 2px solid $glass-border;
  }

  &__image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }

  &__image-decoration {
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid $primary-violet;
    border-radius: $radius-lg;
    z-index: 1;
  }

  &__content {
    @media (min-width: $breakpoint-lg) {
      padding-left: $spacing-xl;
    }
  }

  &__text {
    font-size: $font-size-lg;
    line-height: 1.8;
    color: $text-gray-300;
    margin-bottom: $spacing-md;

    strong {
      color: $text-white;
      font-weight: 600;
    }

    &--large {
      font-size: $font-size-xl;
    }

    &--highlight {
      font-size: $font-size-2xl;
      color: $text-white;
      font-weight: 700;
      font-style: italic;
      margin: $spacing-lg 0;
    }

    &--philosophy {
      padding-top: $spacing-md;
      border-top: 1px solid $glass-border;
    }
  }

  &__facts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__fact {
    background: $glass-bg;
    border: 1px solid $glass-border;
    border-radius: $radius-lg;
    padding: $spacing-lg;
    text-align: center;
    transition: all $transition-base;

    &:hover {
      transform: translateY(-5px);
      border-color: $primary-violet;
      box-shadow: $glow-violet;
    }
  }

  &__fact-icon {
    color: $primary-cyan;
    margin-bottom: $spacing-sm;
  }

  &__fact-number {
    display: block;
    font-size: $font-size-3xl;
    font-weight: 800;
    background: $gradient-primary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: $spacing-xs;
  }

  &__fact-label {
    font-size: $font-size-sm;
    color: $text-gray-300;
  }
}
</style>
