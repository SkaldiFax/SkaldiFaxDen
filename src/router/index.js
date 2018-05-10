import Vue from 'vue'
import Router from 'vue-router'
import NotePage from '@/components/NotePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotePage',
      component: NotePage
    }
  ]
})
