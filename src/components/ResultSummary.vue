
<script setup lang="ts">
import { computed } from 'vue'
import { useQuizStore } from '../stores/quiz'
import type { Question } from '../types'

const quizStore = useQuizStore()

const score = computed((): number => quizStore.score)
const percentage = computed((): number => quizStore.percentage)
const timeSpent = computed((): number => quizStore.timeSpent)
const questions = computed((): Question[] => quizStore.questions)
const answers = computed((): (number | boolean)[] => quizStore.answers)

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const isCorrect = (index: number): boolean => {
  const question = questions.value[index]
  const answer = answers.value[index]

  if (question.type === 'multiple-choice') {
    return answer === question.correct
  } else if (question.type === 'true-false') {
    return answer === question.correct
  }
  return false
}
</script>

<template>
  <div class="bg-gray-50 rounded-lg p-6">
    <div class="grid md:grid-cols-3 gap-6 mb-6">
      <div class="text-center">
        <div class="text-3xl font-bold text-indigo-600">{{ score }}</div>
        <div class="text-sm text-gray-600">Correct Answers</div>
      </div>

      <div class="text-center">
        <div class="text-3xl font-bold text-green-600">{{ percentage }}%</div>
        <div class="text-sm text-gray-600">Score</div>
      </div>

      <div class="text-center">
        <div class="text-3xl font-bold text-blue-600">{{ formatTime(timeSpent) }}</div>
        <div class="text-sm text-gray-600">Time Taken</div>
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Question Review</h3>

      <div
        v-for="(question, index) in questions"
        :key="question.id"
        class="flex items-center justify-between p-3 bg-white rounded border"
      >
        <span class="text-sm text-gray-700">
          Question {{ index + 1 }}: {{ question.question.substring(0, 50) }}...
        </span>

        <div class="flex items-center">
          <span
            class="text-sm px-2 py-1 rounded"
            :class="isCorrect(index) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
          >
            {{ isCorrect(index) ? 'Correct' : 'Incorrect' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
