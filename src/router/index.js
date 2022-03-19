import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/Register.vue";
import Reward from "../views/Reward.vue";
import Claim from "../views/Claim.vue";
import Event from "../views/Event.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/reward",
    name: "Reward",
    component: Reward,
  },
  {
    path: "/claim",
    name: "Claim",
    component: Claim,
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/",
  // },
  // {
  //   path: '/:catchAll(.*)'
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
