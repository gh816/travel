<template>
  <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="props.bannerImg" >
      <div class="banner-info">
        <div class="banner-title">{{props.sightName}}</div>
        <div class="banner-number"><span class="iconfont icon-tupian">&#xe8d3;</span>{{props.galleryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <comment-gallery :imgs="props.galleryImgs" v-show="data.showGallery" @close="handleGalleryClose"></comment-gallery>
    </fade-animation>
</template>

<script setup>
import CommentGallery from '../common/gallery/Gallery.vue'
import FadeAnimation from '../common/fade/FadeAnimation.vue'
import {reactive} from 'vue'
let data = reactive({
    showGallery: false
})
let props = defineProps({
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
})
let handleBannerClick = () => {
    data.showGallery = true
}
let handleGalleryClose = () => {
    data.showGallery = false
}
</script>

<style scoped>
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info{
  display: flex;
  position: absolute;
  color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: .6rem;
  background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8));
}
.banner-title{
  flex: 1;
  font-size: .32rem;
  padding: 0 .2rem;
}
.banner-number{
  margin-top: .14rem;
  padding: 0 .4rem;
  line-height: .32rem;
  height: .32rem;
  border-radius: .2rem;
  background: rgba(0,0,0,.8);
  font-size: .24rem;
}
.icon-tupian{
  font-size: .24rem;
  margin-right: .1rem;
}
</style>