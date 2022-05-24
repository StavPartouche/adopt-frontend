<template>
  <div id="app">
    <onboarding v-if="showOnBoarding"></onboarding>
    <router-view v-else/>
    
  </div>
</template>

<script>

import onboarding from '@/cmps/onboarding.vue'

export default {
  components: { onboarding },
  data(){
    return {
      showOnBoarding: true
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
