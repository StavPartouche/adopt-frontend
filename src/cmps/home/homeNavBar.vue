<template>
  <section class="home-nav-bar">
      <div class="home-nav-bar-select">
          <p class="txt" @click="toggleShowOpt">קליקר</p>
          <img class="arrow" :class="{'rotate': isShowOpt}" @click="toggleShowOpt" :src="arrowDown" alt="">
        <div class="options" :class="{'show': isShowOpt}">
          <div @click="handleSwitchPet(pet.name)" v-for="pet in petsToShow" :key="pet.name" class="option">
            <img :src="getPetIcon(pet.type)" alt="">
            <p>{{pet.name}}</p>
          </div>
          <div @click="handleNewPet" class="option">
            <img :src="plusIcon" alt="">
            <p>בחירה חדשה</p>
          </div>
        </div>
      </div>
      <img @click="$router.push('/notifications')" :src="bellIcon" alt="">
  </section>
</template>

<script>

import { storageService } from '@/services/storage.service'

export default {
  name: "homeNavBar",
  data(){
    return{
      pets: null,
      isShowOpt: false
    }
  },
  created(){
    this.pets = storageService.loadAllPets()
  },
  methods:{
    handleNewPet(){
      this.$router.push('/select-animal')
    },
    handleSwitchPet(petName){
      const pet = storageService.loadPetByName(petName)
      this.$store.commit({ type: 'updatePet', pet })
      this.isShowOpt = false
    },
    getPetIcon(type){
      return require(`@/assets/icons/smallAnimal/${type}.svg`) 
    },
    toggleShowOpt(){
      this.isShowOpt = !this.isShowOpt
    }
  },
  computed:{
    pet(){
      return this.$store.getters.pet
    },
    petsToShow(){
      const petsToShow = this.pets.filter( p => p.name !== this.pet.name)
      return petsToShow.map( p => {
        return {
          name: p.name,
          type: p.type
        }
      })
    },
    bellIcon(){
        return require('@/assets/icons/bell.svg')
    },
    arrowDown(){
        return require('@/assets/icons/arrowDown.svg')
    },
    plusIcon(){
      return require('@/assets/icons/plus.svg')
    }
  }
};
</script>