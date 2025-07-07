<script setup lang="ts">
import { useQuizStore } from '../stores/quiz.ts'
import { useRouter } from 'vue-router'

const quizStore = useQuizStore()
const router = useRouter()

const totalQuestions: number = quizStore.totalQuestions

const startQuiz = (): void => {
  quizStore.startQuiz()
  router.push('/question/1')
}
</script>

<template>
  <div class="flex justify-center text-center">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Welcome to Quiz Master</h1>
      <p class="text-lg text-gray-600 mb-8">
        Test your knowledge with our interactive quiz! You'll have {{ totalQuestions }} questions
        covering various topics. Take your time and do your best!
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-800">Questions</h3>
          <p class="text-2xl font-bold text-blue-600">{{ totalQuestions }}</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-semibold text-green-800">Question Types</h3>
          <p class="text-sm text-green-600">Multiple Choice & True/False</p>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-800">Time</h3>
          <p class="text-sm text-purple-600">No time limit</p>
        </div>
      </div>

      <button
        @click="startQuiz"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
      >
        Start Quiz
      </button>
    </div>
  </div>
</template>
