<template>
    <nav class="navbar nav" role="navigation" aria-label="main navigation">
  <div class="navbar-brand logo">
    <div class="navbar-item">
      <router-link :to="{name:'Home'}"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></router-link>
      
    </div>

    <div role="button" class="navbar-burger burger"  @click="showNav = !showNav" :class="{ 'is-active': showNav}">
      <span ></span>
      <span ></span>
      <span ></span>
    </div>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': showNav}">
    <div class="navbar-start">
      <div class="navbar-item" @click="showNav = !showNav">
        <router-link :to="{name:'Home'}" class="has-text-black">Home</router-link>
      </div>

      <div class="navbar-item" @click="showNav = !showNav">
        <router-link :to="{name:'About'}" class="has-text-black">About</router-link>
      </div>

      <div class="navbar-item" @click="showNav = !showNav">
        <router-link :to="{name:'Games'}" class="has-text-black">Games</router-link>
      </div>

      
    </div>

    <div class="navbar-end">
      <div v-if="userLoggedIn" class="navbar-item has-dropdown is-hoverable">
        <div class="navbar-link my-profile" @click="showNav = !showNav">
          <router-link :to="{name:'ViewProfile', params: {user_id: currentUser.displayName}}" class="has-text-black">{{currentUser.displayName}}</router-link>
        </div>

        <div class="navbar-dropdown">
          <div class="navbar-item" @click="showNav = !showNav">
            Jobs
          </div>
          <div class="navbar-item" @click="showNav = !showNav">
            Contact
          </div>
          <hr class="navbar-divider">
          <div class="navbar-item" @click="showNav = !showNav">
            <a @click="logout" class="has-text-black">Logout</a>
          </div>
        </div>
      </div>
      <div v-if="!userLoggedIn" class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="showNav = !showNav">
            <router-link :to="{name: 'Register'}" class="has-text-white"><strong>Register</strong></router-link>
          </a>
          <a class="button is-light" @click="showNav = !showNav">
            <router-link :to="{name: 'Login'}" class="has-text-black">Login</router-link>
          </a>
          
        </div>
      </div>
      
    </div>
  </div>
</nav>
</template>


<script>
import firebase from 'firebase/app'
require('firebase/auth')
export default {
    name: 'Nav',
    data() {
      return {
        showNav: false,
        userLoggedIn: false,
        currentUser: null
      }
    },
    methods: {
      logout(){
        firebase.auth().signOut().then(() =>{
          this.userLoggedIn = false
          this.$router.push({name: 'Register'})
        })
      }
    },
    created() {
      this.currentUser = firebase.auth().currentUser
    },
    watch: {
      userLoggedIn: function(userLoggedIn) {
        userLoggedIn = !userLoggedIn
      }
    },
}

</script>


<style scoped>
/* .nav {
  background-color: #1d1d1d;
  background-image: radial-gradient(at center 0,#31a2a6 -150%,#333240 45%,#333240 85%);
  border: 1px solid #000;
  border-radius: 3px 3px 0 0;
  box-shadow: rgba(255,255,255,.2) 0 1px 1px inset;
  box-sizing: border-box;
  outline: none;
  padding: 0;
  position: relative;
  z-index: 999;
}
.logo {
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  outline: none;
  padding: 11px;
  position: relative;
  text-align: center;
  width: 33.3333%;
} */
.my-profile::after {
  border-color: black !important;
}
</style>