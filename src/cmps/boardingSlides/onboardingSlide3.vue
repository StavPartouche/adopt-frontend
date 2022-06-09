<template>
  <section class="onboardingSlide onboardingSlide3 full-width">
    <img class="slides-img" :src="bordingImg" alt="">
    <div class="text-container">
      <h2 class="onboarding-instructions">נבחר את החיה שתרצו לגדל</h2>
      <button class="global-confirm-btn" @click="showNext">המשך</button>
    </div>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide3",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide4')
      }
  },
  computed:{
    bordingImg(){
      return require('@/assets/bgcs/onboarding/onbording2.svg')
    }
  }
};
</script>