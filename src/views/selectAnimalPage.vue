<template>
  <section class="select-animal-page" :class="{'yellow-bgc': showAnimalAgeOptions}">
    <div v-if="showLayer" @click.stop="showLayer = false" class="layer">
      <h2>לחצו לבחירת החיה</h2>
    </div>
    <div v-if="!showAnimalAgeOptions" class="select-container">
      <img @click="handleSelect('dog')" class="dog-icon" :src="dogIcon" alt="">
      <img @click="handleSelect('rabbit')" class="rabbit-icon" :src="rabbitIcon" alt="">
      <img @click="handleSelect('fish')" class="fish-icon" :src="fishIcon" alt="">
      <img @click="handleSelect('cat')" class="cat-icon" :src="catIcon" alt="">
      <img @click="handleSelect('bird')" class="bird-icon" :src="birdIcon" alt="">
      <img class="heart1" :src="smallHeartIcon" alt="">
      <img class="heart2" :src="smallHeartIcon" alt="">
    </div>
    <div v-else class="select-age-container">
      <h2 class="title">בחרו את גילו של הכלב אותו תרצו לגדל</h2>
      <div @click="selectAgeOption(idx)" class="age-option" :class="{'highlight-option-border':highlightOption(idx)}" v-for="(opt, idx) in ageOptions" :key="idx">
        <h3 class="age-option-title">{{opt.title}}</h3>
        <p class="age-option-desc">{{opt.desc}}</p>
      </div>
      <button @click="handlePickAnimal" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !selectedAgeOption}">המשך</button>
    </div>
    <button @click="confirmSelectAnimal" class="confirm-btn" v-if="animal && !showAnimalAgeOptions">{{aniamlName}}</button>
    <!-- <img @click="confirmSelectAnimal" v-if="animal && !showAnimalAgeOptions" class="confirm-btn" :src="buttonIcon" alt=""> -->
  </section>
</template>

<script>

import { animalService } from '@/services/animal.service'

export default {
  name: "selectAnimalPage",
  data(){
    return {
      animal: null,
      showLayer: true,
      showAnimalAgeOptions: false,
      ageOptions: null,
      selectedAgeOption: null,
      selectedAgeOptionIdx: null
    }
  },
  methods: {
    handleSelect(animal){
      this.animal = animal
      this.ageOptions = animalService.getAnimalAgeOptions(animal)
    },
    confirmSelectAnimal(){
      this.showAnimalAgeOptions = true
    },
    selectAgeOption(idx){
      this.selectedAgeOption = this.ageOptions[idx]
      this.selectedAgeOptionIdx = idx
    },
    highlightOption(idx){
      if(!this.selectedAgeOption) return false
      return this.selectedAgeOption.title === this.ageOptions[idx].title
    },
    handlePickAnimal(){
      if(!this.animal || !this.selectedAgeOption) return
      const pet = {
        type: this.animal,
        ageIdx: this.selectedAgeOptionIdx,
        currTest: 0,
        points: 0,
        savedTips: []
      }
      this.$store.commit({ type: 'updatePet', pet })
      this.$router.push('/home')
    }
  },
  computed:{
    aniamlName(){
      const map = {
        dog: 'כלב',
        cat: 'חתול',
        bird: 'ציפור',
        fish: 'דג',
        rabbit: 'ארנב'
      }
      return map[this.animal]
    },
    buttonIcon(){
      return require('../assets/icons/vButton.svg')
    },
    dogIcon(){
      return require('../assets/icons/dogHome.svg')
    },
    catIcon(){
      return require('../assets/icons/cat.svg')
    },
    rabbitIcon(){
      return require('../assets/icons/rabbit.svg')
    },
    fishIcon(){
      return require('../assets/icons/fish.svg')
    },
    birdIcon(){
      return require('../assets/icons/bird.svg')
    },
    smallHeartIcon(){
      return require('../assets/icons/smallHeart.svg')
    },
  }
};
</script>
