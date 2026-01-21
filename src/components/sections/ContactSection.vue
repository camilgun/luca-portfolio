<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { fadeInUp, staggerIn } = useScrollAnimation()

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lucacamilletti',
    icon: 'linkedin-logo',
    color: '#0A66C2'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/camilgun',
    icon: 'github-logo',
    color: '#ffffff'
  },
  {
    name: 'Email',
    url: 'mailto:lucamilletti@gmail.com',
    icon: 'envelope-simple',
    color: '#EC4899'
  }
]

onMounted(() => {
  fadeInUp('.contact__content')
  staggerIn('.contact__social-link')
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact section">
    <div class="container">
      <div class="contact__content">
        <p class="contact__subtitle">E adesso?</p>
        <h2 class="contact__title">Costruiamo qualcosa insieme?</h2>
        <p class="contact__text">
          Sono sempre aperto a discutere di nuovi progetti, opportunita creative,
          o semplicemente per fare due chiacchiere su tech e innovazione.
        </p>

        <a href="mailto:lucamilletti@gmail.com" class="contact__cta">
          <ph-paper-plane-tilt :size="20" weight="fill" />
          Scrivimi
        </a>

        <div class="contact__social">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="contact__social-link"
            :style="{ '--hover-color': link.color }"
          >
            <component :is="`ph-${link.icon}`" :size="24" weight="regular" />
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="contact__decoration">
      <div class="contact__blob contact__blob--1"></div>
      <div class="contact__blob contact__blob--2"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background: $bg-dark-800;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: $spacing-3xl 0;

  &__content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $primary-cyan;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: $spacing-sm;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: $spacing-lg;
    background: $gradient-warm;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__text {
    font-size: $font-size-lg;
    color: $text-gray-300;
    line-height: 1.8;
    margin-bottom: $spacing-xl;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-md $spacing-2xl;
    background: transparent;
    border: 2px solid $primary-pink;
    border-radius: $radius-full;
    color: $primary-pink;
    font-size: $font-size-lg;
    font-weight: 600;
    text-decoration: none;
    transition: all $transition-base;
    margin-bottom: $spacing-2xl;

    &:hover {
      background: $primary-pink;
      color: $text-white;
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba($primary-pink, 0.3);
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    flex-wrap: wrap;
  }

  &__social-link {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    color: $text-gray-300;
    text-decoration: none;
    font-size: $font-size-sm;
    padding: $spacing-sm $spacing-md;
    border-radius: $radius-md;
    transition: all $transition-fast;

    &:hover {
      color: var(--hover-color, $text-white);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  &__decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  &__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.3;

    &--1 {
      width: 400px;
      height: 400px;
      background: $primary-pink;
      top: -100px;
      right: -100px;
    }

    &--2 {
      width: 300px;
      height: 300px;
      background: $accent-orange;
      bottom: -50px;
      left: -50px;
    }
  }
}
</style>
