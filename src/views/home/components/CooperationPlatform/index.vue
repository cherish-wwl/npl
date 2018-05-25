<template>
  <el-container class='cooperation_platform'>
    <el-row class="text_center">
      <h2 class="font30">创新合作</h2>
    </el-row>
    <el-row class="display_panel">
      <el-carousel 
      height="250px"
      :autoplay="false">
        <el-carousel-item v-for="(item, index) in datalist" :key="index">
          <ul>
            <li 
              v-on:mouseenter="currentIndex = index"
              v-for="(img, index) in item" 
              :key="index">
                <img :src="currentIndex==index? img.active_img_url:img.img_url"/>
            </li>
          </ul> 
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0,
      datalist:[
        [{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        }],
        [{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd01.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/bsd02.png'),
          active_img_url:require('../../../../assets/home/bsd01.png'),
        }],
      ],
    }
  },
  computed:  {
    
  },
  methods: {
    
  },
  mounted () {
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
    width: 1200px;
    margin: 0 auto;
    ul{
      width: 990px;
      margin: 0 auto;
      list-style: none;
    }
    li{
      width: 33%;
      float: left;
      padding: 6px;
    }
  /deep/ .el-carousel__indicators{
      display: none;
    }
  }
 
}
</style>

