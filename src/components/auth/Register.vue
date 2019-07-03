<template>
    <section class="section register">
        <div class="container">
            <h1 class="is-size-1">Register</h1>
            <div class="card column is-half is-offset-one-quarter">
                <form @submit.prevent="register" class="card-content">

                    <div class="field">
                        <label class="label" for="username" >Username</label>
                        <div class="control">
                            <input class="input" name="username" v-model="username" type="text" placeholder="Text input" value="bulma">
                        </div>
                        <p class="help is-danger" v-if="feedback">{{ feedback }}</p>
                    </div>

                    <div class="field">
                        <label class="label" for="email">Email</label>
                        <div class="control">
                            <input class="input" name="email" v-model="email" type="email" placeholder="Email input" value="hello@">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="password">Password</label>
                        <div class="control ">
                            <input class="input" name="password" v-model="password" type="password" placeholder="Password" value="****">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                            <input type="checkbox" v-model="terms">
                            I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase/app'
require('firebase/auth');

export default {
    Name: 'SignUp',
    data() {
        return {
            email: null,
            password: null,
            terms: null,
            username: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        register() {
            if(this.username && this.email && this.password){
                this.slug = slugify(this.username, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists){
                        this.feedback = 'An account with this username or email already exists'
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(cred =>{
                            ref.set({
                                username: this.username,
                                uid: cred.user.uid,
                                email: this.email
                            })
                            console.log(cred.user)
                        })
                        .then(() => {
                            firebase.auth().currentUser.updateProfile({
                                displayName: this.username
                            })
                        //     //this.$router.push({ name: 'Home'})
                        })
                        .catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })
                    }
                })
                console.log(this.slug)
            } else {
                this.feedback = "You must enter all fields"
            }
        }
    },
}
</script>

<style>

</style>
