<template>
  <section class="onboardingSlide2 full-width">
    <div class="slides-img"></div>
    <h2 class="onboarding-instructions">ענו על שאלה בכל יום וצברו נקודות</h2>
    <button class="onboarding-btn" @click="showNext">המשך</button>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide2",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide3')
      }
  }
};
</script>