<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/game">Game</router-link> |
      <button @click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { signOut } from 'firebase/auth';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';

// v9 compat packages are API compatible with v8 code
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

export default {
  methods: {
    logout() {
      signOut(this.$root.auth)
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
          this.$router.push("/");
        });
    },
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  margin-right: 20px;
}
</style>
