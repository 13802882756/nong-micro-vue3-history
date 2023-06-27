<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goBack() {
  router.push("/");
}
</script>
<template>
  <div class="item">
    <el-button @click="goBack" type="primary">回到上一页</el-button>
  </div>
</template>

<style scoped>
.item {
}
</style>
