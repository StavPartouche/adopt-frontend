<template>
  <section class="onboarding">
    <!-- <transition name="slide-right" mode="out-in">
      <router-view :key="$route.name"></router-view>
    </transition>   -->
    <component :is="slideName" @showNextSlide="showNextSlide"></component>
  </section>
</template>

<script>

import onboardingSlide1 from '@/cmps/boardingSlides/onboardingSlide1.vue'
import onboardingSlide2 from '@/cmps/boardingSlides/onboardingSlide2.vue'

export default {
  name: "onboarding",
  components: { onboardingSlide1, onboardingSlide2 },
  data(){
    return {
      slideName: 'onboardingSlide2',
      action: 'slide-left'
    }
  },
  methods:{
    showNextSlide(nextSlideName){
      this.slideName = nextSlideName
    }
  }
};
</script>