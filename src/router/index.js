import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import AddPost from '../views/AddPost.vue'
import Page404 from '@/components/404/page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPost.vue')
  },
  {
    path: '/*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

export default router
