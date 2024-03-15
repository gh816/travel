<template>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/'+item.id" v-for="item of data.recommendList" :key="item.id">
      <li class="item border-bottom" >
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
          </li>
        </router-link>
    </ul>
</template>

<script setup>
import {reactive} from 'vue'
let data = reactive({
    recommendList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1908/71/71d5a7c27a9695caa3.img.jpg_256x160_574d8783.jpg',
        title: '武功山',
        desc: '露营观日出云海'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1908/71/71d5a7c27a9695caa3.img.jpg_256x160_574d8783.jpg',
        title: '武功山',
        desc: '露营观日出云海'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1908/71/71d5a7c27a9695caa3.img.jpg_256x160_574d8783.jpg',
        title: '武功山',
        desc: '露营观日出云海'
      }]
})
</script>

<style scoped>
.title{
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
  margin-top: .2rem;
}
.item{
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}
.item-img{
  width: 1.7rem;
  height: 1.7rem;
  padding: .1rem .1rem;
}
.item-info{
  flex: 1;
  padding: .1rem;
}

.item-title{
  line-height: .54rem;
  font-size: .32rem;
}
.item-desc{
  line-height: .4rem;
  color: #ccc;
}
.item-button{
  line-height: .44rem;
  margin-top: .16rem;
  color: #fff;
  background: #ff9300;
  padding: 0. 1rem;
  border-radius: .06rem;
}
</style>