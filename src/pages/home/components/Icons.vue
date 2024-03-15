<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of data.a" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-imgContent" :src="item.imgUrl" alt="">
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
export default {
    components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
    }
  }
}
</script>
<script setup>
import {computed,reactive, onUpdated, onMounted, onBeforeMount} from 'vue'
const prop =  defineProps({
    list:{
        type: Array
    }
})
let data =  reactive({
    a: []
})
let getData = ()=>{
    for (let i = 0; i < prop.list.length; i++) {
        const page = Math.floor(i / 8)
        if (!data.a[page]) {
          data.a[page] = []
        }
        data.a[page].push(prop.list[i])
      }
}
onUpdated(()=>{
    getData()
})
</script>

<style scoped>
.icons{
  margin-top: .1rem;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
}
.icon{
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon-img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
  box-sizing: border-box;
  padding: .1rem;
}
.icon-imgContent{
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icon-desc{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -.44rem;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
}
</style>