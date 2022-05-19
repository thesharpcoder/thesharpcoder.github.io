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
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "Home",
  data() {
    return {
      email: '', password: ''
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(this.$root.auth, this.email, this.password)
        .then((userCredential) => {
          //const user = userCredential.user;
          alert("Successfully logged in");
          this.$router.push("/game");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    },
  }
};
</script>
