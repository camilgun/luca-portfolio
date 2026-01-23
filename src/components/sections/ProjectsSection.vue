<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { projects, type Project } from '@/data/projects'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const filter = ref<'all' | 'work' | 'personal' | 'startup'>('all')
const { staggerIn } = useScrollAnimation()

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projects
  return projects.filter(p => p.type === filter.value)
})

const filters: { value: Project['type'] | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'work', label: 'Work' },
  { value: 'personal', label: 'Side Projects' },
  { value: 'startup', label: 'Startup' }
]

const getTypeColor = (type: Project['type']) => {
  const colors: Record<Project['type'], string> = {
    work: 'violet',
    personal: 'cyan',
    startup: 'pink'
  }
  return colors[type]
}

const getTypeLabel = (type: Project['type']) => {
  const labels: Record<Project['type'], string> = {
    work: 'Work',
    personal: 'Side Project',
    startup: 'Startup'
  }
  return labels[type]
}

onMounted(() => {
  staggerIn('.project-card')
})
</script>

<template>
  <section id="projects" ref="sectionRef" class="projects section">
    <div class="container">
      <div class="section-title">
        <p class="section-title__subtitle">Portfolio</p>
        <h2 class="section-title__text">Projects</h2>
      </div>

      <div class="projects__filters">
        <button
          v-for="f in filters"
          :key="f.value"
          class="projects__filter"
          :class="{ 'projects__filter--active': filter === f.value }"
          @click="filter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="projects__grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
          :class="{ 'project-card--featured': project.featured }"
        >
          <div class="project-card__header">
            <div class="project-card__icon">
              <ph-folder-notch :size="24" weight="duotone" />
            </div>
            <div class="project-card__links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                aria-label="GitHub"
              >
                <ph-github-logo :size="20" weight="regular" />
              </a>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                aria-label="External link"
              >
                <ph-arrow-square-out :size="20" weight="regular" />
              </a>
            </div>
          </div>

          <span
            class="project-card__type"
            :class="`project-card__type--${getTypeColor(project.type)}`"
          >
            {{ getTypeLabel(project.type) }}
          </span>

          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">{{ project.description }}</p>

          <div class="project-card__tech">
            <span v-for="tech in project.tech" :key="tech" class="project-card__tech-item">
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  background: $bg-dark-900;

  &__filters {
    display: flex;
    justify-content: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-2xl;
    flex-wrap: wrap;
  }

  &__filter {
    background: transparent;
    border: 1px solid $glass-border;
    color: $text-gray-300;
    padding: $spacing-sm $spacing-md;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      color: $text-white;
      border-color: $text-gray-300;
    }

    &--active {
      background: $gradient-primary;
      border-color: transparent;
      color: $text-white;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.project-card {
  background: $glass-bg;
  border: 1px solid $glass-border;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  display: flex;
  flex-direction: column;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $glass-shadow;
    border-color: rgba($primary-violet, 0.3);
  }

  &--featured {
    @media (min-width: $breakpoint-lg) {
      grid-column: span 1;
    }

    border-color: rgba($primary-violet, 0.2);
    background: rgba($primary-violet, 0.05);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: $spacing-md;
  }

  &__icon {
    color: $primary-cyan;
  }

  &__links {
    display: flex;
    gap: $spacing-sm;
  }

  &__link {
    color: $text-gray-300;
    transition: color $transition-fast;

    &:hover {
      color: $primary-cyan;
    }
  }

  &__type {
    font-size: $font-size-xs;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 4px 10px;
    border-radius: $radius-full;
    display: inline-block;
    margin-bottom: $spacing-sm;
    width: fit-content;

    &--violet {
      background: rgba($primary-violet, 0.2);
      color: $primary-violet;
    }

    &--cyan {
      background: rgba($primary-cyan, 0.2);
      color: $primary-cyan;
    }

    &--pink {
      background: rgba($primary-pink, 0.2);
      color: $primary-pink;
    }
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $text-white;
    margin-bottom: $spacing-sm;
    transition: color $transition-fast;

    .project-card:hover & {
      color: $primary-cyan;
    }
  }

  &__description {
    font-size: $font-size-base;
    color: $text-gray-300;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: $spacing-md;
  }

  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
    margin-top: auto;
  }

  &__tech-item {
    font-size: $font-size-xs;
    font-family: $font-family-mono;
    color: $text-gray-500;
  }
}
</style>
