<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="micro-app">
  
    vue3子应用-vueroute基于history模式
    <!-- <div class="car"></div> -->
    <img style="width: 100px; height: auto" src="./assets/mzd3.jpeg" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.car {
  width: 100vw;
  height: 300px;
  background-image: url("./assets/mzd3.jpeg");
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
