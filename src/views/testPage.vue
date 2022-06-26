<template>
  <section class="test-page">
    <template v-if="isShowFinal">
      <div class="final-container">
        <div class="final-title-container">
          <h2 class="final-title">השיעור הושלם!</h2>
          <lottie class="animation spark" :options="sparkLottirOptions" :height="350" :width="350"/>
        </div>
        <lottie class="animation" :options="finalLottieOptions" :height="350" :width="350"/>
        <div class="data-container">
          <div class="data">
            <div class="right">
              <img :src="powIcon" alt="">
              <p>מספר נקודות</p>
            </div>
            <p class="num">{{points}}</p>
          </div>
          <div class="data">
            <div class="right">
              <img :src="smallVIcon" alt="">
              <p>תשובות נכונות</p>
            </div>
            <p class="num">{{points/5}}</p>
          </div>
        </div>
        <button
        @click="endTest"
        class="global-confirm-btn test-btn"
      >
        המשך
      </button>
      </div>
    </template>
    <template v-else>
      <img @click="navBack" class="back-arrow" :src="arrow" alt="">
      <div class="test-progress-bar">
        <div class="curr-progress" :style="progress"></div>
      </div>
      <p class="test-quest-counter">{{ currQuestIdx + 1 }}/{{ questLength }}</p>
      <h2 class="test-quest">
        {{ currQuest.txt }}
        <p class="help" v-if="this.isMultiSelect || this.isComplete || this.isSelectCar">
          {{ helpTxt }}
        </p>
      </h2>
      <div
        v-if="isNotSelectCar"
        class="test-options-container"
        :class="{ 'multi-select-container': isMultiSelect }"
      >
        <div
          @click="selectAns(idx)"
          class="option"
          :class="{
            'highlight-option-border': highlightAns(idx),
            'multi-select-option': isMultiSelect,
          }"
          v-for="(answer, idx) in currQuest.answers"
          :key="idx"
        >
          <p class="option-txt">{{ answer.txt }}</p>
        </div>
      </div>
      <carousel v-if="isSelectCar" :perPage="1" :key="currQuestIdx">
        <slide v-for="(answer, idx) in currQuest.answers" :key="idx"> 
          <div class="slide" :class="{'highlight-option-slide': highlightAns(idx)}">
            <p>{{answer.txt}}</p>
            <img @click="selectAns(idx)" :src="vIcon" alt="">
            <!-- <img v-if="idx !== currQuest.answers.length - 1" class="arrow" :src="arrow" alt="">
            <img v-if="idx !== 0" class="arrow left" :src="arrow" alt=""> -->
          </div>
        </slide>
      </carousel>
      <p v-if="this.isComplete">{{ currQuest.end }}</p>
      <button
        @click="showAns"
        class="global-confirm-btn select-age-btn test-btn"
        :class="{ 'disable-confirm-btn': !isActiveBtn }"
      >
        המשך
      </button>
      <div v-if="isShowAns" @click.stop="onNextQuest" class="warpper"></div>
      <div v-if="currQuest" class="ans" :class="{ 'show-ans': isShowAns }">
        <h2 class="title" :class="{ 'green-txt': isCorrectAns }">{{ ansTxt }}</h2>
        <p>{{ ansToShow }}</p>
        <p class="tip">{{ currQuest.explanations }}</p>
        <lottie v-if="isShowAns" :options="lottieOptions" :height="150" :width="150"/>
        <button
          class="global-confirm-btn ans-btn"
          :class="{ 'green-btn': isCorrectAns }"
          @click="onNextQuest"
        >
          המשך
        </button>
      </div>
    </template>
  </section>
</template>

<script>
import { animalService } from "@/services/animal.service";
import { Carousel, Slide } from "vue-carousel";
import Lottie from '@/lottie.vue';


