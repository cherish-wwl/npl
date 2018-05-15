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
  
  h2{
    font-weight: 500;
    margin: 45px 0;
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

