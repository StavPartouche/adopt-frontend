<template>
    <section class="lesson-details-page" v-if="lesson">
        <sub-page-nav txt="סיכום שיעור" />
        <h2 class="title">שיעור 01</h2>
        <h2 class="title sec">הסתיים בהצלחה!</h2>
        <p class="par">{{lesson.title}}</p>
        <div class="quest-container" :class="{'fit': isOpen(idx) }" v-for="(quest, idx) in lesson.questions" :key="idx">
            <img @click="openDrawer(idx)" :class="{'upside': isOpen(idx)}" :src="arrowDownIcon" alt="">
            <div class="txt-container">
                <h4 :class="{'light': !isOpen(idx)}">{{quest.txt}}</h4>
                <p>{{quest.explanations}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import subPageNav from "@/cmps/subPageNav.vue";
import { animalService } from "@/services/animal.service";

export default {
  name: "classPage",
  components: { subPageNav },
  data() {
    return {
      lesson: null,
      opens: []
    };
  },
  created() {
      let { idx } = this.$route.params
      idx = +idx
      this.lesson = animalService.getTestByIdx(this.pet, idx)
      console.log(this.lesson);
  },
  methods: {
    openDrawer(idx){
        if(this.opens.includes(idx)){
            const index = this.opens.findIndex( i => i === idx)
            this.opens.splice(index, 1)
            return 
        }
        this.opens.push(idx)
    },
    isOpen(idx){
        return this.opens.includes(idx)
    }
  },
  computed: {
    pet() {
      return this.$store.getters.pet;
    },
    arrowDownIcon(){
        return require('@/assets/icons/arrowDown.svg')
    }
  },
};
</script>