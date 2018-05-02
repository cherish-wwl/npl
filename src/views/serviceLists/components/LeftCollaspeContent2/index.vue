<template>
   <el-container class='technicalFeatures'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2>技术特点</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item">
        <div class="grid-content">
          <img class='activeimg' src='../../../../assets/home/jcsf001.png'/>
          <p>{{ featureData.tech_feature }}</p>
          <p class="small font_color_grey">
            {{ featureData.tech_content }}
          </p>
        </div>
      </div>
      <div class="icon_panel_item">
        <div class="grid-content">
          <img class='activeimg' src='../../../../assets/home/yybs001.png'/>
          <p>{{ featureData.tech_onetitle }}</p>
          <p class="small font_color_grey">
            {{ featureData.tech_onecont }}
          </p>
        </div>
      </div>
      <div class="icon_panel_item">
        <div class="grid-content">
          <img class='activeimg' src='../../../../assets/home/jljs001.png'/>
          <p>{{ featureData.tech_twotitle }}</p>
          <p class="small font_color_grey">{{ featureData.tech_twocont }}</p>
        </div>
      </div> 
    </el-row>
   </el-container>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    props: ['featureData'],
    methods:{
      init () {
        
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .technicalFeatures {
     display: block;
     background-color: #fff;
      h2{
        font-weight:500;
        margin: 45px 0;
      }
      .icon_panel{
        display: flex;
        justify-content: space-around;
        .icon_panel_item {
          position: relative;
          max-width: 20%;
          text-align: center;
        }
        
      }
      
   }
</style>

