<script setup lang="ts">
import { onMounted } from 'vue'
import { useTypewriter } from '@/composables/useTypewriter'
import { gsap } from 'gsap'

const { displayText, showCursor } = useTypewriter({
  strings: [
    'Product Engineer',
    'Vue.js Expert',
    'AI Enthusiast',
    'Go Tinkerer',
    'Problem Solver'
  ],
  typeSpeed: 80,
  deleteSpeed: 40,
  pauseTime: 2500
})

const scrollToSection = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.hero__greeting', { y: 30, opacity: 0, duration: 0.6 })
    .from('.hero__name', { y: 50, opacity: 0, duration: 0.8 }, '-=0.3')
    .from('.hero__role', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero__tagline', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero__cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
    .from('.hero__scroll', { y: -20, opacity: 0, duration: 0.5 }, '-=0.2')
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__background">
      <div class="hero__blob hero__blob--1"></div>
      <div class="hero__blob hero__blob--2"></div>
      <div class="hero__blob hero__blob--3"></div>
    </div>

    <div class="hero__content">
      <p class="hero__greeting">Hi, I'm</p>
      <h1 class="hero__name">Luca Camilletti</h1>
      <div class="hero__role">
        <span class="hero__role-text">{{ displayText }}</span>
        <span v-if="showCursor" class="hero__cursor">|</span>
      </div>
      <p class="hero__tagline">
        I turn ideas into products that scale.<br>
        <span class="hero__tagline-highlight">10+ years of code, startups, and innovation.</span>
      </p>
      <button class="hero__cta" @click="scrollToSection">
        Discover my journey
        <ph-arrow-down :size="20" weight="bold" />
      </button>
    </div>

    <div class="hero__scroll" @click="scrollToSection">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span class="hero__scroll-text">Scroll</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: $spacing-2xl;

  &__background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  &__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;

    &--1 {
      width: 600px;
      height: 600px;
      background: $primary-violet;
      top: -200px;
      right: -200px;
      animation: blobMove 15s ease-in-out infinite;
    }

    &--2 {
      width: 500px;
      height: 500px;
      background: $primary-cyan;
      bottom: -150px;
      left: -100px;
      animation: blobMove 18s ease-in-out infinite reverse;
    }

    &--3 {
      width: 400px;
      height: 400px;
      background: $primary-pink;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: blobMove 12s ease-in-out infinite;
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
  }

  &__greeting {
    font-size: $font-size-lg;
    color: $primary-cyan;
    margin-bottom: $spacing-sm;
    font-weight: 500;
  }

  &__name {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    margin-bottom: $spacing-md;
    background: linear-gradient(135deg, $text-white 0%, $text-gray-100 50%, $primary-cyan 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
  }

  &__role {
    font-size: clamp(1.25rem, 4vw, 2rem);
    color: $text-gray-100;
    margin-bottom: $spacing-lg;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  &__role-text {
    background: $gradient-primary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  &__cursor {
    color: $primary-cyan;
    animation: cursorBlink 1s infinite;
    font-weight: 300;
  }

  &__tagline {
    font-size: $font-size-lg;
    color: $text-gray-300;
    margin-bottom: $spacing-xl;
    line-height: 1.6;

    &-highlight {
      color: $text-gray-100;
      font-weight: 500;
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-md $spacing-xl;
    background: $gradient-primary;
    border: none;
    border-radius: $radius-full;
    color: $text-white;
    font-size: $font-size-base;
    font-weight: 600;
    cursor: pointer;
    transition: all $transition-base;
    box-shadow: 0 4px 20px rgba($primary-violet, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 30px rgba($primary-violet, 0.5);
    }

    &:active {
      transform: translateY(-1px);
    }
  }

  &__scroll {
    position: absolute;
    bottom: $spacing-xl;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-sm;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 1;
    }
  }

  &__scroll-mouse {
    width: 24px;
    height: 36px;
    border: 2px solid $text-gray-300;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
  }

  &__scroll-wheel {
    width: 4px;
    height: 8px;
    background: $text-gray-300;
    border-radius: 2px;
    animation: scrollBounce 1.5s ease-in-out infinite;
  }

  &__scroll-text {
    font-size: $font-size-xs;
    color: $text-gray-500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}
</style>
