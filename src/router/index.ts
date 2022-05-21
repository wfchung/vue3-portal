import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestingView from '../views/TestingView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/TestingView/:ticketId',
     name: 'TestingView',
     component: TestingView, props: true
    },
    {
     path: "/:pathMatch(.*)*",
     name: "NotFound",
     component: NotFoundView
   }    
 ]
})

export default router
