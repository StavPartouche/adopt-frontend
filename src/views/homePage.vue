<template>
  <section class="home-page">
    <home-nav-bar @changePet="imgKey++"></home-nav-bar>
    <div class="home-page-main">
      <div class="txt-container">
        <p>{{pTxt}}</p>
        <h3 :class="{'lh': pet.isDone}">{{h3Txt}}</h3>
      </div>
      <div class="home-points-container" :class="{'mt': pet.isDone}">
        <h2 class="home-points">{{ points }}</h2>
        <img :src="powIcon" alt="" />
      </div>
      <div class="home-start-timer-container">
        <lottie :options="lottieOptions" :height="300" :width="300" :key="imgKey"/>
      </div>



      <div class="lessons-list">
        <div
          class="lesson"
          :class="{ 'dis-lesson': !isLessonOpen(idx) }"
          v-for="(lesson, idx) in lessons"
          :key="idx"
          @click="openLesson(idx)"
        >
          <div class="num-container">
            <h2 class="lesson-num" :class="{'down': idx === 1 && pet.isDone }">{{lessonNum(idx)}}</h2>
            <p class="timer" v-if="idx === 1 && pet.isDone">11:59</p>
          </div>
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
        <button @click="goToTest" class="start-btn" :class="{'active': isAvailableeGame}" :style="styleStartBtn">
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
      imgKey: 0
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
      return idx === 0;
    },
    lessonNum(idx) {
      if (idx >= 9) return idx + 1;
      return `0${idx + 1}`;
    },
    openLesson(idx){
      if(idx !== 0) return
      if(this.pet.currTest === 0){
        this.$router.push(`/test`)
        return 
      }
      this.$router.push(`/lesson/${idx}`)
    }
  },
  computed: {
    lottieOptions(){
      const lottie = require(`@/assets/lottie/home/${this.pet.type}.json`)
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
        return !this.pet.isDone
    },
    styleStartBtn(){
      return null
    },
    pTxt(){
      if(!this.pet.isDone) return 'בואו נלמד יחד איך מגדלים בעלי חיים!'
      return 'המשחק הבא יפתח מחר'
    },
    h3Txt(){
       if(!this.pet.isDone) return 'ציברו 100 כפות'
       return 'סיימתם את השיעור הראשון, כל הכבוד!'
    },
    
  },
};
</script>
