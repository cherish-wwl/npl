<template>
  <div class="universities-content">
     <!-- 合作院校列表页面 -->
    <el-row>
      <div class="back-img">
        <img  src="../../../../assets/home/specialist/u574.jpg" />
      </div>
      <div class="dispaly-font">
        <a v-on:click="returnBack">{{title1}}</a> &nbsp;
        <span> > </span> &nbsp;&nbsp;
        <a class="font36" style="margin-bottom: 20px;">{{title2}}</a>
      </div>
    </el-row>
    <br >
    <!-- 合作院校列表展示页面 -->
    <div class="content" v-if="!isDetail">
      <el-row class="col">
        <el-select v-model="currentUnversite" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input
          class="ellipse_input"
          placeholder="输入想要检索的关键字"
          v-model="search_word">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
      </el-row>
      <br />
      <el-row>
        <el-col :span="8" class="col" v-for="(item,index) in listData" :key="index" >
          <div class="item line-animate-content" v-on:click="seeDetails(index)">
            <div class="line"></div>
            <div class="img-line">
              <img :src="item.img">
            </div>
            <div class="info-line">
              <h3 class="font20 specialistName"><span class="dot"></span>{{item.name}}</h3>
              <p class="font14 specialistDesrc height135">{{ item.desrc | subStringNoMore3line}}<p>
              <div class="text_right" v-on:click="seeDetails(index)"><a>>查看详情</a></div>
            </div>
            
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 合作院校详情展示页面 -->
    <div class="content" v-else>
      <el-row  :gutter="20">
        <el-col :span="18">
          <div class="bordertopbule item1">
              <div class="item1-info">
                <span class="font20 item1-name"> {{ listData[currentIndex].name }}</span>
                <img  class="portrait" :src="listData[currentIndex].img" />
                
              </div>
              <!-- <p class="font14">
                <span class="item1-desrc">{{ listData[currentIndex].desrc }}</span>
              </p> -->
          </div>
          <div class="item1-content">
            <article class="dispaly-content">
              {{listData[currentIndex].content}}
            </article>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="specialist-contact bordertopbule">
            <div class="font16">同研究领域相关专家</div>
            <el-row>
              <template v-for="(item,index) in listData[currentIndex].recommendList">
                  <el-col :key="index" :span="8" class="specialist-content-item text_center" @click.native="seeSpecialistDetails(item.id)">
                    <div class="item3">
                    <img :src="item.img">
                    <p class="text_center"><span>{{ item.name }}</span></p>
                    </div>
                  </el-col>
              
              </template>
            </el-row>
          </div>
        </el-col>
        
      </el-row>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { subStringNoMore3line } from '@/utils/index'
export default {
  data () {
    return {
      title1:'首页',
      title2:"创新合作院校列表",
      isDetail:false,
      currentNode:1,
      search_word:"",
      currentUnversite:'0',
      options:[
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '全部1'
        },
        {
          value: '2',
          label: '全部2'
        }
      ],
      listData:{
        1:{
          id:1,
          name:'赵铁军',
          img:"/static/cooperation/u469_mouseOver.png",
          desrc:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。",
          content:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。 ",
          recommendList:[
            {
              id:24,
              name:"张民",
              img:require("../../../../assets/home/specialist/zhangmin1.jpg")
            },
            {
              id:22,
              name:"黄萱菁",
              img:require("../../../../assets/home/specialist/huangxuanqian1.jpg")
            }
          ]
        },
        2:{
          id:2,
          name:'赵铁军',
          img:"/static/cooperation/u469_mouseOver.png",
          desrc:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。",
          content:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。 ",
          recommendList:[]
        },
        3:{
          id:3,
          name:'赵铁军',
          img:"/static/cooperation/u469_mouseOver.png",
          desrc:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。",
          content:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。 ",
          recommendList:[]
        }
      },
      currentIndex:''
    }
  },
  filters:{
    subStringNoMore3line(str){
      return subStringNoMore3line(str,100)
    }
  },
  methods:{
    seeDetails (index) {
      this.$router.push({path:"/universitiesDetails/"+index})
      this.detailInit(index)
      
    },
    seeSpecialistDetails(id){
      console.log(id)
       this.$router.push({path:"/specialistDetails/"+id})
    },
    returnBack () {
      if(this.title1 == "首页"){
        this.$router.push({name:"home"})
      }else{
        this.$router.push({name:"universities"})
      } 
      this.init()
    },
    init(){
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "创新合作院校列表"
      this.currentNode = 1
    },
    detailInit(index){
      this.isDetail = true
      this.title1 = '创新合作院校列表'
      this.title2 = this.listData[index].name
      this.currentIndex = index
      console.log( this.listData[index].name)
     
    }
  },
  watch:{
    $route(){
      console.log("监听路由：当前创新合作院校id："+this.$route.params.universitiesId)
      console.log(this.$route.params.universitiesId)
      if(this.$route.params.universitiesId){
        var index = this.$route.params.universitiesId
        this.detailInit(index)
      }else{
        this.init()
      }
    }

  },
  mounted(){
    // universitiesDetails
    console.log("当前创新合作院校id："+this.$route.params.universitiesId)
    console.log(this.$route.params.universitiesId)
    if(this.$route.params.universitiesId){
      var index = this.$route.params.universitiesId
      this.detailInit(index)
    }else{
       this.init()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.universities-content{
  margin: 0;
  background-color: rgba(245, 245, 246, 1);
  .dispaly-font {
      position: absolute;
      top: 0;
      display: flex;
      bottom: 0;
      left: 17%;
      align-items: center;
      color: #fff;
      a:first-child:hover{
        text-decoration: underline;
      }
  }
  .back-img {
      min-width: 1240px;
      min-height: 100px;
      position: relative;
  }
  .content {
    padding: 0px 10%;
    .col{
      padding: 0 12px 12px 12px;
      // height: 280px;
    }
    .bordertopbule{
      border-top: 4px solid #2b9eeb;
    }
    .item{
      background-color: #fff;
      padding: 0 24px 12px 24px;
      .specialistName{
        padding-left: 12px;
        position: relative;
        &:before {
          content: "";
          height: 11px;
          width: 5px;
          background-color: #2b9eeb;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;
        }
      }
    }
    .item1{
      background-color: #fff;
      p{
        margin: 0;
      }
      .item1-info{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .item1-name{

        }
        .portrait{
          width: auto;
          // float: right;
        }
      }
    }
    .item1-content{
      background-color: #fff;
      min-height: 700px;
    }
    .specialist-contact{
      background-color: #fff;
      padding: 12px 24px;
      min-height: 400px;
      .item3{
        padding: 0 3px;
      }
      img{
        // width: 95px;
        // height: 92px;
        width: 100%;
      }
      .specialist-content-item{
          margin-top: 20px;
          cursor: pointer;
          
      }
    }
   
  }
  
}
</style>

