<script setup lang="ts">
import { onMounted } from 'vue'
import { skillCategories, softSkills } from '@/data/skills'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { gsap, staggerIn } = useScrollAnimation()

const getColorVar = (color: string) => {
  const colors: Record<string, string> = {
    violet: '#7C3AED',
    cyan: '#06B6D4',
    pink: '#EC4899',
    orange: '#F97316',
    green: '#10B981'
  }
  return colors[color] || colors.violet
}

onMounted(() => {
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill__bar-fill')
  skillBars.forEach(bar => {
    gsap.from(bar, {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  staggerIn('.skill-category')
  staggerIn('.soft-skill')
})
</script>

<template>
  <section id="skills" ref="sectionRef" class="skills section">
    <div class="container">
      <div class="section-title">
        <p class="section-title__subtitle">Competenze</p>
        <h2 class="section-title__text">Skills</h2>
      </div>

      <div class="skills__grid">
        <div
          v-for="category in skillCategories"
          :key="category.id"
          class="skill-category"
        >
          <div class="skill-category__header">
            <div
              class="skill-category__icon"
              :style="{ color: getColorVar(category.color) }"
            >
              <component :is="`ph-${category.icon}`" :size="24" weight="duotone" />
            </div>
            <h3 class="skill-category__name">{{ category.name }}</h3>
          </div>

          <div class="skill-category__list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill">
              <div class="skill__header">
                <span class="skill__name">{{ skill.name }}</span>
                <span v-if="skill.years" class="skill__years">{{ skill.years }}y</span>
              </div>
              <div class="skill__bar">
                <div
                  class="skill__bar-fill"
                  :data-level="skill.level"
                  :style="{
                    width: skill.level + '%',
                    background: `linear-gradient(90deg, ${getColorVar(category.color)}, ${getColorVar(category.color)}88)`
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="soft-skills">
        <h3 class="soft-skills__title">Soft Skills</h3>
        <div class="soft-skills__list">
          <span v-for="skill in softSkills" :key="skill" class="soft-skill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  background: $bg-dark-800;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-xl;
    margin-bottom: $spacing-3xl;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-xl) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.skill-category {
  background: $glass-bg;
  border: 1px solid $glass-border;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $glass-shadow;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-lg;
  }

  &__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $bg-dark-700;
    border-radius: $radius-md;
  }

  &__name {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $text-white;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }
}

.skill {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-xs;
  }

  &__name {
    font-size: $font-size-sm;
    color: $text-gray-100;
  }

  &__years {
    font-size: $font-size-xs;
    color: $text-gray-500;
  }

  &__bar {
    height: 6px;
    background: $bg-dark-700;
    border-radius: $radius-full;
    overflow: hidden;
  }

  &__bar-fill {
    height: 100%;
    border-radius: $radius-full;
    transition: width 1s ease-out;
  }
}

.soft-skills {
  text-align: center;

  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $text-white;
    margin-bottom: $spacing-lg;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-sm;
  }
}

.soft-skill {
  font-size: $font-size-sm;
  color: $text-gray-100;
  background: $bg-dark-700;
  border: 1px solid $glass-border;
  padding: $spacing-sm $spacing-md;
  border-radius: $radius-full;
  transition: all $transition-fast;

  &:hover {
    background: rgba($primary-violet, 0.2);
    border-color: $primary-violet;
    color: $text-white;
  }
}
</style>
