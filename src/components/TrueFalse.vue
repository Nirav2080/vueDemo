<template>
  <div class="space-y-3">
    <div class="cursor-pointer" @click="selectAnswer(true)">
      <label
        class="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        :class="{ 'border-indigo-500 bg-indigo-50': selectedAnswer === true }"
      >
        <input
          type="radio"
          :checked="selectedAnswer === true"
          class="mr-3 text-indigo-600"
          @change="selectAnswer(true)"
        />
        <span class="text-gray-700">True</span>
      </label>
    </div>

    <div class="cursor-pointer" @click="selectAnswer(false)">
      <label
        class="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        :class="{ 'border-indigo-500 bg-indigo-50': selectedAnswer === false }"
      >
        <input
          type="radio"
          :checked="selectedAnswer === false"
          class="mr-3 text-indigo-600"
          @change="selectAnswer(false)"
        />
        <span class="text-gray-700">False</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Question } from '../types'

interface Props {
  question: Question
  selectedAnswer?: boolean
}

interface Emits {
  (e: 'answer-selected', answer: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const selectAnswer = (value: boolean): void => {
  emit('answer-selected', value)
}
</script>
