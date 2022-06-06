<template>
  <section class="achiev-page">
    <sub-page-nav txt="ביצועים" />
    <div class="main">
      <h2 class="title">הישגים והצלחות</h2>
      <h3 class="sub">מגיע לכם כל הכבוד!</h3>
      <img class="animal left" :src="dogImg" alt="" />
      <img class="animal right" :src="dogImg" alt="" />
    </div>
    <div class="achiev-container">
        <div v-for="achiev in achievs" :key="achiev.id" class="achiev">
            <img :src="achiveIcon" alt="" />
            <h3 class="achive-title">{{achiev.title}}</h3>
            <p class="achive-sub">{{achiev.desc}}</p>
        </div>
    </div>
  </section>
</template>

<script>
import subPageNav from "@/cmps/subPageNav.vue";
import { achievService } from '@/services/achiev.service'

export default {
  name: "tipsPage",
  components: { subPageNav },
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
    dogImg() {
      return require("@/assets/icons/achievDog.svg");
    },
    achiveIcon() {
      return require("@/assets/icons/pow.svg");
    },
  },
};
</script>
