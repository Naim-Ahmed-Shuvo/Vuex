import { createRouter, createWebHistory } from 'vue-router'
import Joke from '../views/Joke.vue'

const routes = [
  {
    path: '/',
    name: 'joke',
    component: Joke
  },
  {
    path: '/count',
    name: 'count',
    component: ( )=> import('../views/Counter.vue')
  },
  {
    path: '/all-jokes',
    name: 'all-jokes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllJokes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
