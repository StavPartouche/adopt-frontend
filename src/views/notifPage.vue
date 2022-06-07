<template>
  <section class="notif-page">
    <sub-page-nav txt="התראות" />
    <div class="main" v-if="notifs && !selected">
      <p class="main-title">מה תרצו שנזכיר לכם?</p>
      <div class="card-container">
        <div
          @click="setSelectedNotif(notif)"
          class="card"
          v-for="notif in notifs"
          :key="notif.id"
        >
          <img :src="boneIcon" alt="" />
          <div class="txt-container">
            <h3>{{ notif.title }}</h3>
            <p>{{ notif.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="details-container" v-if="selected">
        <div class="header">
            <p class="main-title">{{selected.id}}:</p>
            <div class="temp">
                <p>חזור</p>
                <img @click="setSelectedNotif(null)" :src="backIcon" alt="">
            </div>
        </div>
        <div class="notif-container">
            <div class="notif" v-for="notif in selected.times" :key="notif.title">
                <p class="notif-title">{{notif.title}}</p>
                <div class="time-container">
                    <h3 class="time">{{notif.time}}</h3>
                    <input class="switch" type="checkbox" name="" id="">
                </div>
                <p>{{notif.desc}}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import subPageNav from "@/cmps/subPageNav.vue";
import { notifService } from "@/services/notif.service";

export default {
  name: "tipsPage",
  components: { subPageNav },
  data() {
    return {
      notifs: null,
      selected: null
    };
  },
  created() {
    this.notifs = notifService.getNotif(this.pet.type);
  },
  methods: {
    setSelectedNotif(notif) {
      this.selected = notif;
    },
  },
  computed: {
    pet() {
      return this.$store.getters.pet;
    },
    boneIcon() {
      return require("@/assets/icons/bone.svg");
    },
    backIcon(){
        return require('@/assets/icons/back.svg')
    }
  },
};
</script>
