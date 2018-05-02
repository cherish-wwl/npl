<template>
   <el-container class='applicationScene2'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2>推荐场景</h2>  
      </el-col>
    </el-row>
    <el-row class='panel'>
      <div class='item'>
        <div>
          <img class="img " src="../../../../assets/sevice_details/u600.png">
        </div>
        <div  class="content">
          <label>{{ sceneData.app_scene }}</label>
          <p>{{ sceneData.app_content }}</p>
        </div>
      </div>
       <div class='item'>
        <div>
          <img  class="img " src="../../../../assets/sevice_details/u602.png">
        </div>
        <div class="content">
          <label>{{ sceneData.app_onetitle }}</label>
          <p>{{ sceneData.app_onecont }}</p>
        </div>
      </div>
       <div class='item'>
        <div>
          <img  class="img " src="../../../../assets/sevice_details/u604.png">
        </div>
        <div class="content">
          <label>{{ sceneData.app_twotitle }}</label>
          <p>{{ sceneData.app_twocont }}</p>
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
    props:["sceneData"]
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .applicationScene2 {
    display: block;
    background:url('../../../../assets/sevice_details/u513.jpg') no-repeat; 
    background-size: 100% 100%;  
    color: #fff;
    padding-bottom: 50px;
    margin-bottom: 50px;
    h2{
      font-weight:500;
      margin: 35px 0;
    }
    .panel{
      display: flex;
      justify-content: center;
      
      .item {
        width: 24%;
        display: flex;
        background-color:#f2f2f238;
        cursor: pointer;
        padding: 20px;
        &:hover{
          background-color: #4945458a;
        }
        &:not(:last-child){
          border-right: 1px solid #474545;
        }
        .content{
          padding-left: 10px;
          p{
            font-size: small;
          }
          label{
            font-weight: 500;
          }
        }
      }
    }
    
    
  }
</style>

