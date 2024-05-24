<template>
    <h2>New User? Sign Up</h2>
    <form @submit.prevent="signup">
        <label>Username</label><br/>
        <input type="text" placeholder="username" v-model="username"><br/>
        <label>Email</label><br/>
        <input type="text" placeholder="email" v-model="email"><br/>
        <label>Password</label><br/>
        <input type="Password" placeholder="password" v-model="password"><br/>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/init.js'
export default{
    name: 'SignupForm',
    emits: ['loggedIn'],
    data(){
        return{
            username:'',
            email: '',
            password: ''
        }
    },
    methods:{
        signup(){
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                updateProfile(auth.currentUser,{
                    displayName: this.username
                })
            })
            .then(() => {
                console.log(auth.currentUser.displayName)
                this.$emit('loggedIn')
            })
        }
    }
}
</script>