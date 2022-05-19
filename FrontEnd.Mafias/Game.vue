<template>
  <div>
    <div v-if="administrator">
      <button v-on:click="gameCreate" class="btn btn-primary">Create new Game</button>
    </div>

    <h2>Gamers</h2>
    <ul>
      <li v-for="gamer in gamers">{{ gamer.email }}</li>
    </ul>
  </div>
</template>
<script>
//https://firebase.google.com/docs/database/web/read-and-write
import { ref, set, onValue, child, get } from "firebase/database";

export default {
  name: "Game",
  data() {
    return {
      gameExists: false, enrolled: false,
      data: {}, gamers: []
    };
  },
  computed: {
    userEmail() {
      if (this.$root.auth.currentUser) return this.$root.auth.currentUser.email;
      else return "";
    },
    userId() {
      if (this.$root.auth.currentUser) return this.$root.auth.currentUser.uid;
      else return "";
    },

    administrator() {
      if (this.userEmail == "khuziz@hotmail.com") return true;
      return false;
    },
  },
  methods: {
    read() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    gameCreate: function (event) {
      if (event) event.preventDefault();
      var self = this;
      const db = this.$root.database;

      // set(ref(db, "users/" + userId), {
      //   username: name,
      //   email: email,
      //   profile_picture: imageUrl,
      // });
      set(ref(db, "games/1"), {
        creator: this.userEmail,
      });
    }
  },
  mounted() {
      var self = this;
      const db = this.$root.database;

      // const starCountRef = ref(db, 'posts/' + postId + '/starCount');
      // onValue(starCountRef, (snapshot) => {
      //   const data = snapshot.val();
      //   updateStarCount(postElement, data);
      // });

      const gameRef = ref(db, "games/1");
      
      onValue(gameRef, (snapshot) => {
        const data = snapshot.val();
        if (null != data) {
          self.gameExists = true;
          self.data = data;
          if (data.gamers) self.gamers = data.gamers;

          if (!self.enrolled) {
            set(ref(db, "games/1/gamers/" + this.userId), {
              email: this.userEmail,
            });
            self.enrolled = true;
          }
        }
      });
  }
};
</script>