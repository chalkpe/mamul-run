import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '마물런',
      meta: { expansions: true },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },

    {
      path: '/report',
      name: '토벌 보고',
      meta: { expansions: true },
      component: () => import(/* webpackChunkName: "report" */ './views/Report.vue')
    },

    {
      path: '/about',
      name: '페이지 정보',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
