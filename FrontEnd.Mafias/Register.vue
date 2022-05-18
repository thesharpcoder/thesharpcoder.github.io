<template>
  <div>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import initialize from './firebase.js';
import "firebase/compat/auth";
//import 'firebase/compat/firestore';

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  mounted() {
    initialize(firebase);
  },
};
</script>
