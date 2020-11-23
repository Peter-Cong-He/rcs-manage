import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const originalPlush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPlush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  // {
  // path: '/home',
  // name: 'Home',
  // compnent: () => import(/* webpackChunkName: "home" */ '../layout/Home.vue'),
  // children: [
  {
    path: '/systemparameter',
    compnent: () => import(/* webpackChunkName: "home" */ '../views/System/SystemParameter.vue')
  },
  {
    path: '/systembacklist',
    compnent: () => import(/* webpackChunkName: "home" */ '../views/System/Blacklist/SystemBacklist.vue')
  },
  {
    path: '/userbacklist.vue',
    compnent: () => import(/* webpackChunkName: "home" */ '../views/System/Blacklist/UserBacklist.vue')
  },
  {
    path: '/channelbacklist',
    compnent: () => import(/* webpackChunkName: "home" */ '../views/System/Blacklist/ChannelBacklist.vue')
  },
  // ]
  // },
  {
    path: '',
    redirect: '/home/index'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
