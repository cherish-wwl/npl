<template>
  <div class="specialist-content">
     <!-- 专家列表页面 -->
    <el-row>
      <div class="back-img">
        <img  src="../../../../assets/home/specialist/u574.jpg" />
      </div>
      <div class="dispaly-font">
        <a v-on:click="returnBack">{{title1}}</a> <span> > </span> <a>{{title2}}</a>
      </div>
    </el-row>
    <br >
    <div class="content" v-if="!isDetail">
      <el-row>
        <el-col :span="12" class="col" v-for="(item,index) in specialistData" :key="index" >
          <div class="specialist-item">
            <div class="left">
              <img src="../../../../assets/home/specialist/u596.png">
            </div>
            <div class="right">
              <h3 class="font20 specialistName">{{item.name}}</h3>
              <p class="font14 specialistDesrc">{{ item.desrc}}<p>
              <div class="text_right" v-on:click="seeDetails(index)"><a>>查看详情</a></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content" v-else>
      <el-row  :gutter="20">
        <el-col :span="18">
          <div class="specialist-item bordertopbule">
            <div class="left">
              <img src="../../../../assets/home/specialist/u596.png">
            </div>
            <div class="right">
              <h3 class="font20 specialistName">{{specialistData[currentSpecialistIndex].name}}</h3>
              <p class="font14 specialistDesrc">{{specialistData[currentSpecialistIndex].desrc}}</p>
            </div>
          </div>
          <div class="specialist-content">
            <div class="btn-tools">
              <span class="item" v-if="specialistData[currentSpecialistIndex].researchResult" 
              :class="currentNode == 'researchResult'?'active':''" 
              @click="currentNode = 'researchResult'">研究成果</span>
              <span class="item" 
              v-if="specialistData[currentSpecialistIndex].researchDirection" 
              :class="currentNode == 'researchDirection'?'active':''" 
              @click="currentNode = 'researchDirection'">研究方向</span>
              <span class="item" 
               v-if="specialistData[currentSpecialistIndex].scientificResearchProject" 
              :class="currentNode == 'scientificResearchProject'?'active':''" 
              @click="currentNode = 'scientificResearchProject'">科研项目</span>
              <span class="item" 
               v-if="specialistData[currentSpecialistIndex].thesis" 
              :class="currentNode == 'thesis'?'active':''" 
              @click="currentNode = 'thesis'">论文</span>
              <span class="item" 
               v-if="specialistData[currentSpecialistIndex].patentApplication" 
              :class="currentNode == 'patentApplication'?'active':''" 
              @click="currentNode = 'patentApplication'">专利申请</span>
            </div>
            <br />
            <div class="dispaly-content">
              <div v-if="currentNode == 'researchResult'" class="researchResult">
                <!-- 研究成果 -->
                <p>{{ specialistData[currentSpecialistIndex].researchResult.desrc }} </p>
                <ul  class="item" v-for="(child,index) in specialistData[currentSpecialistIndex].researchResult.data" :key="index">
                  <li class="item-li font16">{{child.title}}</li>
                  <ul class="item-child">
                    <li class="font14" v-for="(item,index2) in child.childs" :key="index2"> > {{ item.text }}</li>
                  </ul>
                </ul>
              </div>
              <div v-if="currentNode == 'researchDirection'" class="researchDirection">
                <!-- 研究方向 -->
                <div  class="item font14" v-for="(child,index) in specialistData[currentSpecialistIndex].researchDirection" :key="index">
                    <span class="item-title">{{ child.title }}:</span>
                    <span class="item-content">{{ child.content }}</span>
                </div>
              </div>
              <div v-if="currentNode == 'scientificResearchProject'" class="scientificResearchProject">
                <!-- 科研项目 -->
                <ul>
                    <li class="item font14" v-for="(child,index) in specialistData[currentSpecialistIndex].scientificResearchProject" :key="index">λ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ child }}</li>
                </ul>
              </div>
              <div v-if="currentNode == 'thesis'" class="thesis"> 
                <!-- 论文 -->
                <ul>
                    <li class="item font14" v-for="(child,index) in specialistData[currentSpecialistIndex].thesis" :key="index">λ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ child }}</li>
                </ul>
              </div>
              <div v-if="currentNode == 'patentApplication'" class="patentApplication">
                <!-- 专利申请 -->
                <ul>
                    <li class="item font14" 
                    v-for="(child,index) in specialistData[currentSpecialistIndex].patentApplication" 
                    :key="index">
                    ( {{ index+1 }} )&nbsp;&nbsp;&nbsp;&nbsp;
                    {{ child }}
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="specialist-contact bordertopbule">
            <div class="font16">同研究领域相关专家</div>
            <el-row>
              <template v-for="(item1,index1) in specialistData[currentSpecialistIndex].recommendList">
                <template v-for="(item2,index2) in specialistData">
                  <el-col v-if="item1 == index2" :key="index1+index2" :span="8" class="specialist-content-item text_center" >
                    <div class="item" @click="seeDetails(index2)">
                    <img :src="item2.img">
                    <p class="text_center"><span>{{ item2.name }}</span></p>
                    </div>
                  </el-col>
                </template>
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
export default {
  data () {
    return {
      title1:'首页',
      title2:"专家列表",
      isDetail:false,
      currentNode:1,
      specialistData:{
        1:{
          id:1,
          name:'黄德根',
          img:require("../../../../assets/home/specialist/u596.png"),
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。",
          researchResult:{
              desrc:"",
              data:[
                {   
                  title:"代表性成果之一：基于卷积深度神经网络（CNN）的实体关系抽取",
                  childs:[
                    {
                      text:"利用CNN自动学习表征实体关系的词汇特征、句子特征"
                    },
                    {
                      text:"不依赖NLP工具，解决了传统方法在特征提取过程中的误差传递问题"
                    },
                    {
                      text:"不需要人工设计，适用于多语言、多领域、大规模知识图谱构建"
                    }
                  ]
                },
                {
                  title:"代表性成果之二：基于深度学习的End2End知识库问答",
                  childs:[
                    {
                      text:"利用End2End框架解决传统方法多步骤处理过程中的错误积累问题"
                    },
                    {
                      text:"更加适用于大规模、多领域知识库的问答。"
                    }
                  ]
                },{
                  title:"自然语言处理基础工具",
                  childs:[
                    {
                      text:"现代汉语自动分词、词性标注和命名实体标注工具（软件著作权登记号：2008SRBJ0833），授权给解放军某国防科技重点实验室、商务印书馆、富士通研发中心、国家语言文字管理委员会等20多所单位使用",
                    },{
                      text:"汉语依存句法分析工具 （软件著作权登记号：2008SRBJ1154）"
                    }
                  ]
                }
              ]
          },
          researchDirection:[
            {
              title:"自然语言处理",
              content:"计算语义学；深度学习下的自然语言处理"
            },
            {
              title:"知识图谱和信息抽取",
              content:"知识图谱的表示（符号化表示和分布式表示）；知识图谱的建立（实体识别、实体链接、关系抽取、事件抽取）；基于知识图谱的推理"
            },
            {
              title:"问答系统",
              content:"基于知识图谱的问答；基于大规模文本数据的问答；机器阅读理解；社区问答"
            }
          ],
          scientificResearchProject:[
            "百科在线工程, 主持, 国家级, 2009-01--2016-12",
            "互联网实体关系抽取, 主持, 国家级, 2012-01--2016-12",
            "网络信息抽取和问答系统, 主持, 国家级, 2015-06--2016-06",
            "知识关联和推理类问题求解技术, 主持, 国家级, 2015-01--2017-",
            "国家自然科学基金重点项目：大规模知识关联和文本语义计算方法及应用验证（61533018，2016-2020）",
            "国家973项目：中文深度分析与开放域内容理解（No. 2014CB340503, 2014-2018）",
            "国家自然科学基金项目：基于内容分析和行为分析的社区问答关键技术研究（61272332, 2013-2016）",
            "国家自然科学基金项目：基于Web知识挖掘与融合的命名实体消歧技术研究（61070106，2011-2013）",
            "华为技术有限公司科技项目：开放域实体关系抽取（2011-2014）",
            "讯飞科技项目：融合推理的百科知识问答系统（2013-2014）",
            "中国出版集团科研项目：百科在线工程（2008-2015）",
            "国家自然科学基金项目：汉语依存分析的概率化决策动作模型及自适应技术研究（60875041，2009-2011）",
            "863项目：汉英双语命名实体对应和术语对应的获取技术研究（2006AA01Z144，2006-2009）",
            "国家自然科学基金项目：汉语文本中观点信息的提取和倾向性分析技术研究（60673042，2006-2009）",
            "国家自然科学基金项目：多语言智能文本处理中基于主题语义空间的文本表示研究 （60372016，2004-2006）",
            "北京市自然科学基金项目：面向异构WEB信息源的汉语问答式检索技术研究 (4052027)",
            "北京市自然科学基金项目：面向信息安全的网络文本分析技术研究 (4073043)",
            "中国大百科全书出版社科研项目：百科在线——百科全书的自动标引和问答式知识服务平台建设",
            "国际合作项目（富士通研究开发中心有限公司）：汉语产品名识别和标注工具的研发",
            "国际合作项目（富士通研究开发中心有限公司）：汉语分词、词性标注和命名实体标注软件工具的研发",
            "国家重点基础研究发展规划项目(973)子项：中文语言资源联盟的建设 (G1998030501A-06)",
         
          ],
          thesis:[
            "Conditional Generative Adversarial Networks for ommonsense Machine Comprehension, IJCAI-2017, 2017, 通讯作者",
            "Leveraging FrameNet to Improve Automatic Event Detection, ACL-2016, 2016, 通讯作者",
            "Employing External Rich Knowledge for Machine Comprehension, IJCAI-2016, 2016, 通讯作者",
            "Knowledge Graph Completion with Adaptive Sparse Transfer Matrix, AAAI-2016, 2016, 通讯作者",
            "A Probabilistic Soft Logic Based Approach to Exploiting Latent and Global Information in Event Classification, AAAI-2016, 2016, 通讯作者",
            "A Joint Model for Question Answering over Multiple Knowledge Bases, AAAI-2016, 2016, 通讯作者",
            "Event Extraction via Dynamic Multi-Pooling Convolutional Neural Networks, ACL 2015, 2015, 通讯作者",
            "Knowledge Graph Embedding via Dynamic Mapping Matrix, ACL 2015, 2015, 通讯作者",
            "Recurrent Convolutional Neural Networks for Text Classification, AAAI 2015, 2015, 通讯作者",
            "Extracting Opinion Targets and Opinion Words from Online Reviews with Graph Co-ranking, ACL-2014, 2014, 通讯作者",
            "Product Feature Mining: Semantic Clues versus Syntactic Constituents , ACL-2014, 2014, 通讯作者",
            "Joint Opinion Relation Detection Using One-Class Deep Neural Network, COLING-2014, 2014, 通讯作者",
            "Relation Classification via Convolutional Deep Neural Network, COLING-2014, 2014, 通讯作者",
            "Exploring Fine-grained Entity Type Constraints for Distantly Supervised Relation Extraction, COLING-2014, 2014, 通讯作者",
            "Joint Opinion Relation Detection Using One-Class Deep Neural Network, COLING-2014, 2014, 通讯作者",
            "Sentiment Classification with Graph Co-Regularization, COLING-2014, 2014, 通讯作者",
            "Syntactic Patterns versus Word Alignment: Extracting Opinion Targets from Online Reviews, ACL-2013, 2013, 通讯作者",
            "Statistical Machine Translation Improves Question Retrieval in Community Question Answering via Matrix Factorization, ACL-2013, 2013, 通讯作者",
            "Mining Opinion Words and Opinion Targets in a Two-Stage Framework, ACL-2013, 2013, 通讯作者",
            "Opinion Target Extraction Using Partial-Supervised Word Alignment Model, IJCAI-2013, 2013, 通讯作者",
            "Cross Lingual Entity Linking with Bilingual Topic Model, IJCAI-2013, 2013, 通讯作者",
            "Improving Question Retrieval in Community Question Answering Using World Knowledge, IJCAI-2013, 2013, 通讯作者",
            "Walk and Learn: A Two-Stage Approach for Opinion Words and Opinion Targets Co-Extraction, WWW-2013, 2013, 通讯作者",
            "Opinion Target Extraction Using Word-Based Translation Model, EMNLP-2012, 2012, 通讯作者",
            "Hybrid Recommendation Models for Binary User Preference Prediction Problem, Journal of Machine Learning Research, 2012, 通讯作者",
            "Exploring Web-Derived Selectional Preference to Improve Statistical Dependency Parsing, ACL-2011, 2011, 通讯作者",
            "Collective Entity Linking in Web Text: A Graph-Based Method, SIGIR-2011, 2011, 通讯作者",
            "Phrase-based Translation Model for Question Retrieval in Community Question Answer Archives, ACL-2011, 2011, 通讯作者",
          ],
          patentApplication:[
            "一种借助图随机游走的开放类别命名实体抽取方法及装置，申请号: 201310745097.4",
            "信息处理方法及装置，申请号: 201410271542.2",
            "一种基于网络语义标签的多源知识库实体对齐方法和系统，申请号: 201510150011.2",
            "基于概率软逻辑PSL的事件识别方法和系统， 申请号: 201510250005.4",
            "知识库中问句解析的方法及设备，申请号: 201410513189.4",
            "一种基于循环卷积网络的文本分类方法，申请号: 201410817856.8",
            "基于多知识库和整数线性规划ILP的自动问答方法和系统，申请号: 201510208978.1",
          ],
          recommendList:[2,5,3,4]
          
        },
        2:{
          id:2,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'黄德根1',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。",
        },
        3:{
          id:3,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'黄德根2',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。",
        },
        4:{
          id:4,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'黄德根3',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。",
        },
        5:{
          id:5, 
          img:require("../../../../assets/home/specialist/u596.png"),         
          name:'黄德根4',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。",
        }
      },
      currentSpecialistIndex:''

    }
  },
  methods:{
    seeDetails (index) {
      this.$router.push({path:"/specialist/"+index})
      this.isDetail = true
      this.title1 = '专家列表'
      this.title2 = this.specialistData[index].name
      this.currentSpecialistIndex = index
    },
    returnBack () {
      this.$router.push({path:"/specialist"})
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "专家列表"
      this.currentNode = 1
    }
  },
  mounted(){
    // specialistDetails
    
    console.log("当前专家id："+this.$route.params.specialistId)
    console.log(this.$route.params.specialistId)
    if(this.$route.params.specialistId){
      var index = this.$route.params.specialistId
      this.isDetail = true
      this.title1 = '专家列表'
      this.title2 = this.specialistData[index].name
      this.currentSpecialistIndex = index
    }else{
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "专家列表"
      this.currentNode = 1
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.specialist-content{
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
  }
  .back-img {
      min-width: 1240px;
      min-height: 100px;
      position: relative;
  }
  .content {
    padding: 0px 5%;
    .col{
      padding: 12px;
    }
    .bordertopbule{
      border-top: 4px solid #2b9eeb;
    }
    .specialist-item{
      display: flex;
      background-color: #fff;
      padding: 12px 24px;
      // width: 570px;
      // height: 230px;    
      .left{
        margin: auto;
        img{
          width: 135px;
          height: 180px;
        }
      }
      .right{
        .specialistName{
          color: #333333;
        }
        .specialistDesrc{
          color: #868686;
          line-height: 26px;
        }
        a{
          color: #389FFF;
          &:hover{
            text-decoration: underline;
           
          }
        }
      }
    }
    .specialist-content{
      background-color: #fff;
      padding: 12px 24px 30px 24px;
      min-height: 900px;
      .btn-tools{
        .item{
          background-color: rgba(234, 234, 234, 1);
          color: #999999;
          padding: 10px 20px;
          border-radius: 4px;
          margin-right: 20px;
          position: relative;
          cursor: pointer;
          &:hover,&.active{
            background-color: rgba(8, 136, 255, 0.949019607843137);
            color: #ffffff;
           
          }
          &.active:after{
              width: 0;
              height: 0;
              overflow: hidden;
              font-size: 0;
              line-height: 0;
              border-width: 10px;
              border-style: solid;
              border-color: #158eff transparent transparent transparent;
              content: "";
              position: absolute;
              bottom: -20px;
              left: 41%;
            }
        }
      }
      .dispaly-content{
        margin-top: 35px;
        .researchResult{
          .item{
            padding-right: 40px;
            .item-li{
              color: #1e1e1e;
              
            }
            .item-child{
              color: #868686;
              list-style: none;
              padding: 17px 0;
              li{
                line-height: 28px;
                
              }
            }
          }
        }
        .researchDirection{
          .item{
            margin: 35px;
            .item-title{
              color: #333;
              line-height: 28px;
            }
            .item-content{
              color: #868686;
              line-height: 28px;
            }
          }
        }
        .scientificResearchProject{
          ul{
            list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .thesis{
          ul{
            list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .patentApplication{
          ul{
            list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
      }
    }
    
    .specialist-contact{
      background-color: #fff;
      padding: 12px 24px;
      img{
        width: 95px;
        height: 92px;
      }
      .specialist-content-item{
          margin-top: 20px;
          cursor: pointer;
          
      }
    }
  }
  
}
</style>

