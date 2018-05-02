<template>
   <el-container class='functionalEmbodiment'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2>功能体验</h2>  
        <p class="small font_color_grey">采用双向最大匹配方法实现最长分词匹配</p>    
      </el-col>
    </el-row>
    <br />
    <br />
    <el-row class='panel'>
      <el-col :span='10'>
        <div class='left'>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="beforeValue">
          </el-input>
        </div>
      </el-col>
      <el-col :span='4' class="text_center">
        <el-button type="primary" :loading="waiting" @click.native="execute">&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;&nbsp;&nbsp;&nbsp; </el-button>
      </el-col>
      <el-col :span='10'>
        <div class='right'>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="afterValue">
          </el-input>
        </div>
      </el-col>
    </el-row>
   </el-container>
</template>

<script>
  import { serviceDetailsExecute } from '@/api/serviceLists'
  export default {
    data () {
      return {
        beforeValue: this.inArg,
        afterValue: null,
        executeUrl:'',
        waiting:false
      }
    },
    props:["inArg","url"],
    watch:{
      inArg(val){
        this.beforeValue = val
      }
    },
    methods:{
      execute () {
        this.waiting = true
        var params ={'type':this.$route.params.type,'url': this.url,'param': this.beforeValue,}
      
        serviceDetailsExecute(params).then( response =>{
          this.afterValue = JSON.stringify(response.data.returnData)
          this.waiting = false
       })
      },
    },
    mounted () {
      // this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .functionalEmbodiment {
    display: block;
    background-color: #f1eded;
    padding-bottom: 50px;
    h2{
      font-weight:500;
      margin: 45px 0;
    }
    .panel{
      display: flex;
      align-items: center;
      .left{
        width: 79%;
        height: 300px;
        float: right;
        // background-color: #fff;
        // border: 1px solid #ddd;

      }
      .right{
        width: 79%;
        height: 300px;
        float: left;
        // background-color: #fff;
        // border: 1px solid #ddd;
      }
      
    }
    
    
  }
</style>

