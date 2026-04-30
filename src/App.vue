<template>
  <main>
    <div class="content">
      <h1>Luca Camilletti</h1>
      <p class="tagline">Code is the visible part.</p>
      <nav>
        <a href="https://github.com/camilgun" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span aria-hidden="true">·</span>
        <a href="https://linkedin.com/in/lucacamilletti" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span aria-hidden="true">·</span>
        <a href="mailto:lucamilletti@gmail.com">Email</a>
      </nav>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
main {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  color: #0f0f0f;
  line-height: 1;
}

.tagline {
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: #999;
  font-weight: 400;
  letter-spacing: 0.01em;
}

nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

nav span {
  color: #ddd;
  font-size: 0.75rem;
}

nav a {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #bbb;
  text-decoration: none;
  transition: color 0.15s ease;
}

nav a:hover {
  color: #0f0f0f;
}
</style>
