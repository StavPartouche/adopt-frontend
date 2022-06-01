<template>
  <section class="onboardingSlide onboardingSlide1">
    <img :src="logoIcon" alt="">
    <h1>קליקר</h1>
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
    }
  },
  created(){
    setTimeout(() => {
      this.showNext()
    }, 1500)
  }
};
</script>