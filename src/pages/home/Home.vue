<template>
  <home-header></home-header>
  <home-swiper :list = "home.swiperList"></home-swiper>
  <home-icons :list="home.iconList"></home-icons>
  <home-recommend></home-recommend>
  <home-weekend :list="home.weekendList"></home-weekend>
</template>

<script setup>
import {reactive,onMounted} from 'vue'
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeWeekend from './components/Weekend.vue'
import HomeRecommend from './components/RecommendIcons.vue'
let home = reactive({
  swiperList: [],
  iconList: [],
  weekendList: []
})
let getHomeInfo = () => {
  axios.get('/static/mock/index.json').then(getHomeInfoSucc)
}
let getHomeInfoSucc = (res) =>{
    res = res.data
    if (res.ret && res.data) {
      home.swiperList = res.data.swiperList
      home.iconList = res.data.iconList
      home.weekendList = res.data.weekendList
    }
}
onMounted(() => {
  getHomeInfo()
})

</script>

<style scoped>

</style>