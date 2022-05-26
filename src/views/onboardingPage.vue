<template>
  <section class="onboarding">
    <component :is="slideName" @showNextSlide="showNextSlide" @goToSelectAnimal="goToSelectAnimal"></component>
  </section>
</template>

<script>

import onboardingSlide1 from '@/cmps/boardingSlides/onboardingSlide1.vue'
import onboardingSlide2 from '@/cmps/boardingSlides/onboardingSlide2.vue'
import onboardingSlide3 from '@/cmps/boardingSlides/onboardingSlide3.vue'
import onboardingSlide4 from '@/cmps/boardingSlides/onboardingSlide4.vue'
import onboardingSlide5 from '@/cmps/boardingSlides/onboardingSlide5.vue'

export default {
  name: "onboarding",
  components: { onboardingSlide1, onboardingSlide2, onboardingSlide3, onboardingSlide4, onboardingSlide5 },
  data(){
    return {
      slideName: 'onboardingSlide1'
    }
  },
  methods:{
    showNextSlide(nextSlideName){
      this.slideName = nextSlideName
    },
    goToSelectAnimal(){
      this.$emit('goToSelectAnimal')
    }
  },
  created(){
    console.log('HEREEE');
  }
};
</script>