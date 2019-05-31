<template>
  
  <div id="app">
    <Nav/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Games :games="games"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Games from './pages/Games'
import Nav from './components/Nav'





export default {
  name: 'app',
  components: {
    HelloWorld,
    Games,
    Nav
  },
  data() {
    return {
      games
    }
  },
}
import firebase from "firebase/app"
import "firebase/firestore";
import firebaseConfig from './firebaseConfig.js';
firebase.initializeApp(firebaseConfig.config);
var db = firebase.firestore();
var gamesRef = db.collection('games');

gamesRef.get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
  });
});

var games = gamesRef.get()

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
