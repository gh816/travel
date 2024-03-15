<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="data.swiperOptions">
        <swiper-slide v-for="(item, index) of props.imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
  </div>
</template>

<script setup>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import {reactive} from 'vue'
const emit = defineEmits(['close'])
let props = defineProps({
    imgs: Array
})
let data = reactive({
    swiperOptions: {
       pagination: '.swiper-pagination',
       paginationType: 'fraction',
       observeParents: true,
       observer: true
    }
})
let handleGalleryClick = () => {
    emit('close')
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
}
.wrapper{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.gallery-img{
  width: 100%;
}
.swiper-pagination{
  position: relative;
  color: #fff;
  bottom: -0.5rem;
  text-align: center;
}
</style>