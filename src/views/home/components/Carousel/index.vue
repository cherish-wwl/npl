<template>
    <el-carousel height="470px">
      <el-carousel-item v-for="(item, index) in datalist" :key="index">
        
        <a :href="item.link==''?'javascript:void(0)':item.link" :target="item.link==''?'':'_blank'" class="carouse-img">
          <img :src='item.imgUrl' class="carouse-img"/>
        </a>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        datalist:[{
            imgUrl:require('../../../../assets/home/banner_2.png'),
            link:''
          },{
            imgUrl:require('../../../../assets/home/banner_1.jpg'),
            link:''
          },{
            imgUrl:require('../../../../assets/home/banner_3.jpg'),
            link:'http://www.cipsc.org.cn'
        }],
      }
    },
    computed:{
    
    },
    methods: {
      
    },
    mounted () {
      
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  //  img{
  //    width: 100%;
  //    height: 100%;
  //  }
  .carouse-img{
    display: flex;
    justify-content: center;
  }
  .carouse-img{
    width: auto;
  }
</style>

