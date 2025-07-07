<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quiz'
import { useTimer } from '../composables/useTimer'
import QuizQuestion from '../components/QuizQuestion.vue'
import type { Question } from '../types'

const router = useRouter()
const quizStore = useQuizStore()
const { time, start, stop, formatTime } = useTimer()

const currentIndex = computed((): number => quizStore.currentQuestionIndex)
const currentQuestion = computed((): Question => quizStore.currentQuestion)
const totalQuestions = computed((): number => quizStore.totalQuestions)
const currentAnswer = computed(
  (): number | boolean | undefined => quizStore.answers[currentIndex.value],
)

const progress = computed((): number => {
  return ((currentIndex.value + 1) / totalQuestions.value) * 100
})

const hasAnswer = computed((): boolean => {
  return currentAnswer.value !== undefined
})

const isLastQuestion = computed((): boolean => {
  return currentIndex.value === totalQuestions.value - 1
})

const handleAnswerSelected = (answer: number | boolean): void => {
  quizStore.submitAnswer(answer)
}

const goToNext = (): void => {
  const hasNext = quizStore.nextQuestion()
  if (hasNext) {
    router.push(`/question/${currentIndex.value + 1}`)
  } else {
    stop()
    quizStore.setTimeSpent(time.value)
    router.push('/results')
  }
}

const goToPrevious = (): void => {
  const hasPrevious = quizStore.previousQuestion()
  if (hasPrevious) {
    router.push(`/question/${currentIndex.value + 1}`)
  }
}

onMounted(() => {
  start()
})

onUnmounted(() => {
  stop()
})
</script>
<template>
  <div class="max-w-3xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-6">

      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-500">
          Question {{ currentIndex + 1 }} of {{ totalQuestions }}
        </div>
        <div class="text-sm text-gray-500">Time: {{ formatTime(time) }}</div>
      </div>

      <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          class="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          :style="{ width: progress + '%' }"
        ></div>
      </div>

      <QuizQuestion
        :question="currentQuestion"
        :answer="currentAnswer"
        @answer-selected="handleAnswerSelected"
      />

      <!-- Navigation -->
      <div class="flex justify-between mt-8">
        <button
          @click="goToPrevious"
          :disabled="currentIndex === 0"
          class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          @click="goToNext"
          :disabled="!hasAnswer"
          class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isLastQuestion ? 'Finish Quiz' : 'Next Question' }}
        </button>
      </div>
    </div>
  </div>
</template>
