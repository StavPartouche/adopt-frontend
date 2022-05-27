<template>
  <section class="home-nav-bar">
      <div class="home-nav-bar-select">
        <p>בחירה</p>
        <img :src="arrowDown" alt="">  
      </div>
      <img :src="bellIcon" alt="">
  </section>
</template>

<script>

export default {
  name: "homeNavBar",
  computed:{
      bellIcon(){
          return require('../../assets/icons/bell.svg')
      },
      arrowDown(){
          return require('../../assets/icons/arrowDown.svg')
      },
  }
};
</script>