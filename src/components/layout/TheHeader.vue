<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <a href="#" class="header__logo" @click.prevent="scrollTo('hero')">
        <span class="header__logo-text">LC</span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="header__nav-item"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <button
        class="header__mobile-toggle"
        :class="{ 'header__mobile-toggle--open': isMobileMenuOpen }"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: $spacing-md $spacing-lg;
  transition: all $transition-base;

  &--scrolled {
    background: rgba($bg-dark-900, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid $glass-border;
    padding: $spacing-sm $spacing-lg;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-size: $font-size-xl;
    font-weight: 800;
    text-decoration: none;

    &-text {
      background: $gradient-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__nav {
    display: flex;
    gap: $spacing-sm;

    @media (max-width: $breakpoint-md) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba($bg-dark-900, 0.98);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: $spacing-lg;
      opacity: 0;
      visibility: hidden;
      transition: all $transition-base;

      &--open {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__nav-item {
    background: none;
    border: none;
    color: $text-gray-300;
    font-size: $font-size-sm;
    font-weight: 500;
    padding: $spacing-xs $spacing-sm;
    cursor: pointer;
    transition: color $transition-fast;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: $gradient-primary;
      transition: all $transition-fast;
      transform: translateX(-50%);
    }

    &:hover {
      color: $text-white;

      &::after {
        width: 100%;
      }
    }

    @media (max-width: $breakpoint-md) {
      font-size: $font-size-xl;
    }
  }

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: $spacing-xs;
    z-index: 101;

    @media (max-width: $breakpoint-md) {
      display: flex;
    }

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $text-white;
      transition: all $transition-fast;
    }

    &--open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}
</style>
