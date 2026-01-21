<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">
        Designed & Built by <span class="footer__name">Luca Camilletti</span>
      </p>
      <p class="footer__tech">
        Made with Vue 3 + Vite + GSAP
      </p>
      <p class="footer__copyright">
        &copy; {{ currentYear }} All rights reserved
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: $spacing-2xl $spacing-lg;
  text-align: center;
  border-top: 1px solid $glass-border;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__text {
    font-size: $font-size-sm;
    color: $text-gray-300;
    margin-bottom: $spacing-xs;
  }

  &__name {
    background: $gradient-primary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  &__tech {
    font-size: $font-size-xs;
    color: $text-gray-500;
    margin-bottom: $spacing-xs;
  }

  &__copyright {
    font-size: $font-size-xs;
    color: $text-gray-500;
    margin-bottom: 0;
  }
}
</style>
