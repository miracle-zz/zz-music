import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('views/rank/Rank.vue')
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('views/album/Album.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('views/singer/Singer.vue')
  },
  {
    path: '/mv',
    name: 'Mv',
    component: () => import('views/mv/Mv.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
