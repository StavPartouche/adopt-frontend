<template>
  <section class="home-page">
    <home-nav-bar></home-nav-bar>
    <div class="home-page-main">
      <div class="home-points-container">
        <h2 class="home-points">{{ points }}</h2>
        <img :src="powIcon" alt="" />
      </div>
      <div class="home-start-timer-container">
        <lottie-animation
          path="animations/test.json"
        />
        <p>המשחק הבא יתחיל בעוד {{ nextGameTime }}</p>
      </div>
      <div class="home-play-container">
        <div @click="$router.push('/tips')" class="info-btn">
          <img :src="lightBulbIcon" alt="" />
          <p>טיפים</p>
        </div>
        <button @click="goToTest" class="start-btn" :class="{'active': isAvailableeGame}">
            התחל
            <div class="start-game-modal">
                <p>המשחק נפתח</p>
                <div v-if="isAvailableeGame" class="white-square"></div>
            </div>
        </button>
        <div @click="$router.push('/class')" class="info-btn">
          <img :src="hatIcon" alt="" />
          <p>שיעורים</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeNavBar from "@/cmps/home/homeNavBar.vue";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  name: "homePage",
  components: { homeNavBar, LottieAnimation },
  // components: { homeNavBar },
  methods:{
    goToTest(){
      this.$router.push('/test')
    },
  },
  computed: {
    points() {
      return this.$store.getters.pet.points
    },
    nextGameTime() {
      return "08:23";
    },
    heartIcons() {
      return require("./../assets/icons/heart.svg");
    },
    powIcon() {
      return require("./../assets/icons/pow.svg");
    },
    dogHomeIcon() {
      return require("./../assets/icons/dogHome.svg");
    },
    hatIcon() {
      return require("./../assets/icons/hat.svg");
    },
    lightBulbIcon() {
      return require("./../assets/icons/lightBulb.svg");
    },
    isAvailableeGame(){
        return true
    }
  },
};
</script>
