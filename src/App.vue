<template>
  <div id="app">
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
  created(){
    const data = storageService.load('data')
    if(data){
      this.$router.push('/home')
      return
    }
    this.$router.push('/onboarding').catch(()=>{})
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
