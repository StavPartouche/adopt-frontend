<template>
  <section class="select-animal-page">
    <div v-if="showLayer" @click.stop="showLayer = false" class="layer">
      <img :src="handIcon" alt="">
      <h2>לחצו לבחירת החיה</h2>
    </div>
    <div v-if="!showAnimalAgeOptions" class="temp-container">
      <button @click="handleSelect('dog')">כלב</button>
    </div>
    <div v-else class="select-age-container">
      <h2 class="title">בחרו את גילו של הכלב אותו תרצו לגדל</h2>
      <div @click="selectAgeOption(idx)" class="age-option" :class="{'highlight-option-bgc':highlightOption(idx)}" v-for="(opt, idx) in ageOptions" :key="idx">
        <h3 class="age-option-title">{{opt.title}}</h3>
        <p class="age-option-desc">{{opt.desc}}</p>
      </div>
      <button @click="handlePickAnimal" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !selectedAgeOption}">המשך</button>
    </div>
    <img @click="confirmSelectAnimal" v-if="animal && !showAnimalAgeOptions" class="confirm-btn" :src="buttonIcon" alt="">
  </section>
</template>

<script>

import { storageService } from '@/services/storage.service'
import { animalService } from '@/services/animal.service'

export default {
  name: "selectAnimalPage",
  data(){
    return {
      animal: null,
      showLayer: true,
      showAnimalAgeOptions: false,
      ageOptions: null,
      selectedAgeOption: null
    }
  },
  methods: {
    handleSelect(animal){
      this.animal = animal
      this.ageOptions = animalService.getAnimalAgeOptions(animal)
    },
    confirmSelectAnimal(){
      //get relevent age options
      this.showAnimalAgeOptions = true
    },
    selectAgeOption(idx){
      this.selectedAgeOption = this.ageOptions[idx]
    },
    highlightOption(idx){
      if(!this.selectedAgeOption) return false
      return this.selectedAgeOption.title === this.ageOptions[idx].title
    },
    handlePickAnimal(){
      if(!this.animal || !this.selectedAgeOption) return
      const newAnimal = {
        type: this.animal,
        age: this.selectedAgeOption,
        currQuest: 0,
        points: 0
      }
      storageService.save('data', newAnimal)
      this.$router.push('/home')
    }
  },
  computed:{
    handIcon(){
      return require('../assets/icons/hand.svg')
    },
    buttonIcon(){
      return require('../assets/icons/vButton.svg')
    }
  }
};
</script>

<style scoped>
  .temp-container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
