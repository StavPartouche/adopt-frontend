import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import onboardingSlide1 from "@/cmps/boardingSlides/onboardingSlide1"
import onboardingSlide2 from "@/cmps/boardingSlides/onboardingSlide2"

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home,
  //   children: [
  //     {
  //         path: '/',
  //         name: 'onboardingSlide1',
  //         component: onboardingSlide1
  //     },
  //     {
  //         path: '/slide2',
  //         name: 'onboardingSlide2',
  //         component: onboardingSlide2
  //     },
  //   ]
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
