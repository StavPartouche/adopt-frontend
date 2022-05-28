<template>
  <section class="test-page" :class="pageBgcClass">
    <div class="test-progress-bar">bar</div>
    <p class="test-quest-counter">{{currQuestIdx + 1}}/{{questLength}}</p>
    <h2 class="test-quest">{{currQuest.txt}}?</h2>
    <div class="test-options-container">
      <div @click="selectAns(idx)" class="option" :class="{'highlight-option-border':highlightAns(idx)}" v-for="(answer, idx) in currQuest.answers" :key="idx">
        <p class="option-txt">{{answer.txt}}</p>
      </div>
    </div>
    <button @click="showAns" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !selectedAns}">המשך</button>
  </section>
</template>

<script>

import { storageService } from "@/services/storage.service";
import { animalService } from "@/services/animal.service";

export default {
  name: "testPage",
  data(){
    return {
      currQuestIdx: 0,
      petDetails: null,
      testDetails: null,
      selectedAns: null, 
      selectedAnsIdx: null

    }
  },
  methods:{
    showAns(){
      console.log('kaki');
    },
    selectAns(ansIdx){
      this.selectedAns = this.currQuest.answers[ansIdx]
      this.selectedAnsIdx = ansIdx
      console.log(this.selectedAns);
    },
    highlightAns(idx){
      if(!this.selectedAns) return false
      return this.selectedAns.txt === this.currQuest.answers[idx].txt
    },
  },
  computed:{
    questLength(){
      return this.testDetails.questions.length
    },
    currQuest(){
      return this.testDetails.questions[this.currQuestIdx]
    },
    pageBgcClass(){
      return `test-bgc-${this.currQuestIdx}`
    }
  },
  created(){
    this.petDetails = storageService.load('data')
    this.testDetails = animalService.getCurrTest(this.petDetails)
    console.log(this.testDetails);
  }
};
</script>
