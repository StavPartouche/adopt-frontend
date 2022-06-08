<template>
  <section class="onboardingSlide onboardingSlide2 full-width">
    <img class="slides-img" :src="bordingImg" alt="">
    <div class="text-container">
      <p>רוצים ללמוד על בעל חיים?</p>
      <h2 class="onboarding-instructions">בואו ללמוד כמה דברים שחשוב לדעת</h2>
      <button class="global-confirm-btn" @click="showNext">המשך</button>
    </div>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide2",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide3')
      }
  },
  computed:{
    bordingImg(){
      return require('@/assets/bgcs/onboarding/onbording1.svg')
    }
  }
};
</script>