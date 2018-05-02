<template>
  <div class="serviceDetail-container">
    <el-row class='service_info'>
      <img class='service_bg_img' src='../../assets/sevice_details/u536.jpg'/>
      <div class='title_desc'>
        <h2 class="font36"> <span class="font18">{{ service_type_name }}&nbsp;/</span>&nbsp;{{ service_title }} </h2>
        <p class="font18"> {{ service_desc | subStringNoMore3line}} </p>
        <div>
          <el-button type="primary">立即使用</el-button>
          <el-button>技术文档</el-button>
        </div>
      </div>
    </el-row>
    <technical-features :feature-data="featureData"></technical-features>
    <br />
    <functional-embodiment :in-arg="inArg" :url="url"></functional-embodiment>
    <application-scene2 :scene-data='sceneData'></application-scene2>
    <div class="text_center">
      <el-button type="primary">立即使用</el-button>
      <el-button>技术文档</el-button>
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
import { TechnicalFeatures, FunctionalEmbodiment, ApplicationScene2 } from '@/views/serviceDetail/components'
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
      featureData: {
        tech_content:"",
        tech_feature:"",
        tech_onecont: "",
        tech_onetitle: "",
        tech_twocont: "",
        tech_twotitle: ""
      },
      sceneData: {
        app_content: "",
        app_onecont: "",
        app_onetitle: "",
        app_scene: "",
        app_twocont: "",
        app_twotitle: ""
      }
    }
  },
  components: {
    TechnicalFeatures,
    FunctionalEmbodiment,
    ApplicationScene2
  },
  filters: {
    subStringNoMore3line (str){
      return subStringNoMore3line(str, 50)
    }
  },
  mounted (){
    console.log(this.$route.params.service_id)
    this.serviceId = this.$route.params.service_id
 
    getServiceDetails(this.serviceId).then(response =>{
      this.service_title = response.data.name
      this.service_desc = response.data.descr
      // 特性
      this.featureData.tech_content = response.data.tech_content
      this.featureData.tech_feature = response.data.tech_feature
      this.featureData.tech_onecont = response.data.tech_onecont
      this.featureData.tech_onetitle = response.data.tech_onetitle
      this.featureData.tech_twocont = response.data.tech_twocont
      this.featureData.tech_twotitle = response.data.tech_twotitle
      // 场景
      this.sceneData.app_twotitle = response.data.app_twotitle
      this.sceneData.app_content = response.data.app_content
      this.sceneData.app_onecont = response.data.app_onecont
      this.sceneData.app_onetitle = response.data.app_onetitle
      this.sceneData.app_scene = response.data.app_scene
      this.sceneData.app_twocont = response.data.app_twocont
      // 执行所需参数
      this.url = response.data.url
      this.inArg = response.data.in_arg
      var params ={class_id:response.data.class_id}
      getServiceTypeNameById(params).then(res =>{
          this.service_type_name = res.data.classifyName
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
    .service_bg_img{
      width: 100%;
      max-height: 300px;
    }
    .title_desc {
      position: absolute;
      bottom: 22px;
      color: #fff;
      left: 20%;
      right: 30%;
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
