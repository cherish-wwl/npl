<template>
  <div class="home-container">
    <!-- <el-carousel height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <carousel></carousel>
    <platform-features></platform-features>
    <popular-services></popular-services>
    <application-scene></application-scene>
    <about-platform></about-platform>
    <cooperation-platform></cooperation-platform>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import {  Carousel, PlatformFeatures, PopularServices, ApplicationScene, AboutPlatform, CooperationPlatform } from '@/views/home/components'


export default {
  name: 'home',
  components: {
    Carousel,
    PlatformFeatures,
    PopularServices,
    ApplicationScene,
    AboutPlatform,
    CooperationPlatform
  },
  computed: {
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
