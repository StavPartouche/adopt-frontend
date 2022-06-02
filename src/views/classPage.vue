<template>
  <section class="class-page" v-if="lessons">
    <sub-page-nav txt="שיעורים" />
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
  </section>
</template>

<script>
import subPageNav from "@/cmps/subPageNav.vue";
import { animalService } from "@/services/animal.service";

export default {
  name: "classPage",
  components: { subPageNav },
  data() {
    return {
      lessons: null,
    };
  },
  created() {
    this.lessons = animalService.getTests(this.pet.type, this.pet.ageIdx);
  },
  methods: {
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
    pet() {
      return this.$store.getters.pet;
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
  },
};
</script>
