import type { Ref } from 'vue'

export interface Question {
  id: number
  type: 'multiple-choice' | 'true-false'
  question: string
  options?: string[]
  correct: number | boolean
}

export interface QuizState {
  questions: Question[]
  answers: (number | boolean)[]
  currentQuestionIndex: number
  timeSpent: number
  isCompleted: boolean
}

export interface TimerComposable {
  time: Ref<number>
  isRunning: Ref<boolean>
  start: () => void
  stop: () => void
  reset: () => void
  formatTime: (seconds: number) => string
}
