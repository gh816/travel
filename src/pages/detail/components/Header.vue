<template>
   <router-link to="/" class="header-abs" v-show="data.showAbs">
      <span class="iconfont header-abs-back" >&#xeb15;</span>
    </router-link>
    <div class="header-fixed" v-show="!data.showAbs" :style="data.opacityStyle">
    景点详情
    <router-link to="/">
      <div class="iconfont header-icon" >&#xeb15;</div>
    </router-link>
    </div>
</template>

<script setup>
import {reactive, onDeactivated, onMounted} from 'vue'
import {RouterLink} from 'vue-router'
let data = reactive({
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
})
let handleScroll = () => {
  const top = document.documentElement.scrollTop
  if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        data.opacityStyle = {opacity}
        data.showAbs = false
      } else {
        data.showAbs = true
      }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onDeactivated(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-abs{
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: .4rem;
  background: rgba(0,0,0,.8);
  text-align: center;
}
.header-abs-back{
  color: #fff;
  font-size: .4rem;
}
.header-fixed{
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
  font-size: .32rem;
}
.header-icon{
  position: absolute;
  top: 0;
  left: 0;
  width: .64rem;
  text-align: center;
  font-size: .4rem;
  color: #fff;
}
</style>