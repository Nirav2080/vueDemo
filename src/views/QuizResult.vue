<script setup lang="ts" name="QuizResult">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quiz'
import ResultSummary from '../components/ResultSummary.vue'

const router = useRouter()
const quizStore = useQuizStore()

const percentage = computed((): number => quizStore.percentage)

const getResultMessage = (): string => {
  if (percentage.value >= 80) {
    return 'Excellent work! You really know your stuff!'
  } else if (percentage.value >= 60) {
    return 'Good job! You did well on the quiz.'
  } else {
    return 'Keep studying! Practice makes perfect.'
  }
}

const retakeQuiz = (): void => {
  router.push('/')
}

const goHome = (): void => {
  router.push('/')
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8 text-center">
      <div class="mb-6">
        <div class="text-6xl mb-4">
          {{ percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚' }}
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h1>
        <p class="text-lg text-gray-600">
          {{ getResultMessage() }}
        </p>
      </div>

      <ResultSummary />

      <div class="flex justify-center space-x-4 mt-8">
        <button
          @click="retakeQuiz"
          class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Retake Quiz
        </button>

        <button
          @click="goHome"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>
