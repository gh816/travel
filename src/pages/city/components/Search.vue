<template>
  <div>
    <div class="search">
      <input v-model="data.keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="data.keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) of data.list" :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!data.list.length">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {reactive,watch} from 'vue'
const store = useStore()
const router = useRouter()
let data = reactive({
    keyword: '',
    list: [],
    timer: null
})
let props = defineProps({
  cities: Array
})
let handleCityClick = (city) =>{
      store.commit('changeCity', city)
      router.push('/')
}
watch(() => data.keyword,() => {
  if (data.timer) {
        clearTimeout(data.timer)
      }
      if (!data.keyword) {
        data.list = []
        return
      }
      data.timer = setTimeout(() => {
        let result = []
        for (let i = 0; i < props.cities.length; i++) {
          for (let j = 0; j < props.cities[i].list.length; j++) {
            if (props.cities[i].list[j].pinyin.indexOf(data.keyword) > -1 || props.cities[i].list[j].name.indexOf(data.keyword) > -1) {
              result.push(props.cities[i].list[j])
            }
          }
        }
        data.list = result
      }, 100)
})
</script>

<style scoped>
.search{
  height: .72rem;
  padding: 0 .1rem;
  background-color: #00bcd4;
}
.search-input{
  height: .62rem;
  line-height: .62rem;
  width: 100%;
  text-align: center;
  border-radius: .06rem;
  color: #666;
  box-sizing: border-box;
  padding: 0 .1rem;
}
.search-content{
  z-index: 1;
  position: absolute;
  overflow: hidden;
  background: #eee;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.search-item{
  line-height: .62rem;
  padding-left: .2rem;
  color: #666;
  background: #fff;
}
</style>