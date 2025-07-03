import { defineStore } from 'pinia'
import type { Question, QuizState } from '../types'

export const useQuizStore = defineStore('quiz', {
  state: (): QuizState => ({
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correct: 2,
      },
      {
        id: 2,
        type: 'true-false',
        question: 'JavaScript is a compiled language.',
        correct: false,
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Which of these is a JavaScript framework?',
        options: ['Vue.js', 'Python', 'CSS', 'HTML'],
        correct: 0,
      },
      {
        id: 4,
        type: 'true-false',
        question: 'Vue.js was created by Evan You.',
        correct: true,
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language',
          'Hyperlinking Text Marking Language',
        ],
        correct: 0,
      },
    ],
    answers: [],
    currentQuestionIndex: 0,
    timeSpent: 0,
    isCompleted: false,
  }),

  getters: {
    currentQuestion: (state): Question => {
      return state.questions[state.currentQuestionIndex]
    },
    totalQuestions: (state): number => state.questions.length,
    score: (state): number => {
      let correct = 0
      state.answers.forEach((answer, index) => {
        const question = state.questions[index]
        if (question.type === 'multiple-choice') {
          if (answer === question.correct) correct++
        } else if (question.type === 'true-false') {
          if (answer === question.correct) correct++
        }
      })
      return correct
    },
    percentage(): number {
      const score = this.score
      return Math.round((score / this.totalQuestions) * 100)
    },
  },

  actions: {
    startQuiz(): void {
      this.answers = []
      this.currentQuestionIndex = 0
      this.timeSpent = 0
      this.isCompleted = false
    },

    submitAnswer(answer: number | boolean): void {
      this.answers[this.currentQuestionIndex] = answer
    },

    nextQuestion(): boolean {
      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.currentQuestionIndex++
        return true
      } else {
        this.completeQuiz()
        return false
      }
    },

    previousQuestion(): boolean {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
        return true
      }
      return false
    },

    completeQuiz(): void {
      this.isCompleted = true
    },

    setTimeSpent(time: number): void {
      this.timeSpent = time
    },
  },
})
