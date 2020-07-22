import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@component/Users/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Users',
      name: 'users',
      component: UserIndex
    }
  ]
})
