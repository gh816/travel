<template>
  <div class="header">
  <div class="header-left">
    <span class="iconfont back-icon" >&#xeb15;</span>
  </div>
  <div class="header-input"><span class="iconfont">&#xe651;</span>输入城市/景点/游玩主题</div>
  <router-link to="/city">
  <div class="header-right">{{$store.state.city}}<span class="iconfont arrow-icon">&#xeb6d;</span></div>
  </router-link>
 </div>
</template>

<script setup>

</script>

<style scoped>
.header-left{
  float: left;
  width: .86rem;
}
.header-right{
  color: #fff;
  min-width: 1.04rem;
  float: right;
  text-align: center;
  padding: 0 .1rem;
}
.header{
  line-height: .86rem;
  display: flex;
  background: #00bcd4;
  color: #fff;
}
.header-input{
  flex: 1;
  border-radius: .1rem;
  background: #fff;
  margin-top: .12rem;
  height: .64rem;
  margin-left: .2rem;
  color: #ccc;
  line-height: .64rem;
}
.back-icon{
  margin-left: .2rem;
  font-size: .4rem;
}
.arrow-icon{
  font-size: .24rem;
}
</style>