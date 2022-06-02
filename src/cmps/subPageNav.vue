<template>
  <section class="sub-page-nav">
    <h3>{{txt}}</h3>
    <img @click="navBack" :src="backIcon" alt="">
  </section>
</template>

<script>

export default {
    name:'subPageNav',
    props:{
        txt:{
            type: String,
            default: 'NAV'
        }
    },
    methods:{
        navBack(){
            this.$router.go(-1)
        }
    },
    computed:{
        backIcon(){
            return require('@/assets/icons/back.svg')
        }
    }
};
</script>
