import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Login from '@/components/Login'
import Photos from '@/components/Photos'
import People  from '@/components/People'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/people',
      name: 'People',
      component: People,
    }
  ]
})
