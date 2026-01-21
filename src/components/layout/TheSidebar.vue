<script setup lang="ts">
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lucacamilletti',
    icon: 'linkedin-logo'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/camilgun',
    icon: 'github-logo'
  },
  {
    name: 'Email',
    url: 'mailto:lucamilletti@gmail.com',
    icon: 'envelope-simple'
  }
]
</script>

<template>
  <aside class="sidebar sidebar--left">
    <ul class="sidebar__list">
      <li v-for="link in socialLinks" :key="link.name" class="sidebar__item">
        <a
          :href="link.url"
          :aria-label="link.name"
          target="_blank"
          rel="noopener noreferrer"
          class="sidebar__link"
        >
          <component :is="`ph-${link.icon}`" :size="20" weight="regular" />
        </a>
      </li>
    </ul>
    <div class="sidebar__line"></div>
  </aside>

  <aside class="sidebar sidebar--right">
    <a href="mailto:lucamilletti@gmail.com" class="sidebar__email">
      lucamilletti@gmail.com
    </a>
    <div class="sidebar__line"></div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  bottom: 0;
  z-index: 50;
  display: none;

  @media (min-width: $breakpoint-lg) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &--left {
    left: $spacing-lg;
  }

  &--right {
    right: $spacing-lg;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &__link {
    color: $text-gray-300;
    transition: all $transition-fast;
    display: block;
    padding: $spacing-xs;

    &:hover {
      color: $primary-cyan;
      transform: translateY(-3px);
    }
  }

  &__email {
    writing-mode: vertical-rl;
    font-size: $font-size-xs;
    letter-spacing: 0.1em;
    color: $text-gray-300;
    transition: color $transition-fast;

    &:hover {
      color: $primary-cyan;
    }
  }

  &__line {
    width: 1px;
    height: 90px;
    background: $text-gray-500;
    margin-top: $spacing-md;
  }
}
</style>
