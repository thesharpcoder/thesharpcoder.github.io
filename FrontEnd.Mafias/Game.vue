<template>
  <div>
    <h2>Game</h2>
    <input v-model="x" class="form-control" />
    <select v-model="op" class="form-control">
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
    <input v-model="y" class="form-control" />
    <button v-on:click="calculate" class="btn btn-primary">Calculate</button>
    <input v-model="a" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      x: "", y: "", op: "+", a: "",
    };
  },
  computed: {
    intX() {
      return parseInt(this.x);
    },
    intY() {
      return parseInt(this.y);
    },
  },
  methods: {
    calculate: function (event) {
      console.log("calculate");
      if (event) event.preventDefault();
      var self = this;

      if (self.op == "+") self.a = self.intX + self.intY;
      else if (self.op == "-") self.a = self.intX - self.intY;
      else if (self.op == "*") self.a = self.intX * self.intY;
      else if (self.op == "/") self.a = self.intX / self.intY;
    },
  }
};
</script>

<style lang="scss" scoped></style>
