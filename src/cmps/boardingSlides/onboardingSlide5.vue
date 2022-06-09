<template>
  <section class="onboardingSlide onboardingSlide5 full-width">
    <img class="slides-img" :src="bordingImg" alt="">
    <div class="text-container">
      <p>אספתם 100 נקודות?</p>
      <h2 class="onboarding-instructions">אתם מוכנים!</h2>
      <button class="global-confirm-btn" @click="showNext">התחל</button>
    </div>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide5",
  methods:{
      showNext(){
        this.$router.push('/select-animal')
      }
  },
  computed:{
    bordingImg(){
      return require('@/assets/bgcs/onboarding/onbording4.svg')
    }
  }
};
</script>