import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')


  },
  {
    path: '/hombre',
    name: 'hombre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Hombre.vue')
  },
  {
    path: '/mujer',
    name: 'mujer',
    component: () => import(/* webpackChunkName: "about" */ '../components/Mujer.vue')
  },
  {
    path: '/catalogo',
    name:'catalogo',
    component: () => import(/* webpackChunkName: "about" */ '../components/Catalogo.vue')
  },
  {
    path: '/registro',
    name: 'registrarse',
    component: () => import(/* webpackChunkName: "about" */ '../components/Registro.vue')

  },
  {
    path: '/pasarela',
    name: 'pasarela',
    component: () => import(/* webpackChunkName: "about" */ '../components/Pasarela.vue')

  },
  {
    path: '/pago',
    name: 'pago',
    component: () => import('../components/Pago.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
