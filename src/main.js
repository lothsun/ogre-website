import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import '@fortawesome/fontawesome-free/css/all.css'
import firebase from 'firebase/app'
require('firebase/auth')
import router from './router'

//wait for firebase auth to initialize before creating app


Vue.config.productionTip = false

let app = null;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//wait for firebase auth to init before creating app
firebase.auth().onAuthStateChanged(() => {
  //init app if not already created
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
