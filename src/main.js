import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app"
import "firebase/firestore";
import firebaseConfig from './firebaseConfig.js';
firebase.initializeApp(firebaseConfig.config);
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

var db = firebase.firestore();
var gamesRef = db.collection('games');

gamesRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
