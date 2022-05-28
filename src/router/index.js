import Vue from "vue";
import VueRouter from "vue-router";
import selectAnimalPage from '@/views/selectAnimalPage'
import onborading from '@/views/onboardingPage'
import homePage from '@/views/homePage'
import testPage from '@/views/testPage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: homePage
  },
  {
    path: "/select-animal",
    name: "select-animal",
    component: selectAnimalPage
  },
  {
    path: "/onboarding",
    name: "onboarding",
    component: onborading
  },
  {
    path: "/test",
    name: "test",
    component: testPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
