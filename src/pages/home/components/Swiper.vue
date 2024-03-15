<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      swiperOptions:{
        loop: true 
       },
  }
}  
}
</script>
<script setup>
import {onMounted} from 'vue'
defineProps(['list'])
</script>

<style scoped>
.swiper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
  .swiper-img{
    width: 100%;
  }
</style>