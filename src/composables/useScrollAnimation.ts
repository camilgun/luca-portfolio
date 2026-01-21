import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const isReady = ref(false)

  onMounted(() => {
    isReady.value = true
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  const fadeInUp = (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      ...options
    })
  }

  const staggerIn = (elements: HTMLElement[] | string, options?: gsap.TweenVars) => {
    return gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      ...options
    })
  }

  const slideInLeft = (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      ...options
    })
  }

  const slideInRight = (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      ...options
    })
  }

  const scaleIn = (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      ...options
    })
  }

  const drawLine = (element: SVGPathElement | string, options?: gsap.TweenVars) => {
    const path = typeof element === 'string'
      ? document.querySelector(element) as SVGPathElement
      : element

    if (path) {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      })

      return gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        },
        ...options
      })
    }
  }

  const parallax = (element: HTMLElement | string, speed: number = 0.5) => {
    return gsap.to(element, {
      y: () => window.innerHeight * speed * -1,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  return {
    isReady,
    fadeInUp,
    staggerIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    drawLine,
    parallax,
    gsap,
    ScrollTrigger
  }
}
