<template>
  <section class="test-page" :class="pageBgcClass">
    <div class="test-progress-bar">
      <div class="curr-progress" :style="progress"></div>
    </div>
    <p class="test-quest-counter">{{currQuestIdx + 1}}/{{questLength}}</p>
    <h2 class="test-quest">{{currQuest.txt}}?</h2>
    <div class="test-options-container" :class="{'multi-select-container': isMultiSelect}">
      <div @click="selectAns(idx)" class="option" :class="{'highlight-option-border':highlightAns(idx), 'multi-select-option': isMultiSelect}" v-for="(answer, idx) in currQuest.answers" :key="idx">
        <p class="option-txt">{{answer.txt}}</p>
      </div>
    </div>
    <button @click="showAns" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !selectedAns}">המשך</button>
    <div class="ans-container" :class="{'show-ans-container': isShowAns}">
      <button @click="onNextQuest">NEXT!</button>
    </div>
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
      selectedAnsIdx: null,
      isShowAns: false
    }
  },
  methods:{
    showAns(){
      this.isShowAns = true
      // check if ans correct and add style acordingly
    },
    selectAns(ansIdx){
      if(!this.isMultiSelect){
        this.selectedAns = this.currQuest.answers[ansIdx]
        this.selectedAnsIdx = ansIdx
      }else{
        if(!this.selectedAnsIdx) this.selectedAnsIdx = []
        if(this.selectedAnsIdx.includes(ansIdx)){
          const idx = this.selectedAnsIdx.findIndex( i => i === ansIdx)
          this.selectedAnsIdx.splice(idx,1)
          return
        }
        this.selectedAnsIdx.push(ansIdx)
      }
    },
    highlightAns(idx){
      if(!this.isMultiSelect){
        if(this.selectedAnsIdx === null) return false
        return idx === this.selectedAnsIdx
      }else{
        if(this.selectedAnsIdx === null || !this.selectedAnsIdx.length) return false
        const found = this.selectedAnsIdx.find( i => i === idx)
        if(found || found === 0) return true
        return false
      }
    },
    onNextQuest(){
      if(this.currQuestIdx === this.questLength - 1){
        console.log('Done!');
        return
      }
      this.reset()
      this.currQuestIdx++
    },
    reset(){
      this.selectedAns = null
      this.selectedAnsIdx = null
      this.isShowAns = null
    }
  },
  computed:{
    questLength(){
      return this.testDetails.questions.length
    },
    currQuest(){
      return this.testDetails.questions[this.currQuestIdx]
    },
    isMultiSelect(){
      return this.testDetails.questions[this.currQuestIdx].type === 'multi-select'
    },
    pageBgcClass(){
      return `test-bgc-${this.currQuestIdx}`
    },
    progress(){
      const per = ((this.currQuestIdx + 1) * 100) / this.questLength
      return `width: ${per}%`
    }
  },
  created(){
    this.petDetails = storageService.load('data')
    this.testDetails = animalService.getCurrTest(this.petDetails)
    console.log(this.testDetails);
  }
};
</script>
