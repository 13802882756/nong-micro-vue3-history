import { createRouter, createWebHistory } from "vue-router";
import "../../public-path.js"; // 重点3： 引入public-path文件
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createRouter({
  // base必须设置。注意：其实与文件在远程服务器上的存放路径无关！不设置base，在本地使用localhost访问会正常，但是部署到服务器二级路径后，会出现路由不正常的情况。
  // 当作为子应用时，base为/micro/app-vue3-history，对应的是http://35.82.155.32/micro/app-vue3-history/这个主应用访问子应用时的路径
  // 当作为独立运行的项目时，base为self_vue3_history，对应的是http://35.82.155.32/self_vue3_history/这个独立应用的路径，与Nginx的配置相对应
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/micro/app-vue3-history" : "/self_vue3_history/"),

  routes: [
    {
      path: "/",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/child/",
      component: () => import("@/components/child.vue"),
    },
    {
      path: "/welcome/",
      component: () => import("@/components/Welcome.vue"),
    },
  ],
});
export default router;
