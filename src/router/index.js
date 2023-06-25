import { createRouter, createWebHashHistory } from "vue-router";
import "../../public-path.js"; // 重点3： 引入public-path文件
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/", // 重点4：qiankun进入子应用时，返回true
  history: createWebHashHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-vue-history/" : "/app-vue3/"
  ),
  routes: [
    {
      path: "/",
      // redirect: "/child",
    },
    {
      path: "/child",
      component: () => import("@/components/child.vue"),
    },
  ],
});
export default router;
