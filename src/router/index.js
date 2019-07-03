  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Home from '@/components/Home'
  import About from '@/components/pages/About'
  import Register from '@/components/auth/Register'
  import Games from '@/components/games/Games'
  import ViewProfile from '@/components/user/ViewProfile'
  import ViewGame from '@/components/games/ViewGame'
  import Login from '@/components/auth/Login'

  Vue.use(VueRouter)

  export default new VueRouter({
      routes: [
          {
              path: '/',
              name: 'Home',
              component: Home
          },
          {
              path: '/about',
              name: 'About',
              component: About
          },
          {
              path: '/register',
              name: 'Register',
              component: Register
          },
          {
              path: '/games',
              name: 'Games',
              component: Games
          },
          {
              path: '/games/:game_id',
              name: 'ViewGame',
              component: ViewGame
          },
          {
            path: '/profile/:user_id',
            name: 'ViewProfile',
            component: ViewProfile
          },
          {
              path: '/login',
              name: 'Login',
              component: Login
          }
    ]
  })