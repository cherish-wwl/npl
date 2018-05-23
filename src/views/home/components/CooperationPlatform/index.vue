<template>
  <el-container class='cooperation_platform'>
    <el-row class="text_center">
      <h2 class="font30">创新合作</h2>
    </el-row>
    <el-row class="display_panel">
      <div v-on:mouseenter="currentIndex = 0">
        <img v-if="currentIndex == 0" src='../../../../assets/home/bsd02.png'/>
        <img v-else src='../../../../assets/home/bsd01.png'/>
      </div>
      <div v-on:mouseenter="currentIndex = 1">
        <img v-if="currentIndex == 1" src='../../../../assets/home/hd02.png'/>
        <img v-else src='../../../../assets/home/hd01.png'/>
      </div>
      <div v-on:mouseenter="currentIndex = 2">
        <img v-if="currentIndex == 2" src='../../../../assets/home/ld02.png'/>
        <img v-else src='../../../../assets/home/ld01.png'/>
      </div>
      <!-- <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item >
          
          <div v-on:mouseenter="currentIndex = 3">
              <img v-if="currentIndex == 3" src='../../../../assets/home/bsd02.png'/>
              <img v-else src='../../../../assets/home/bsd01.png'/>
          </div>
          <div v-on:mouseenter="currentIndex = 4">
              <img v-if="currentIndex == 4" src='../../../../assets/home/hd02.png'/>
              <img v-else src='../../../../assets/home/hd01.png'/>
          </div>
          <div v-on:mouseenter="currentIndex = 5">
              <img v-if="currentIndex == 5" src='../../../../assets/home/ld02.png'/>
              <img v-else src='../../../../assets/home/ld01.png'/>
          </div>
          <div v-on:mouseenter="currentIndex = 6">
              <img v-if="currentIndex == 6" src='../../../../assets/home/bsd02.png'/>
              <img v-else src='../../../../assets/home/bsd01.png'/>
          </div>
          <div v-on:mouseenter="currentIndex = 7">
              <img v-if="currentIndex == 7" src='../../../../assets/home/hd02.png'/>
              <img v-else src='../../../../assets/home/hd01.png'/>
          </div>
          <div v-on:mouseenter="currentIndex = 8">
              <img v-if="currentIndex == 8" src='../../../../assets/home/ld02.png'/>
              <img v-else src='../../../../assets/home/ld01.png'/>
          </div>
        </el-carousel-item>
      </el-carousel> -->
    </el-row>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  }
}
</script>
<style lang="scss" scoped>
.cooperation_platform {
  display: block;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: rgba(242, 242, 242, 1);
  
  h2{
    font-weight: 500;
    margin: 55px 0;
  }
  .display_panel{
    display: flex;
    justify-content:center;
    img{
      cursor: pointer;
    }

  }
 
}
</style>

