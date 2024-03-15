<template>
<div class="aaa">
    <detail-banner
    :sightName="DetailData.sightName"
    :bannerImg="DetailData.bannerImg"
    :galleryImgs="DetailData.galleryImgs"
    ></detail-banner>
 <detail-header></detail-header>
 <div class="content">
      <detail-list :list="DetailData.list"></detail-list>
    </div>
   </div> 
</template>
<script>
export default {
    
}
</script>
<script setup>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import {reactive,onMounted,inject } from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
let DetailData = reactive({
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
})
let getDetailInfo = () => {
    axios.get('/static/mock/detail.json?id'+route.params.id).then(handleGetDataSucc)
}
let handleGetDataSucc = (res) => {
    res = res.data
    if (res.ret && res.data) {
        const data = res.data
        DetailData.sightName = data.sightName
        DetailData.bannerImg = data.bannerImg
        DetailData.galleryImgs = data.galleryImgs
        DetailData.list = data.categoryList
    }
}
onMounted(()=>{
    getDetailInfo()
})
</script>

<style scoped>
.aaa{
    height: 1000px;
}
</style>