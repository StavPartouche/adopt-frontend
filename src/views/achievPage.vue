<template>
  <section class="achiev-page">
    <sub-page-nav isPadding txt="ביצועים" />
    <div class="main">
      <h2 class="title">הישגים והצלחות</h2>
      <h3 class="sub">מגיע לכם כל הכבוד!</h3>
      <div class="dog" v-if="pet.type === 'dog'">
        <lottie class="animal left" :options="lottieAnimalOptions" :height="150" :width="230"/>
        <lottie class="animal right" :options="lottieAnimalOptions" :height="150" :width="230"/>
      </div>
      <div class="bird" v-if="pet.type === 'bird'">
        <lottie class="animal left" :options="lottieAnimalOptions" :height="150" :width="230"/>
        <lottie class="animal right" :options="lottieAnimalOptions" :height="150" :width="230"/>
      </div>
      <div class="cat" v-if="pet.type === 'cat'">
        <lottie class="animal left" :options="lottieAnimalOptions" :height="150" :width="190"/>
        <lottie class="animal right" :options="lottieAnimalOptions" :height="150" :width="190"/>
      </div>
      <div class="rabbit" v-if="pet.type === 'rabbit'">
        <lottie class="animal left" :options="lottieAnimalOptions" :height="210" :width="210"/>
        <lottie class="animal right" :options="lottieAnimalOptions" :height="210" :width="210"/>
      </div>
      <div class="fish" v-if="pet.type === 'fish'">
        <lottie class="animal left" :options="lottieAnimalOptions" :height="210" :width="210"/>
        <lottie class="animal right" :options="lottieAnimalOptions" :height="210" :width="210"/>
      </div>
      <div class="achiev-container">
          <lottie v-if="pet.isDone" class="animation spark" :options="sparkLottirOptions" :height="100" :width="170"/>
          <div v-if="pet.isDone" class="achiev">
              <img :src="achive1ColoredIcon" alt="" />
              <h3 class="achive-title">משחק ראשון</h3>
              <p class="achive-sub">התחלתם וסיימתם, כל הכבוד!</p>
          </div>
          <div v-else class="achiev">
              <img :src="achive1Icon" alt="" />
              <h3 class="achive-title">משחק ראשון</h3>
              <p class="achive-sub">התחלתם וסיימתם, כל הכבוד!</p>
          </div>
          <div class="achiev">
              <img :src="achive2Icon" alt="" />
              <h3 class="achive-title">העשרה</h3>
              <p class="achive-sub">התעניינתם בטיפים, כל הכבוד!</p>
          </div>
          <div class="achiev">
              <img :src="achive3Icon" alt="" />
              <h3 class="achive-title">רצף</h3>
              <p class="achive-sub">שמרתם על רצף 5 ימים, כל הכבוד!</p>
          </div>
          <div class="achiev">
              <img :src="achive4Icon" alt="" />
              <h3 class="achive-title">תשובה נכונה</h3>
              <p class="achive-sub">השלמתם משחק שלם מבלי לטעות, כל הכבוד!</p>
          </div>
      </div>
      <img class="bg" :src="bg" alt="">
    </div>
  </section>
</template>

<script>
import Lottie from '@/lottie.vue';
import subPageNav from "@/cmps/subPageNav.vue";
import { achievService } from '@/services/achiev.service'

export default {
  name: "tipsPage",
  components: { subPageNav, Lottie },
  data() {
    return {
        achievs: null
    };
  },
  created() {
      this.achievs = achievService.getAchiev()
  },
  methods: {},
  computed: {
    sparkLottirOptions(){
      let lottie = require(`@/assets/lottie/spark.json`)
      return { animationData: lottie }
    },
    lottieAnimalOptions(){
      let lottie = require(`@/assets/lottie/correctAns/${this.pet.type}.json`)
      return { animationData: lottie }
    },
    pet(){
      return this.$store.getters.pet
    },
    dogImg() {
      return require("@/assets/icons/achievDog.svg");
    },
    achive1ColoredIcon() {
      return require(`@/assets/icons/achivRibbons/1-${this.pet.type}.svg`);
    },
    achive1Icon() {
      return require("@/assets/icons/achivRibbons/1.svg");
    },
    achive2Icon() {
      return require("@/assets/icons/achivRibbons/2.svg");
    },
    achive3Icon() {
      return require("@/assets/icons/achivRibbons/3.svg");
    },
    achive4Icon() {
      return require("@/assets/icons/achivRibbons/4.svg");
    },
    bg(){
      return require('@/assets/bgcs/achivBg.svg')
    }
  },
};
</script>