export default {
  name: "testPage",
  components: { Carousel, Slide, Lottie },
  data() {
    return {
      currQuestIdx: 0,
      petDetails: null,
      testDetails: null,
      selectedAns: null,
      selectedAnsIdx: null,
      isShowAns: false,
      isCorrectAns: null,
      isShowFinal: false,
      points: 0
    };
  },
  methods: {
    showAns() {
      if (!this.isMultiSelect) {
        if (this.selectedAns.isCorrect) {
          this.points += 5
        }
        this.isCorrectAns = this.selectedAns.isCorrect;
      } else {
        if(!this.selectedAnsIdx || !this.selectedAnsIdx.length) return
        const isAllCorrect = this.selectedAnsIdx.every((ansIdx) => {
          return this.currQuest.answers[ansIdx].isCorrect;
        });
        if (
          isAllCorrect &&
          this.corretAnsLength === this.selectedAnsIdx.length
        ) {
          this.points += 5
          this.isCorrectAns = true;
        } else {
          this.isCorrectAns = false;
        }
      }
      this.isShowAns = true;
    },
    selectAns(ansIdx) {
      if (!this.isMultiSelect) {
        this.selectedAns = this.currQuest.answers[ansIdx];
        this.selectedAnsIdx = ansIdx;
      } else {
        if (!this.selectedAnsIdx) this.selectedAnsIdx = [];
        if (this.selectedAnsIdx.includes(ansIdx)) {
          const idx = this.selectedAnsIdx.findIndex((i) => i === ansIdx);
          this.selectedAnsIdx.splice(idx, 1);
          return;
        }
        if (this.selectedAnsIdx.length === this.corretAnsLength) return;
        this.selectedAnsIdx.push(ansIdx);
      }
    },
    highlightAns(idx) {
      if (!this.isMultiSelect) {
        if (this.selectedAnsIdx === null) return false;
        return idx === this.selectedAnsIdx;
      } else {
        if (this.selectedAnsIdx === null || !this.selectedAnsIdx.length)
          return false;
        const found = this.selectedAnsIdx.find((i) => i === idx);
        if (found || found === 0) return true;
        return false;
      }
    },
    onNextQuest() {
      if (this.currQuestIdx === this.questLength - 1) {
        this.isShowFinal = true
        return;
      }
      this.reset();
      this.currQuestIdx++;
    },
    reset() {
      this.selectedAns = null;
      this.selectedAnsIdx = null;
      this.isShowAns = null;
    },
    endTest(){
      this.$store.commit({ type: "updatePetPoints", points: this.points });
      this.$store.commit({ type: "updatePetCurrTest" });
      this.$store.commit({ type: "updatePetIsDone" });
      this.$router.push("/achievement");
    },
    navBack(){
      this.$router.push('/')
    }
  },
  computed: {
    lottieOptions(){
      let lottie = this.isCorrectAns ? require(`@/assets/lottie/correctAns/${this.pet.type}.json`) : require(`@/assets/lottie/incorrectAns/${this.pet.type}.json`)
      return { animationData: lottie }
    },
    finalLottieOptions(){
      let lottie = require(`@/assets/lottie/endTest/${this.pet.type}.json`)
      return { animationData: lottie }
    },
    sparkLottirOptions(){
      let lottie = require(`@/assets/lottie/spark.json`)
      return { animationData: lottie }
    },
    pet() {
      return this.$store.getters.pet;
    },
    questLength() {
      return this.testDetails.questions.length;
    },
    currQuest() {
      return this.testDetails.questions[this.currQuestIdx];
    },
    isMultiSelect() {
      return (
        this.testDetails.questions[this.currQuestIdx].type === "multi-select"
      );
    },
    isComplete() {
      return this.testDetails.questions[this.currQuestIdx].type === "complete";
    },
    isSelectCar() {
      return (
        this.testDetails.questions[this.currQuestIdx].type === "select-car"
      );
    },
    isNotSelectCar() {
      return (
        this.testDetails.questions[this.currQuestIdx].type !== "select-car"
      );
    },
    progress() {
      const per = ((this.currQuestIdx + 1) * 100) / this.questLength;
      return `width: ${per}%`;
    },
    ansTxt() {
      if (!this.isCorrectAns) return "זו טעות, התשובה הנכונה:";
      return "תשובה נכונה!";
    },
    ansToShow(){
      if(this.isMultiSelect){
        const original = this.currQuest.answers.filter(a => a.isCorrect)
        let copy = JSON.parse(JSON.stringify(original))
        copy = copy.slice(0 , original.length - 1)
        const copyTxt = copy.map(a => a.txt).join(', ')
        const last = original[original.length - 1].txt
        return copyTxt + ' ו' + last + '.'
      }else if(this.isComplete){
        const correct = this.currQuest.answers.find( a => a.isCorrect).txt
        const trimmed = correct.slice(0, -3)
        return trimmed + ' ' + this.currQuest.end
      } else{
        const correct = this.currQuest.answers.find( a => a.isCorrect)
        return correct.txt + '.'
      }
    },
    helpTxt() {
      if (this.isMultiSelect) return "יותר מתשובה אחת";
      if(this.isSelectCar) return 'החליקו לתשובות נוספות'
      return "השלימו את תחילת המשפט:";
    },
    isActiveBtn() {
      if (!this.isMultiSelect) {
        return this.selectedAns;
      } else {
        return this.selectedAnsIdx && this.selectedAnsIdx.length;
      }
    },
    corretAnsLength() {
      if (!this.currQuest) return null;
      let correctAnsLtngh = 0;
      this.currQuest.answers.forEach((ans) => {
        if (ans.isCorrect) correctAnsLtngh++;
      });
      return correctAnsLtngh;
    },
    vIcon(){
      return require('@/assets/icons/vButton.svg')
    },
    powIcon(){
      return require('@/assets/icons/holoPow.svg')
    },
    smallVIcon(){
      return require('@/assets/icons/smallV.svg')
    },
    arrow(){
      return require('@/assets/icons/back.svg')
    }
  },
  created() {
    this.testDetails = animalService.getCurrTest(this.pet);
    if (!this.testDetails) this.$router.push("/");
  },
};
</script>
