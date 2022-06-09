<template>
  <section class="onboardingSlide onboardingSlide1">
    <img :src="logoIcon" alt="">
    <img class="logo" :src="clickerLogoIcon" alt="">
  </section>
</template>

<script>

export default {
  name: "onboardingSlide1",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide2')
      }
  },
  computed: {
    logoIcon(){
      return require('./../../assets/icons/logo.svg')
    },
    clickerLogoIcon(){
        return require('@/assets/icons/clickerLogo.svg')
    },
  },
  created(){
    setTimeout(() => {
      this.showNext()
    }, 1500)
  }
};
</script>