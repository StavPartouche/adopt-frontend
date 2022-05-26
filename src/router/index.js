import Vue from "vue";
import VueRouter from "vue-router";
import selectAnimalPage from '@/views/selectAnimalPage'
import onborading from '@/views/onboardingPage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/select-animal",
    name: "home",
    component: selectAnimalPage
  },
  {
    path: "/onboarding",
    name: "onboarding",
    component: onborading
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
