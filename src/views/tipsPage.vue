<template>
  <section class="tips-page" v-if="tips">
    <sub-page-nav txt="טיפים להיום" />
    <div class="tabs-container">
        <p @click="isShowSaved = false" :class="{'disable-txt': isShowSaved}">עדכני</p>
        <p @click="isShowSaved = true" :class="{'disable-txt': !isShowSaved}">שמור</p>
    </div>
    <div class="tip" :class="{'highlight-option-border': isTipSaved(tip.title)}" v-for="(tip, idx) in tipsToShow" :key="idx">
      <h3 class="tip-title">{{ tip.title }}</h3>
      <p class="tip-desc">{{ tip.desc }}</p>
      <img v-if="!isTipSaved(tip.title)" @click="handleSaveTip(tip.title)" class="ribbon empty" :src="ribbonIcon" alt="" />
      <img v-else @click="handleSaveTip(tip.title)" class="ribbon" :src="ribbonFullIcon" alt="" />
    </div>
  </section>
</template>

<script>
import subPageNav from '@/cmps/subPageNav.vue'
import { tipsService } from "@/services/tips.service";

export default {
  name: "tipsPage",
  components: { subPageNav },
  data() {
    return {
      tips: null,
      isShowSaved: false
    };
  },
  created() {
    this.tips = tipsService.getReleventTips(this.pet.type);
  },
  methods: {
    handleSaveTip(title){
        const pet = JSON.parse(JSON.stringify(this.pet))
        const idx = pet.savedTips.findIndex(t => t === title)
        if(idx === -1){
            pet.savedTips.unshift(title)
        }else{
            pet.savedTips.splice(idx, 1)
        }
        this.$store.commit({ type: 'updatePet', pet })
    },
    isTipSaved(title){
        return this.pet.savedTips.find( t => t === title)
    }
  },
  computed: {
    tipsToShow() {
        if(!this.isShowSaved) return this.tips
        return this.tips.filter( t => this.pet.savedTips.includes(t.title))
    },
    pet() {
      return this.$store.getters.pet;
    },
    ribbonIcon() {
      return require("../assets/icons/ribbon.svg");
    },
    ribbonFullIcon() {
      return require("../assets/icons/ribbonFull.svg");
    },
  },
};
</script>
