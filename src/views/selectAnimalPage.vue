<template>
  <section class="select-animal-page" :class="{'yellow-bgc': showAnimalAgeOptions}">
    <div v-if="showLayer" @click.stop="showLayer = false" class="layer">
      <h2>לחצו לבחירת החיה</h2>
    </div>
    <div v-if="!showAnimalAgeOptions && !showInput" class="select-container">
      <img @click="handleSelect('dog')" class="dog-icon" :src="dogIcon" alt="">
      <img @click="handleSelect('rabbit')" class="rabbit-icon" :src="rabbitIcon" alt="">
      <img @click="handleSelect('fish')" class="fish-icon" :src="fishIcon" alt="">
      <img @click="handleSelect('cat')" class="cat-icon" :src="catIcon" alt="">
      <img @click="handleSelect('bird')" class="bird-icon" :src="birdIcon" alt="">
      <img class="heart1" :src="smallHeartIcon" alt="">
      <img class="heart2" :src="smallHeartIcon" alt="">
    </div>
    <div v-if="showInput" class="select-age-container input-container">
      <h2 class="title">{{questTxt2}}</h2>
      <input type="text" v-model="name">
      <button @click="handlePickName" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !name}">המשך</button>
    </div>
    <div v-if="showAnimalAgeOptions" class="select-age-container">
      <h2 class="title">{{questTxt}}</h2>
      <div @click="selectAgeOption(idx)" class="age-option" :class="{'highlight-option-border':highlightOption(idx)}" v-for="(opt, idx) in ageOptions" :key="idx">
        <h3 class="age-option-title">{{opt.title}}</h3>
        <p class="age-option-desc">{{opt.desc}}</p>
      </div>
      <button @click="handlePickAnimal" class="global-confirm-btn select-age-btn" :class="{'disable-confirm-btn': !selectedAgeOption}">המשך</button>
    </div>
    <button @click="confirmSelectAnimal" class="confirm-btn" v-if="animal && !showAnimalAgeOptions && !showInput">{{aniamlName}}</button>
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
      selectedAgeOptionIdx: null,
      name: null,
      showInput: false
    }
  },
  methods: {
    handleSelect(animal){
      this.animal = animal
      this.ageOptions = animalService.getAnimalAgeOptions(animal)
    },
    confirmSelectAnimal(){
      this.showInput = true
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
        name: this.name,
        type: this.animal,
        ageIdx: this.selectedAgeOptionIdx || 0,
        currTest: 0,
        points: 0,
        savedTips: [],
        achievs: []
      }
      this.$store.commit({ type: 'updatePet', pet })
      this.$router.push('/home')
    },
    handlePickName(){
      if(!this.name) return 
      if(this.ageOptions.length === 1){
        this.selectedAgeOption = true
        this.handlePickAnimal()
      }else{
        this.showInput = false
        this.showAnimalAgeOptions = true
      }
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
      if(this.animal === 'dog') return require('../assets/icons/dogColored.svg')
      return require('../assets/icons/dogHome.svg')
    },
    catIcon(){
      if(this.animal === 'cat') return require('../assets/icons/catColored.svg')
      return require('../assets/icons/cat.svg')
    },
    rabbitIcon(){
      if(this.animal === 'rabbit') return require('../assets/icons/rabbitColored.svg')
      return require('../assets/icons/rabbit.svg')
    },
    fishIcon(){
      if(this.animal === 'fish') return require('../assets/icons/fishColored.svg')
      return require('../assets/icons/fish.svg')
    },
    birdIcon(){
      if(this.animal === 'bird') return require('../assets/icons/birdColored.svg')
      return require('../assets/icons/bird.svg')
    },
    smallHeartIcon(){
      return require('../assets/icons/smallHeart.svg')
    },
    questTxt(){
      if(this.animal === 'dog') return 'מה הגיל של הכלב.ה?'
      return 'מה הגיל של החתול.ה?'
    },
    questTxt2(){
      if(this.animal === 'dog') return 'מה השם של הכלב.ה?'
      if(this.animal === 'cat') return 'מה השם של החתול.ה?'
      if(this.animal === 'bird') return 'מה שם התוכי?'
      if(this.animal === 'rabbit') return 'מה שם הארנב.ת?'
      return 'מה שם הדג?'
    },
  }
};
</script>
