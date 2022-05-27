<template>
  <section class="home-page">
    <home-nav-bar></home-nav-bar>
    <div class="home-page-main">
      <div class="home-points-container">
        <h2 class="home-points">{{ points }}</h2>
        <img :src="heartIcons" alt="" />
      </div>
      <div class="home-start-timer-container">
        <img :src="dogHomeIcon" alt="" />
        <p>המשחק הבא יתחיל בעוד {{ nextGameTime }}</p>
      </div>
      <div class="home-play-container">
        <div class="info-btn">
          <img :src="lightBulbIcon" alt="" />
          <p>טיפים</p>
        </div>
        <button class="start-btn">
            התחל
            <div class="start-game-modal">
                <p>המשחק נפתח</p>
                <div class="white-square"></div>
            </div>
        </button>
        <div class="info-btn">
          <img :src="hatIcon" alt="" />
          <p>שיעורים</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeNavBar from "@/cmps/home/homeNavBar.vue";
import { storageService } from "@/services/storage.service";

export default {
  name: "homePage",
  components: { homeNavBar },
  computed: {
    points() {
      return 0;
    },
    nextGameTime() {
      return "08:23";
    },
    heartIcons() {
      return require("./../assets/icons/heart.svg");
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
  },
};
</script>
