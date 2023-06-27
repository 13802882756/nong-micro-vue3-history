<script setup>
import { useRouter } from "vue-router";

const route = useRouter();

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

function handleGoToWelcome() {
  route.push("/welcome/");
}
</script>

<template>
  <div class="greetings">
    <el-button type="primary" @click="handleGoToWelcome">welcome</el-button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
