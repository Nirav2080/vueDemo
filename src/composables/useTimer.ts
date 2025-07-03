import { ref, onUnmounted, type Ref } from 'vue'
import type { TimerComposable } from '../types'

export function useTimer(): TimerComposable {
  const time: Ref<number> = ref(0)
  const isRunning: Ref<boolean> = ref(false)
  let interval: number | null = null

  const start = (): void => {
    if (!isRunning.value) {
      isRunning.value = true
      interval = setInterval(() => {
        time.value++
      }, 1000)
    }
  }

  const stop = (): void => {
    if (isRunning.value) {
      isRunning.value = false
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }
  }

  const reset = (): void => {
    stop()
    time.value = 0
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  onUnmounted(() => {
    stop()
  })

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
    formatTime,
  }
}
