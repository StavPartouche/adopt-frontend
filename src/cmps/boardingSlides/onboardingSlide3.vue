<template>
  <section class="onboardingSlide onboardingSlide3 full-width">
    <div class="slides-img"></div>
    <div class="text-container">
      <h2 class="onboarding-instructions">בחרו את החיה שתרצו לגדל</h2>
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
  }
};
</script>