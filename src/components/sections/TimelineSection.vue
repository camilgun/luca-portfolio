<script setup lang="ts">
import { onMounted } from 'vue'
import { careerEvents, type CareerEvent } from '@/data/career'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { gsap } = useScrollAnimation()

const getColorClass = (color: CareerEvent['color']) => `timeline-item--${color}`

onMounted(() => {
  // Animate timeline line
  gsap.from('.timeline__line', {
    scaleY: 0,
    transformOrigin: 'top',
    ease: 'none',
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: 1
    }
  })

  // Animate each timeline item
  const items = document.querySelectorAll('.timeline-item')
  items.forEach((item, index) => {
    const direction = index % 2 === 0 ? -50 : 50

    gsap.from(item, {
      x: direction,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})
</script>

<template>
  <section id="journey" ref="sectionRef" class="timeline-section section">
    <div class="container">
      <div class="section-title">
        <p class="section-title__subtitle">The Journey</p>
        <h2 class="section-title__text">My Journey</h2>
      </div>

      <div class="timeline">
        <div class="timeline__line"></div>

        <div
          v-for="(event, index) in careerEvents"
          :key="event.id"
          class="timeline-item"
          :class="[
            getColorClass(event.color),
            { 'timeline-item--milestone': event.isMilestone },
            { 'timeline-item--right': index % 2 !== 0 }
          ]"
        >
          <div class="timeline-item__dot">
            <div class="timeline-item__dot-inner"></div>
          </div>

          <div class="timeline-item__content">
            <span class="timeline-item__year">{{ event.year }}</span>
            <h3 class="timeline-item__title">{{ event.title }}</h3>
            <p class="timeline-item__subtitle">{{ event.subtitle }}</p>
            <p v-if="event.location" class="timeline-item__location">
              <ph-map-pin :size="14" weight="fill" />
              {{ event.location }}
            </p>
            <p class="timeline-item__description">{{ event.description }}</p>

            <blockquote v-if="event.quote" class="timeline-item__quote">
              "{{ event.quote }}"
            </blockquote>

            <div v-if="event.skills?.length" class="timeline-item__skills">
              <span
                v-for="skill in event.skills"
                :key="skill"
                class="timeline-item__skill"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  background: $bg-dark-900;
  overflow: hidden;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: $spacing-xl 0;

  &__line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      $primary-violet,
      $primary-cyan,
      $primary-pink,
      $accent-green
    );
    transform: translateX(-50%);

    @media (max-width: $breakpoint-md) {
      left: 20px;
    }
  }
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: $spacing-md $spacing-xl $spacing-xl $spacing-md;

  @media (max-width: $breakpoint-md) {
    width: 100%;
    padding-left: 50px;
  }

  &--right {
    margin-left: 50%;

    @media (max-width: $breakpoint-md) {
      margin-left: 0;
    }

    .timeline-item__dot {
      left: -11px;

      @media (max-width: $breakpoint-md) {
        left: 12px;
      }
    }

    .timeline-item__content {
      text-align: left;
    }
  }

  &:not(&--right) {
    text-align: right;

    @media (max-width: $breakpoint-md) {
      text-align: left;
    }

    .timeline-item__dot {
      right: -11px;
      left: auto;

      @media (max-width: $breakpoint-md) {
        left: 12px;
        right: auto;
      }
    }

    .timeline-item__content {
      text-align: right;

      @media (max-width: $breakpoint-md) {
        text-align: left;
      }
    }

    .timeline-item__skills {
      justify-content: flex-end;

      @media (max-width: $breakpoint-md) {
        justify-content: flex-start;
      }
    }
  }

  &__dot {
    position: absolute;
    top: $spacing-lg;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $bg-dark-900;
    border: 2px solid $primary-violet;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &-inner {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $primary-violet;
    }
  }

  &--milestone {
    .timeline-item__dot {
      width: 28px;
      height: 28px;
      animation: pulseGlow 2s ease-in-out infinite;

      &-inner {
        width: 12px;
        height: 12px;
      }
    }

    .timeline-item__content {
      background: rgba($primary-violet, 0.1);
      border-color: rgba($primary-violet, 0.3);
    }
  }

  // Color variants
  &--violet .timeline-item__dot {
    border-color: $primary-violet;
    &-inner { background: $primary-violet; }
  }
  &--cyan .timeline-item__dot {
    border-color: $primary-cyan;
    &-inner { background: $primary-cyan; }
  }
  &--pink .timeline-item__dot {
    border-color: $primary-pink;
    &-inner { background: $primary-pink; }
  }
  &--orange .timeline-item__dot {
    border-color: $accent-orange;
    &-inner { background: $accent-orange; }
  }
  &--green .timeline-item__dot {
    border-color: $accent-green;
    &-inner { background: $accent-green; }
  }

  &__content {
    background: $glass-bg;
    border: 1px solid $glass-border;
    border-radius: $radius-lg;
    padding: $spacing-lg;
    transition: all $transition-base;

    &:hover {
      transform: translateY(-3px);
      box-shadow: $glass-shadow;
    }
  }

  &__year {
    display: inline-block;
    font-size: $font-size-sm;
    font-weight: 700;
    color: $primary-cyan;
    background: rgba($primary-cyan, 0.1);
    padding: $spacing-xs $spacing-sm;
    border-radius: $radius-full;
    margin-bottom: $spacing-sm;
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $text-white;
    margin-bottom: $spacing-xs;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-gray-100;
    margin-bottom: $spacing-xs;
  }

  &__location {
    font-size: $font-size-sm;
    color: $text-gray-500;
    margin-bottom: $spacing-md;
    display: flex;
    align-items: center;
    gap: $spacing-xs;

    .timeline-item--right & {
      justify-content: flex-start;
    }

    @media (max-width: $breakpoint-md) {
      justify-content: flex-start;
    }

    .timeline-item:not(.timeline-item--right) & {
      justify-content: flex-end;

      @media (max-width: $breakpoint-md) {
        justify-content: flex-start;
      }
    }
  }

  &__description {
    font-size: $font-size-base;
    color: $text-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-md;
  }

  &__quote {
    font-style: italic;
    font-size: $font-size-base;
    color: $text-gray-100;
    padding: $spacing-md;
    border-left: 3px solid $primary-violet;
    margin: $spacing-md 0;
    background: rgba($primary-violet, 0.05);
    border-radius: 0 $radius-md $radius-md 0;
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }

  &__skill {
    font-size: $font-size-xs;
    color: $text-gray-300;
    background: $bg-dark-700;
    padding: 4px 10px;
    border-radius: $radius-full;
  }
}
</style>
