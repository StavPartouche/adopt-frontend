<template>
  <section class="onboardingSlide onboardingSlide1">
    <h2 class="welcome">ברוך הבא לאדופט</h2>
    <div class="welcome-img"></div>
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
  created(){
    setTimeout(() => {
      this.showNext()
    }, 1500)
  }
};
</script>