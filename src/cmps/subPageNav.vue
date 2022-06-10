<template>
  <section class="sub-page-nav">
    <h3>{{txt}}</h3>
    <img @click="navBack" :class="{'padding-sub-nav': isPadding}" :src="backIcon" alt="">
  </section>
</template>

<script>

export default {
    name:'subPageNav',
    props:{
        txt:{
            type: String,
            default: 'NAV'
        },
        isPadding:{
            type: Boolean,
            default: false
        },
        block:{
            type: Boolean,
            default: false
        },
    },
    methods:{
        navBack(){
            if(this.block){
                this.$emit('back')
            }else{
                this.$router.push('/')
            }
        }
    },
    computed:{
        backIcon(){
            return require('@/assets/icons/back.svg')
        }
    }
};
</script>
