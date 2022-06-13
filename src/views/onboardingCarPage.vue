<template>
  <section class="onbording-car-page">
    <div v-if="isShowSlides" class="car-container">
      <div class="nav-bar">
        <img :src="backIcon" alt="" class="arrow" :class="{'trans': currIdx === 0}" @click="slideBack" />
        <img :src="clickerLogoIcon" alt="" class="logo" />
        <p class="skip" @click="skip">דלג</p>
      </div>
      <div class="slide-container">
        <div class="slide slide1" :class="slidePosClass(0)">
          <img :src="slide1Img" alt="" class="slide-img img1" />
          <div class="text-container">
            <h2 class="onboarding-instructions">
              בואו נלמד כמה דברים שחשוב לדעת.
              <p>רוצים לגדל חיים מחמד?</p>
            </h2>
          </div>
        </div>
        <div class="slide slide2" :class="slidePosClass(1)">
          <img :src="slide2Img" alt="" class="slide-img" />
          <div class="text-container">
            <h2 class="onboarding-instructions nerrow">כל המידע נכתב על ידי מומחים ווטרינרים.</h2>
          </div>
        </div>
        <div class="slide slide3" :class="slidePosClass(2)">
          <img :src="slide3Img" alt="" class="slide-img" />
          <div class="text-container">
            <h2 class="onboarding-instructions nerrow">
              נענה כל יום על שאלות חדשות ונצבור נקודות.
            </h2>
          </div>
        </div>
        <div class="slide slide4" :class="slidePosClass(3)">
          <img :src="slide4Img" alt="" class="slide-img" />
          <div class="text-container">
            <h2 class="onboarding-instructions">
              אתם מוכנים! בואו נתחיל ללמוד ולגלות.
              <p>צברתם 100 כפות?</p>
            </h2>
          </div>
        </div>
      </div>
      <button class="global-confirm-btn mid" @click="slideFor">
        {{ btnTxt }}
      </button>
    </div>
    <div v-else class="welcome">
      <img class="logo" :src="clickerLogoIcon" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "onboardingCarPage",
  data() {
    return {
      currIdx: 0,
      isShowSlides: false,
    };
  },
  created() {
    setTimeout(() => {
      this.isShowSlides = true;
    }, 1500);
  },
  methods: {
    slideFor() {
      if (this.currIdx === 3) return this.skip();
      this.currIdx++;
    },
    slideBack() {
      if (this.currIdx === 0) return;
      this.currIdx--;
    },
    slidePosClass(idx) {
      if (idx > this.currIdx) return "front";
      if (idx < this.currIdx) return "back";
      return "";
    },
    skip() {
      this.$router.push("/select-animal");
    },
  },
  computed: {
    btnTxt() {
      if (this.currIdx === 3) return "התחל";
      return "המשך";
    },
    backIcon() {
      return require("@/assets/icons/back.svg");
    },
    clickerLogoIcon() {
      return require("@/assets/icons/clickerLogo.svg");
    },
    logoIcon() {
      return require("@/assets/icons/logo.svg");
    },
    slide1Img() {
      return require("@/assets/bgcs/onboarding/onbording1.svg");
    },
    slide2Img() {
      return require("@/assets/bgcs/onboarding/onbording2.svg");
    },
    slide3Img() {
      return require("@/assets/bgcs/onboarding/onbording3.svg");
    },
    slide4Img() {
      return require("@/assets/bgcs/onboarding/onbording4.svg");
    },
  },
};
</script>