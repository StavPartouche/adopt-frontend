<template>
  <section class="onboardingSlide onboardingSlide2 full-width">
    <div class="slides-img"></div>
    <p>רוצים ללמוד על בעל חיים?</p>
    <h2 class="onboarding-instructions">בואו ללמוד כמה דברים שחשוב לדעת</h2>
    <button class="global-confirm-btn" @click="showNext">המשך</button>
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