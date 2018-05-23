<template>
  <div class="specialist-content">
     <!-- 专家列表页面 -->
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
    <!-- 专家列表展示页面 -->
    <div class="content" v-if="!isDetail">
      <el-row>
        <el-col :span="12" class="col" v-for="(item,index) in specialistData" :key="index" >
          <div class="specialist-item line-animate-content">
            <div class="line"></div>
            <div class="left">
              <img src="../../../../assets/home/specialist/u596.png">
            </div>
            <div class="right">
              <h3 class="font20 specialistName">{{item.name}}</h3>
              <p class="font14 specialistDesrc">{{ item.desrc | subStringNoMore3line}}<p>
              <div class="text_right" v-on:click="seeDetails(index)"><a>>查看详情</a></div>
            </div>
            
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 专家详情展示页面 -->
    <div class="content" v-else>
      <el-row  :gutter="20">
        <el-col :span="24">
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
        <!-- <el-col :span="6">
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
        </el-col> -->
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
      title2:"专家列表",
      isDetail:false,
      currentNode:1,
      specialistData:{
        1:{
          id:1,
          name:'赵铁军',
          img:require("../../../../assets/home/specialist/u596.png"),
          desrc:"博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。",
          researchResult:{
              desrc:"",
              data:[
                {   
                  title:"医疗健康自动问答系统, 相对于传统的信息检索系统",
                  childs:[
                    {
                      text:"本自动问答系统返回用户的不再是基于关键词匹配排序的文档列表，而是精准的自然语言答案。"
                    },
                    {
                      text:"医疗健康自动问答系统基于疾病知识库等海量医疗数据，通过对规则、统计和深度学习等方法的综合运用，对用户问句进行语义计算，获取用户意图，从而从海量医疗数据查询到相关答案，并通过自动文摘技术得到最终的精准答案。"
                    },
                    {
                      text:"医疗健康自动问答系统可以缓解医患之间信息不对称，极大地降低用户的使用门槛，方便大家的生活。用户可以随时使用医疗健康自动问答系统，方便快捷地咨询医疗健康相关问题，如疾病的症状、并发症、治疗方法等，随时解决日常中基本的健康问题。"
                    },
                    {
                      text:"具体地，系统包含两大功能：(1)、	回答用户健康问题： 能够较为准确的理解用户问题，给出相对专业的回答，并能够根据用户问题进行相关问题的推荐。(2)、	根据症状推荐科室：能够根据用户症状描述较为准确的推荐科室，并介绍包含相关症状的疾病信息。"
                    }
                  ]
                },
                {
                  title:"国家自然科学基金,基于半监督结构化学习的跨语言映射研究",
                  childs:[
                    
                  ]
                },{
                  title:"国家863计划, 互联网语言翻译系统研制",
                  childs:[
                    
                  ]
                },{
                  title:"横向项目，中文产品名称分类系统开发与数据整理工程",
                  childs:[
                    
                  ]
                },{
                  title:"汉英机器翻译技术研究与实用化系统-面向www浏览器的翻译模块, 获国防科技进步三等奖",
                  childs:[
                    
                  ]
                }
              ]
          },
          researchDirection:[
            {
              title:"自然语言处理、机器翻译、网络信息处理、机器学习与人工智能、多语言医学文本信息处理",
            }
          ],
          scientificResearchProject:[
            "自然科学基金项目, 国家级,基于半监督结构化学习的跨语言映射研究",
            "863计划项目, 国家级, 互联网语言翻译系统研制",
            "横向项目, 国家级, 中文产品名称分类系统开发与数据整理工程",
            "汉英机器翻译技术研究与实用化系统-面向www浏览器的翻译模块, 国家级, 获国防科技进步三等奖",
          ],
          thesis:[
            "论著《机器翻译原理》，哈尔滨工业大学出版社，2000年3月 ",
            "Using artificial intelligence techniques to implement a multifactor authentication system．Phiri, Jackson ; Zhao, Tie-Jun ; Zhu, Cong Hui ; Mbale, Jameson． International Journal of Computational Intelligence Systems（SCI源），2011,4（4）：420-430．（ＥＩ：20113514291075）",
            "Dentity attributes mining, metrics composition and information fusion implementation using fuzzy inference system．Phiri, Jackson ; Zhao, Tie Jun ; Mbale, Jameson．Journal of Software（软件学报英文版），2011，6（6）：1025-1033．（ＥＩ：20113414256150）",
            "Improve the Statistical Machine Translation Performance by Refining the Word  Alignments．Hongfei Jiang, Tiejun Zhao, Sheng Li, Muyun Yang ,Chunyue Zhang．The Journal INFORMATION,. 2010，Vol.13, No.4 :1371-1380．（ＳＣＩ：000284339400019",
            "A feature combination method for semantic role classification．Li, Shiqi ; Zhao, Tiejun ; Li, Hanjing ; Liu, Shui．．Journal of Information and Computational Science，2010，7（1）：127-133．（EI：20102112950416）",
            "Chinese Word Segmenter Based on Discriminative Classifiers Integration．Zhu CH，Zhao TJ，Yu MO．Journal of Information & Computational Science, 2009，Vol 6(3): 1155-1162．（EI: 20094512429471）",
            "利用语义词典Web挖掘语言模型的无指导译文消歧．刘鹏远，赵铁军．软件学报， 2009 ，20(5)：1292-1300。（ＥＩ：20092212102164）",
            "基于双语模型的汉语句法分析知识自动获取. 计算机学报. 2003(1)",
            "Research of Machine Learning Method for Specific Information Recognition on the Internet, The proceeding of the 4th IEEE International Conference on Multimodal Interfaces 2002, in Pittsburgh, October 14-16, 2002",
            "Learning Chinese Bracketing Knowledge Based on a Bilingual Language Model. The 19th International Conference on Computational Linguistics (COLING-2002), TaiPei, 2002: 591-598",
            "基于评价的英语句法结构消歧和自我评价的规则校正. 计算机研究与发展. 2002,39(7):802-809",
            "基于分解与动态规划策略的汉语未登录词识别. 中文信息学报，2001(1):28-33",
            "提高汉语自动分词精度的多步处理策略. 中文信息学报，2001(1):13-18",
            "English BNP identification based on corpus-trained decision tree Journal of Harbin Institute of Technology 2001(8).4",
          ],
          //patentApplication:[
            //"专利申请"
          //],
          //recommendList:[2,5,3,4]
          
        },
        2:{
          id:2,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'关毅',
          desrc:"哈尔滨工业大学教授、博士生导师，1999年在哈尔滨工业大学计算机应用学科取得博士学位，曾作为主要研制人之一参加了“微软拼音输入法”（与微软公司合作）和“BOPOMOFO” 智能汉字输入系统（与日本佳能公司合作）的研制工作。2000年赴香港科技大学电气与电子工程系任副研究员，同年获得香港优才计划。2001年在香港Weniwen有限公司任研究科学家，在香港期间作为主要研制人之一参加了智能搜索引擎“Weniwen”的研制工作。2007年起任博士生导师，主持、参加过多项国家自然科学基金重点及面上、国家高技术计划项目项目，在本领域国内外重要期刊和学术会议上发表论文60余篇，出版专著1部。",
          researchResult:{
            data:[
              {   
                title:"国家自然科学基金面向语句间语义相似度计算基于词主体自治学习的强化学习机制研究：",
                childs:[
                  {
                    text:"提高网络文本信息检索准确率的关键在于建立和维护高精度的信息检索模型。申请人基于认知科学理论中关于相似的结构映射理论建立了系统相似度计算理论，进而将研究的焦点对准网络文本信息检索中借助用户反馈进行在线学习的环节，拟研究一种词的基于人体特异性免疫原理的强化学习机制。"
                  },
                  {
                    text:"本研究将词视为淋巴细胞，对它在系统生物学和分子免疫学原理的作用下，在外来抗原侵入人体局部组织后的状态转换、抗体分泌、体细胞高频突变、凋亡等主体行为进行研究和模拟，采用面向自治的计算理论框架，借助词主体的自治行为和词主体之间、词主体与环境间的局部信息交互，从宏观上产生自组织的系统行为和类似人体免疫功能学习效果。从而获取词汇之间组合与聚合规律，并进而实现具备持续学习能力的动态维护语句间语义相似度计算模型的方法，推动系统相似度计算理论模型的实用化进程。"
                  },
                ]
              },{   
                title:"国家自然科学基金重点项目，非常规突发事件网络舆情分析方法和预警机制的研究：",
                childs:[
                  {
                    text:"该研究将在课题组前期研究工作基础上，面向互联网上的非常规突发事件的舆情，探索构造高精度话题识别与跟踪模型的技术，以及研究舆情分析的量化理论与方法。课题的探索性研究工作将主要围绕两个方面展开：1)通过技术导向的理论方法研究，建立和完善基于突发事件特征挖掘与抽取的网络舆情情感分析理论方法和实现技术；2)通过基于传播规律的行为导向的实证研究，构建非常规突发事件网络舆情预警模型。该研究在理论上，提出了一种基于主题分析和分布式并行策略的网页爬行器构建方法，可有效提高非常规突发事件网络舆情的搜集精度和效率。同时构造并完善了一个海量文本情感倾向性预测函数，可为网络舆情的量化分析提供决策支持。在实践上，通过在黑龙江省信息港安装网页爬行器软件，以事件为线索，搜集、追踪、分析网络舆情，然后利用仿真模型推演非常规突发事件舆情的可能前兆和事件演化过程，为我国政府科学、高效、有序应对非常规突发事件提供决策参考。"
                  },
                ]
              },{   
                title:"国家自然科学基金重点项目，下一代信息检索系统：",
                childs:[
                  {
                    text:"下一代搜索引擎的一个突出特点是个性化，本课题围绕个性化信息检索展开研究。个性化信息检索是以用户为中心的信息检索技术，它获取以多种形式表达的用户需求（包括显式的、隐式的以及相关用户的需求），并综合利用这些用户信息，提高信息检索系统的性能。本课题在理论方面，提出了以用户为中心的用户参考文档模型和基于用户需求分析的网页价值模型；在个性化用户信息挖掘方面，从个人、群体和整体三个线索对用户的兴趣、检索偏好、社会关系网络和宏观用户行为进行挖掘；将从多个信息源采集到的信息集成在一起，支持个性化信息检索过程。在个性化检索系统的评价方法方面，构建人工标注的标准评测集，同时展开基于用户行为分析进行自动评价的探索。在理论研究的基础上，本课题选择了客户端隐式个性化检索和协同式个性化推荐作为应用实例。本课题力争在个性化检索的计算理论和核心技术上有所突破，总体研究成果达到国际先进水平，部分成果达到国际领先水平"
                  }
                ]
              },{   
                title:"微软教育部语言语音重点实验室开放基金项目，基于一种新的系统相似度度量的文本情感倾向性研究：",
                childs:[
                  {
                    text:"文本情感倾向性度量关键在于建立和维护高精度的文本情感相似性度量模型。申请人基于认知科学理论中关于相似的结构映射理论建立了系统相似度计算理论，进而将研究焦点对准文本情感倾向性基础研究，进而构建海量文本情感分类与预测模型，同时进一步完善现有话题识别与跟踪模型，并将话题识别与跟踪模型与文本情感相似性度量模型相结合用于跟踪与预测网络突发事件情感倾向走势。"
                  },
                  {
                    text:"本研究将文本情感倾向性基础研究分为三部分：词的情感倾向性研究、句的情感倾向性研究、篇章的情感倾向性研究。构造具有情感倾向性词汇的种子词集合，并以种子词集合为基础，研究博客或BBS情感词挖掘模型，进而从情感分析角度研究词汇之间组合与聚合规律；以词的情感倾向性研究为基础，挖掘句中情感特征：情感词和情感搭配，分析语句的情感倾向性，同时分析语句之间的情感倾向性的相互影响。另一方面，识别句级的情感分析要素，其中包括话题持有者、评论对象、情感极性、情感强度四方面，进而研究属性级情感分析；以语句的情感倾向性研究为基础，构建篇章的情感倾向性度量模型。从情感分析角度，构建海量文本分类模型，同时通过分析海量文本中某一时间段内所表达的情感分布情况，构建情感倾向预测模型。通过识别文本中包含的话题持有者、评论对象、情感极性、情感强度四方面信息构建话题模型，并根据系统相似理论改进现有话题识别与跟踪模型。本研究有助于政府及管理部门及时掌握民众在博客或BBS对新政策的舆论情感态势，为制定新决策提供重要信息支持。此外，可帮助企业通过掌握博客或BBS的产品评价信息及时调整商业战略。此项研究将构建以话题识别与跟踪技术与文本情感分析技术相结合的博客或BBS情感倾向性分析系统，同时重点针对文本情感分析研究发表国际高水平文章3篇。"
                  },
                ]
              },{   
                title:"面向IOS平台的语句输入系统WI 输入法研究：",
                childs:[
                  {
                    text:"获2010中国互联网创新产品评选最佳技术创新提名奖。WI输入法是哈尔滨工业大学计算机学院语言技术研究中心网络智能研究室开发的iPhone / iPad /iPodtouch平台上的智能拼音语句输入法。它支持语句输入，全拼智能按键纠错，模糊音输入，简拼输入以及多种双拼输入方式。 产品网站：wi.hit.edu.cn/im"
                  }
                ]
              },{   
                title:"国家自然科学基金重点项目，问答式信息检索的理论与方法研究:",
                childs:[
                  {
                    text:"随着互联网日新月异的发展，现有的检索方式已经难以满足用户需求，人们越来越迫切地需要一种能高速、准确地从海量信息中获取查询结果的方法，针对这一问题，本项目提出了一种允许用户以自然语言方式询问，系统从单语或多语文档集中查找并返回确切答案或者蕴含答案文本片断的问答式信息检索方法。研究内容包括：建立逐步求精生成式数学模型和总体实现方案，研究问题理解和分析以提高速度和准确性，通过文本分类与搜索引擎的内核级集成的方法缩小文本级答案的候选集，采用段落的相似度计算进一步求精，研究多文档自动文摘技术用于答案抽取和生成技术，探索跨语言问答式检索以及正确、完整、简洁、连贯的答案生成技术，在已有基础上拓展语料库建设，设计一套科学的评测体系以便促进和完善本项目研究，力争在相关的计算理论和核心技术上有所突破。"
                  }
                ]
              },{   
                title:"国家自然科学基金青年基金项目，面向智能化信息检索的危险式人工免疫网络理论与方法研究：",
                childs:[
                  {
                    text:"智能化信息检索是信息检索技术向人性化、个性化和精确化发展的新兴研发方向，是网络时代最重要的应用之一。现有的机器学习理论与方法难以适应网络环境下数据的动态性和用户兴趣的多样性，成为智能化信息检索研究中的一个薄弱环节。本项研究以人体的免疫原理，特别是理论免疫学最新成果-危险理论为指导，通过对人体的免疫功能和免疫网络的模拟，研究危险式人工免疫网络的数学模型、体系结构、触发策略和学习机制，探索智能化信息检索中信息检索模型参数训练问题的解决之道，为智能化信息检索系统赋予从动态变化的网络数据中持续学习和适应用户多样性的能力，从而建立和完善一整套适用于智能化信息检索领域的由基本理论、模型框架和算法构成的机器学习理论体系，推动智能化信息检索技术向实用化方向发展。"
                  }
                ]
              },
            ]
          },
           researchDirection:[
            {
              title:"医学文本知识挖掘研究与系统开发、智能化信息检索、网络挖掘、自然语言处理、认知语言学。",
              //content:"计算语义学；深度学习下的自然语言处理"
            },
           ],
          thesis:[
            "[1] 李超 孙健 关毅 徐兴军 侯磊 李生. 基于最大熵模型的汉语基本块分析技术研究. 中文信息学会句法分析评测（CIPS-ParsEval-2009）. 2009,pp.19-25",
            "[2] 董喜双 关毅 李本阳 陈志杰. 基于最大熵模型的中文词与句情感分析研究. 第二届中文倾向性分析评测(COAE2009). 2009, pp.50-58.",
            "[3] Dong, X.; Chen, X.; Guan, Y.; Xu, Z.; Li, S. An Overview of Learning to Rank for Information Retrieval. Proc. WRI World Congress on Computer Science and Information Engineering, 2009, 3, 600-606.",
            "[4] 杜新凯 关毅 岳淑珍 徐兴军，基于Swarm的人工免疫网络算法研究，微计算机信息，2008年18期",
            "[5] 孙广路 王晓龙 关毅 基于词聚类特征的统计中文组块分析模型，电子学报， 2008，36(12)： 2450-2453",
            "[6] Yi Guan, Xiaolong Wang, and Qiang Wang, A New Measurement of Systematic Similarity, IEEE TRANSACTIONS ON SYSTEMS, MAN, AND CYBERNETICS—PART A: SYSTEMS AND HUMANS, VOL. 38, NO. 4, JULY 2008,pp 743-758",
            "[7]Tiejun Zhao, Yi Guan, Ting Liu, Qiang Wang: Recent advances on NLP research in Harbin Institute of Technology. Frontiers of Computer Science in China 1(4): 413-428 (2007)",
            "[8] 姜维 王晓龙 关毅 赵健，基于多知识源的中文词法分析系统，计算机学报，2007年第1期，137-145页",
            "[9] 王强 关毅 王晓龙，基于特征类别属性分析的文本分类器分类噪声裁剪方法 自动化学报; 2007年08期",
            "[10] Chi-Ho Li, Dongdong Zhang, Mu Li, Ming Zhou,Minghui Li, Yi Guan, A Probabilistic Approach to Syntax-based Reordering for Statistical Machine Translation,in Proceedings of the 45th Annual Meeting of the Association of Computational Linguistics, Prague, 2007",
            "[11] 王强 关毅 基于标题类别语义识别的文本分类算法研究，电子与信息学报，第29卷第12期，2885-2890，2007年12月",
            "[12] Chengjie Sun, Lei Lin, Xiaolong Wang, Yi Guan, Using Maximum Entropy Model to Extract Protein-Protein Interaction Information from Biomedical Literature,Lecture Notes in Computer Science of Advanced Intelligent Computing Theories and Applications with Aspects of Theoretical and Methodological Issues, Volume 4681/2007,730-737",
            "[13] Chengjie Sun, Yi Guan, Xiaolong Wang, Lei Lin, Rich features based Conditional Random Fields for biological named entities recognition, Computers in Biology and Medicine archive, Volume 37, Issue 9, 2007",
            "[14] Qiwen Dong, Xiaolong Wang, Lei Lin, Yi Guan, Exploiting residue-level and profile-level interface propensities for usage in binding sites prediction of proteins, BMC Bioinformatics. 2007; 8: 147.",
            "[15] 姜维 关毅 王晓龙 刘秉权 基于支持向量机的音字转换模型, 中文信息学报, 2007年02期",
            "[16] 何晏成 关毅 岳淑珍 一个基于免疫机制的在线机器学习算法，第三届全国信息检索与内容安全学术会议，2007.11，苏州",
            "[17] Sun Guanglu, Guan Yi, Wang Xiaolong, A Maximum Entropy Chunking Model with N-fold Template Correction, Journal of Electronics(China) 2007 24 (5): 690-695",
            "[18] Guan Yi, Zhao Jian, An Improved Feature Representation Method for Maximum Entropy Model Data Mining Workshops, 2006. ICDM Workshops 2006. Sixth IEEE International Conference, Volume , Issue , Dec. 2006 Page(s):400 - 406",
            "[19] Chengjie Sun, Yi Guan, Xiaolong Wang, Lei Lin Biomedical Named Entities Recognition Using Conditional Random Fields Model,Lecture Notes in Computer Science of Fuzzy Systems and Knowledge Discovery,Volume 4223/2006, 1279-1288",
          ],
          //recommendList:[2,5,3,4]
        },
        3:{
          id:3,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'刘挺',
          desrc:"哈尔滨工业大学教授，计算机学院副院长，社会计算与信息检索研究中心主任。中国计算机学会理事、中国中文信息学会常务理事、中国中文信息学会社会媒体处理专委会主任国际期刊TALIP 副主编。“十一五”国家863 计划“中文为核心的多语言处理技术”重点项目总体组专家， 2012 年入选教育部新世纪优秀人才计划。曾完成或正在承担的国家自然科学基金重点项目、国家863计划项目等各类科研项目40余项，在相关领域发表论文80余篇，获2010年钱伟长中文信息处理科学技术一等奖，2012 年黑龙江省技术发明二等奖。",
          researchResult:{
              desrc:"",
              data:[
                {   
                  title:"主持国家自然科学基金重点项目：篇章级中文语义分析理论与方法。",
                },
                {
                  title:"参与国家 863 重点项目“云计算关键技术与系统（一期）”中“互联网语言翻译系统研制课题”。",
                },{
                  title:"主持国家自然科学基金面上项目：多任务一体化统计复述生成技术研究。",
                },{
                  title:"国家 863 计划探索类课题：基于 XML 的分层互动中文处理开放平台。",
                },{
                  title:"国家自然科学基金面上项目：基于等价伪词的中文词义消歧。",
                },{
                  title:"国家自然科学基金青年项目：开放域问答式信息检索技术研究。",
                }
              ]
          },
          researchDirection:[
            {
              title:"自然语言处理、信息检索、内容安全，包括汉语理解、问答系统、基于统计和基于实例的机器翻译、语音合成、文本过滤、文本水印等。",
            }
          ],
          thesis:[
            "Query Term Ranking based on Search Results Overlap ，Wei Song, Yu Zhang, Yubin Xie, Ting Liu and Sheng Li，SIGIR 2011",
            "Analysis of Named Entity Queries in Web Search Logs，Dayong Wu,Yu Zhang, Ting Liu，Journal of computer information system Vol 7(16)",
            "Appraisal Expression Recognition with Syntactic Path for Sentence Sentiment Classification，Yanyan Zhao, Bing Qin, Wanxiang Che, Ting Liu，International Journal of Computer Processing of Oriental Languages",
            "Improving Noun Compounds Identification with Verb-Centered Dependency Relations，Ruiji Fu, Wei Zhang, Bing Qin, Ting Liu，Journal of Computational Information Systems",
            "Jointly Modeling WSD and SRL with Markov Logic，Wanxiang Che, Ting Liu，Coling 2010",
            "Extracting Paraphrase Patterns from Bilingual Parallel Corpora，Shiqi Zhao, Haifeng Wang, Ting Liu, Sheng Li ，Natural Language Engineering (2009) ",
            "2010 年 12 月，“语言技术平台 LTP”，获得中国中文信息学会“钱伟长中文信息处理科学技术”一等奖，排名第一。从 2003 年开始研制“语言技术平台LTP”，国内外 400 多家研究机构共享，百度、腾讯等多家上市企业购买使用权，2009国际CoNLL句法语义分析评测总成绩第一。",
            "2012 年 12 月，“中英文双语例句检索与机器翻译系统”，获黑龙江省技术发明二等奖（排名第 1）。从 2004 年开始与金山公司合作，双语例句检索和中英机器翻译技术陆续嵌入金山词霸产品中。",
          ],
          //recommendList:[2,5,1,4]
        },
        4:{
          id:4,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'李海峰',
          desrc:"教授，博士生导师。IEEE高级会员，中国计算机学会高级会员， 1997年获得哈尔滨工业大学“电磁测量技术与仪器”博士学位；2002年获得法国巴黎第六大学“计算机、通讯与电子科学”博士学位。1994年起在哈工大任教，2002年起任教授，2004年起任博士生导师。2004年9月起任哈工大国家示范性软件学院副院长。2009年10月起任哈工大学科建设办公室副主任。2011年5月起任哈工大英才学院副院长。先后完成和参加了航天基金项目、欧盟与法国高技术研究项目、法国国家通讯公司研发项目、哈工大基础研究基金项目、国家自然科学基金项目、教育部博士点基金项目、国家863重点项目、省部基金科研项等十余项科研项目。获得省部级科技一等奖1项、二等奖2项；获得省级教学成果一等奖1项，二等奖1项；发表教学与科研学术论文60余篇。",
          researchResult:{
            data:[
              {
                title:"国家自然科学基金项目:",
                childs:[
                  {
                    text:"面向智能信息处理的高级音频信息认知规律及其应用研究，缺少有针对性的人类认知模型的指导和对认知规律的深度融合，是限制当前智能信息处理技术快速发展的首要原因。本项目面向智能音频信息处理技术IIP-A中的基本问题，以事件相关脑电位(ERP)技术为研究手段，立足于探索人脑音频信息认知的基本规律，并通过实际应用加以验证，具体研究：听觉内源节律及其在音频节奏认知上的规律，音乐认知对音乐旋律的加工规律，音乐认知中的听觉显著度现象，对音频情感认知规律等问题，将ERP信号拓展为信息相关脑电位IRP信号，建立音频ERP和IRP特异性成分的数学模型、演化规律模型和计算模型，探寻IRP指标、认知规律以及音频信息之间的映射关系，构建相应的音频信息认知机制模型，通过研究时序性事例学习的认知特点提出相应的机器学习方法，对认知模型进行实用化实现，并通过解决IIP-A中的若干关键问题加以验证和提升。本项目对认知科学、智能科学和信息科学等的发展都具有重要的理论意义和实用价值。；"
                  },
                ]
              },{
                title:"国家自然科学基金项目:",
                childs:[
                  {
                    text:"基于共形几何代数的孕产妇虹膜特征提取与演变建模方法研究虹膜通过血液、神经及激素等媒介，能在保持组织结构整体稳定的同时，把身体变化反映到其局部组织上。妇女生育过程中，生理心理各个方面变化巨大，也会诱发很多疾病。跟踪研究孕产妇身体变化引起的虹膜特征及其演化规律，探索虹膜诊断新方法，具有重要科学意义和社会意义，及优异的可操作性。本申请拟：在理论上研究一种基于共形几何代数CGA的虹膜建模方法，利用CGA可量化、多尺度的特点，整合对整体结构稳定特征与局部特异可演化特征的刻画；在实验中进行孕产妇虹膜跟踪，定量研究虹膜特征演变尺度与速度，探索虹膜随身体状态的演化规律和度量标准；建立虹膜系统演变机制，量化虹膜特征同生理、生化指标的映射关系；提出预测虹膜特征和身体状态的实用方法，建立一个自动化、智能化的孕产妇虹膜分析与健康状态评价系统。本申请从构建一般化虹膜演变模型出发，深入研究整体特征稳定范围及局部特征演变尺度与速度规律，力求为虹膜研究提供一个系统化新视角。;"
                  },
                ]
              },{
                title:"国家自然科学基金项目:",
                childs:[
                  {
                    text:"基于认知半监督持续学习的连续语音识别方法研究;"
                  },
                ]
              },{
                title:"国家863计划重点项目: :",
                childs:[
                  {
                    text:"基于NLP的智能搜索引擎”之“音频信息检索”子课题;"
                  },
                ]
              },{
                title:"教育部博士点基金项目:",
                childs:[
                  {
                    text:"“变结构神经网络理论与情感语音处理应用研究;"
                  },
                ]
              },{
                title:"国家重点实验室基金项目:",
                childs:[
                  {
                    text:"焊接接头微观组织结构演变模拟与性能预测方法研究;"
                  },
                ]
              }
            ]
          },
          researchDirection:[
            {
              title:"语音情感处理技术、自然人机交互技术、智能信息处理技术、人工脑与认知科学等。",
            }
          ],
          thesis:[
            "[1] “A Simple Tempo-Spectral Hybrid Method for Speech Noise Reduction”, in the Proceedings of the Sixth International Conference on Knowledge-Based Intelligent Information Engineering Systems, September 2002, Italy, pp.1142-1146",
            "[2] “Data Driven Design of an ANN/HMM System for On-line Unconstrained Handwritten Character Recognition”, in the Proceedings of the 4th IEEE International Conference on Multimodal Interfaces (ICMI’02), October 2002, Pittsburgh, Pennsylvania, USA, pp.141-146",
            "[3] “VQ-Based On-line Handwritten Character Recognition through Learning and Adaptive Edit Distances”, in the Proceedings of the 9th International Conference on Neural Information Processing (ICONIP'02), 18-22 November 2002, Singapore, pp.2008-2012",
            "[4] “A Learning Edit Distance Based Method for On-line Handwriting Codebook Generation”, in the Proceedings of the 4th International Conference on Modelling and Simulation (MS'02), 11-13 November 2002, Autralia",
            "[5] “The Complete K-level Tree and its Application to Data Warehouse Filtering”, Proceedings of the 7th International Conference for Young Computer Scientists, Harbin China, 2003, pp.223-226",
            "[6] “禁忌搜索消除预成熟现象的聚类算法研究”，2003全国人工智能学术大会，2003年10月，pp.480-483",
            "[7] “分段式音频检索算法”，2003全国人工智能学术大会，2003年10月，pp.609-612",
            "[8] “面向嵌入式应用的小词汇量语音串识别系统”，2003全国人机语音通讯学术大会，2003年10月，pp.79-82",
            "[9] “Hidden Control Neural Network and HMM Hybrid Approach for On-line Handwriting Recognition”, 2003 IEEE International Conference on Neural Networks and Signal Processing, December 2003, pp.627-670",
            "[10] 高畅，李海峰，马琳, '基于压缩感知理论的语音信号压缩与重构方法', NCMMSC, 2011",
            "[11]   张珑，李海峰，马琳，'利用移动设备辅助汉语普通话发音学习研究'，NCMMSC, 2011",
            "[12]   Haifeng Li, Tian Zhang, Lin Ma, 'Confirmation Based Self-Learning Algorithm in LVCSR's Semi-supervised Incremental Learning', IWIEE, 2012",
            "[13] Haifeng Li, Tian Zhang, Lin Ma. Confirmation Based Self-Learning Algorithm in LVCSR's Semi-supervised Incremental Learning. 2012 International Workshop on Information and Electronics Engineering (IWIEE 2012). Procedia Engineering. Vol.29: 754-759",
            "[14] Wenjing Han，Haifeng Li，Florian Eyben，Li Ma，Jiayin Sun，Bjorn Schuller. Preserving Actual Dynamic Trend of Emotion in Dimensional Speech Emotion Recognition . Proc. Second International Audio/Visual Emotion Challenge and Workshop (AVEC 2012)，Grand Challenge and Satellite of ACM ICMI 2012，ACM，Santa Monica，CA，22-26.10.2012.",
            "[15] Wenjing Han，Haifeng Li，Lin Ma，Xiaopeng Zhang，Bjorn Schuller. A Ranking-based Emotion Annotation Scheme and Real-life Speech Database. Proc. 4th International Workshop on Emotion Sentiment Social Signals 2012, held in conjunction with LREC 2012，Istanbul，Turkey：67-71，26.05.2012.",
            "[16] 高畅，李海峰，马琳, 面向内容的语音信号压缩感知研究. 2012",
            "[17]  Zhang Long, Li Haifeng, and Ma Lin. Automatic Pronunciation Error Detection Based on Extended Pronunciation Space Using the Unsupervised Clustering of Pronunciation Errors. Proceeding of Interspeech 2012.",
            "[18] Zhang Long, Li Haifeng, and Ma Lin. An Adaptive Unsupervised Clustering of Pronunciation Errors for Automatic Pronunciation Error Detection. Proceeding of ICPR 2012.",
            "[19] Zhenlu Wang, Haifeng Li, Lin Ma. HHT based long term feature extracting method for speech emotion classification. International Conference on Audio, Language and Image Processing 2012",
            "[20] Yinxue Qin, Lin Ma, Haifeng Li, Qiuhua Wei. Research of pattern recognition based on the local structure topological. International Conference on Audio, Language and Image Processing 2012",
          ],
          //recommendList:[2,5,3,4]
        },
        5:{
          id:5, 
          img:require("../../../../assets/home/specialist/u596.png"),         
          name:'朱靖波',
          desrc:"博士，东北大学信息学院教授和博士生导师、计算机软件研究所副所长、自然语言处理实验室主任。中国中文信息学会常务理事，机器翻译专委会学术委员，计算语言学专委会学术委员，中国人工智能学会自然语言理解专委会学术委员，科大讯飞AI大学首批特聘教授。2004年在香港城市大学担任高级访问研究员工作半年。2006-2007年作为国家公派访问学者到美国南加州大学USC/ISI跟从前ACL主席Prof. Eduard Hovy访问学习一年，其中Google翻译创始人Dr. Franz Joseph Och和国际学术界知名开源系统Moses系统研制者Dr. Philipp Koehn都出自Prof. Hovy领导的实验室。入选国家教育部新世纪优秀人才计划（2005）、辽宁省百人层次人才计划（2007）和辽宁省百人层次人才工程创新团队（2008）。作为第一作者或通讯作者在国内外期刊杂志和学术会议上共发表200多篇学术研究论文，包括一篇国际杂志Artificial Intelligence长文、一篇Journal of Artificial Intelligence Research 长文，十篇IEEE/ACM Transactions国际杂志长文、二十七篇国际CCF A类和B类会议论文，作为副主编出版一本专著：《自然语言理解-一种让机器懂得人类语言的研究》（清华大学出版社 2002年）。作为课题负责人主持两项国家自然科学基金重点项目（子课题）、五项国家自然科学基金面上项目、一项国家863计划课题、一项国家教育部科学技术重点项目和一项国家教育部博士点基金课题等。曾担任国际会议ICCPOL2003大会秘书长、CIPS-SIGHAN2012程序委员会主席、CWMT2015程序委员会主席和ACL2014 Demo Chair。曾在国际会议ROCLING2011作过一次大会特邀报告和一些国际自然语言处理研讨会上作过八次会议邀请报告。研究成果曾获得过辽宁省科技进步一等（1998）和三等奖（2004）、辽宁省优秀软件奖（2000/2002）、五项美国发明专利、两项国内发明专利和两项国内软件著作权等。",
          researchResult:{
              desrc:"",
              data:[
                {   
                  title:"主持研制的学术界知名机器翻译开源系统NiuTrans，免费共享给来自全世界70多个国家2000多家研究机构，2016年12月荣获中国中文信息学会颁发的国内自然语言处理领域的最高科技奖励——钱伟长中文信息处理科学技术一等奖。多次在国内外机器翻译评测（NTCIR-9/CWMT2009/2011）取得了第一和第二优异成绩。",
                },{
                  title:"主持研制的中文句法语义分析系统NiuParser已经免费共享给来自于30多个国家的500多个研究机构。",
                },{
                  title:"汉文与民族文智能翻译系统：可实现汉文与蒙古、藏、维吾尔、哈萨克、朝鲜等5种民族文的智能翻译，是国内首套汉文与民族文双向翻译系统。",
                }
              ]
          },
          researchDirection:[
            {
              title:"机器翻译，语言分析，文本挖掘。",
            }
          ],
          thesis:[
            "Tong Xiao, Jingbo Zhu and Tongran Liu. 2016. Syntactic Skeleton-Based Translation. In Proceedings of AAAI2016 ",
            "Tong Xiao, Derek F. Wong and Jingbo Zhu. 2016. A Loss-Augmented Approach to Training Syntactic Machine Translation Systems. IEEE Transactions on Audio, Speech and Language Processing, 24(11):2069-2083",
            "Jingbo Zhu, Muhua Zhu, Qiang Wang and Tong Xiao. 2015. NiuParser: A Chinese Syntactic and Semantic Parsing Toolkit. In Proceedings of ACL2015 ",
            "Jingbo Zhu, Qiang Li and Tong Xiao. 2015. Improving Syntactic Rule Extraction through Deleting Spurious Links with Translation Span Alignment. Natural Language Engineering, 21(2):227-249 ",
            "Muhua Zhu, Jingbo Zhu and Huizhen Wang. 2015. Improving Shift-Reduce Constituency Parsing with Large-Scale Unlabeled Data. Natural Language Engineering. 21(01):113-138  ",
            "Tong Xiao, Adrià de Gispert, Jingbo Zhu and Bill Byrne. 2014. Effective Incorporation of Source Syntax into Hierarchical Phrase-based Translation. In Proceedings of Coling2014 ",
            "Ji Ma, Yue Zhang and Jingbo Zhu. 2014. Tagging The Web: Building A Robust Web Tagger with Neural Network. In Proceedings of ACL2014 ",
            "Tong Xiao, Jingbo Zhu, Chunliang Zhang. 2014. A Hybrid Approach to Skeleton-based Translation. In Proceedings of ACL2014, short paper ",
            "Ji Ma, Yue Zhang and Jingbo Zhu. 2014. Punctuation Processing for Projective Dependency Parsing. In Proceedings of ACL2014, short paper  ",
            "Muhua Zhu, Jingbo Zhu and Huizhen Wang. 2013. A Feature-Based Approach to Better Automatic Treebank Conversion. Language Resources and Evaluation, 47(4):1213-1231",
            "Tong Xiao, Jingbo Zhu. 2013. Unsupervised Sub-tree Alignment for Tree-to-tree Translation. Journal of Artificial Intelligence Research (JAIR), 48(2013):733-782",
            "Tong Xiao, Jingbo Zhu and Tongran Liu. 2013. Bagging and Boosting Statistical Machine Translation Systems. Artificial Intelligence, 195(2013):496-527",
            "Muhua Zhu, Yue Zhang, Wenliang Chen, Min Zhang and Jingbo Zhu. 2013. Fast and Accurate Shift-Reduce Constituent Parsing. In Proceedings of ACL2013. ",
            "Ji Ma, Jingbo Zhu,Tong Xiao and Nan Yang. 2013. Easy-First POS Tagging and Dependency Parsing with Beam Search. In Proceedings of ACL2013, short paper. ",
            "Jingbo Zhu, Matthew Ma. 2012. Uncertainty-based Active Learning with Instability Estimation for Text Classification. ACM Transactions on Speech and Language Processing (TSLP), 8(4), article 5:1-21  ",
            "Jingbo Zhu, Chunliang Zhang, Matthew Ma. 2012. Multi-Aspect Rating Inference with Aspect-based Segmentation. IEEE Transactions on Affective Computing (TAC), 3(4):469-481 ",
            "Jingbo Zhu, Tong Xiao, Chunliang Zhang. 2012. Learning Better Rule Extraction with Translation Span Alignment. In Proceedings of ACL2012, short paper",
            "Tong Xiao, Jingbo Zhu, Hao Zhang and Qiang Li. 2012. NiuTrans: An Open Source Toolkit for Phrase-based and Syntax-based Machine Translation. In Proceedings of ACL2012, demonstration session",
            "Muhua Zhu, Jingbo Zhu, Huizhen Wang. 2012. Exploiting Lexical Dependencies from Large-Scale Data for Better Shift-Reduce Constituency Parsing. In Proceedings of Coling2012",
            "Ji Ma, Tong Xiao, Jingbo Zhu, Feiliang Ren. 2012. Easy-First Chinese POS Tagging and Dependency Parsing. In Proceedings of Coling2012",
          ],
          //recommendList:[2,5,3,4]
        },
        6:{
          id:6,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'林鸿飞',
          desrc:"博士，大连理工大学计算机科学与技术学院教授、博士生导师。计算机科学与技术博士点点长，博士后流动站负责人，大连理工大学信息检索研究室负责人（DUTIR）。中国中文信息学会常务理事，中文信息学会社会媒体处理专业委员会副主任、中文信息学会信息检索专业委员会委员、中国人工智能学会离散智能计算专业委员会副主任、中国人工智能学会机器学习专委会常务委员、中国计算机学会高级会员、中国计算机学会中文信息处理专业委员会委员。主持多项国家863高科技发展计划项目、国家自然科学基金项目、教育部博士点基金以及辽宁省自然科学基金，参与多项国家自然科学基金重点项目和国家十二五支撑计划，主持完成多项地方政府和企业委托项目。曾获得辽宁省政府自然科学三等奖、科技进步三等奖、沈阳市政府科技进步二等奖、辽宁省优秀中青年骨干教师称号，入选辽宁省“百千万人才工程”百人层次。同时，获得2009年高等教育国家级教学成果二等奖和辽宁省高等教育教学成果一等奖，2014年高等教育国家级教学成果一等奖和辽宁省高等教育教学成果一等奖。",
          researchResult:{
            data:[
                {   
                  title:"社交媒体中文本情感语义计算理论和方法, 国家自然科学基金；",
                },{
                  title:"面向社交网络的药物不良反应的隐含知识发现, 国家自然科学基金；",
                },{
                  title:"基于认知语境的文本情感计算及其应用, 国家自然科学基金;",
                },{
                  title:"面向生物医学领域的文本挖掘技术研究与应用, 国家自然科学基金；",
                },{
                  title:"Web文本的知识模式抽取和评价机制, 国家自然科学基金项目；",
                },{
                  title:"基于语义的跨语言垂直搜索技术的研究与实现, 863 计划项目；",
                },{
                  title:"基于认知语境的文本情感计算模型, 高等学校博士学科点专项科研基金项目；",
                },{
                  title:"文本挖掘技术在生物医学领域中的应用, 教育部留学归国人员科研启动基金；",
                },{
                  title:"可信搜索关键技术研究与实现, 辽宁省自然科学基金； ",
                },{
                  title:"专业服务框架协议；",
                }
              ]
          },
          researchDirection:[
            {
              title:"以自然语言处理（认知语言学）和机器学习（深度学习）为基础，专注于互联网上内容的搜索、分析和诠释，挖掘出潜在的、有价值的、新颖的知识模式。包括：情感分析与观点挖掘（基于认知的情感分析、隐喻和幽默计算、社交媒体处理等）；信息检索与信息推荐（查询意图理解、排序学习及应用、用户画像与推荐等）；面向生物医学领域的知识挖掘（精准医学与知识图谱、医疗健康大数据分析等）",
            }
          ],
          thesis:[
            "基于Web的信息过滤机制，《计算机工程与应用》 , 2002 , 38 (2) :190-192 ",
            "基于混合模式的文本过滤模型，《计算机研究与发展》 2001年09期 ",
            "基于示例的文本标题分类机制，《计算机研究与发展》 , 2001 , 38 (9) :1132-1136 ",
            "基于潜在语义索引的文本浏览机制，《计算机应用研究》 2004年03期",
            "基于概念的中文文本可视化表示机制，《小型微型计算机系统》 - 2000 ",
            "基于示例的中文文本过滤模型，《大连理工大学学报》 , 2000 , 40 (3) :375-378 ",
            "用户兴趣模型的表示和更新机制，《计算机研究与发展》 , 2002 , 39 (7) :843-847",
            "中文文本的信息自动抽取和相似检索机制， 《小型微型计算机系统》 – 2007",
            "基于段落匹配和分布密度的偏重摘要实现机制，《中文信息学报》 - 2007",
            "基于内容和合作模式的信息推荐机制，《中文信息学报》 - 2005",
            "双语交叉分类模型的设计与实现，《中文信息学报》 - 2001 ",
            "基于合作模式的文本过滤模型，《小型微型计算机系统》 - 2001 ",
            "基于潜在语义索引的文本摘要方法，《模式识别与人工智能》 , 2000 , 13 (1) :000047-51",
            "基于Ontology的个性化推送系统，《计算机工程与应用》 - 2005 "
          ],
        },
        7:{
          id:7,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'',
          desrc:"",
          researchResult:{
            
          },
          researchDirection:[

          ],
          thesis:[

          ],
        },
        8:{
          id:8,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'',
          desrc:"",
          researchResult:{
            
          },
          researchDirection:[

          ],
          thesis:[

          ],
        },
        9:{
          id:9,
          img:require("../../../../assets/home/specialist/u596.png"),
          name:'',
          desrc:"",
          researchResult:{
            
          },
          researchDirection:[

          ],
          thesis:[

          ],
        },
      },
      currentSpecialistIndex:''

    }
  },
  filters:{
    subStringNoMore3line(str){
      return subStringNoMore3line(str,170)
    }
  },
  methods:{
    seeDetails (index) {
      this.$router.push({path:"/specialistDetails/"+index})
      this.detailInit(index)
      
    },
    returnBack () {
      this.$router.push({path:"/specialist"})
      this.init()
    },
    init(){
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "专家列表"
      this.currentNode = 1
    },
    detailInit(index){
      this.isDetail = true
      this.title1 = '专家列表'
      this.title2 = this.specialistData[index].name
      this.currentSpecialistIndex = index
      if(this.specialistData[index].researchResult){
        this.currentNode = "researchResult"
        return
      }
      if(this.specialistData[index].researchDirection){
        this.currentNode = "researchDirection"
        return
      }
      if(this.specialistData[index].scientificResearchProject){
        this.currentNode = "scientificResearchProject"
        return
      }
      if(this.specialistData[index].thesis){
        this.currentNode = "thesis"
        return
      }
      if(this.specialistData[index].patentApplication){
        this.currentNode = "patentApplication"
        return
      }
    }
  },
  mounted(){
    // specialistDetails
    
    console.log("当前专家id："+this.$route.params.specialistId)
    console.log(this.$route.params.specialistId)
    if(this.$route.params.specialistId){
      var index = this.$route.params.specialistId
      this.detailInit(index)
    }else{
       this.init()
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
    padding: 0px 10%;
    .col{
      padding: 0 12px 12px 12px;
      // height: 280px;
    }
    .bordertopbule{
      border-top: 4px solid #2b9eeb;
    }
    .specialist-item{
      display: flex;
      background-color: #fff;
      padding: 0 24px 12px 24px;
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
          font-weight: 400;
        }
        .specialistDesrc{
          color: #868686;
          line-height: 26px;
          height: 135px;
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
      // height: 900px;
      // overflow-y: auto;
      // overflow-x: hidden;
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
        min-height: 600px;
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

