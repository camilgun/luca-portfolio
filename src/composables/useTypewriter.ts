import { ref, onMounted, onUnmounted } from 'vue'

export interface TypewriterOptions {
  strings: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
  loop?: boolean
  cursor?: boolean
}

export function useTypewriter(options: TypewriterOptions) {
  const {
    strings,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    loop = true,
    cursor = true
  } = options

  const displayText = ref('')
  const isTyping = ref(true)
  const currentIndex = ref(0)
  const showCursor = ref(cursor)

  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let isDeleting = false
  let charIndex = 0

  const type = () => {
    const currentString = strings[currentIndex.value]
    if (!currentString) return

    if (!isDeleting) {
      // Typing
      displayText.value = currentString.substring(0, charIndex + 1)
      charIndex++

      if (charIndex === currentString.length) {
        // Finished typing, pause then delete
        isTyping.value = false
        timeoutId = setTimeout(() => {
          isDeleting = true
          isTyping.value = true
          type()
        }, pauseTime)
        return
      }
    } else {
      // Deleting
      displayText.value = currentString.substring(0, charIndex - 1)
      charIndex--

      if (charIndex === 0) {
        // Finished deleting, move to next string
        isDeleting = false
        currentIndex.value = (currentIndex.value + 1) % strings.length

        if (!loop && currentIndex.value === 0) {
          isTyping.value = false
          return
        }
      }
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed
    timeoutId = setTimeout(type, speed)
  }

  const start = () => {
    if (timeoutId) return
    charIndex = 0
    isDeleting = false
    currentIndex.value = 0
    displayText.value = ''
    isTyping.value = true
    type()
  }

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    isTyping.value = false
  }

  const reset = () => {
    stop()
    displayText.value = ''
    charIndex = 0
    isDeleting = false
    currentIndex.value = 0
  }

  onMounted(() => {
    start()
  })

  onUnmounted(() => {
    stop()
  })

  return {
    displayText,
    isTyping,
    showCursor,
    currentIndex,
    start,
    stop,
    reset
  }
}
