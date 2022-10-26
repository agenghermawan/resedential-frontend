import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ThumbnailView from "../views/ThumbnailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/thumbnail",
    name: "thumnail",
    component: ThumbnailView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
