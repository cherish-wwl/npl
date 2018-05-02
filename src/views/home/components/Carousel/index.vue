<template>
    <el-carousel height="450px">
      <el-carousel-item v-for="(item, index) in datalist" :key="index">
        
        <a :href='item.link'>
          <img :src='item.imgUrl'/>
        </a>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        datalist:[{
          imgUrl:require('../../../../assets/home/banner_2.jpg'),
          link:''
          },{
          imgUrl:require('../../../../assets/home/banner_1.jpg'),
          link:''
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
   img{
     width: 100%;
     height: 100%;
   }
</style>

