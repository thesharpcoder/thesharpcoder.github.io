<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import initialize from './firebase.js';
import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/game");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  mounted() {
    initialize(firebase);
  }
};
</script>
