<template>
  <div class="innovation"> 
      <el-row>
        <img src="../../../../assets/innovation/u2303.png"/>
      </el-row>
      <el-row class="content content_feather">
        <el-col class="inline_flex item" :span="6" v-for="item in featherData" :key="item.id">
          <div class="dateDiv">
            <div class="md font28">{{ item.date}}</div>
            <div class="year font18">{{ item.year}}</div>
          </div>
          <div class="fea_info">
            <label class="font18">{{ item.title }}</label>
            <p class="font14">{{ item.descr }}</p>
          </div>
        </el-col>
      </el-row>
      <br />
      <el-row class="content content_support" id="innovation_support">
        <h2 class="text_center font30">扶持计划</h2>
        <p class="text_center">旨在收集泰岳及合作伙伴的优势，为自然语言处理创新团队提供优质的自然语言研究资源。</p>
        <el-row class="item">
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">为团队提供自然语言资源支持</span>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2491.png"/>
          </el-col>
        </el-row>
         <el-row class="item">
          
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2503.png"/>
          </el-col>
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">提供NLP相关的知识讲解，从理论到应用</span>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
        </el-row>
         <el-row class="item">
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">为创新的成果提供产业实践机会，反馈结果、二次优化</span>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2527.png"/>
          </el-col>
        </el-row>
      </el-row>
      <br />
      <el-row class="content text_center" id="innovation_example">
        <el-row>
          <h2 class="font30">优秀案例</h2>
        </el-row>
        <el-row>
          <div class="colums-3" v-for="(item,index) in exampleData" :key="index">
            <img :src="item.img"/>
            <div class="example-panel">
              <span>{{ item.title }}</span>
              <p>{{ item.descr1 }}</p>
              <p class="hidden-panel">{{ item.descr2 }}</p>
            </div>
            
          </div>
        </el-row>
      </el-row>
      <br />
      <br />
      <cooperation :cooperation-data="cooperationData"></cooperation>
  </div>
</template>
<script> 
import cooperation  from '@/components/cooperation'
export default {
  components:{
    cooperation
  },
  data (){
    return {
      featherData:[{id:1,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'},
      {id:2,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}
      ,{id:3,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}
      ,{id:54,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}
      ],
      cooperationData:{
        title:'合作伙伴',
        data:[
          {
            activeImg:"static/cooperation/u469.png",
            img:'static/cooperation/u469_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u471.png",
            img:'static/cooperation/u471_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u473.png",
            img:'static/cooperation/u473_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u475.png",
            img:'static/cooperation/u475_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u477.png",
            img:'static/cooperation/u477_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u479.png",
            img:'static/cooperation/u479_mouseOver.png',
          },
           {
            activeImg:"static/cooperation/u481.png",
            img:'static/cooperation/u481_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u483.png",
            img:'static/cooperation/u483_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u485.png",
            img:'static/cooperation/u485_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u487.png",
            img:'static/cooperation/u487_mouseOver.png',
          }
        ]
      },
      exampleData:[
        {
          title:'Dinfo-OEC',
          descr1:'非结构化文本分析挖掘平台',
          descr2:'DINFO-OEC非结构化文本分析挖掘平台具有非结构化文本的分析、挖掘的超凡能力，是企业实施大数据战略的强大利器，也是业界首款完全面向业务建模的非结构化文本分析挖掘平台',
          img:require('../../../../assets/innovation/u2535.jpg')
        },
        {
          title:'泰岳语义云',
          descr1:'基于应用场景的大数据语义分析云服务平台',
          descr2:'泰岳语义云是为合作伙伴、企业用户和应用开发者提供基于应用场景的大数据语义分析云服务平台。其旨在培养和完善中文语义解析领域生态系统，最终实现神州泰岳在中文语义解析领域的领导地位。',
          img:require('../../../../assets/innovation/u2537.jpg')
        },
        {
          title:'小富机器人',
          descr1:'超强语义识别能力的智能人机互动系统',
          descr2:'小富机器人是采用国内领先的智慧语义认知技术和DINFO-OEC非结构化大数据分析挖掘技术研发的智能人机互动系统。',
          img:require('../../../../assets/innovation/u2539.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .innovation{
    margin-top: 51px;
    .content{
      padding: 0 10%;
    }
    .content_feather{
      background-color:  rgba(243, 243, 243, 1);
      margin-top: -4px;
      .item{
        padding: 22px 17px;
        border-left: 1px solid #DDD;
      }
      .item:last-child{
        border-right: 1px solid #DDD;
      }
      .dateDiv{
        .md{
          color: rgb(153, 204, 51);
        }
        .year{
          color:rgb(204, 204, 204);
        }
      }
      .fea_info{
        padding-left: 7px;
        label{
          color: rgb(51, 51, 51);
        }
        p{
          color: rgb(51, 51, 51);
        }
      }
    }
    .content_support{
      text-align: center;
      .font-desc-ul{
        margin-top: 140px;
        margin-left: 35px;
        text-align: left;
        img{
          min-width: 419px;
          max-width: 449px;
          max-height: 437px;
        }
        span:first-child{
          color:#333333;
          margin-left: -15px;
          border-left: 4px solid #2b9eeb;
          padding-left: 11px;
          line-height: 60px;
        }
        li{
          color:#999;
          line-height: 40px;
        }
      }
    }
  }
  .colums-3{
    width: 30%;
    display: inline-block;
    position: relative;
    .example-panel{
      position: absolute;
      top: 20%;
      color: #fff;
      .hidden-panel{
        display: none;
      }
      
    }
    &:hover{
     
       .example-panel{
        top: 0;
        bottom:0;
        background-color: #2b9eeb;
        .hidden-panel{
          display: block;
        }
      }
    }
  }
  
</style>
