import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { expansions: true },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/report',
      name: 'Report',
      meta: { expansions: true },
      component: () => import(/* webpackChunkName: "report" */ './views/Report.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
