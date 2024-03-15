<template>
  <city-header></city-header>
  <city-search :cities="city.cities"></city-search>
  <city-list :cities="city.cities" :hot="city.hotCities" :letter="city.letter"></city-list>
  <city-alphabet :cities="city.cities" @change="handleLetterChange" ></city-alphabet>
</template>

<script setup>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import {onMounted, reactive,} from 'vue'
let city = reactive({
    cities: [],
    hotCities: [],
    letter: 0
})
let getCityInfo = () => {
      axios.get('/static/mock/city.json').then(handleGetCityInfoSucc)
}
let handleGetCityInfoSucc = (res) => {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      city.cities = data.city
      city.hotCities = data.hotCities
    }
}
  let handleLetterChange = (letter) =>{
    city.letter = letter
}

  onMounted(()=>{
    getCityInfo()
})
</script>

<style scoped>

</style>