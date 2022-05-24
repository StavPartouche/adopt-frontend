<template>
  <section class="onboardingSlide1">
    <h2 class="welcome">ברוך הבא לאדופט</h2>
    <div class="welcome-img"></div>
    <button @click="showNext">המשך</button>
  </section>
</template>

<script>

export default {
  name: "onboardingSlide1",
  methods:{
      showNext(){
        this.$emit('showNextSlide', 'onboardingSlide2')
      }
  }
};
</script>