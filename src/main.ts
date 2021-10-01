import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Assignments from '@/components/Assignments.vue'

const routes = [
  { path: '/assignments', component: Assignments },
  { path: '/:pathMatch(.*)*', redirect: '/assignments' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
