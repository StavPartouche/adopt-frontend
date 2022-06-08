<template>
  <section class="test-page">
    <div class="test-progress-bar">
      <div class="curr-progress" :style="progress"></div>
    </div>
    <p class="test-quest-counter">{{ currQuestIdx + 1 }}/{{ questLength }}</p>
    <h2 class="test-quest">
      {{ currQuest.txt }}?
      <p class="help" v-if="this.isMultiSelect || this.isComplete">
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
    <carousel v-else perPage="1" navigationEnabled :paginationEnabled="false">
      <slide v-for="(answer, idx) in currQuest.answers" :key="idx"> 
        <div class="slide" :class="{'highlight-option-slide': highlightAns(idx)}">
          <p>{{answer.txt}}</p>
          <img @click="selectAns(idx)" :src="vIcon" alt="">
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
      <p>{{ currQuest.explanations }}</p>
      <p>כך תזכו בשקט נפשי ובריאות טובה.</p>
      <!-- <lottie-animation path="animations/test.json" /> -->
      <lottie :options="lottieOptions" :height="150" :width="150"/>
      <button
        class="global-confirm-btn ans-btn"
        :class="{ 'green-btn': isCorrectAns }"
        @click="onNextQuest"
      >
        המשך
      </button>
    </div>
  </section>
</template>

<script>
import { animalService } from "@/services/animal.service";
import { Carousel, Slide } from "vue-carousel";
import Lottie from '@/lottie.vue';
import * as dogLottie from '@/assets/lottie/test.json';

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
      lottieOptions: {animationData: dogLottie}
    };
  },
  methods: {
    showAns() {
      if (!this.isMultiSelect) {
        if (this.selectedAns.isCorrect) {
          this.$store.commit({ type: "updatePetPoints" });
        }
        this.isCorrectAns = this.selectedAns.isCorrect;
      } else {
        const isAllCorrect = this.selectedAnsIdx.every((ansIdx) => {
          return this.currQuest.answers[ansIdx].isCorrect;
        });
        if (
          isAllCorrect &&
          this.corretAnsLength === this.selectedAnsIdx.length
        ) {
          this.$store.commit({ type: "updatePetPoints" });
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
        this.$store.commit({ type: "updatePetCurrTest" });
        this.$router.push("/home");
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
  },
  computed: {
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
    helpTxt() {
      if (this.isMultiSelect) return "יותר מתשובה אחת";
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
    }
  },
  created() {
    this.testDetails = animalService.getCurrTest(this.pet);
    if (!this.testDetails) this.$router.push("/home");
  },
};
</script>
