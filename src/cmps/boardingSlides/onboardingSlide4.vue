<template>
  <section class="onboardingSlide onboardingSlide4 full-width">
    <div class="slides-img"></div>
    <div class="text-container">
      <h2 class="onboarding-instructions">ענו על שאלה בכל יום וצברו נקודות</h2>
      <button class="global-confirm-btn" @click="showNext">המשך</button>
    </div>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide4",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide5')
      }
  }
};
</script>