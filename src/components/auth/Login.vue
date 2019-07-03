<template>
    <section class="section login">
        <div class="container">
            <h1 class="is-size-1">Login</h1>
            <div class="card column is-half is-offset-one-quarter">
                <form @submit.prevent="login" class="card-content">

                    <div class="field">
                        <label class="label" for="email">Email</label>
                        <div class="control">
                            <input class="input" name="email" v-model="email" type="email" placeholder="Email input" value="hello@">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="password">Password</label>
                        <div class="control">
                            <input class="input" name="password" v-model="password" type="password" placeholder="Password" value="****">
                        </div>
                    </div>
                    <p v-if="feedback" class="help is-danger">{{ feedback }}</p>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase/app'
require('firebase/auth')

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null,
            emailFeedback: null,
            passwordFeedback: null
        }
    },
    methods: {
        login(){
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    console.log(cred.user)
                    this.$router.push({name:'ViewProfile', params: { user_id: cred.user.displayName}})
                }).catch(err => {
                    this.feedback = err.message
                })
                this.feedback = null
                .then(() => {
                    this.userLoggedIn = true
                })
                
            } else {
                this.feedback = 'Please fill in both fields'
            }
        }
    },
}
</script>