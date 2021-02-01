import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/views/Home'
import Registration from '@/components/Registration'
import Username from '@/components/Username'
import UsernameLogin from '@/components/UsernameLogin'
import Usernameprofile from '@/components/Usernameprofile'
import UsernamePin from '@/components/UsernamePin'
import Events from '@/components/Events'
import AddEvent from '@/components/AddEvent'
import EventDetail from '@/components/EventDetail'


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
      path: '/username/pin',
      name: 'UsernamePin',
      component: UsernamePin
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/events/newevent',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/events/detail',
      name: 'EventDetail',
      component: EventDetail
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
