import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
import Detail from '../pages/detail/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
export default router
