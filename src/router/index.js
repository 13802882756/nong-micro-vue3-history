import { createRouter, createWebHistory } from "vue-router";
import "../../public-path.js"; // 重点3： 引入public-path文件
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/", // 重点4：qiankun进入子应用时，返回true
  history: createWebHistory(
    // qiankunWindow.__POWERED_BY_QIANKUN__ ? "/micro/app_vue3" : "/self_vue3_history"
  ),
  routes: [
    {
      path: "/",
    },
    {
      path: "/child",
      component: () => import("@/components/child.vue"),
    },
  ],
});
export default router;
