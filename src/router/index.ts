import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Question from '../views/Question.vue'
import Results from '../views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start,
  },
  {
    path: '/question/:id',
    name: 'question',
    component: Question,
    props: true,
  },
  {
    path: '/results',
    name: 'results',
    component: Results,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
