<template>
  <div class="item" v-for="(item,index) of props.list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList'
}
</script>
<script setup>
let props = defineProps({
    list: Array
})
</script>

<style scoped>
.item-title-icon{
  display: inline-block;
  position: relative;
  left: .06rem;
  top: .06rem;
  width: .36rem;
  height: .36rem;
  margin-right: .1rem;
  background-size: .4rem;
  background: url(https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png);
  background-size: 100%;
}
.item-title{
  line-height: .8rem;
  font-size: .32rem;
  padding: 0 .2rem;
}
.item-children{
  padding: 0 .2rem;
}
</style>