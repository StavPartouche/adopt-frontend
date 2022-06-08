<template>
  <section class="home-page">
    <home-nav-bar></home-nav-bar>
    <div class="home-page-main">
      <div class="txt-container">
        <p>בואו נלמד יחד איך מגדלים בעלי חיים!</p>
        <h3>צברו 100 כפות</h3>
      </div>
      <div class="home-points-container">
        <h2 class="home-points">{{ points }}</h2>
        <img :src="powIcon" alt="" />
      </div>
      <div class="home-start-timer-container">
        <lottie :options="lottieOptions" :height="300" :width="300"/>
      </div>




      <div class="lessons-list">
        <div
          class="lesson"
          :class="{ 'dis-lesson': !isLessonOpen(idx) }"
          v-for="(lesson, idx) in lessons"
          :key="idx"
          @click="openLesson(idx)"
        >
          <h2 class="lesson-num">{{lessonNum(idx)}}</h2>
          <div class="info-container">
            <h3>{{ lesson.title }}</h3>
            <div class="sub-info">
              <img :src="infoIcon" alt="" />
              <p>{{ lesson.desc }}</p>
            </div>
            <div class="sub-info">
              <img :src="clockIcon" alt="" />
              <p>{{ numOfQuests(idx) }} שאלות</p>
            </div>
          </div>
          <div class="black"></div>
          <div class="flow">
            <div class="circle" :class="{'empty': !isLessonOpen(idx)}"></div>
            <div class="line"></div>
          </div>
          <img class="lock-icon" v-if="!isLessonOpen(idx)" :src="lockIcon" alt="">
        </div>
      </div>




      <div class="home-play-container">
        <div @click="$router.push('/tips')" class="info-btn">
          <img :src="lightBulbIcon" alt="" />
          <p>טיפים</p>
        </div>
        <button @click="goToTest" class="start-btn" :class="{'active': isAvailableeGame}">
            התחל
        </button>
        <div @click="$router.push('/achievement')" class="info-btn">
          <img :src="hatIcon" alt="" />
          <p>ביצועים</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeNavBar from "@/cmps/home/homeNavBar.vue";
import Lottie from '@/lottie.vue';
import { animalService } from "@/services/animal.service";

export default {
  name: "homePage",
  components: { homeNavBar, Lottie },
  data(){
    return{
      lessons: null,
    }
  },
  created() {
    this.lessons = animalService.getTests(this.pet.type, this.pet.ageIdx);
  },
  methods:{
    goToTest(){
      this.$router.push('/test')
    },
    numOfQuests(idx) {
      return this.lessons[idx].questions.length;
    },
    isLessonOpen(idx) {
      return idx <= this.pet.currTest;
    },
    lessonNum(idx) {
      if (idx >= 9) return idx + 1;
      return `0${idx + 1}`;
    },
    openLesson(idx){
        const shouldOpen = this.isLessonOpen(idx)
        if(shouldOpen) this.$router.push(`/lesson/${idx}`)
    }
  },
  computed: {
    lottieOptions(){
      const lottie = require(`@/assets/lottie/correctAns/${this.pet.type}.json`)
      // const lottie = require(`@/assets/lottie/home/${this.pet.type}.json`)
      return {animationData: lottie}
    },
    pet() {
      return this.$store.getters.pet;
    },
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
    clockIcon() {
      return require("@/assets/icons/clock.svg");
    },
    infoIcon() {
      return require("@/assets/icons/info.svg");
    },
    lockIcon() {
      return require("@/assets/icons/lock.svg");
    },
    isAvailableeGame(){
        return true
    },
  },
};
</script>
