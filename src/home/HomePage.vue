<template>
  <div class="home">
    <img class="robot" src="../assets/robot-home.png" />
  </div>
  <div class="get-started">
    <router-link to="/build">Get started</router-link> building your firts robot!
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
