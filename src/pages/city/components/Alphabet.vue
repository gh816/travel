<template>
<ul class="list">
    <li
    class="item"
    ref="item"
    v-for="(item,index) of letters"
    :key="index"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @click="handleLetterClick"
    >
    {{item}}
    </li>
  </ul>
</template>

<script setup>
import {computed,reactive,onUpdated,ref} from 'vue'
let props = defineProps({
    cities: Array
})
const emit = defineEmits(['change'])
const item = ref()
let data = reactive({
    touchStatus: false,
    startY: 0,
    timer: null,
    
})
let letters = computed(() => {
    const letters = []
    for (let i = 0; i < props.cities.length; i++) {
        letters.push(props.cities[i].initial)
    }
    return letters
})
let handleLetterClick = (e) => {
    for (let index = 0; index < letters.value.length; index++) {
        if(e.target.innerText == letters.value[index]){
            emit('change',index)
        }
    }
}
let handleTouchStart = () => {
    data.touchStatus = true
}
let handleTouchMove  = (e) => {
    if (data.touchStatus) {
        e.preventDefault()
        if (data.timer) {
          clearTimeout(data.timer)
        }
        data.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - data.startY) / 20)
          if (index >= 0 && index < letters.value.length) {
            emit('change', index)
          }
        }, 1)
      }
}
onUpdated(() => {
    data.startY = item.value[0].offsetTop
})
</script>

<style scoped>
.list{
  position: fixed;
  right: 0;
  top: 1.58rem;
  width: .4rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item{
  line-height: .4rem;
  text-align: center;
  color: #00bcd4;
}
</style>