<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../types'

interface Props {
  question: Question
  answer?: number | boolean
}

interface Emits {
  (e: 'answer-selected', answer: number | boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const questionComponent = computed((): string => {
  return props.question.type === 'multiple-choice' ? 'MultipleChoice' : 'TrueFalse'
})

const handleAnswerSelected = (answer: number | boolean): void => {
  emit('answer-selected', answer)
}
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold text-gray-800 mb-6" v-highlight="true">
      {{ props.question.question }}
    </h2>

    <component
      :is="questionComponent"
      :question="props.question"
      :selected-answer="props.answer"
      @answer-selected="handleAnswerSelected"
    />
  </div>
</template>
