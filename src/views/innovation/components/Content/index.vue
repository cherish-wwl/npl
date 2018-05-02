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
      <el-row class="content content_support">
        <h2 class="text_center">扶持计划</h2>
        <p class="text_center">旨在收集泰岳及合作伙伴的优势，为自然语言处理创新团队提供优质的自然语言研究资源。</p>
        <el-row class="item">
          <el-col :span="12">
            <ul>
              <li>为团队提供自然语言资源支持</li>
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
            <ul>
              <li>提供NLP相关的知识讲解，从理论到应用</li>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
        </el-row>
         <el-row class="item">
          <el-col :span="12">
            <ul>
              <li>为创新的成果提供产业实践机会，反馈结果、二次优化</li>
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
  </div>
</template>
<script>
export default {
  data (){
    return {
      featherData:[{id:1,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'},
      {id:2,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}
      ,{id:3,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}
      ,{id:54,year:"2018",date:"5/22",title:'平台融合多学校资',descr:'智慧语义理解开放创新平台融合多学校资源...'}]
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    width: 100%;
  }
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
  }
</style>
