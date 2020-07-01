import Vue from "vue";
import VueRouter from "vue-router";
import vueRunning from "../views/vueRunning.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "vueRunning",
    component: vueRunning
  },
  {
    path: "/:codename",
    name: "vueRunning",
    component: vueRunning
  }
];

const router = new VueRouter({
  mode: "history",
  base: "vue-running", //process.env.BASE_URL
  routes
});
export default router;
