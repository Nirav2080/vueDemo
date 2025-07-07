<script setup lang="ts">
import type { Question } from '../types'

interface Props {
  question: Question
  selectedAnswer?: number
}

interface Emits {
  (e: 'answer-selected', answer: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const selectAnswer = (index: number): void => {
  emit('answer-selected', index)
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(option, index) in props.question.options"
      :key="index"
      class="cursor-pointer"
      @click="selectAnswer(index)"
    >
      <label
        class="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        :class="{ 'border-indigo-500 bg-indigo-50': props.selectedAnswer === index }"
      >
        <input
          type="radio"
          :checked="props.selectedAnswer === index"
          class="mr-3 text-indigo-600"
          @change="selectAnswer(index)"
        />
        <span class="text-gray-700">{{ option }}</span>
      </label>
    </div>
  </div>
</template>
