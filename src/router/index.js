import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Products from '@/views/Producto'
import Carrito from '@/views/Carrito'
import Favoritos from '@/views/Favoritos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/productos/:id',
    name: 'Productos',
    component: Products
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/favoritos',
    name: 'Fav',
    component: Favoritos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
