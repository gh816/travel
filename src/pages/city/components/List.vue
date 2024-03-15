<template>
  <div class="List">
    <div class="area">
      <div class="title border-topBottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{$store.state.city}}</div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title border-topBottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="(item,index) of props.hot" :key="index" @click="handleCityClick(item.names)">
          <div class="button">{{item.names}}</div>
        </div>
      </div>
    </div>

    <div class="area" v-for="(item,index) of props.cities" :key="index" ref="wrapper">
      <div class="title border-topBottom">{{item.initial}}</div>
      <div class="item-list">
        <div class="item border-topBottom"
        v-for="innerItem of item.list"
        :key="innerItem.name"
        @click="handleCityClick(innerItem.name)">
          {{innerItem.name}}
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {watch,ref} from 'vue'
const wrapper = ref()
const store = useStore()
const router = useRouter()
let props = defineProps({
    hot: Array,
    cities: Array,
    letter: Number
})
 let handleCityClick = (city) => {
      store.commit('changeCity', city)
      router.push('/')
}
watch(()=>props.letter,() => {
  const element = wrapper.value[props.letter]
  element.scrollIntoView({behavior: 'smooth'})
})
</script>

<style scoped>
.list{
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.title{
  line-height: .54rem;
  background: #eee;
  padding-left: .2rem;
  color: #666;
  font-size: .26rem;
}
.border-topBottom{
  border: 0.02rem solid #ccc;
}
.button-list{
  overflow: hidden;
  padding: .1rem .6rem .1rem .1rem;
}
.button-wrapper{
  float: left;
  width: 33.33%;
}
.button{
  text-align: center;
  margin: .1rem;
  border: .02rem solid #ccc;
  padding: .1rem 0;
  border-radius: .06rem;
}
.item{
  line-height: .76rem;
  color: #666;
  padding-left: .2rem;
}
</style>