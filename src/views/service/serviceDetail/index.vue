<template>
  <div class="serviceDetail-container">
    <el-row class='service_info'>
      <img class='service_bg_img' :src="service_bg_img"/>
      <div class='title_desc'>
        <div class="title_content">
          <h2 class="font36 nomargin"> <span class="font20">{{ service_type_name }}&nbsp;/</span>&nbsp;{{ service_title }} </h2>
          <p class="font18" :title="service_desc"> {{ service_desc | subStringNoMore3line}} </p>
          <div>
            <el-button type="primary"  class="font16">立即使用</el-button>
            <el-button  class="font16">技术文档</el-button>
          </div>
        </div>
      </div>
    </el-row>
    <technical-features :feature-data="featureData"></technical-features>
    <br />
    <functional-embodiment :in-arg="inArg" :url="url" :type="type"></functional-embodiment>
    <application-scene2 :scene-data='sceneData'></application-scene2>
    <div class="text_center">
      <el-button type="primary" class="font14  custom_button_blue">立即使用</el-button>
      <el-button class="font16">技术文档</el-button>
    </div>
    <br />
    <br />
    <div class="text_center">
      <p class="font01">如果您有以上需求，欢迎【合作咨询】: 联系电话：010-38686868633   QQ：845666634</p>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import { getServiceDetails, getServiceTypeNameById } from '@/api/serviceLists'
import { subStringNoMore3line } from '@/utils/index.js'
import { TechnicalFeatures, FunctionalEmbodiment, ApplicationScene2 } from '@/views/service/serviceDetail/components'
export default {
   data (){
    return { 
      service_title: '',
      service_type_name:'',
      service_desc: '', 
      serviceId: '',
      serviceType: '',
      url:"",
      inArg:'',
      featureData: {},
      sceneData: {},
      type:'',
      service_bg_img:require("../../../assets/sevice_details/u536.jpg"),
    }
  },
  components: {
    TechnicalFeatures,
    FunctionalEmbodiment,
    ApplicationScene2
  },
  filters: {
    subStringNoMore3line (str){
      return subStringNoMore3line(str, 40)
    }
  },
  mounted (){
    console.log(this.$route.params.service_id)
    this.serviceId = this.$route.params.service_id
    getServiceDetails(this.serviceId).then(response =>{
      this.service_title = response.data.serviceName
      this.service_desc = response.data.serviceDescr
      this.featureData =  response.data.serviceRelates
      this.sceneData = response.data.serviceRelates
      
      // 执行所需参数
      this.url = response.data.url
      this.inArg = response.data.in_arg
      this.type = response.data.methodType
      var params ={class_id:response.data.class_id}
      getServiceTypeNameById(params).then(res =>{
        this.service_type_name = res.data.classifyName
         if (res.data.img != "null" && res.data.img && res.data.img != null){
           this.service_bg_img = '/static/services/service_list/'+ res.data.img
         }
        
      })
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.serviceDetail-container {
  // background-color: #fafafa;
  .service_info{
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .service_bg_img{
      width: auto;
      height: 300px;
    }
    .title_desc {
      position: absolute;
      display:flex;
      align-items:center;
      color: #fff;
      left: 20%;
      right: 20%;
      bottom: 0;
      top: 0
    }
  }
  .font01{
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #8F8F8F;
  }
}
</style>
