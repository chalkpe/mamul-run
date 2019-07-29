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
      meta: { icon: 'mdi-home' },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },

    {
      path: '/about',
      name: '페이지 정보',
      meta: { icon: 'mdi-information' },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
