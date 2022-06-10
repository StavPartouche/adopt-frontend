<template>
  <section class="notif-page">
    <sub-page-nav block txt="התראות" @back="handleBack" />
    <div class="main" v-if="notifs && !selected">
      <p class="main-title">מה תרצו שנזכיר לכם?</p>
      <div class="card-container">
        <div
          @click="setSelectedNotif(notif)"
          class="card"
          v-for="notif in notifs"
          :key="notif.id"
        >
          <img :src="boneIcon(notif.id)" alt="" />
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
            <p class="edit">עריכה</p>
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
    handleBack(){
      if(this.selected){
        this.selected = null
      }else{
        this.$router.go(-1)
      }
    },
    boneIcon(id) {
      const map = {
        'חטיפים': 'bone',
        'טיולים' : 'ball',
        'אוכל': 'food',
        'כדור' : 'pill',
        'טיפוח': 'heart'
      }
      return require(`@/assets/icons/notif/${map[id]}.svg`);
    },
  },
  computed: {
    pet() {
      return this.$store.getters.pet;
    },
    backIcon(){
        return require('@/assets/icons/back.svg')
    }
  },
};
</script>
