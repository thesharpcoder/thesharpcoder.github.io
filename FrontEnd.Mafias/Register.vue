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
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "Register",
  data() {
    return {
      email: '', password: ''
    };
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(this.$root.auth, this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>
