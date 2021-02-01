import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/views/Home'
import Registration from '@/components/Registration'
import Username from '@/components/Username'
import UsernameLogin from '@/components/UsernameLogin'
import Usernameprofile from '@/components/Usernameprofile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/username',
      name: 'Username',
      component: Username
    },
    {
      path: '/username/login',
      name: 'UsernameLogin',
      component: UsernameLogin
    },
    {
      path: '/username/profile',
      name: 'Usernameprofile',
      component: Usernameprofile
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
