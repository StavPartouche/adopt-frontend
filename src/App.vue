<template>
  <div id="app" :style="style">
    <router-view/>
  </div>
</template>

<script>

import { storageService } from '@/services/storage.service'

export default {
  data(){
    return {
      showOnBoarding: true
    }
  },
  methods: {
    goToSelectAnimal(){
      this.showOnBoarding = false
      this.$router.push('/select-animal')
    }
  },
  computed:{
    pet(){
      return this.$store.getters.pet
    },
    style(){
      if(!this.pet) return null
      if(this.$route.name === 'select-animal') return 'white'
      const map = {
        dog: '#FFE066',
        cat: '#D152FF',
        rabbit: '#EB50B4',
        fish: '#5CE0FF',
        bird: '#4EEBC0',
      }
      return `background-color: ${map[this.pet.type]}`
    }
  },
  created(){
    const pet = storageService.loadLastPet()
    if(pet){
      this.$store.commit({ type: 'updatePet', pet })
      return
    }else{
      this.$router.push('/onboarding')
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
