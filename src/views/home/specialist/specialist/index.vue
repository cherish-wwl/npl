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
      <div class="display_sort_way">
        <span class="font14">以姓氏笔画为序</span>
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
              <img :src="item.img">
            </div>
            <div class="right">
              <h3 class="font20 specialistName">{{item.name}}</h3>
              <p class="font14 specialistDesrc height135">{{ item.desrc}}<p>
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
          <article class="bordertopbule specialist-item1">
              <p class="font14">
                <img  class="portrait" :src="specialistData[currentSpecialistIndex].img" align="left"/>
                <span class="font20 specialistName"> {{specialistData[currentSpecialistIndex].name}}</span>
                <span class="specialistDesrc">{{specialistData[currentSpecialistIndex].desrc}}</span>
              </p>
          </article>
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
                    <span class="item-title">{{ child.title }}</span>
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
          img:require("../../../../assets/home/specialist/zhaotiejun1.jpg"),
          desrc:"哈尔滨工业大学教授、博士生导师，哈工大教育部-微软语言语音重点实验室主任，中国中文信息学会常务理事，中国计算机学会中文信息技术专委会副主任，《中文信息学报》编委，全国术语标准化技术委员会“语言资源建设与管理”分会委员，中国计算机学会高级会员。近年来承担国家自然科学基金项目、863计划项目、各类纵向和横向项目等14余项，曾获部级科技进步奖6项。近年来发表论文近百余篇，出版专著2部。",
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
                  title:"国家自然科学基金重点项目，面向汉语文本理解的语义计算方法"
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
          img:require("../../../../assets/home/specialist/guanyi1.jpg"),
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
            "李超 孙健 关毅 徐兴军 侯磊 李生. 基于最大熵模型的汉语基本块分析技术研究. 中文信息学会句法分析评测（CIPS-ParsEval-2009）. 2009,pp.19-25",
            "董喜双 关毅 李本阳 陈志杰. 基于最大熵模型的中文词与句情感分析研究. 第二届中文倾向性分析评测(COAE2009). 2009, pp.50-58.",
            "Dong, X.; Chen, X.; Guan, Y.; Xu, Z.; Li, S. An Overview of Learning to Rank for Information Retrieval. Proc. WRI World Congress on Computer Science and Information Engineering, 2009, 3, 600-606.",
            "杜新凯 关毅 岳淑珍 徐兴军，基于Swarm的人工免疫网络算法研究，微计算机信息，2008年18期",
            "孙广路 王晓龙 关毅 基于词聚类特征的统计中文组块分析模型，电子学报， 2008，36(12)： 2450-2453",
            "Yi Guan, Xiaolong Wang, and Qiang Wang, A New Measurement of Systematic Similarity, IEEE TRANSACTIONS ON SYSTEMS, MAN, AND CYBERNETICS—PART A: SYSTEMS AND HUMANS, VOL. 38, NO. 4, JULY 2008,pp 743-758",
            "Tiejun Zhao, Yi Guan, Ting Liu, Qiang Wang: Recent advances on NLP research in Harbin Institute of Technology. Frontiers of Computer Science in China 1(4): 413-428 (2007)",
            "姜维 王晓龙 关毅 赵健，基于多知识源的中文词法分析系统，计算机学报，2007年第1期，137-145页",
            "王强 关毅 王晓龙，基于特征类别属性分析的文本分类器分类噪声裁剪方法 自动化学报; 2007年08期",
            "Chi-Ho Li, Dongdong Zhang, Mu Li, Ming Zhou,Minghui Li, Yi Guan, A Probabilistic Approach to Syntax-based Reordering for Statistical Machine Translation,in Proceedings of the 45th Annual Meeting of the Association of Computational Linguistics, Prague, 2007",
            "王强 关毅 基于标题类别语义识别的文本分类算法研究，电子与信息学报，第29卷第12期，2885-2890，2007年12月",
            "Chengjie Sun, Lei Lin, Xiaolong Wang, Yi Guan, Using Maximum Entropy Model to Extract Protein-Protein Interaction Information from Biomedical Literature,Lecture Notes in Computer Science of Advanced Intelligent Computing Theories and Applications with Aspects of Theoretical and Methodological Issues, Volume 4681/2007,730-737",
            "Chengjie Sun, Yi Guan, Xiaolong Wang, Lei Lin, Rich features based Conditional Random Fields for biological named entities recognition, Computers in Biology and Medicine archive, Volume 37, Issue 9, 2007",
            "Qiwen Dong, Xiaolong Wang, Lei Lin, Yi Guan, Exploiting residue-level and profile-level interface propensities for usage in binding sites prediction of proteins, BMC Bioinformatics. 2007; 8: 147.",
            "姜维 关毅 王晓龙 刘秉权 基于支持向量机的音字转换模型, 中文信息学报, 2007年02期",
            "何晏成 关毅 岳淑珍 一个基于免疫机制的在线机器学习算法，第三届全国信息检索与内容安全学术会议，2007.11，苏州",
            "Sun Guanglu, Guan Yi, Wang Xiaolong, A Maximum Entropy Chunking Model with N-fold Template Correction, Journal of Electronics(China) 2007 24 (5): 690-695",
            "Guan Yi, Zhao Jian, An Improved Feature Representation Method for Maximum Entropy Model Data Mining Workshops, 2006. ICDM Workshops 2006. Sixth IEEE International Conference, Volume , Issue , Dec. 2006 Page(s):400 - 406",
            "Chengjie Sun, Yi Guan, Xiaolong Wang, Lei Lin Biomedical Named Entities Recognition Using Conditional Random Fields Model,Lecture Notes in Computer Science of Fuzzy Systems and Knowledge Discovery,Volume 4223/2006, 1279-1288",
          ],
          //recommendList:[2,5,3,4]
        },
        3:{
          id:3,
          img:require("../../../../assets/home/specialist/liuting1.jpg"),
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
          img:require("../../../../assets/home/specialist/lihaifeng2.jpg"),
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
            "“A Simple Tempo-Spectral Hybrid Method for Speech Noise Reduction”, in the Proceedings of the Sixth International Conference on Knowledge-Based Intelligent Information Engineering Systems, September 2002, Italy, pp.1142-1146",
            "“Data Driven Design of an ANN/HMM System for On-line Unconstrained Handwritten Character Recognition”, in the Proceedings of the 4th IEEE International Conference on Multimodal Interfaces (ICMI’02), October 2002, Pittsburgh, Pennsylvania, USA, pp.141-146",
            "“VQ-Based On-line Handwritten Character Recognition through Learning and Adaptive Edit Distances”, in the Proceedings of the 9th International Conference on Neural Information Processing (ICONIP'02), 18-22 November 2002, Singapore, pp.2008-2012",
            "“A Learning Edit Distance Based Method for On-line Handwriting Codebook Generation”, in the Proceedings of the 4th International Conference on Modelling and Simulation (MS'02), 11-13 November 2002, Autralia",
            "“The Complete K-level Tree and its Application to Data Warehouse Filtering”, Proceedings of the 7th International Conference for Young Computer Scientists, Harbin China, 2003, pp.223-226",
            "“禁忌搜索消除预成熟现象的聚类算法研究”，2003全国人工智能学术大会，2003年10月，pp.480-483",
            "“分段式音频检索算法”，2003全国人工智能学术大会，2003年10月，pp.609-612",
            "“面向嵌入式应用的小词汇量语音串识别系统”，2003全国人机语音通讯学术大会，2003年10月，pp.79-82",
            "“Hidden Control Neural Network and HMM Hybrid Approach for On-line Handwriting Recognition”, 2003 IEEE International Conference on Neural Networks and Signal Processing, December 2003, pp.627-670",
            "高畅，李海峰，马琳, '基于压缩感知理论的语音信号压缩与重构方法', NCMMSC, 2011",
            "张珑，李海峰，马琳，'利用移动设备辅助汉语普通话发音学习研究'，NCMMSC, 2011",
            " Haifeng Li, Tian Zhang, Lin Ma, 'Confirmation Based Self-Learning Algorithm in LVCSR's Semi-supervised Incremental Learning', IWIEE, 2012",
            "Haifeng Li, Tian Zhang, Lin Ma. Confirmation Based Self-Learning Algorithm in LVCSR's Semi-supervised Incremental Learning. 2012 International Workshop on Information and Electronics Engineering (IWIEE 2012). Procedia Engineering. Vol.29: 754-759",
            "Wenjing Han，Haifeng Li，Florian Eyben，Li Ma，Jiayin Sun，Bjorn Schuller. Preserving Actual Dynamic Trend of Emotion in Dimensional Speech Emotion Recognition . Proc. Second International Audio/Visual Emotion Challenge and Workshop (AVEC 2012)，Grand Challenge and Satellite of ACM ICMI 2012，ACM，Santa Monica，CA，22-26.10.2012.",
            "Wenjing Han，Haifeng Li，Lin Ma，Xiaopeng Zhang，Bjorn Schuller. A Ranking-based Emotion Annotation Scheme and Real-life Speech Database. Proc. 4th International Workshop on Emotion Sentiment Social Signals 2012, held in conjunction with LREC 2012，Istanbul，Turkey：67-71，26.05.2012.",
            "高畅，李海峰，马琳, 面向内容的语音信号压缩感知研究. 2012",
            "Zhang Long, Li Haifeng, and Ma Lin. Automatic Pronunciation Error Detection Based on Extended Pronunciation Space Using the Unsupervised Clustering of Pronunciation Errors. Proceeding of Interspeech 2012.",
            "Zhang Long, Li Haifeng, and Ma Lin. An Adaptive Unsupervised Clustering of Pronunciation Errors for Automatic Pronunciation Error Detection. Proceeding of ICPR 2012.",
            "Zhenlu Wang, Haifeng Li, Lin Ma. HHT based long term feature extracting method for speech emotion classification. International Conference on Audio, Language and Image Processing 2012",
            "Yinxue Qin, Lin Ma, Haifeng Li, Qiuhua Wei. Research of pattern recognition based on the local structure topological. International Conference on Audio, Language and Image Processing 2012",
          ],
          //recommendList:[2,5,3,4]
        },
        5:{
          id:5, 
          img:require("../../../../assets/home/specialist/zhujingbo1.jpg"),         
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
          img:require("../../../../assets/home/specialist/linhongfei1.jpg"),
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
          img:require("../../../../assets/home/specialist/huangdegen1.png"),
          name:'黄德根',
          desrc:"大连理工大学计算机学院教授、博导。福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件。",
          researchResult:{
            data:[
                {   
                  title:"多资源的摘要信息形成",
                },{
                  title:"多资源的摘要信息生成工具的开发",
                },{
                  title:"大学数字化校园建设软件移动模块开发",
                },{
                  title:"跨语言信息检索中的机器翻译研究, 国家自然科学基金",
                },{
                  title:"基于深度学习的句子相似度计算研究, 国家自然科学基金",
                },{
                  title:"Mining English-Chinese Named Entity Pairs Based on Multi-feature Integrated Models from Comparable Corpora, ",
                },{
                  title:"多语言实用新型机器翻译方法的关键问题的探索, 863 计划项目 ",
                }
              ]
          },
          researchDirection:[
             {
              title:"长期专注于汉语和日语的自然语言处理研究，擅长词法分析、命名实体自动识别、短语自动识别、中日机器翻译、社交媒体文本处理等NLP研究。近年来围绕词向量、NLP深度学习、神经网络机器翻译等开展研究。",
            }
          ],
          thesis:[
            "Identifying Pronunciation-Translated Names from Chinese Texts based on Support Vector Machines. Springer:Adances in Neural Networks-ISNN2004.Lecture Notes in Computer Science (IEEE).Dalian, China, August 2004 vol.3173 p983-988 (SCI和ISTP收录) ",
            "Word-Level Chinese Named Entity Recognition Based on Segmentation Digraph. Publishing House, BUPT: Proceedings of 2005 IEEE International Conference on Natural Langrage Processing and Knowledge Engineering. Oct.30-Nov.1 Wuhan, China,2005 p380-383 (EI,ISTP收录)",
            "Extracting Location Names from Chinese Texts Based on SVM and KNN, Publishing House, BUPT: Proceedings of 2005 IEEE International Conference on Natural Langrage Processing and Knowledge Engineering. Oct.30-Nov. 1 Wuhan, China,2005 p371-375 (EI,ISTP收录) ",
            "Chinese Syntactic Category Disambiguation Using Support Vector Machines. Springer:Adances in Neural Networks-ISNN2005.Lecture Notes in Computer Science (IEEE).Chongqing, China, May/June 2005 vol.3497 p246-250 (SCI、EI和 ISTP收录)",
            "Recognizing Transliterated Names From Chinese Texts Based on Supoort Vector Machines and Rules, IEEE Press: Proceedings of 2005 International Conference on Neutral Network & Brain. Beijing, China, October 2005 p1135-1138(EI收录) ",
            "A Probabilistic Approach to Chinese Unknown Words Recognition.COLIPS Publications: Proceeding of the International Conference on Chinese Computing 2005. Singapore,March 2005 p25-31(ISTP收录)",
            "An Improved Method of Chinese Names Identification, Tsinghua University Press:20th International Conference on Computer Processing of Oriental Languages. Shengyang, China, August 2003,p63-69",
            "Chinese Main Verb Identification: From Specification to Realization,International Journal of Computational Linguistics and Chinese Language Processing,2005 Vol.10,No.1 53-94 9.基于互信息的中文姓名识别方法,大连理工大学学报，2004，Vol44,No.5,744-748(EI收录) ",
            "Deterministic perturbation partial volume interpolation: Algorithm and analysis.自动化学报,2005,Vol31,No.4 P584-589(EI收录)",
            "基于单词与双词可信度的汉语自动分词,计算机研究与发展, 2001, No.7(增刊),132-135",
            "基于完全二阶隐马尔可夫模型的汉语词性标注,计算机工程,2005, Vol31, No.10, P177-179(EI PageOne收录) ",
          ],
        },
        8:{
          id:8,
          img:require("../../../../assets/home/specialist/liru1.jpg"),
          name:'李茹',
          desrc:"博士，山西大学计算机与信息技术学院副院长、教授、博士生导师。中国中文信息学会常务理事，中国计算机学会高级会员，山西省委直接联系高级专家，山西省软件行业协会副理事长，山西省计算机学会副秘书长。曾赴UC Berkeley ICSI（加州大学伯克利分校国际计算机科学研究所）进行学术访问交流。主持了国家863计划、国家自然科学基金、山西省自然科学基金、山西省国际科技合作项目等多项研究课题，获得计算机软件著作登记权20余项，并在国内外重要学术期刊及重要会议上发表论文40余篇。",
          researchResult:{
            data:[
                {   
                  title:"面向大数据的粒计算理论与方法,国家自然科学基金",
                },{
                  title:"面向大数据的粒计算理论与方法,国家自然科学基金",
                },{
                  title:"汉语篇章框架语义关系网自动抽取及其语义推理,国家自然科学基金",
                },{
                  title:"面向民航突发事件的网络舆情监控技术研究,横向科研项目",
                },{
                  title:"篇章级框架语义结构建模技术研究,山西省回国留学人员科研项目",
                },{
                  title:"汉语框架语义网资源及技术平台,山西省科技基础条件平台建设项目",
                },{
                  title:"智能数据分析应用平台,山西省科技基础条件平台建设项目",
                },{
                  title:"基于文本观点挖掘的多对象评级理论与方法研究,国家自然科学基金",
                },{
                  title:"面向信息处理的汉语篇章框架语义结构分析研究,专项科研",
                },{
                  title:"中美合作汉语框架网的语义推理及其应用研究，山西省国际科技合作项目",
                },{
                  title:"汉语框架语义依存图自动抽取关键技术研究,国家自然科学基金",
                },{
                  title:"煤矿井下瓦斯预警及监测监管综合管理系统研究开发与应用,山西省科学技术二等奖",
                }
              ]
          },
          researchDirection:[
            {
              title:"大数据技术，自然语言处理，语义分析，舆情分析，文本挖掘。",
            }
          ],
          thesis:[
            "高嘉伟 梁吉业 刘杨磊 李茹 一种基于Tri-trainging的半监督多标记学习文档分类算法,中文信息学报,29(1):104-110.,2015-01-01 00:00:00,二级学科主学报 ",
            "吕国英 李茹 浅析工程教育实施探索－以软件工程为例,其他刊物,24（12）：66－69,2014-12-01 00:00:00,其他正式刊物 ",
            "石佼 李茹 王智强 汉语核心框架语义分析,中文信息学报,28(6):48-55,2014-11-01 00:00:00,二级学科主学报 ",
            "张欣雨 李茹 王晋宇 改进最大Lyapunov指数的瓦斯时间序列预测研究,其他刊物,2014,10:119-122,2014-07-17 00:00:00,统计源期刊 ",
            "张晓梅 李茹 王斌 吴迪 高俊杰 基于融合特征的微博主客观分类方法,中文信息学报,28(4):50-57,2014-07-01 00:00:00,二级学科主学报 ",
            "陈学丽 李茹 王赛 王智强 汉语框架网中未登录词元的框架选择,中文信息学报,28(3):48-54,2014-05-25 00:00:00,二级学科主学报",
            "王宁 李茹 雷章章 王智强 靳晶盼 Document Oriented Gap Filling of Definite Null Instantiation in FrameNet,其他刊物,2013,8202:85-96,2013-10-15 00:00:00,其他正式刊物 ",
            "李茹 王智强 李双红 梁吉业 基于框架语义分析的汉语句子相似度计算,计算机研究与发展,50（8）：1728-1736,2013-08-15 00:00:00,一级学科主学报 ",
            "李国臣 张立凡 李茹 刘海静 石佼 基于词元语义特征的汉语框架排歧研究,中文信息学报,27(4):44-51,2013-07-01 00:00:00,二级学科主学报 ",
            "王赛 李茹 王瑞波 王智强 张霞 SXU-Core: STS Models Integrating FrameNet Parsing Information,其他刊物,2013(1): 74 - 79,2013-06-13 00:00:00,国际会议论文集 ",
            "雷章章 王宁 李茹 王智强 FrameNet 中有定的零形式识别,中文信息学报,27(3):107-112,2013-05-25 00:00:00,二级学科主学报 ",
            "雷章章 王宁 李茹 王智强 FrameNet中有定的零形式识别,中文信息学报,27(3)：107-112,2013-05-01 00:00:00,二级学科主学报 ",
            "王智强 李茹 阴志洲 刘海静 李双红 基于依存特征的汉语框架语义角色标注,中文信息学报,27(2):34-40,2013-03-25 00:00:00,二级学科主学报 ",
            "王素格 尹学倩 李茹 吕云云 基于非完备信息系统的评价对象情感聚类,中文信息学报,26（4）：98-102,2012-07-25 00:00:00,二级学科主学报 ",
            "穆文瑜 李茹 阴志洲 王齐 张宝燕 煤矿多传感器混沌时序数据融合预测,计算机应用,32（6）：1769-1773,2012-06-01 00:00:00,二级学科主学报 ",
            "王素格 尹学倩 李茹 张杰* 吕云云 sentiment clustering of product object based on feature reduction,其他刊物,2012：759-763,2012-05-29 00:00:00,国际会议论文集 ",
            "梁吉业 李茹 钱宇华 Distance: A more comprehensible perspective for measures in rough set theory,其他刊物,27:126-136,2012-04-01 00:00:00,sci(3区)",
          ],
          patentApplication:[
            "汉语框架排歧系统",
            "英文句子的语义相似度计算系统",
            "汉语框架语义依存图生成系统",
            "汉语句子顶层目标词的自动识别系统",
            "框架元素指代消解系统",
            "框架语义角色标注系统",
          ],
        },
        9:{
          id:9,
          img:require("../../../../assets/home/specialist/majun1.jpg"),
          name:'马军',
          desrc:"山东大学计算机科学与技术学院教授、博士生导师，日本九州大学博士， 中国中文信息学会理事，中国计算机学会理论专委会理事，大数据专委会委员，社会媒体处理专委会常务委员，中文信息检索专委会委员，中文信息技术专委会委员。中国计算机学会高级会员，ACM会员，IEEE会员。《计算机学报》、《软件学报》学术期刊和国际会议稿件评阅人，国家863、博士点基金和国家自然科学基金评议人；曾主持承担了2项国家科技部863研究课题，教育部骨干教师基金1项，山东省重大攻关课题，国家劳动部课题，教育部留学人员回国启动基金，山东省自然科学等基金课题。曾参与4项国家自然科学基金课题和多项山东省自然科学基金。精通英语和日语。1994年曾得到日本文部省资助，作为高级研究员在日本茨城大学工学部情报学科工作。从2000年9月到2003年12月在德国国家计算机研究中心(GMD, Fraunhofer)任高级研究员。参加了欧盟基金课题Innovnet。在国内外核心期刊或重要学术会议上发表学术论文150余篇。",
          researchResult:{
            data:[
                {   
                  title:"国家自然科学基金：新型社会网络模型及在社会媒体文本摘要和图像标注的应用； ",
                },{
                  title:"国家自然科学基金 ：基于机器学习的多义性数据概念标注研究； ",
                },{
                  title:"国家自然科学基金：Web图像的语义表示及在聚类与排序中的应用 ",
                },{
                  title:"国家教育部博士点基金 - 基于多空间描述的Web图像检索； ",
                },{
                  title:"山东省自然科学基金－Web社会媒体的信息检索和挖掘研究；",
                },{
                  title:"国家自然科学基金－Web网页时效性评价及其在网页排序应用中的研究",
                },{
                  title:"基于大数据的城市生活方式发现（国际合作项目）",
                },{
                  title:"驻济高校信息收集和分析系统    ",
                },{
                  title:"广州市房产信息检索与管理系统",
                },{
                  title:"山东大学校园网内部搜索引擎",
                },{
                  title:"山东省自然科学基金－Web社会媒体的信息检索和挖掘研究",
                },{
                  title:"山东省自然科学基金－垂直检索中的相关度和排序算法研究",
                },{
                  title:"山东省自然科学基金- 基于计算智能的基因表达数据处理",
                },{
                  title:"山东省科技攻关－用户界面设计的模型化规范表达技术和支持工具",
                },{
                  title:"高等学校博士学科点专项科研基金－科技论文网络发表平台的管理和可持续发展问题的研究",
                },{
                  title:"山东省科技攻关－垂直检索系统的研究与开发",
                }
              ]
          },
          researchDirection:[
            {
              title:"目前的主要研究方向为：信息检索和数据挖掘、社会网络分析、推荐系统和机器学习。具体包括Web信息爬取与抽取，文本分类/聚类，网页排序，文档自动摘要，主题检测与追踪，舆情分析，垃圾网页检测和过滤，推荐系统及相关算法、图像的分类/聚类，基于内容的图像与视频的检索和自动语义标注，机器学习方法的应用研究等。",
            }
          ],
          thesis:[
            "1.S.Wang, J.Sun, B.Gao and J.Ma, VSRank: A Novel Framework for Ranking-based Collaborative Filtering, ACM Transactions on Intelligent Systems and Technology, 2014.",
            "2.Chaoran Cui, Jun Ma, Tao Lian, Zhumin Chen, Shuaiqiang Wang. Improving Image Annotation via Ranking-Oriented Neighbor Search and Learning-Based Keyword Propagation. Journal of the American Society for Information Science and Technology,2014",
            "3.S.Wang, Jun Ma, Evolving Choice Structures for Genetic Programming. Information Processing Letters. 111(20): 871-876, 2010.(SCI) ",
            "4.Xiaohui Han, Jun Ma, Yun Wu, Chaoran Cui. A novel machine learning approach to rank web forum posts. Soft Computing (SCI)",
            "5.S.Wang, Jun Ma. Formal Behavior Modeling and Effective Automatic Refinement. Information Sciences. 180(20): 3894-3913, 2010.",
            "6.S.Wang, Jun Ma, Qiang He. An Immune Programming Based Ranking Function Discovery Approach for Effective Information Retrieval. Expert Systems with Applications. 37(8): 5863-5871, 2010. ",
            "7.崔超然,马军. 一种综合考虑相关性和信息性的图像标签推荐方法. 计算机学报. Vol.36(3), Mar. 2013",
            "8. 马军, 宋玲, 韩晓晖, 闫泼. 基于网页上下文的Deep Web数据库分类. 软件学报, Vol.19(2), pp.267-272, Feb. 2008. (EI)",
            "9.郭磊，马军，陈竹敏, 姜浩然. 一种结合推荐对象间关联关系的社会化推荐算法. 计算机学报. Vol.37(1), 2014。",
            "10.Piji Li, Jun Ma, Lei Zhang. Results Selection Diversity for Web Image Retrieval. International Journal of Computer Mathematics, Vol.88(18), 2011, 3834-3851.(SCI) ",
            "11.Chaoran Cui, Jun Ma, A Hybrid Relevant-Diverse Approach for Image Re-ranking with Multiple Features. International Journal of Computer Mathematics, Vol.88(18), 2011, 3864-3881.(SCI)",
          ],
        },
        10:{
          id:10,
          img:require("../../../../assets/home/specialist/wangbo1.jpg"),
          name:'王博',
          desrc:"博士，天津大学计算机科学与技术学院副教授。研究兴趣主要集中在社会计算，自然语言处理与机器学习方法。主要从事基于信息内容分析的互联网社会媒体分析与挖掘。近年来，研究主要集中在通过深入分析互联网社会媒体中信息内容的特点，来研究信息的传播及影响力模型及应用。王博博士2010年4月入职天津大学计算机学院。在国内外高水平学术刊物和国际会议上发表论文10余篇。作为项目负责人主持国家自然科学基金和天津市自然科学基金项目各1项。曾先后于微软亚洲研究院、意大利帕多瓦大学、英国罗伯特戈登大学访问工作，目前为美国华盛顿大学心理学系访问学者，从事个人及群体的自动化心理画像研究。",
          researchResult:{
            data:[
                {   
                  title:"基于互动语言的在线社会关系语义化动态画像研究, 国家自然科学基金；",
                },{
                  title:"结合人物模型的社会媒体话题传播与影响力分析及预测, 天津市自然科学基金；",
                },{
                  title:"自然语言处理系统的自动化白箱分析评价方法，国家自然科学基金；",
                },{
                  title:"面向S2S，Bing字典和Bing翻译系统的网络众包翻译资源挖掘，微软高校合作项目；",
                }
            ]
          },
          researchDirection:[
            {
              title:"社会计算（社会媒体内容自动化分析，基于计算方法的人物及群体性格与心理画像）；自然语言处理（以人工智能为方法探索社会场景下的语义与观点自动化分析，基于语言的心理及社会关系自动化分析）。",
            },{
              title:"自然语言处理：利用语言学知识及深度学习等前沿方法，自动化分析自然语言的结构、语义和意图等信息。当前重点研究方向：面相社会网络中人物与人物关系画像的人物言论深度分析。主要包括人物言论的语义要素、情感倾向、意图理解等。 "
            }
          ],
          thesis:[
            "Yinghui Wang, Bo Wang, Yuexian Hou, Dawei Song. Automatic Update of Ontology Concept Hierarchy with New Entity Insertion and New Concept Generation Based on Semantic Measurement. In Proc. ICSCA 2018",
            "Wang, Yingjun Sun, Bo Han, Yuexian Hou, Dawei Song. Extending the Balance Theory by Measuring Bidirectional Opinions with Interactive Language. In Proc. WWW 2017, Poster. (CCF-A)",
            "Bo Wang, Yingjun Sun, Yuexian Hou, Dawei Song, Ruifang He. Position vs. Attitude: How Topological Factors Influence Our Difference in the Attitudes on Online Interrelationships? A Case Study with Language Use. In Proc. COLLABORATECOM 2017. (CCF-C)",
            "Bo Wang, Yanshu Yu, Peng Zhang. Investigation of the Subjective Asymmetry of Social Interrelationship with Interactive Language. In Proc. WWW 2016, p121-122, Poster. (CCF-A)",
            "Yinghui Wang, Bo Wang, Xunlun Li. A Case Study of Mining and Correlation Analysis of Public Security Events in Heterogeneous and Unstructured Web Messages. In Proceedings of the 13th Web Information Systems and Applications Conference, In Proc. WISA 2016.",
            "Ruifang He, Jiliang Tang, Pinghua Gong, Qinghua Hu, Bo Wang. Multi-Document Summarization via Group Sparse Learning. Information Sciences, Vol349-350, p12-24. 2016 SCI (CCF-B)",
            "Dawei Song, Yanjie Shi, Peng Zhang, Qiang Huang, Udo Kruschwitz, Yuexian Hou, Bo Wang. Incorporating Intra-Query Term Dependencies in an Aspect Query Language Model. Computational Intelligence, Vol31, No.4, p699-720. 2015 SCI (CCF-B)",
            "Yuexian Hou, Bo Wang, Dawei Song, Xiaochun Cao, Wenjie Li. Quadratic Tsallis Entropy Bias and Generalized Maximum Entropy models. Computational Intelligence, Vol.30, No.2, p 233–262. 2014 SCI (CCF-B)",
            "Bo Wang, Ming Zhou, Shujie Liu,Mu Li, Dongdong Zhang. Woodpecker: An Automatic Methodology for Machine Translation Diagnosis with Rich Linguistic Knowledge. Journal of Information Science and Engineering, Vol.30, No.5, p1407-1424, September 2014. SCI.",
            "Bo Wang, Yuanyuan Zhang, Qian Xu. Sentence-level Combination of Machine Translation Outputs with Syntactically Hybridized Translations. IEICE Transactions on Information and Systems. Vol.E97-D,  No.1.2014, 164-167. SCI",
            "Dawei Song, Yanjie Shi, Peng Zhang, Qiang Huang, Udo Kruschwitz, Yuexian Hou, Bo Wang. Incorporating Intra-Query Term Dependencies in an Aspect Query Language Model. Computational Intelligence, Vol.31, No.4 ,2014 SCI (CCF-B)",
            "Wang Bo, Hou Yuexian. Measurement of Incompatible Probability in Information Retrieval: A Case Study with User Clicks. Transactions of Tianjin University, v 19, n 1, p 37-42, February 2013. EI",
            "Wang Bo, Meng Fanqi,Hou Yuexian. Mining bilingual linguistic patterns with aligned and parsed Bilingual Corpus. Journal of Convergence Information Technology, v 7, n 12, p 62-68, July 2012. EI",
            "2010",
            "Bo Wang, Tiejun Zhao, Muyun Yang, Sheng Li. Discover Linguistic Patterns in Parsed Corpus with Frequent Subtree Mining. In Proc. WKDD 2010, Jan 9-10, 2010, Phuket, Thailand  EI",
            "Bo Wang, Tiejun Zhao, Muyun Yang. A Skip-Ngram Approach of Automatic Evaluation for Machine Translation. In Journal of Computational Information Systems, Vol. 6, pp. 1279-1286, May 2009.  EI",
            "Bo Wang, Tiejun Zhao, Muyun Yang, Sheng Li. Automatic Syntactic Segment Filtration for Mass Syntax Corpus with Mutual Information. In Proc. FITME 2009, Sanya, China, pp 234-237, Dec 13-14, 2009,  EI",
            "Bo Wang, Tiejun Zhao, Muyun Yang, Hongfei Jiang and Sheng Li. Stability vs. Effectiveness: Improved Sentence-level Combination of Machine Translation Based on Weighted MBR. In Proc. IALP 2009, Singapore, Dec 7-9, 2009,  EI",
            "Bo Wang, Tiejun Zhao, Muyun Yang. References Extension for the Automatic Evaluation of MT by Syntactic Hybridization. In Proc. SSST3, NAACL HLT, Boulder, Colorado, June, 2009",
            "Ming Zhou, Bo Wang, Shujie Liu, Mu Li, Dongdong Zhang, Tiejun Zhao. Diagnostic Evaluation of Machine Translation Systems Using Automatically Constructed Linguistic Check-Points. In Proc. Coling 2008, Manchester, UK, pp.1121-1128, August 2008. (CCF-B)",
            "Bo Wang, Muyun Yang, Sheng Li, Tiejun Zhao. Evaluation of All-words WSD for Chinese in Machine Translation. ACTA AUTOMATICA SINICA, Vol. 34, pp. 535-541, 2008.  EI",
          ],
        },
        11:{
          id:11,
          img:require("../../../../assets/home/specialist/heruifang1.jpg"),
          name:'贺瑞芳',
          desrc:"博士，天津大学计算机科学与技术学院副教授。博士毕业于哈尔滨工业大学计算机科学与技术学院，哈工大语言语音教育部-微软重点实验室-信息检索研究中心。曾在美国亚利桑那州立大学计算机学院做访问学者。参加TAC 2008 Update Summarization评测，在全球33家参赛单位，共71个参赛系统中，获得了人工评价体系PYRAMIDE下关于内容选择评测指标三个第一的成绩；参加TAC 2011 Guided Summarization评测，在24家参赛单位共48个参赛系统中，获得了PYRAMIDE评价体系下TOP 5的成绩；第六届全国信息检索学术会议(CCIR 2010)优秀论文奖；第九届全国计算语言学学术会议（CNCCL2007）优秀论文奖；",
          researchResult:{
            data:[
              {
                title:"国家自然科学基金面上项目，基于数据重构的社会突发事件文摘研究（NSFC批准号61472277），负责人；"
              },{
                title:"教育部博士点基金（新教师类），时序多文档文摘中话题动态演化规律建模方法研究（No. 20110032120040），负责人；"
              },{
                title:"国家自然科学基金青年项目，面向话题演化的时序多文档文摘内容选择技术研究（NSFC编号61100123），负责人；"
              },{
                title:"天津大学自主创新基金，基于条件随机域模型的应急事件抽取研究，负责人； "
              },{
                title:"天津大学自主创新基金，时序信息抽取与集成关键技术研究，负责人；"
              },{
                title:"973项目《互联网环境中文言语信息处理与深度计算的基本理论与方法》子课题：《基于多模态信息的言语行为建模和预测与基于深度理解的言语信息检索引擎构建》； "
              },{
                title:"国家自然科学基金面上项目-《基于类量子理论的信息检索框架研究》；"
              },{
                title:"国家自然科学基金青年项目 -《自然语言处理系统的自动化白箱评价方法研究》；"
              },{
                title:"863计划探索类专题项目《基于实体关系的文本内容挖掘与集成技术平台》（编号2008AA01Z144）；"
              },{
                title:"国家自然科学基金面上项目项目《汉语语义角色标注方法研究》（编号60675034；"
              },{
                title:"国家自然科学基金重点项目'问题理解与答案抽取'子课题项目《问答式信息检索技术理论与方法》（编号60435020）；"
              },{
                title:"2006年腾讯公司（深圳）中文文本分类、聚类和文摘；"
              },{
                title:"2005年IBM中国研究中心多文档自动文摘项目；"
              }
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理，社会媒体检索与挖掘 ，机器学习。人机对话系统，时序多文档文摘、社会媒体微博自动摘要，社会媒体挖掘、突发危机事件检测，开放文本事件抽取，篇章关系自动标注，口语依存分析，深度学习，稀疏优化学习，流形学习，谱聚类，条件随机域模型。"
            }
          ],
          thesis:[
            "Ruifang He*, Yaru Wang, Dawei Song, Peng Zhang, Yuan Jia, Aijun Li. A Dependency Parser for Spontaneous Chinese Spoken Language. Transactions on Asian and Low-Resource Language Information Processing 2018. (SCI四区，录用).",
            "Ruifang He*, Xingyi Duan. Twitter Summarization based on Social Network and Sparse Reconstruction. AAAI 2018 (CCF A类).",
            "Di Jin, Xiaobao Wang, Ruifang He*, Dongxiao He, Jianwu Dang, Weixiong Zhang, Robust Detection of Link Communities in Large Social Networks by Exploiting Link Semantics. AAAI 2018 (CCF A类).",
            "段绍杨，贺瑞芳*. 基于多任务学习的中文事件抽取联合模型. 软件学报. 2017(录用待发表) .",
            "Ruifang He, Yang Liu, Guangchuan Yu, Jiliang Tang, Qinghua Hu and Jianwu Dang. Twitter summarization with social-temporal context. World Wide Web-internet & Web Information Systems, 2017, 20(2):267-290 (JCR二区，中科院SCI分区三区，EI: 20161702301288).",
            "于广川, 贺瑞芳, 刘洋, 党建武. 融合语境分析的时序推特摘要方法. 软件学报, 2017(10):2654-2673.",
            "Ruifang He, Jiliang Tang, Pinghua Gong, Qinghua Hu, Bo Wang. Multi-Document Summarization via Group Sparse Learning. Information Sciences An International Journal, 2016, 349(C):12-24(JCR一区，中科院SCI分区二区).",
            "Ruifang He, Yang Liu, Guangchuan Yu, Jiliang Tang, Qinghua Hu, Jianwu Dang. Twitter summarization with social-temporal context. World Wide Web-internet & Web Information Systems, 2017, 20(2):267-290 (JCR二区，中科院SCI分区三区，EI: 20161702301288).",
            "Pang, Y., Jia, Y., Li, A., Song, D., & He, R. Influence of Dependency Parsing on the Prosody of Chinese Discourse. Speech Prosody. 2016:380-384 (EI: 20163302705090).",
            "张加万, 杨思琪, 李泽宇, 杨伟强, 王锦东, 贺瑞芳, 黄茂林. 基于文本摘要及引用关系的可视辅助文档阅读. 软件学报, 2016(5):1163-1173.",
            "Ruifang He, Yang Zhang, Tuo Li, Qinghua Hu. Improved Conditional Random Fields model with Multi-trigger Embedding for Chinese Event Extraction. World Wide Web-internet & Web Information Systems, 2014, 17(5):1029-1049 (JCR二区，中科院SCI分区三区，EI: 20143600058325).",
            "Ruifang He, Bing Qin, Ting Liu. A Novel Approach to Update Summarization using Evolutionary Manifold-Ranking and Spectral Clustering. Expert Systems With Applications. 2012,39(3): 2375-2384 (SCI二区，SCI:858SP, 2010 IF=1.926, EI: 20114514491334).",
            "Ruifang He, Qianli Ma. Time Expression Normalization based on Multi-scale Classification and Temporal Focus model with Hierarchical Discourse Transfer. Proceedings of ICMLC 2012.pp:1986-1992 (EI：20130115851555).",
            "Ruifang He, Kang Fu, Xinya Zhou. Category oriented Content Selection for Guided Summarization. Text Analysis Conference Workshop. 2011.12.",
            "Ruifang He, Bing Qin, Ting Liu, Sheng Li. Cascaded Regression Analysis based Temporal Multi-document Summarization. Informatics. 2010, 34(1): 119-124 (EI: 20101912920245).",
            "胡博磊, 贺瑞芳, 孙宏, 王文俊, 孙越恒. 基于条件随机域的中文事件类型识别.人工智能与模式识别(第六届全国信息检索学术会议（CCIR2010）优秀论文推荐 (通讯作者；EI：20123815454216).",
            "孙宏, 王文俊, 贺瑞芳, 胡博磊, 孙越恒. 基于条件随机域的中文长地名结构标注.第六届全国信息检索学术会议（CCIR2010）.",
            "贺瑞芳, 秦兵, 潘越群, 刘挺, 李生. 基于宏微观重要性判别模型的时序多文档文摘. 计算机研究与发展. 2009, 46(7):1184-1191 (EI：20090411869646).",
            "He Ruifang, Qin Bing, Liu Ting, Pan Yuequn, Li Sheng. A Novel Heuristic Error-Driven Learning for Recognizing Chinese Time Expression. Journal of Chinese Language and Computing. 2008, 18(4): 139-159.",
            "Ruifang He, Bing Qin, Ting Liu, Yang Liu and Sheng Li. Iterative Feedback based Manifold-Ranking for Update Summary. Research Journal POLIBITS –Computer science and computer engineering with applications. 2008, Number 37: 5-13.",
            "Ruifang He, Yang Liu, Bing Qin, Ting Liu, Sheng Li. HITIR's update summary at TAC2008: Extractive Content Selection for Language Independence. Text Analysis Conference workshop. 2008.11.",
            "贺瑞芳, 秦兵, 潘越群, 刘挺, 李生. 基于启发式错误驱动学习的中文时间表达式识别. 高技术通讯. 2008, 18(12):1258-1262 (EI：20093012214148).",
            "贺瑞芳, 秦兵, 潘越群, 刘挺, 李生. 基于依存分析和错误驱动的中文时间表达式识别. 中文信息学报(CNCCL 2007优秀论文推荐). 2007, 21(5):36-40.",
          ],
        },
        12:{
          id:12,
          img:require("../../../../assets/home/specialist/chenchen1.jpg"),
          name:'陈晨',
          desrc:"博士，南开大学计算机科学与信息安全系副教授，博士毕业于哈尔滨工业大学.在南开大学计算机科学与信息安全系，主要研究兴趣包括自然语言处理、信息检索、社会计算和机器学习。近年来主持一项国家自然基金项目，参与多项国家级和部级的基金项目，发表论文十多篇，主编两部教材。",
          researchResult:{
            data:[
              {
                title:"主持《基于用户建模的个性化微博排序研究》（Personalized Microblog Ranking based on User Modeling）国家自然基金(#6142242)",
                childs:[
                  {
                    text:"第一、购买行为预测。随着电子商务的快速发展，理解用户的需求和预测用户的购买行为成为研究热点。第二届中国大数据比赛和RecSys 2015 Challenge的任务，都是根据用户浏览和点击的数据，预测用户的购买行为以及最终购买的商品。实验室主要研究特征工程的方法和各种机器学习模型。"
                  },{
                    text:"第二、移动宽带数据的分析和建模。移动宽带数据是移动通讯运营商为用户提供访问互联网服务的数据。实验室的主要研究包括用户活跃度预测和访问响应时间预测。"
                  }
                ]
              },{
                title:"2016.1.1-2017.12.31教育部-中国移动科研基金—基于Spark技术的LTE网络信令数据实时分析系统研究 项目编号：MCM20150507"
              },{
                title:"2014.12.01-2015.12.01 教育部-中国移动科研基金—基于网络侧数据的用户特征提取与新业务受众预测研究 项目编号：MCM20130381",
              },{
                title:"购买行为预测。随着电子商务的快速发展，理解用户的需求和预测用户的购买行为成为研究热点。第二届中国大数据比赛和RecSys 2015 Challenge的任务，都是根据用户浏览和点击的数据，预测用户的购买行为以及最终购买的商品。实验室主要研究特征工程的方法和各种机器学习模型。",
              },{
                title:"移动宽带数据的分析和建模。移动宽带数据是移动通讯运营商为用户提供访问互联网服务的数据。实验室的主要研究包括用户活跃度预测和访问响应时间预测。"
              }
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理, 信息检索, 机器学习, 社会计算"
            }
          ],
          thesis:[
            "主编《大学计算机应用基础》，清华大学出版社，2015 ",
            "主编《Visual Basic.Net程序设计习题集》，南开大学出版社，2016",
            "Enhancing Purchase Behavior Prediction with Temporally Popular Items,Chen Chen(#); Chunyan Hou(*); Jiakun Xiao; Yanlong Wen; Xiaojie Yuan,IEICE Transactions on Information and Systems, 2017, E100-D(9): 2237~2240",
            "Short-term User Activity Prediction with Massive Mobile Broadband Data Jiakun Xiao(#); Chen Chen(*); Chunyan Hou; Xiaojie Yuan IEEE International Conference on Mobile Data Management, Daejeon, 2017.5.29-2017.6.2",
            "Using Hierarchical Scenarios to Predict the Reliability of Component-based Software,Chunyan Hou(#); Jinsong Wang(*); Chen Chen,IEICE Transactions on Information and Systems, 2017, E101(2): 405~414",
            "Improving Purchase Behavior Prediction with Most Popular Items Chen Chen(#); Jiakun Xiao; Chunyan Hou(*); Xiaojie Yuan,IEICE Transactions on Information and Systems, 2016, E100-D(2): 367~370",
            "Purchase Behavior of E-commerce Customer, One-stage or Two-stage? Chen Chen(#); Chunyan Hou(*); Jiakun Xiao; Xiaojie Yuan 2016 International Conference on Artificial Intelligence and Computer Science, Guilin, 2016.12.23-2016.12.25 ; EI",
            "Purchase Behavior Prediction in E-commerce with Factorization Machines Chen Chen(#); Chunyan Hou(*); Jiakun Xiao; Xiaojie Yuan,IEICE Transactions on Information and Systems, 2016, E99-D(1): 270~274",
            "Reliability Analysis for Software Cluster Systems Based on Proportional Hazard Model Chunyan Hou(#); Chen Chen(*); Jinsong Wang; Kai Shi,IEEE 40th Annual Computer Software and Applications Conference, Atlanta, 2016.7.10-2016.7.14",
            "A Scenario-Based Reliability Analysis Approach for Component-Based Software Chunyan Hou(#); Chen Chen; Jinsong Wang(*); Kai Shi,IEICE Transactions on Information and Systems, 2015, E98-D(3): 617~626",
            "Personalized Recommendation of Item Category using Ranking on Time-Aware Graphs,Chen Chen(#); Chunyan Hou(*); Peng Nie; Xiaojie Yuan,IEICE Transactions on Information and Systems, 2015, E98-D(4): 948~954",
            "Facet-based trend modeling for cold start of recommendation in social media Chen Chen(#); Chunyan Hou(*); Xiaojie Yuan IEEE International Conference on Orange Technologies, Xian, 2014.9.23-2014.9.26",
            "Software Reliability Process Simulation Considering Imperfect Debugging,Chunyan Hou; Chen Chen; Jinsong Wang; Sheng Lin,Chinese High Technology Letters, 2014.",
            "Facet-Based User Modeling in Social Media for Personalized Ranking Chen Chen; Dongxing Wu; Chunyan Hou; Xiaojie Yuan European Conference on Information Retrieval. Springer, Cham, 2014:443-448.",
            "Exploiting Social Media for Stock Market Prediction with Factorization Machine Chen Chen; Dongxing Wu; Chunyan Hou,; Xiaojie Yuan International Joint Conferences on Web Intelligence. IEEE Computer Society, 2014:142-149.",
            "Relevance Feedback Fusion via Query Expansion,Chen Chen; Chunyan Hou; Xiaojie Yuan,International Conferences on Web Intelligence and Intelligent Agent Technology. IEEE, 2013:122-126."
          ],
        },
        13:{
          id:13,
          img:require("../../../../assets/home/specialist/mashaoping1.jpg"),
          name:'马少平',
          desrc:"博士，清华大学计算机系教授，博士生导师。现任中国人工智能学会会士、副理事长，中国中文信息学会副理事长。主要从事智能信息处理方面的研究工作，包括模式识别、文本信息检索、中文古籍的数字化与检索等。作为项目负责人先后承担'973'、'863'、自然科学基金项目等多项课题。所领导的文本信息检索小组，从2002年开始，在国际上著名的TREC(文本检索国际会议)文本检索标准评测中，多次取得第一名的好成绩。",
          researchResult:{
            data:[
                {   
                  title:"国家项目：",
                  childs:[
                    {
                      text:"下一代信息检索研究，自然科学基金重点项目，与哈工大、中科院软件所共同承担"
                    },{
                      text:"基于内容的多媒体信息检索，“973”项目二级课题"
                    },{
                      text:"基于语义挖掘的智能搜索技术与评价方法，“863”项目"
                    },{
                      text:"智能信息处理的理论与方法，自然科学基金优秀创新群体项目"
                    },{
                      text:"主题无关的高质量WEB页面预选与检索，自然科学基金"
                    },{
                      text:"包含识别错误的汉语文本检索研究，自然科学基金"
                    },{
                      text:"智能信息获取理论、方法及其在网上的应用，973项目二级课题"
                    },{
                      text:"中文古籍数字化方法与系统，863项目"
                    },
                  ]
                },
                {
                  title:"部委项目：",
                  childs:[
                    {
                      text:"精品课内容专用搜索引擎，教育部"
                    },{
                      text:"互联网多媒体信息内容分析相关项目，北京市广播电视局"
                    },{
                      text:"互联网相关某项目，国家广电总局"
                    },
                  ]
                },
                {
                  title:"",
                  childs:[
                    {
                      text:"Automatic Search Engine Evaluation Using Click-through Data，微软Internet Service项目"
                    },{
                      text:"用于搜索的中文垃圾网页判别，微软项目"
                    },{
                      text:"Effective information finding and extraction，IBM项目"
                    },{
                      text:"清华—搜狐搜索技术联合实验室项目（多个）"
                    },{
                      text:"基于互联网的领域相关的情感分析资源构建，富士通项目"
                    },{
                      text:"互联网软件信息专用搜索项目，横向合作"
                    },{
                      text:"大型中文古籍识别系统，横向合作"
                    },
                  ]
                }
            ]
          },
          researchDirection:[
            {
              title:"主要研究兴趣是智能信息处理，主要集中在信息检索与Web信息挖掘等方面，尤其研究基于网络用户行为分析的语义挖掘，以改进搜索引擎的性能。受到当前技术发展的局限，网上信息的语义分析技术还非常不成熟，距离实际应用相差甚远。而随着网络技术的发展，每天有大量的用户通过域名、网页连接、搜索引擎等方式访问网页。无论采用何种方式，每个用户的访问过程都具有一定目的性，用户的每一次点击行为，从统计意义的角度来说，都隐含了一定的语义信息。从用户行为的角度——用户浏览网页时的点击信息，挖掘出隐含在用户行为背后的有意义的语义信息，以期提高搜索引擎的性能。在“互联网页面质量评估”、“互联网垃圾网页与非法资源识别”、“搜索引擎检索效果与广告效果评估”、“搜索引擎查询推荐”、“互联网用户浏览推荐”等搜索引擎技术领域开展了相关研究，取得了较好的研究成果。相关成果发表在JASIST、WWW、CIKM、WSDM等国际著名期刊与会议上，并申请国家发明专利8项（其中已获得3项授权）。研究成果同时通过“清华—搜狐”搜索技术联合实验室的校企合作平台应用到搜狗搜索引擎中，取得了良好的实际应用效果。"
            }
          ],
          thesis:[
            "2018年:",
                "Xiaohui Xie, Yiqun Liu, Maarten de Rijke, Jiyin He, Min Zhang and Shaoping Ma. Why People Search for Images using Web Search Engines. The eleventh ACM International Conference on Web Search and Data Mining (WSDM 2018) ",
                "Ning Su, Jiyin He, Yiqun Liu, Min Zhang and Shaoping Ma. User Intent, Behaviour, and Perceived Satisfaction in Product Search. The eleventh ACM International Conference on Web Search and Data Mining(WSDM 2018)",
            "2017年:",
                "Xiangsheng Li, Cheng Luo, Yiqun Liu and Shaoping Ma. Chinese Translation of SIGIR Forum 2017 ",
                "Yiqun Liu, Chao Wang, Min Zhang and Shaoping Ma. User behavior modeling for better web search ranking. Frontiers in Computer Science 2017. Preprint Version. ",
                "Ye Chen, Yiqun Liu, Min Zhang and Shaoping Ma. User Satisfaction Prediction with Mouse Movement Information in Heterogeneous Search Environment. IEEE Transactions on Knowledge and Data Engineering. (TKDE) ",
                "Fan Zhang, Yiqun Liu, Xin Li, Min Zhang, Yinghui Xu and Shaoping Ma. Evaluating Web Search with a Bejeweled Player Model. The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017 Best Student Paper Award). Preprint Version",
                "Cheng Luo, Yiqun Liu, Tetsuya Sakai, Fan Zhang, Min Zhang and Shaoping Ma. Evaluating Mobile Search with Height-Biased Gain. The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017). Preprint Version",
                "Ye Chen, Ke Zhou, Yiqun Liu, Min Zhang and Shaoping Ma. Meta-evaluation of Online and Offline Web Search Evaluation Metrics. The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017). Preprint Version Data Description Dataset",
                "Xiaohui Xie, Yiqun Liu, Xiaochuan Wang, Meng Wang, Zhijing Wu, Yingying Wu, Min Zhang and Shaoping Ma. Investigating Examination Behavior of Image Search Users. The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017). Preprint Version",
                "Jiaxin Mao, Yiqun Liu, Huanbo Luan, Min Zhang and Shaoping Ma. Understanding and Predicting Usefulness Judgment in Web Search. (Short paper). The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017). Preprint Version",
                "Cheng Luo, Yukun Zheng, Yiqun Liu, Xiaochuan Wang, Jingfang Xu, Min Zhang and Shaoping Ma. SogouT-16: A New Web Corpus to Embrace IR Research. (Short paper). The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2017). Preprint Version",
                "Zeyang Liu, Jiaxin Mao, Chao Wang, Qingyao Ai, Yiqun Liu, Jian-Yun Nie. Enhancing click models with mouse movement information. Information Retrieval Journal, 20(1), 53-80. Preprint Version. ",
                "Xiao Lin, Min Zhang, Yongfeng Zhang, Yiqun Liu and Shaoping Ma. Learning and Transferring Social and Item Visibilities for Personalized Recommendation. The 26th ACM International Conference on Information and Knowledge Management (CIKM 2017). ",
                "Bin Liu, Min Zhang, Weizhi Ma, Xin Li, Yiqun Liu and Shaoping Ma. A Two-step Information Accumulation Strategy for Learning from Highly Imbalanced Data. The 26th ACM International Conference on Information and Knowledge Management (CIKM 2017). ",
                "Yuli Liu, Yiqun Liu, Ke Zhou, Min Zhang and Shaoping Ma. Detecting Collusive Spamming Activities in Community Question Answering. The 26th International World Wide Web Conference (WWW 2017). Preprint PDF Dataset",
                "Yingying Wu, Yiqun Liu, Ning Su, Shaoping Ma and Wenwu Ou. Predicting Search Satisfaction with Electrodermal Activity. The 26th International World Wide Web Conference (WWW 2017). Preprint PDF",
                "Cheng Luo, Yiqun Liu, Tetsuya Sakai, Ke Zhou, Fan Zhang, Xue Li and Shaoping Ma. Does Document Relevance Affect the Searcher’s Perception of Time? The Tenth ACM International Conference on Web Search and Data Mining (WSDM 2017) Preprint PDF ",
                "Xin Li, Yiqun Liu, Rongjie Cai and Shaoping Ma. Investigation of User Search Behavior While Facing Heterogeneous Search Services. The Tenth ACM International Conference on Web Search and Data Mining (WSDM 2017) Preprint PDF Dataset",
                "Cheng Luo, Xue Li, Yiqun Liu, Tetsuya Sakai, Fan Zhang, Min Zhang and Shaoping Ma. Investigating Users’ Time Perception during Web Search. The 2nd ACM SIGIR Conference on Human Information Interaction & Retrieval (CHIIR 2017). Preprint PDF",
            "2016年:",
                "Yiqun Liu, Xiaohui Xie, Chao Wang, Jian-Yun Nie, Min Zhang and Shaoping Ma. Time-Aware Click Model. ACM Transactions on Information Systems (TOIS). Vol. 35, No. 3, Article 16. Preprint PDF Code Sample Data",
                "Cheng Luo, Yiqun Liu, Min Zhang, and Shaoping Ma. Search Success Evaluation with Translation Model. The 12th Asia Information Retrieval Societies Conference (AIRS2016 Best Paper Honorable Mention). Preprint PDF",
                "Yuli Liu, Yiqun Liu, Ke Zhou, Min Zhang and Shaoping Ma. Detecting Promotion Campaigns in Query Auto Completion. The 25th ACM International Conference on Information and Knowledge Management (CIKM 2016). Preprint PDF Dataset ",
                "Yiqun Liu, Zeyang Liu, Ke Zhou, Meng Wang, Huanbo Luan, Chao Wang, Min Zhang, Shaoping Ma. Predicting Search User Examination with Visual Saliency Information. The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2016). Preprint PDF Dataset",
                "Jiaxin Mao, Yiqun Liu, Ke Zhou, Jian-Yun Nie, Min Zhang, Shaoping Ma. When does Relevance Mean Usefulness and User Satisfaction in Web Search? The 39th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2016). Preprint PDF Dataset",
                "Yuli Liu, Yiqun Liu, Min Zhang and Shaoping Ma. Pay Me and I’ll Follow You: Detection of Crowdturfing Following Activities in Microblog Environment. The 25th International Joint Conference on Artificial Intelligence (IJCAI2016). Preprint PDF Dataset",
                "Chao Wang, Yiqun Liu, Shaoping Ma. Building a click model: From idea to practice. CAAI Transactions on Intelligence Technology. Volume 1(2016) 313-322. Preprint PDF",
                "Yunzhi Tan, Min Zhang, Yiqun Liu and Shaoping Ma. Rating-Boosted Latent Topics: Understanding Users and Items with Ratings and Reviews. The 25th International Joint Conference on Artificial Intelligence (IJCAI2016)",
                "Weizhi Ma, Min Zhang, Yiqun Liu and Shaoping Ma. Multi-grained Role Labeling Based on Multi-modality Information for Real Customer Service Telephone Conversation. The 25th International Joint Conference on Artificial Intelligence (IJCAI2016)",
                "Yongfeng Zhang, Qi Zhao, Yi Zhang, Daniel Friedman, Min Zhang, Yiqun Liu, Shaoping Ma. Economic Recommendation with Surplus Maximization. In Proceedings of the 25th International World Wide Web Conference (WWW 2016). Preprint PDF",
                "Cheng Luo, Fan Zhang, Xue Li, Yiqun Liu, Min Zhang, Shaoping Ma. Manipulating Time Perception of Web Search Users. First ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2016). Preprint PDF Poster",
            "2015年:",
                "Chao Wang, Yiqun Liu, Meng Wang, Ke Zhou, Jian-Yun Nie, Shaoping Ma, Incorporating Non-sequential Behavior into Click Models. Proceedings of the 38th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2015 Best Paper Honorable Mention).Preprint PDF Code and Dataset",
                "Ye Chen, Yiqun Liu, Ke Zhou, Min Zhang, Shaoping Ma. Does Vertical Bring more Satisfaction? Predicting Search Satisfaction in a Heterogeneous Environment. The 24th ACM International Conference on Information and Knowledge Management (CIKM 2015) Preprint PDF",
                "Fei Jiang, Yiqun Liu, Huanbo Luan, Jiashen Sun, Xuan Zhu, Min Zhang, Shaoping Ma. Microblog Sentiment Analysis with Emoticon Space Model. Journal of Computer Science and Technology (JCST). 2015 Preprint PDF",
                "Yiqun Liu, Ye Chen, Jinhui Tang, Jiashen Sun, Min Zhang, Shaoping Ma, Xuan Zhu, Different users, Different Opinions: Predicting Search Satisfaction with Mouse Movement Information. Proceedings of the 38th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2015).Preprint PDF ",
                "Zeyang Liu, Yiqun Liu, Ke Zhou, Min Zhang, Shaoping Ma, Influence of Vertical Result in Web Search Examination. Proceedings of the 38th ACM SIGIR International Conference on Research and Development in Information Retrieval (SIGIR2015).Preprint PDF",
                "Xin Li, Yiqun Liu, Min Zhang, Shaoping Ma, Xuan Zhu, Jiashen Sun, Detecting Promotion Campaigns in Community Question Answering, International Joint Conference on Artificial Intelligence (IJCAI 2015).Preprint PDF",
                "Ilya Markov, Aleksandr Chuklin, and Yiqun Liu. Modeling search behavior in heterogeneous environments. The First Workshop on Heterogeneous Information Access at WSDM 2015, Shanghai, China, pp. 22-24. ",
                "Yongfeng Zhang, Min Zhang, Yi Zhang, Yiqun Liu and Shaoping Ma. Daily-Aware Personalized Recommendation based on Feature-Level Time Series Analysis. The 24th International World Wide Web conference (WWW2015)",
                "Yongfeng Zhang, Yunzhi Tan, Min Zhang, Yiqun Liu, Shaoping Ma, Catch the Black Sheep: Unified Shilling Attack Detection based on Fraudulent Action Propagation. International Joint Conference on Artificial Intelligence (IJCAI 2015). ",
            "2014年:",
                "Yiqun Liu, Ruihua Song, Min Zhang, Zhicheng Dou, Takehiro Yamamoto, Makoto Kato, Hiroaki Ohshima, Ke Zhou. Overview of the NTCIR-11 IMine Task. Proceedings of the 11th NTCIR conference. ",
                "Yiqun Liu, Chao Wang, Ke Zhou, Jianyun Nie, Min Zhang, Shaoping Ma, From Skimming to Reading: A Two-stage Examination Model for Web Search, The 23rd ACM International Conference on Information and Knowledge Management (CIKM 2014) Preprint PDF Data Set SLIDES,Shuai Huo, Min Zhang, Yiqun Liu, Shaoping Ma, Improving Tail Query Performance by Fusion Model. The 23rd ACM International Conference on Information and Knowledge Management (CIKM 2014) ",
                "Yongfeng Zhang, Min Zhang, Yi Zhang, Yiqun Liu, Shaoping Ma, Understanding the Sparsity: Augmented Matrix Factorization with Sampled Constraints on Unobservables. The 23rd ACM International Conference on Information and Knowledge Management (CIKM 2014)",
                "Xin Li, Yiqun Liu, Min Zhang, Shaoping Ma, Fraudulent Support Telephone Number Identification Based on Co-occurrence Information on the Web, Proceedings of the Twenty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2014). Preprint PDF Data Set",
                "Yongfeng Zhang, Guokun Lai, Min Zhang, Yi Zhang, Yiqun Liu, Shaoping Ma. Explicit Factor Models for Explainable Recommendation based on Phrase-level Sentiment Analysis, The 37th ACM SIGIR conference (SIGIR 2014). Preprint PDF ",
                "Yongfeng Zhang, Haochen Zhang, Min Zhang, Yiqun Liu, Shaoping Ma. Do users rate or review?: boost phrase-level sentiment labeling with review-level sentiment classification. The 37th ACM SIGIR conference(SIGIR 2014). ",
                "Xiangnan He, Ming Gao, Min-Yen Kan, Yiqun Liu, Kazunari Sugiyama. Predicting the Popularity of Web 2.0 Items Based on User Comments. The 37th ACM SIGIR conference (SIGIR 2014)",
                "Xin Li, Min Zhang, Yiqun Liu, Shaoping Ma, Yijiang Jin and Liyun Ru. Search Engine Click Spam Detection Based on Bipartite Graph Propagation. Proceedings of the 7th ACM International Conference on Web Search and Data Mining (WSDM 2014). Preprint PDF",
                "Fei Chen, Yiqun Liu, Jian Li, Min Zhang and Shaoping Ma. A Pruning Algorithm for Optimal Diversified Search. Poster proceedings of the 23th International World Wide Web conference (WWW2014). Preprint PDF",
                "Jiaxin Mao, Yiqun Liu, Min Zhang and Shaoping Ma. Social Influence Analysis for Microblog User based on User Behavior. Chinese Journal of Computer. 37(4):1-10. (in Chinese) Preprint PDF",
                "Zeyang Liu, Yiqun Liu, Min Zhang, and Shaoping Ma. How Do Sponsored Search Results Affect User Behavior in Web Search? Proceedings of the 10th Asia Information Retrieval Society Conference (AIRS 2014). Preprint PDF Data Set",
                "Fei Chen, Yiqun Liu, Zhicheng Dou, Keyang Xu, Yujie Cao, Min Zhang, and Shaoping Ma. Revisiting the Evaluation of Diversified Search Evaluation Metrics with User Preferences. Proceedings of the 10th Asia Information Retrieval Society Conference (AIRS 2014). Preprint PDF",
                "Cheng Luo, Yiqun Liu, Min Zhang, and Shaoping Ma. Query Ambiguity Identification Based on User Behavior Information. Proceedings of the 10th Asia Information Retrieval Society Conference (AIRS 2014). Preprint PDF",
                "Haochen Zhang, Min-Yen Kan, Yiqun Liu, and Shaoping Ma. Online Social Network Profile Linkage. Proceedings of the 10th Asia Information Retrieval Society Conference (AIRS 2014). Preprint PDF",
                "Jiaxin Mao, Yiqun Liu, Min Zhang, and Shaoping Ma. Estimating Credibility of User Clicks with Mouse Movement and Eye-tracking Information. The 3rd CCF Conference on Natural Language Processing & Chinese Computing (NLPCC 2014). Preprint PDF ",
                "Bin Liang, Yiqun Liu, Min Zhang, Shaoping Ma, Liyun Ru, Kuo Zhang: Searching for people to follow in social networks. Expert System with Applications 41(16): 7455-7465 (2014) ",
                "Fei Jiang, Yiqun Liu, Huanbo Luan, Min Zhang, and Shaoping Ma. Microblog Sentiment Analysis with Emoticon Space Model. The 3rd National Conference on Social Media Processing (SMP2014). Preprint PDF",
            "2013年:",
                "Qianli Xing, Yiqun Liu, Min Zhang, Shaoping Ma, Jianyun Nie, Kuo Zhang. Incorporating User Preferences into Click Models. The 22nd ACM International Conference on Information and Knowledge Management (CIKM 2013) Preprint PDF ",
                "Jian Liu, Yiqun Liu, Min Zhang, Shaoping Ma, Kuo Zhang. A Study of Long-term Search Engine Users' Behavior. The 22nd ACM International Conference on Information and Knowledge Management (CIKM 2013) (short paper) Preprint PDF ",
                "Qianli Xing, Yiqun Liu, Min Zhang, Shaoping Ma, and Kuo Zhang. Characterizing Expertise of Search Engine Users. The ninth Asian Information Retrieval Societies Conference (AIRS 2013) Preprint PDF ",
                "Cheng Luo, Yiqun Liu, Shaoping Ma, Min Zhang, Liyun Ru, and Kuo Zhang. Pornography Detection with the Wisdom of Crowds. The ninth Asian Information Retrieval Societies Conference (AIRS 2013) Preprint PDF",
                "Yiqun Liu, Jie Tang. Introduction to the 22nd World Wide Web conference. Communications of the CCF 9(6):61-64. 2013.6. (in Chinese) Preprint PDF ",
                "Yongfeng Zhang, Min Zhang, Yiqun Liu, Shaoping Ma and Shi Feng. Localized Matrix Factorization for Recommendation based on Matrix Block Diagonal Forms. The 22nd International World Wide Web conference (WWW2013). pp.1511-1520. PDF ",
                "Chao Wang, Yiqun Liu, Min Zhang, Shaoping Ma, Meihong Zheng, Jing Qian, Kuo Zhang. Incorporating Vertical Results into Search Click Models. The 36th ACM SIGIR conference (SIGIR 2013). Preprint PDF",
                "Jianxun Cao, Yiqun Liu, Rongwei Cen, Shaoping Ma, Liyun Ru. Identifying Porn Sites with User Behavior Analysis. Journal of Computer Research and Development. 50(2):430-436. 2013 (in Chinese) ",
                "Yongfeng Zhang, Min Zhang, Yiqun Liu, Shaoping Ma. Improve Collaborative Filtering Through Bordered Block Diagonal Form Matrices. The 36th ACM SIGIR conference (SIGIR 2013). ",
          ],
        },
        // 14:{
        //   id:14,
        //   img:require("../../../../assets/home/specialist/lijuanzi1.jpg"),
        //   name:'李娟子',
        //   desrc:"博士，清华大学教授，计算机科学与技术系软件研究所副所长，知识工程研究室主任。中国中文信息学会常务理事，中国计算机学会: 中文信息技术专业委员会委员，在清华大学获得博士学位，2001年博士后出站后留校工作至今，多篇论文发表在重要国际会议(如 WWW、SIGMOD、SIGMOD、SIGIR、ISWC、SIGKDD) 和学术期刊(JoWS、TKDE、JoDS)。主持多项国家级、部委级和国际合作项目研究,包括国家自然科学项目重点,以及欧盟第七合作框架、新华社、国家环保总局等项目。获得2013年人工智能学会创新一等奖，2013 年电子学会自然科学二等奖,2011年王选新闻科学技术进步奖一等奖。",
        //   researchResult:{
        //     data:[
        //       {
        //         title:"国家自然科学基金项目: 大规模动态本体映射模型研究 ；"
        //       },{
        //         title:"国家自然科学基金项目: 限定领域中基于语义的内容管理的关键技术及应用;"
        //       },{
        //         title:"国家自然科学基金项目: 分布式本体系统中本体粒度划分机制研究;"
        //       },{
        //         title:"973二级课题: 需求模型验证与管理;"
        //       },{
        //         title:"新华社项目: “中文新闻信息置标语言CNML”标准管理系统;"
        //       },{
        //         title:"国家环境保护部项目: 处置环境与核恐怖袭击事件应急项目——核与辐射环境数据交换技术规范与应用接口开发;"
        //       },{
        //         title:"IBM国际合作项目: 智慧城市中集群体智慧的数据间关联关系挖掘;"
        //       },{
        //         title:"IBM国际合作项目: 基于主动学习的大规模本体映射的语义集成方法研究;"
        //       },{
        //         title:"IBM国际合作项目: 分布知识库查询关键技术;"
        //       },{
        //         title:"IBM国际合作项目: 语义内容管理关键技术;"
        //       },{
        //         title:"“清华—鲁汶”国际合作研究项目: Webinsight：万维网文档关联和演化分析模型研究；"
        //       },{
        //         title:"国家自然科学基金重点项目：基于云计算的海量数据挖掘关键技术；"
        //       },{
        //         title:"新华社项目：“中文新闻信息置标语言CNML”标准管理系统升级；"
        //       },
        //     ]
        //   },
        //   researchDirection:[
        //     {
        //       title:"融合语义Web、文本与社会网络挖掘技术，研究基于语义的内容管理关键技术，并应用于包括新闻、研究者社会网络和Web服务在内的多个领域。主要工作包括："
        //     },{
        //       title:"基于语义的内容管理关键技术。在本体映射研究中，提出基于贝叶斯决策的多策略本体映射模型，解决了多种映射策略的融合问题；提出动态选择的多策略本体映射模型，解决了针对不同本体映射任务，动态选择映射策略的问题，并进一步提高了映射精度。研究成果发表在SIGMOD、Journal of Web Semantics（JoWS）和TKDE等国际重要学术期刊和会议上 。据Google Scholar统计，发表在JoWS上的论文被引用73次。在语义标注研究中，针对标注对象所具有的不同特点，研究不同的语义标注方法，提出基于规则、分类模型和序列模型的条件随机场的三类语义标注方法。这些标注方法已经成功应用于研究者个人信息、会议信息和公司信息的语义标注中，取得了良好的应用效果。上述研究工作得到国家自然科学基金和973项目的支持。"
        //     },{
        //       title:"新闻与社会网络挖掘。在新闻挖掘中，提出基于索引树和命名实体的话题发现和跟踪模型、基于话题的新闻分析模型，研究成果发表在SIGIR 2007，并在SIGKDD 2009上做demo演示；在社会网络挖掘研究中，提出面向专家的研究者社会网络搜索模型，并对专家发现、研究兴趣发现和会议挖掘等问题进行了深入研究。"
        //     },{
        //       title:"新闻领域XML数据处理应用研究。我是国家标准 “中文新闻信息标识语言（CNML）”（GB/T20092-2006）的第四起草人，并作为项目负责人，承担了CNML标准管理系统的研制任务。目前，该软件部署在新华社文字编辑系统、图片编辑系统、信息部多媒体编辑系统、多媒体数据库、视音频编辑系统、产品生成系统等重要业务系统中，全面满足了技术建设和日常运维的需求。该项目获得“2009年王选新闻科学技术进步二等奖”。"
        //     }
        //   ],
        //   thesis:[
        //     "Zi Yang, Jie Tang, Juanzi Li, Social Community Analysis via Factor Graph Model. IEEE Intelligent Systems. (accepted)",
        //     "Ali Daud, Juanzi Li, Lizhu Zhou, and Faqir Muhammad. Temporal Expert Finding through Generalized Time Topic Modeling. Knowledge Based System Journal. (Accepted)",
        //     "Zhifeng Gu, Bin Xu, Juanzi Li, Service Data Correlation Modeling and Its Application in Data-Driven Service Composition, IEEE Trans. Service Computing. (Accepted)",
        //     "Juanzi Li, Jie Tang begin_of_the_skype_highlightingend_of_the_skype_highlighting, Yi Li, Qiong Luo: RiMOM: A Dynamic Multistrategy Ontology Alignment Framework. IEEE Trans. Knowl. Data Eng. 21(8): 1218-1232 (2009)",
        //     "Gang Wu, Juan-Zi Li, Jianqiang Hu, Kehong Wang: System Pi: A Native RDF Repository Based on the Hypergraph Representation for RDF Data Model. J. Comput. Sci. Technol. 24(4): 652-664 (2009)",
        //     "Jie Tang, Juanzi Li, Bangyong Liang, Xiaotong Huang, Yi Li, and Kehong Wang, Using Bayesian Decision for Ontology Mapping. Journal of Web Semantics: Science, Services and Agents on the World Wide Web, Vol(4) 4:243-262, December 2006.",
        //     "Qian Zhong, Hanyu Li, Juanzi Li, Guo Tong Xie, Jie Tang, Lizhu Zhou and Yue Pan: A Gauss Function based Approach for Unbalanced Ontology Matching. Proc. 35th International Conference on Management of Data(SIGMOD2009), Providence, Rhode Island, USA, 2009: 669-680.",
        //     "Feng Shi, Juanzi Li, Jie Tang, Guotong Xie, Hanyu Li, Actively Learning Ontology Matching via User Interaction, Proc. 2009 International Semantic Web Conference (ISWC2009), Washington D.C, USA, 2009 : 585-600.",
        //     "Ali Daud, Juanzi Li, Lizhu Zhou, and Faqir Muhammad. Conference Mining via Generalized Topic Modeling. Proc. International European Conference on Machine Learning and Principles and Practices of Knowledge Discovery in Databases (ECML PKDD2009), Bled, Slovenia, 2009: 244–259.",
        //     "Gang Wu, Juanzi Li, Ling Feng, Kehong Wang, Identifying Potentially Important Concepts and Relations in an Ontology, Proc. 2008 International Conference on Semantic Web (ISWC2008), Karlsruhe, Germany, 2008:33-49",
        //     "Xin Xin, Juanzi Li, Jie Tang, Qiong Luo, Academic Conference Homepage Understanding Using Constrained Hierarchical Conditional Random Fields, Proc. the 17th ACM Conference on Information and Knowledge Management(CIKM2008), Napa Valley, California, 2008: 1301-1310",
        //     "Zhifeng Gu, Juanzi Li, Bin Xu, Automatic Service Composition Based on Enhanced Service Dependency Graph, Proc. the IEEE International Conference on Web Services (ICWS2008), Beijing, China, 2008: 246-253",
        //     "Jie Tang, Jing Zhang, Limin Yao, Juanzi Li, Li Zhang, and Zhong Su. Extraction and Mining of Academic Social Network. Proc. Fourteenth ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (SIGKDD2008), Las Vegas, Nevada, USA, ACM 2008: 990-998.",
        //     "Kuo Zhang, Juanzi Li, Gang Wu, Event Detection Based on Indexing-tree and Named Entity, Proc. 30th Annual International ACM SIGIR Conference on Research and Development in Information Retrieval(SIGIR2007), Amsterdam, The Netherlands, ACM 2007: 215-222",
        //     "Duo Zhang, Jie Tang, Juanzi Li, and Kehong Wang. A Constraint-Based Probabilistic Framework for Name Disambiguation. Proc. Sixteenth Conference on Information and Knowledge Management (CIKM2007), Lisbon, Portugal.: 1019-1022",
        //     "Jie Tang, Mingcai Hong, Juanzi Li, Bangyong Liang, Tree-structured conditional random fields for semantic annotation, Proc. 5th International Conference of Semantic Web (ISWC2006). Athens, GA, USA:640-653.",

        //   ],
        // },
        15:{
          id:15,
          img:require("../../../../assets/home/specialist/wanghoufeng1.jpg"),
          name:'王厚峰',
          desrc:"博士， 北京大学信息科学技术学院教授，计算语言学研究所所长。主要从事自然语言处理相关的研究，包括语言知识资源建设、文本观点挖掘、命名实体识别与歧义消解、智能问答等。1986年获武汉大学学士学位，1989年获中国科学院计算技术研究所硕士学位，1998年获武汉大学博士学位。1989-1998年在华中师范大学任教，1998-2000年在中国科学院声学研究所从事博士后研究，2000年起在北京大学信息科学技术学院任教，现为教授、博士生导师，计算语言学研究所所长。中国中文信息学会常务理事。2002-2003年在新加坡国立大学短期访问4个月。主持国家863、国家自然科学基金、国家社科基金、国际合作等项目十余项。发表论文60多篇。",
          researchResult:{
            data:[
              {
                title:"国家863项目“大规模中文语义信息处理技术与系统”的首席专家"
              },{
                title:"国家社科基金重大项目“面向网络文本的多视角语义分析方法、语言知识库及平台建设研究”的首席专家。"
              },{
                title:"构建的语言资源库转让给多家企业或研究机构。"
              },{
                title:"国家自然科学基金：汉语指代消解与多文本交叉共指"
              },{
                title:"国家自然科学基金：基于汉英句对库的句子结构推导和翻译模板获取研究"
              },{
                title:"国家社科基金：基于指代链的汉语文本主题分析研究"
              },{
                title:"北京市自然科学基金：基于词汇衔接关系的汉语文本关键词获取研究"
              },{
                title:"国家自然科学基金：指定话题的汉语文本主观倾向性分析"
              },{
                title:"国家自然科学基金：汉语缩略语识别以及歧义消解技术研究"
              },{
                title:"博士点基金：汉语实体指称语的识别及同指消解方法研究"
              },{
                title:"国家自然科学基金（重大研究计划）：基于互联网的突发事件信息动态检测、抽取与融合研究"
              },{
                title:"863项目：大规模汉语语义基础资源库和知识库设计构建工具平台"
              }
            ]
          },
          researchDirection:[
            {
              title:"主要研究兴趣为自然语言处理和机器学习，近年研究工作主要集中于大规模语言知识获取和语义分析技术，观点挖掘，文本推理和问答系统等。"
            }
          ],
          thesis:[
            "Xu Sun, Xuancheng Ren, Shuming Ma, Houfeng Wang. meProp: Sparsified Back Propagation for Accelerated Deep Learning with Reduced Overfitting，ICML 2017",
            "Yizhong Wang, Sujian Li, Houfeng Wang. A Two-Stage Parsing Method for Text-Level Discourse Analysis. ACL2017(outstanding paper)",
            "Qing Zhang, Houfeng WANG. Noise-Clustered Distant Supervision for Relation Extraction: A Nonparametric Bayesian Perspective. EMNLP2017",
            "Dehong Ma, Sujian Li, Xiaodong Zhang, Houfeng Wang. Interactive Attention Networks for Aspect-Level Sentiment Classification. IJCAI2017",
            "Xiaodong Zhang , Sujian Li, Lei Sha1, Houfeng Wang. Attentive Interactive Neural Networks for Answer Selection in Community Question Answering. AAAI2017",
            "Rui Cai,Xiaodong Zhang and Houfeng Wang. Bidirectional Recurrent Convolutional Neural Network for Relation Classi?cation. ACL2016",
            "Chen Shi, Shujie Liu, Shuo Ren, Shi Feng, Mu Li, Ming Zhou, Xu Sun, Houfeng Wang. Knowledge-Based Semantic Embedding for Machine Translation. ACL2016",
            "Xiaodong Zhang, Houfeng Wang. A Joint Model of Intent Determination and Slot Filling for Spoken Language Understanding. IJCAI2016",
            "Qing Zhang, Houfeng Wang. Collaborative Filtering with Generalized Laplacian Constraint via Over lapping Decomposition. IJCAI2016",
            "Qing Zhang, Houfeng Wang. Not All Links Are Created Equal: An Adaptive Embedding Approach for Social Personalized Ranking. SIGIR2016",

          ],
        },
        16:{
          id:16,
          img:require("../../../../assets/home/specialist/xunendong1.jpg"),
          name:'荀恩东',
          desrc:"博士，北京语言大学教授，博士生导师，教育部新世纪优秀人才，中国计算机学会名词专委会副主任，中国标准化研究院特聘研究员。主要从事自然语言语言处理、计算机辅助语言学习技术研究和开发工作。1999毕业于哈尔滨工业大学计算机应用与科学系，获得计算机应用专业博士学位。1999年～2001年微软亚洲研究院副研究员。2001年～2003年通过'香港引入优秀人才计划'，在香港科技大学工作。发表研究论文数十篇，主持多项国家863计划和国家自然科学基金项目，承担多项部委和公司合作的项目。",
          researchResult:{
            data:[
              {
                title:"大数据背景下汉语句法语义分析技术，具有较好的可计算性和较高的形式化程度。研发面向实际应用的、具有高鲁棒性、高正确率和低时间复杂度的中文句法语义分析器。分析器可协调句法、语义和语用三个语言层面的互动，做到语义分析以句法结构为指导，以语言应用中的语用需求为牵引。分析器的设计和实现要考虑实现符号计算、统计计算和联结计算融合的方法。重点以汉语为核心，构建谓词句法及其论元结构资源，通过深度学习方法，学习句法和语义嵌入算法，构建歧义消解模型，采用网格分析技术进行句法分析选优。技术研究语言大数据下，语言知识获取途径和方法。以BCC为基础，建立汉语言大数据管理和应用的技术平台，采用语言学的变换方法，建立语言变换表达式，抽取各种结构类型的语块实例，包括连续语块、词语搭配、框架式表达和离合词语等。这一汉语句法语义分析工具，可为汉语教学、汉语研究、深度汉语信息处理提供服务。"
              },{
                title:"BCC汉语语料库：总字数约 150 亿字，包括：报刊（20 亿）、文学（30 亿）、微博（30 亿）、科技（30 亿）、综合（10 亿）和古汉语（20 亿）等多领域语料，是可以全面反映当今社会语言生活的大规模语料库。BCC汉语语料库，总字数约 150 亿字，包括：报刊（20 亿）、文学（30 亿）、微博（30 亿）、科技（30 亿）、综合（10 亿）和古汉语（20 亿）等多领域语料，是可以全面反映当今社会语言生活的大规模语料库。http://bcc.blcu.edu.cn/",
                childs:[
                    {
                      text:"检索：在单句范围内，检符合检索式的语言片段。"
                    },{
                      text:"筛选：输入检索式得到检索结果，如果想对检索结果进一步筛选，可以使用筛选功能，对检索结果进一步剔除或者仅仅保留符合筛选检索式的实例。"
                    },{
                      text:"统计：统计符合检索式的语言片段出现的频次。"
                    },{
                      text:"查看：查看出处和更多上下文。"
                    },{
                      text:"下载：下载检索或统计结果，登录用户可以下载10000条，非登录用户下载1000条。"
                    },{
                      text:"高级：设置检索结果的显示形式，控制上下文字数。"
                    },{
                      text:"句法树：仅可在汉语树库和英语树库中使用。能查看该句子实例的句法树。"
                    },{
                      text:"历时检索：给出检索式历年的出现频次和频率，可切换为柱状图、折线图两种显示方式。"
                    },{
                      text:"自定义检索：在限定语料中检索。"
                    }
                ]
              },{
                title:"汉语老师可以快速地制作生动活泼的教学课件，每个课件由多张交互式的多媒体卡片组成。课件发布后，老师在上课时可以从云端下载和全屏播放课件，课后学生还可以在手机或平板电脑上浏览，不需要安装任何插件。由于每张卡片都是交互式的，学生可以用点击、滑动等常见的交互方式来浏览，真正做到了课上课下一体，随时随地学习。“卡片汉语”提供了多种知识卡片的模板，还有一个常用的知识卡片库供老师选用，如对6763个常用汉字制作了包含笔顺、发音、拼音的字卡；对汉语水平考试（HSK）3级词汇制作了包含拼音、例句和配图的词卡；对基础语法点制作了包含微视频的情景对话卡等等。在卡片制作界面中，老师可以定制自己的卡片，也可以上传自己的图片、声音、视频，还可以录制自己的声音。这些上传的资源经过质量和重复度审核后，进入网站资源库，成为公共资源。"
              },{
                title:"汉字字形计算系统（帮助学生书写汉字）以学习汉字书写的学生为研究对象，采用数字媒体处理、模式识别、机器学习等信息技术，对汉字书写正确性和规范性的自动评测进行基础理论和应用技术方面的研究。其目标是实现计算机辅助的、无人值守的汉字书写教学和评测。"
              },{
                title:"非母语写作水平计算机自动评测技术：研究非母语学生作文的计算机评测系统的技术，以非母语教学中中介语语料库为训练语料, 建立写作水平计算机自动评测数学统计模型和基于Internet网络的写作水平自动评测原型系统。目前主要以外国人学习汉语的作文评阅为背景，研究成果将直接服务于我国对外汉语教学的汉语水平考试（HSK），为HSK考试实现计算机自动做汉语写作水平评测做前期理论和实践研究。同时作为一种自测手段，帮助外国人学习和提高中文写作水平。"
              },
            ]
          },
          researchDirection:[
            {
              title:"基于汉语大数据语言知识抽取、汉语句法语义分析、语言资源建设。"
            }
          ],
          thesis:[
            "荀恩东，李生，英汉机器翻译中基于目标语同现的词义消歧方法1999 情报学报",
            "Xun, Endong, A New Rule Processing Method Based on Decision Trees 1999 高技术通讯(英文版)",
            "荀恩东，李生，匹配树和决策树方法识别英语句子中的BaseNPs 1999 计算机研究与发展",
            "Xun Endong, Decision Tree Based Rule Processing in Machine Translation 1999 The Second International Conference on Multimodal Interface",
            "Xun Endong ,Huang hangning, A unified statistical model for identification of English baseNP 2000 Annual computing linguistics",
            "Gao Jianfeng, Xun Endong , TREC-9 CLIR experiments at MSRCN 2001 the Ninth Text Retrieval Conference",
            "Xun Endong ,Extract Chinese Term definition from database and Internet 2003 the 6th East Asia Forum on Terminology",
            "颜伟，荀恩东，基于WordNet的英文词语相似度计算 2004 第二届全国学生计算语言学研讨会论文集",
            "王洁，荀恩东，兼类词排岐的一种方法 2004 第二届全国学生计算语言学研讨会论文集",
            "荀恩东，钱揖丽，应用二叉树剪枝识别韵律短语边界，2006，中文信息学报，第三期",
            "荀恩东，颜伟，基于语义网计算英语词语相似度，2005，情报学报，第一期",
            "荀恩东，宋柔，非母语写作水平自动评测，2006, 哈佛大学汉语书面语研讨会",

          ],
        },
        17:{
          id:17,
          img:require("../../../../assets/home/specialist/huangheyan1.jpg"),
          name:'黄河燕',
          desrc:"博士、教授、博士生导师 ；北京理工大学计算机学院院长；中国人工智能学会副理事长；中国中文信息学会副理事长；北京市海量语言信息处理与云计算应用工程技术研究中心主任及中-德语言信息处理联合实验室主任。主要学术研究方向为机器翻译和自然语言处理 ，主持承担了国家自科基金重点项目、“973计划”课题、“863计划”项目等20多项国家级科研攻关项目，获得了国家科技进步一等奖等十余项国家级和省部级奖励，1997年享受国务院政府特殊津贴 。",
          // researchResult:{
          //   data:[
          //     {
          //       title:"工信部电子发展基金 基于自然语音人机交互的信息搜索系统研发和产业化"
          //     },{
          //       title:"863计划项目   云服务与管理平台核心软件及系统"
          //     },{
          //       title:"973课题    面向言语的多策略融合机器翻译方法"
          //     },{
          //       title:"973子课题   社交网络的传播基础理论研究"
          //     },{
          //       title:"自科基金重点项目 基于本体的多策略民汉机器翻译研究"
          //     },{
          //       title:"国家科技支撑计划 协同式多语言云翻译服务平台与应用 GF基础科研项目  ***知识库与知识库管理系统 “中国盲文智能处理关键技术与应用”获北京市科学技术奖一等奖"
          //     },{
          //       title:"“在线社交网络分析关键技术及系统”获国家科学技术进步奖二等奖"
          //     },{
          //       title:"“多策略智能辅助翻译系统及工程管理平台”获北京市科学技术奖三等奖：为了改善实用机器翻译系统的翻译处理效果 ,提出一种基于多策略的交互式智能辅助翻译平台的总体设计方案 该系统基于多知识一体化表示、多种翻译处理策略、多种翻译知识获取方式、多策略译文选优等 ,并采用面向对象的多类型知识数据库管理 ,有效实现了多策略、多知识的交互式智能处理 平台实现基于规则分析、基于类比推理和统计知识的多翻译模式集成处理 ,提供人机交互接口 ,实现人工对翻译结果的干预 ,以及面向对象的工程、任务管理和用户管理"
          //     },{
          //       title:"跨语言信息检索处理平台：跨语言信息检索结合了传统文本信息检索技术和机器翻译技术，并根据跨语言检索的特点优化了传统的机器翻译技术，采用基于大规模双语语料知识库，以向量空间模型和词汇同现互信息为理论基础，运用传统单语信息检索技术，实现的一种查询语句翻译转换的有效方法。"
          //     },{
          //       title:"基于领域本体的知识管理平台：该平台针对各领域内项目流程日趋复杂的现状，研究开发流程设计器使管理人员可以将一个项目分为多个流程，分配给各部门的相应人员去完成，充分发挥知识管理平台的强大作用；利用自然语言处理技术，获取并存储用户工作过程中产生的领域知识，实现领域知识的积累"
          //     }
          //   ]
          // },
          // researchDirection:[
          //   {
          //     title:"机器翻译、自然语言处理和智能应用系统。"
          //   }
          // ],
          // thesis:[
          //   "[1] Lizi Liao, Jing Jiang, Ying Ding, Heyan Huang*, Ee-Peng Lim，Lifetime Lexical Variation on Social Media，AAAI 2014.",
          //   "[1] Lizi Liao, Jing Jiang, Ying Ding, Heyan Huang*, Ee-Peng Lim，Lifetime Lexical Variation on Social Media，AAAI 2014.",
          //   "[3] Xin Xin, Zhirun Liu, Heyan Huang, A Nonlinear Cross-site Transfer Learning Approach for Recommender Systems, ICONIP 2014.",
          //   "[4] 张华平，高凯，黄河燕等，《大数据搜索与挖掘》， ISBN: 978-7-03-040318-6，科学出版社，2014.4",
          //   "[5] Yashen Wang, Chong Feng, Quanchao Liu, and Heyan Huang. Chinese Evaluation Phrase Extraction Based on Cascaded Model，WAIM 2014.",
          //   "[6] Chong Feng, Chun Liao, Zhirun Liu, Heyan Huang, A Hybrid Method of Sentiment Key Sentence Identification using Lexical Semantics and Syntactic Dependencies, SNA 2014.",
          //   "[7] 鹿文鹏, 黄河燕. 基于依存适配度的知识自动获取词义消歧方法. 软件学报, 2013(10).",
          //   "[8] Yashen Wang, Heyan Huang and QuanchaoLiu. Emotional Element Extraction Based on CRFs, ISKE 2013.",
          //   "[9] Wei Xiaochi, Huang Heyan, Xin Xin, Yang Xianxiang. Distinguishing Social Ties in Recommender Systems by Graph-Based Algorithms, WISE 2013.",
          //   "[10] Yashen Wang, Quanchao Liu, Heyan Huang, Feiyu Xu, Hans Uszkoreit, Evaluation Phrase Extraction Based on CRFs, PANSOM 2013.",
          //   "[11] Xin Xin, Kun Zhuang, Ying Fang, Heyan Huang, Online Cross-lingual PLSI for Evolutionary ThemePatterns Analysis, PAKDD 2013.",
          //   "[12] Kun Zhuang, Heyan Huang, etc., A Unified Generative Model for Characterizing Microblogs’ Topics, WAIM 2013.",
          //   "[13] Quanchao Liu, Heyan Huang, Chong Feng, Micro-post Topic Drift Detection Based on LDA Model, BSI 2013.",
          //   "[14] 杨陟卓,黄河燕. 基于词语距离的网络图词语消歧.软件学报,2012,23(4):776-785",
          //   "[15] ChaoyongZhu, Heyan Huang, Shumin Shi.Hierarchical Domain Assignment based on Word-Gloss China Communications,2012,9(3) SCI",
          //   "[16] Xin Xin, Irwin King, Ritesh Agrawal, Michael R. Lyu, Heyan Huang,Do Ads Compete or Collaborate? Designing Click Models with Full Relationship Incorporated In Proceedings of CIKM 2012. ",
          //   "[17] Quanchao Liu, Chong Feng, Heyan Huang. Emotional Tendency Identification for Micro-blog Topics Based on Multiple Characteristics. 26th Pacific Asia Conference on Language, Information and Computation (PACLIC26), 2012.",
          //   "[18] Quanchao Liu, Heyan Huang, Changzhi Wang, Chong Feng. A New Algorithm of Extracting Maximal-Length Evaluation Phrase and Collocation of Evaluation. 2012 2nd IEEE International Conference on Cloud Computing and Intelligence Systems (IEEE CCIS2012), 2012.",
          //   "[19] Huang Heyan, Yang Zhizhuo, Jian Ping, Unsupervised Word Sense Disambiguation Using Neighborhood Knowledge, 25th Pacific Asia Conference on Language, Information and Computation (PACLIC25),2011.",
          //   "[20] Wen-Peng Lu, He-Yan Huang. Knowledge-based Word Sense Disambiguation with Feature Words Based on Dependency Relation and Syntax Tree. International Journal of Advancements in Computing Technology. 2011",
          //   "[21] Heyan Huang, Chong Feng, Jiande Wang, Xiaofei Zhang. ASR Normalization for Machine Translation 2nd International Conference on Intelligent Human-Machine Systems and Cybernetics (IHMSC 2010), 2010.",

          // ],
        },
        18:{
          id:18,
          img:require("../../../../assets/home/specialist/zhaoxiaobing1.jpg"),
          name:'赵小兵',
          desrc:"中央民族大学信息工程学院教授，博士生导师，中国中文信息学会理事，国家语言资源监测与研究中心少数民族语言分中心副主任。韩国青云大学信息产业大学院 “人工智能”方向硕士学位；北京语言大学获“计算语言学”方向博士学位。主持国家自然科学基金等各类科研课题25项，其中已结题16项，6项通过省部级以上科研主管部门组织的专家技术鉴定；目前在研课题9项，包括国家级项目技术负责人2项、主持省部级重点项目2项，省部级课题3项、校重大孵化课题1项、中科院横向研究课题1项等。发表学术论文50余篇，其中核刊26篇、EI检索12篇；主编教材1部、专著4部；获国家发明专利1项、软著2项；获“钱伟长中文信息处理科技进步一等奖”1项、“教育部科技进步二等奖”1项、国家档案局“科技成果一等奖”1项、“内蒙古高等教育教学成果二等奖”1项、“内蒙古科技进步三等奖”2项、“北京语言大学优秀博士论文”等各类科研教学成果奖励共15项；2006被评为“全国信息界百名学科带头人”。 ",
          researchResult:{
            data:[
              {
                title:"统一平台民族文字（蒙藏维哈柯朝）文档识别系统，获“钱伟长中文信息处理科技进步一等奖”；"
              },{
                title:"国家自然科学基金，跨语言社会舆情分析基础理论与关键技术研究；"
              },{
                title:"国家自然科学基金，基于动态流通语料库的汉语基本词汇特征曲线跟踪及提取研究；"
              }
            ]
          },
          researchDirection:[
            {
              title:"蒙语、藏语等民族语言的自然语言处理"
            }
          ],
          thesis:[
            "基于知识融合的CRFs藏文分词系统 ，《中文信息学报》 2015；",
            "基于栏目的藏文网页文本自动分类方法，《中文信息学报》 2011；",
            "藏文词级处理研究现状及热点方法，《电脑知识与技术》 2015；",
            "国内计算机辅助翻译综述，《首都师范大学学报(自然科学版)》2017；",
            "藏文自动分词技术研究综述，《科技视界》2016；",
            "一种实例库与义原关系相结合的概念消歧算法，《首都师范大学学报(自然科学版)》2016；",
            "基于动态流通语料库的现代汉语基本词汇自动识别与提取方法研究，《北京语言大学》2007；",
            "多民族语言本体知识库构建技术，《中文信息学报》2011；",
            "多民族文字信息处理的计算机平台研制，《内蒙古师范大学学报(自然科学汉文版)》 2000；",
            "藏文语义本体中的上下位关系模式匹配算法，《中文信息学报》2011；",
            "《蒙汉双语教学软件系统》设计与研制，《中国民族教育》2000；",

          ],
        },
        19:{
          id:19,
          img:require("../../../../assets/home/specialist/zhaojun1.jpg"),
          name:'赵军',
          desrc:"博士，中科院自动化所研究员，博士生导师。1998年在清华大学计算机科学与技术系获得博士学位。1998年—2002年在香港科技大学计算机科学系做博士后、访问学者。2002年5月至今在中科院自动化所模式识别国家重点实验室工作。目前主持国家自然科学基金、863计划、中国出版集团科技项目等项目。在IEEE TKDE、JMLR等顶级国际期刊和ACL、SIGIR、CIKM、AAAI、IJCAI、EMNLP、COLING等顶级国际会议上发表论文六十余篇，获COLING-2014最佳论文奖，获KDD-CUP2011亚军（2/1297）。研发了汉语文本分析、信息抽取和知识工程、百科问答等软件工具和平台，在中国大百科全书出版社、华为公司、讯飞公司等得到应用。",
          researchResult:{
            data:[
              {
                title:"百科在线工程, 主持, 国家级, 2009-01--2016-12"
              },{
                title:"互联网实体关系抽取, 主持, 国家级, 2012-01--2016-12"
              },{
                title:"网络信息抽取和问答系统, 主持, 国家级, 2015-06--2016-06"
              },{
                title:"知识关联和推理类问题求解技术, 主持, 国家级, 2015-01--2017-"
              },{
                title:"国家自然科学基金重点项目：大规模知识关联和文本语义计算方法及应用验证（61533018，2016-2020）"
              },{
                title:"国家973项目：中文深度分析与开放域内容理解（No. 2014CB340503, 2014-2018）"
              },{
                title:"国家自然科学基金项目：基于内容分析和行为分析的社区问答关键技术研究（61272332, 2013-2016）"
              },{
                title:"国家自然科学基金项目：基于Web知识挖掘与融合的命名实体消歧技术研究（61070106，2011-2013）"
              },{
                title:"华为技术有限公司科技项目：开放域实体关系抽取（2011-2014）"
              },{
                title:"讯飞科技项目：融合推理的百科知识问答系统（2013-2014）"
              },{
                title:"中国出版集团科研项目：百科在线工程（2008-2015）"
              },{
                title:"国家自然科学基金项目：汉语依存分析的概率化决策动作模型及自适应技术研究（60875041，2009-2011）"
              },{
                title:"863项目：汉英双语命名实体对应和术语对应的获取技术研究（2006AA01Z144，2006-2009）"
              },{
                title:"国家自然科学基金项目：汉语文本中观点信息的提取和倾向性分析技术研究（60673042，2006-2009） "
              },{
                title:"国家自然科学基金项目：多语言智能文本处理中基于主题语义空间的文本表示研究 （60372016，2004-2006）"
              },{
                title:"北京市自然科学基金项目：面向异构WEB信息源的汉语问答式检索技术研究 (4052027)"
              },{
                title:"北京市自然科学基金项目：面向信息安全的网络文本分析技术研究 (4073043)"
              },{
                title:"中国大百科全书出版社科研项目：百科在线——百科全书的自动标引和问答式知识服务平台建设"
              },{
                title:"国际合作项目（富士通研究开发中心有限公司）：汉语产品名识别和标注工具的研发"
              },{
                title:"国际合作项目（富士通研究开发中心有限公司）：汉语分词、词性标注和命名实体标注软件工具的研发"
              },{
                title:"国家重点基础研究发展规划项目(973)子项：中文语言资源联盟的建设 (G1998030501A-06)"
              },
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理：计算语义学；深度学习下的自然语言处理"
            },{
              title:"知识图谱和信息抽取：知识图谱的表示（符号化表示和分布式表示）；知识图谱的建立（实体识别、实体链接、关系抽取、事件抽取）；基于知识图谱的推理"
            },{
              title:"问答系统：基于知识图谱的问答；基于大规模文本数据的问答；机器阅读理解；社区问答"
            }
          ],
          thesis:[
            "Conditional Generative Adversarial Networks for ommonsense Machine Comprehension, IJCAI-2017, 2017, 通讯作者",
            "Generating Natural Answer by Incorporating Copying and Retrieving Mechanisms in Sequence-to-Sequence Learning, ACL-2017, 2017, 通讯作者",
            "Handling Cold-Start Problem in Review Spam Detection by Jointly Embedding Texts and Behaviors, ACL-2017, 2017, 通讯作者",
            "Automatically Labeled Data Generation for Large Scale Event Extraction, ACL-2017, 2017, 通讯作者",
            "Exploiting Argument Information to Improve Event Detection via Supervised Attention Mechanisms, ACL-2017, 2017, 通讯作者",
            "An End-to-End Model for Question Answering over Knowledge Base with Cross-Attention Combining Global Knowledge, ACL-2017, 2017, 通讯作者",
            "Distant Supervision for Relation Extraction with Sentence-level Attention and Entity Descriptions, AAAI-2017, 2017, 通讯作者",
            "Which is the Effective Way for Gaokao: Information Retrieval or Neural Networks?, EACL-2017, 2017, 通讯作者",
            "Leveraging FrameNet to Improve Automatic Event Detection, ACL-2016, 2016, 通讯作者",
            "Inner Attention based Recurrent Neural Network for Answer Selection, ACL-2016, 2016, 通讯作者",
            "Employing External Rich Knowledge for Machine Comprehension, IJCAI-2016, 2016, 通讯作者",
            "Knowledge Graph Completion with Adaptive Sparse Transfer Matrix, AAAI-2016, 2016, 通讯作者",
            "A Probabilistic Soft Logic Based Approach to Exploiting Latent and Global Information in Event Classification, AAAI-2016, 2016, 通讯作者",
            "A Joint Model for Question Answering over Multiple Knowledge Bases, AAAI-2016, 2016, 通讯作者",
            "Event Extraction via Dynamic Multi-Pooling Convolutional Neural Networks, ACL 2015, 2015, 通讯作者",
            "Knowledge Graph Embedding via Dynamic Mapping Matrix, ACL 2015, 2015, 通讯作者",
            "Knowledge Graph Embedding via Dynamic Mapping Matrix, ACL 2015, 2015, 通讯作者",
            "Extracting Opinion Targets and Opinion Words from Online Reviews with Graph Co-ranking, ACL-2014, 2014, 通讯作者",
            "Product Feature Mining: Semantic Clues versus Syntactic Constituents , ACL-2014, 2014, 通讯作者",
            "Joint Opinion Relation Detection Using One-Class Deep Neural Network, COLING-2014, 2014, 通讯作者",
            "Relation Classification via Convolutional Deep Neural Network, COLING-2014, 2014, 通讯作者",
            "Relation Classification via Convolutional Deep Neural Network, COLING-2014, 2014, 通讯作者",
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
            "一种借助网络挖掘辅助的汉英反向音译方法及装置，发明，2008，专利号：20081011",
            "一种借助网络知识辅助的汉英机构名翻译方法及装置，发明，2008，专利号：20081022"
          ],
        },
        20:{
          id:20,
          img:require("../../../../assets/home/specialist/zongchengqing1.jpg"),
          name:'宗成庆',
          desrc:"中科院自动化研究所研究员，博士生导师。中国中文信息学会副理事长。亚洲自然语言处理联合会（AFNLP）副主席。 1998年毕业于中国科学院计算技术研究所，获博士学位。1998年至2000年在中国科学院自动化研究所从事博士后研究，博士后出站后留在自动化所模式识别国家重点实验室工作至今。曾于1999年和2001年两次在日本国际电气通信基础技术研究所(ATR)做客座研究员，2004年在法国格勒诺布尔(Grenoble)信息与应用数学研究院(IMAG)做短期高访。作为负责人主持国家自然科学基金项目、国家“863”计划项目、支撑计划项目和国际合作研究项目等10余项，并完成若干国家特定领域的应用开发项目。发表学术论文150余篇，获得国家发明专利10余项。2010年获中国科学院“朱李月华优秀教师”荣誉称号，2013年获国务院政府特殊津贴，2014年获“钱伟长中文信息处理科学技术奖”一等奖，2015年获国家科技进步奖二等奖。",
          researchResult:{
            data:[
              {
                title:"多语言分析系统：基于自然语言处理的机器翻译和多语种信息处理平台，包括多语种的翻译、检索、摘要、数据分析等功能和服务，主要为国安、公安、航空、电商等提供专业跨领域多语种信息服务及大数据分析服务。该系统于2014年获“钱伟长中文信息处理科学技术奖”一等奖、中国电子学会科技进步一等奖、2015年度国家科技进步奖二等奖和军队科技进步奖。 "
              },{
                title:"汉语多层次语篇分析理论方法研究与应用, 主持, 国家级"
              },{
                title:"基于云计算的海量文本语义计算框架与开放域自动问答验证系统, 主持, 国家级"
              },{
                title:"语言认知与跨语言理解, 参与, 部委级"
              },{
                title:"面向维汉机器翻译的维吾尔语命名实体识别研究, 参与, 部委级"
              },
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理基础技术（汉语词语切分、句法分析、语义分析和篇章分析等）、多语言机器翻译、多语言摘要分析以及多语言信息抽取分析和检索等方面的研究。"
            }
          ],
          thesis:[
            "Comparison Study on Critical Components in Composition Model for Phrase Representation, ACM Transactions on Asian Language and Low-Resource Language Information Processing (TALLIP), Vol. 16, No. 3, Article 16, 25 pages, January 2017. 第2作者",
            "Implicit Discourse Relation Recognition for English and Chinese with Multiview Modeling and Effective Representation Learning. ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP), Vol.16, No. 3, Article 19, 21 pages, March 2017. 第3作者",
            "Learning Sentence Representation with Guidance of Human Attention. In Proceedings of the 26th International Joint Conference on Artificial Intelligence (IJCAI), Melbourne, Australia, August 19-25, 2017 , pp. 4137-4143. 第3作者",
            "A Dynamic Window Network for CCG Supertagging,  In Proceedings of the 31st AAAI Conference on Artificial Intelligence (AAAI-17), California, USA, February 4–9, 2017, pages 3337-3343. 第3作者",
            "Long Zhou, Wenpeng Hu, Jiajun Zhang and Chengqing Zong. Neural System Combination for Machine Translation. In Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (ACL2017),Vancouver, Canada, July 30-August 4, 2017, pp. 378-384. 第4作者",
            "Multi-modal Summarization for Asynchronous Collection of Text, Image, Audio and Video. In Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing (EMNLP-17), Copenhagen, Denmark. September 9-11, 2017, pp. 1103--1113. 第5作者",
            "Exploiting Word Internal Structures for Generic Chinese Sentence Representation. In Proceedings of Conference on Empirical Methods in Natural Language Processing (EMNLP), Copenhagen, Denmark, September 9-11, 2017, pp. 298-303. 第3作者",
            "Towards Zero Unknown Word in Neural Machine Translation, In Proceedings of the 25th International Joint Conference on Artificial Intelligence (IJCAI'16), 2016. 第3作者",
            "Learning Generalized Features for Semantic Role Labeling, ACM Transactions on Asian Language and Low-Resource Language Information Processing (TALLIP), 2016, 第 2 作者",
            "Bilingual Semantic Role Labeling Inference via Dual Decomposition, ACM Transactions on Asian Language and Low-Resource Language Information Processing (TALLIP), 2015, 第 3 作者",
            "Exploring Diverse Features for Statistical Machine Translation Model Filtering, IEEE/ACM Transactions on Audio, Speech and Language Processing (TASLP), 2015, 第 3 作者",
            "Deep Neural Networks in Machine Translation: An Overview, IEEE Intelligent Systems, 2015, 第 2 作者"
          ],
          patentApplication:[
            "口语会话中句子边界识别方法, 发明, 2006, 第 1 作者, 专利号: ZL031475",
            "一种新的面向文本分类的特征向量权重的方法及装置, 发明, 2007, 第 1 作者, 专利号: ZL200410",
            "一种基于标点处理的层次化汉语长句句法分析方法及装置, 发明, 2008, 第 1 作者, 专利号: ZL200510",
            "一种新的汉语口语解析方法及装置, 发明, 2008, 第 1 作者, 专利号: ZL200510109335.8",
            "基于概率主题词的两级组合文本分类方法, 发明, 2009, 第 1 作者, 专利号: ZL200610011747.2",
            "一种基于语块的中文机构名翻译方法及装置, 发明, 2011, 第 1 作者, 专利号: ZL200610011923.2",
            "一种拼音和汉字相结合的汉外口语自动翻译方法, 发明, 2011, 第 2 作者, 专利号: ZL200910244513.6",
            "一种汉英短语翻译对自动抽取与过虑方法, 发明, 2010, 第 1 作者, 专利号: ZL 2008 0055782.3",
            "一种汉英词语自动对齐方法, 发明, 2011, 第 1 作者, 专利号: ZL 2008 1 0055783.8",
            "一种基于依存连贯性约束的双语词语自动对齐方法, 发明, 2015, 第 1 作者, 专利号: CN102708098B",
            "一种基于谓词论元结构的统计机器翻译方法, 发明, 2015, 第 1 作者, 专利号: CN103020045B",
            "构建树结构及基于树结构的机器翻译系统的方法, 发明, 2014, 第 1 作者, 专利号: ZL201210068782.3",
            "一种基于模糊树到精确树的统计机器翻译方法, 发明, 2016, 第 1 作者, 专利号: CN102117270B",
            "一种双语联合语义角色的标注方法, 发明, 2016, 第 1 作者, 专利号: CN101908042B",

          ],
        },
        21:{
          id:21,
          img:require("../../../../assets/home/specialist/sunle1.jpg"),
          name:'孙乐',
          desrc:"中国科学院软件研究所，研究员，博士生导师。中国中文信息学会副理事长兼秘书长。《中文信息学报》副主编。2003至2005年，先后在英国Birmingham大学、加拿大Montreal大学做访问学者，从事语料库和信息检索研究。在国内外主要刊物和会议上共发表论文80多篇。2008和2009国际测评NTCIR MOAT中文简体任务的组织者、国际计算语言学大会（COLING 2010）组织委员会联席主席、机器翻译峰会（MT Summit 2011）组织委员会联席主席、中文语言评测国际会议（CLP2010、2012、2014）大会主席、国际计算语言学年会（ACL 2015）组织委员会联席主席。",
          researchResult:{
            data:[
              {
                title:"基于查询语义分析与推理的隐式相关反馈检索模型研究"
              },{
                title:"智慧城市中的搜索问题"
              },{
                title:"语义计算与理解的资源共享与测评方法"
              },{
                title:"网站分类系统研发，国家发改委项目，与人民搜索合作 "
              },{
                title:"下一代信息检索：下一代搜索引擎的一个突出特点是个性化，本课题围绕个性化信息检索展开研究。个性化信息检索是以用户为中心的信息检索技术，它获取以多种形式表达的用户需求（包括显式的、隐式的以及相关用户的需求），并综合利用这些用户信息，提高信息检索系统的性能。本课题在理论方面，以用户为中心的用户参考文档模型和基于用户需求分析的网页价值模型；在个性化用户信息挖掘方面，从个人、群体和整体三个线索对用户的兴趣、检索偏好、社会关系网络和宏观用户行为进行挖掘；将从多个信息源采集到的信息集成在一起，支持个性化信息检索过程。在个性化检索系统的评价方法方面，构建人工标注的标准评测集，同时展开基于用户行为分析进行自动评价的探索。在理论研究的基础上，本课题选择了客户端隐式个性化检索和协同式个性化推荐作为应用实例。本课题力争在个性化检索的计算理论和核心技术上有所突破。"
              },{
                title:"基于NLP的高精度文本检索模型研究，国家自然科学基金面上项目：文本检索系统的查询条件和文档集都是由自然语言构成的。由于传统文本检索系统本质上只是将文本看作一组无序词串，利用简单的词频统计来模糊计算相关性，因此，传统检索系统面临许多无法解决的问题。同时，一些研究表明将相对复杂和精确的自然语言处理（NLP）技术直接（浅层）应用于传统检索系统并不能带来性能的明显的改善。本申请书提出的基于NLP的高精度文本检索模型研究，是以NLP技术与信息检索中的语言模型方法的深层次融合为出发点，主要探讨不同于传统IR模型的能够融入NLP技术的新的语言模型检索方法，研究这些不同层次的NLP技术对IR性能的影响，并期望在比较后获得相对最佳的融合模型。本项目试图建立NLP与IR之间的紧密的联系，来系统地揭示一些客观现象。"
              },{
                title:"大规模网络文本数据的语义理解和分类技术，863项目： 本课题提出的面向信息检索的网络文本数据理解和分类研究，拟采用自然语言理解的关键技术对文本数据进行浅层的语义理解，在浅层理解的基础上通过文本语义特征和文本网络特征相融和的新分类算法进行文本分类，分类后的网络文本数据可以帮助搜索引擎用户高效地获取相关信息；同时，通过设定不良信息类别，可以从源头上阻止这类信息的传播。由于视频检索中包含图像、声音、文字等信息，图片中包含文字说明，文字信息是相对比较可靠的分类依据，因此，该技术也可以应用于对图片、视频等多媒体数据的分类和理解。课题的主要研究内容包括网络文本的正规化（网络非规范文本的去噪处理）、网络文本的浅层语义理解（汉语命名实体识别、实体间语义关系识别、句子级事件识别、篇章级发文目的识别以及上述各级精加工语料标注规范的研究）、文本语义特征和文本网络特征相融和的分类算法以及大规模网络数据分类效率的提高等。"
              },{
                title:"面向跨语言搜索的机器翻译关键技术研究：本课题主要以统计机器翻译方法为关键技术来开展跨语言信息检索的研究。主要研究内容如下：第一，翻译模型研究：探索词汇、句法信息及语义信息的结合，研究融入结构知识的翻译模型；第二，翻译知识获取研究：针对各种不同的翻译模型，研究翻译知识的获取算法；第三，解码算法研究：研究全局优化与局部优化的结合方法，建立启发式搜索与动态规划等多种策略相结合的高效、智能搜索策略；第四，跨语言检索研究：研究查询语句翻译与检索相融合的跨语言信息检索模型，检索结果翻译与用户反馈相结合的查询反馈模型，以及跨语言检索系统的实用化问题；第五，系统实现：探索合理的集成机器翻译的跨语言搜索系统总体架构。"
              },{
                title:"面向短文本的语义理解技术，242项目 "
              },{
                title:"基于语言知识库的统计翻译模型研究，国家自然科学基金 "
              },
            ]
          },
          researchDirection:[
            {
              title:"基于知识的语言理解、信息抽取、问答系统、信息检索等."
            }
          ],
          thesis:[
            "黄瑞红，孙乐，冯元勇，黄云平，基于核方法的中文实体关系抽取研究，中文信息学报，22（5），pp.102-108, 2008 ",
            "李文波，孙乐，张大鲲. 基于Labeled-LDA 模型的文本分类新算法. 计算机学报，pp.620-627，31(4)，2008 ",
            "李文波，孙乐，诺明花，吴健. 基于核方法的敏感信息过滤的研究. 通信学报，pp.57-62，29(4)，2008 ",
            "冯元勇，孙乐，张大鲲，李文波. 基于单字提示特征的中文命名实体识别快速算法，中文信息学报，22(1), 2008 ",
            "冯元勇，孙乐，董静，李文波. 基于分类信心重排序的中文共指消解研究，中文信息学报，21(6): 22-28. 2007",
            "Dakun Zhang, Le Sun, Wenbo Li, A Structured Prediction Approach forStatistical Machine Translation, IJCNLP’2008(poster), pp. 649-654. Hyderabad,India, 2008 ",
            "Wenbo Li, Le Sun, etc. Smoothing LDA Model for Text Categorization. 4th AsiaInformation Retrieval Symposium (AIRS’2008), LNCS 4993, pp. 83–94, Harbin,2008 ",
            "Li Jing, Le Sun, A Lexical Chain Approach for Query-focused Update-style Multi-document Summarization, AIRS 2008, LNCS4993, pp.310-320 ",
            "Li Jing, Le Sun, Kit Chun Yu, J. Webster, A Query-focused Multi-document Summarizer based on Lexical Chains, DUC workshop, 2007 ",
            "Ruihong Huang, Le Sun,Yuanyong Feng, Study of kernel-based Methods for Chinese Relation Extraction, AIRS 2008, LNCS "
          ],
        },
        22:{
          id:22,
          img:require("../../../../assets/home/specialist/huangxuanqian1.jpg"),
          name:'黄萱菁',
          desrc:" 博士、复旦大学信息学院计算机学院教授、博士生导师。曾在美国麻省大学智能信息检索中心从事访问学者研究。，先后共承担了二十多项国家和地方科研项目，在国际主流学术会议和国内外学术期刊上发表了七十余篇论文。中国中文信息学会理事，《中文信息学报》编委，中国计算机学会中文信息技术专委会委员，中国人工智能学会自然语言理解专业委员会委员，上海市高等学校计算机等级考试委员会委员。",
          researchResult:{
            data:[
              {
                title:"国家自然科学基金项目，大数据驱动的自然语言理解、问答和翻译 2017-2021"
              },{
                title:"自然科学基金重点项目，用户搜索意图的理解、表示与匹配2016-2020"
              },{
                title:"国家自然科学基金项目，融合文本内容与结构信息的话题分析方法研究2015-2018"
              },{
                title:"国家“863”计划，初等数学问题求解关键技术及系统 2015-2017"
              },{
                title:"国家自然科学基金项目，基于云计算的文本复制检测研究2011-2013"
              },{
                title:"863信息安全项目“网络信息内容分析与监控技术”"
              },{
                title:"国家自然科学基金项目“基于内容的文本过滤技术研究”"
              },{
                title:"复旦大学科技基金项目“中文文本信息抽取关键技术研究”"
              },{
                title:"863-306项目“网络中文信息智能检索和存储技术研究”"
              },{
                title:"国家信息关防与网络安全保障持续发展计划“大规模信息流中特定信息的筛选和跟踪系统”"
              },
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理、文本检索、机器学习和文本挖掘"
            }
          ],
          thesis:[
            "Jiacheng Xu, Xipeng Qiu, Kan Chen, Xuanjing Huang, Knowledge Graph Representation with Jointly Structural and Textual Encoding, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2017.",
            "Pengfei Liu, Xipeng Qiu, Xuanjing Huang, Dynamic Compositional Neural Networks over Tree Structure, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2017.",
            "Pengfei Liu, Xipeng Qiu, Xuanjing Huang, Adaptive Semantic Compositionality for Sentence Modelling, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2017.",
            "Xinchi Chen, Xipeng Qiu, Xuanjing Huang, A Feature-Enriched Neural Model for Joint Chinese Word Segmentation and Part-of-Speech Tagging, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2017.",
            "Pengfei Liu, Xipeng Qiu and Xuanjing Huang, Adversarial Multi-task Learning for Text Classification, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2017.",
            "Xinchi Chen, Zhan Shi, Xipeng Qiu and Xuanjing Huang, Adversarial Multi-Criteria Learning for Chinese Word Segmentation, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2017. Outstanding Paper Award",
            "Jiacheng Xu, Danlu Chen, Xipeng Qiu and Xuanjing Huang, Cached Long Short-Term Memory Neural Networks for Document-Level Sentiment Classification, In Proceedings of Conference on Empirical Methods in Natural Language Processing (EMNLP), 2016.",
            "Pengfei Liu, Xipeng Qiu and Xuanjing Huang, Modelling Interaction of Sentence Pair with Coupled-LSTMs, In Proceedings of Conference on Empirical Methods in Natural Language Processing (EMNLP), 2016.",
            "Pengfei Liu, Xipeng Qiu and Xuanjing Huang, Deep Multi-Task Learning with Shared Memory for Text Classification, In Proceedings of Conference on Empirical Methods in Natural Language Processing (EMNLP), 2016.",
            "Peng Qian, Xipeng Qiu and Xuanjing Huang, Analyzing Linguistic Knowledge in Sequential Model of Sentence, In Proceedings of Conference on Empirical Methods in Natural Language Processing (EMNLP), 2016.",
            "Pengfei Liu, Xipeng Qiu, Jifan Chen and Xuanjing Huang, Deep Fusion LSTMs for Text Semantic Matching, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2016.",
            "Peng Qian, Xipeng Qiu and Xuanjing Huang, Investigating Language Universal and Specific Properties in Word Embeddings, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2016.",
            "Jifan Chen, Qi Zhang, Pengfei Liu, Xipeng Qiu and Xuanjing Huang, Implicit Discourse Relation Detection via a Deep Architecture with Gated Relevance Network, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2016.",
            "Peng Qian, Xipeng Qiu and Xuanjing Huang, A New Psychometric-inspired Evaluation Metric for Chinese Word Segmentation, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2016.",
            "Pengfei Liu, Xipeng Qiu, Xuanjing Huang, Recurrent Neural Network for Text Classification with Multi-Task Learning, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2016.",
            "Peng Qian, Xipeng Qiu, Xuanjing Huang, Bridging LSTM Architecture and the Neural Dynamics during Reading, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2016.",
            "Xinchi Chen, Xipeng Qiu, Chenxi Zhu, Xuanjing Huang, Gated Recursive Neural Network For Chinese Word Segmentation, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2015. ",
            "Chenxi Zhu, Xipeng Qiu, Xinchi Chen, Xuanjing Huang, A Re-Ranking Model For Dependency Parser With Recursive Convolutional Neural Network, In Proceedings of Annual Meeting of the Association for Computational Linguistics (ACL), 2015. ",
            "PengFei Liu, Xipeng Qiu, Xuanjing Huang, Learning Context-Sensitive Word Embeddings with Neural Tensor Skip-Gram Model, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2015. ",
            "Xipeng Qiu, Xuanjing Huang, Convolutional Neural Tensor Network Architecture for Community-based Question Answering, In Proceedings of International Joint Conference on Artificial Intelligence (IJCAI), 2015. ",
            "Xinchi Chen, Xipeng Qiu, Chenxi Zhu, Pengfei Liu, Xuanjing Huang, Long Short-Term Memory Neural Networks for Chinese Word Segmentation, In Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP), 2015. ",
            "Xinchi Chen, Xipeng Qiu, Chenxi Zhu, Shiyu Wu, Xuanjing Huang, Sentence Modeling with Gated Recursive Neural Network, In Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP), 2015. ",
            "Xinchi Chen, Yaqian Zhou, Chenxi Zhu, Xipeng Qiu, Xuanjing Huang, Transition-based Dependency Parsing Using Two Heterogeneous Gated Recursive Neural Networks, In Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP), 2015. ",
            "PengFei Liu, Xipeng Qiu, Xinchi Chen, Shiyu Wu, Xuanjing Huang, Multi-Timescale Long Short-Term Memory Neural Network for Modelling Sentences and Documents, In Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP), 2015. ",
            "Xipeng Qiu, Peng Qian, Liusong Yin, Xuanjing Huang, Overview of the NLPCC 2015 Shared Task: Chinese Word Segmentation and POS Tagging for Micro-blog Texts, arXiv preprint arXiv:1505.07599 , 2015. "

          ],
        },
        23:{
          id:23,
          img:require("../../../../assets/home/specialist/nswrt1.jpg"),
          name:'那顺乌日图',
          desrc:"博士，内蒙古大学蒙古学学院教授、博士生导师。中国中文信息学会常务理事，民族语言文字信息化专业委员会主任。师从确精扎布教授攻读博士学位，主要从事蒙古文信息处理工作，2000年获得文学博士学位，期间赴北京大学计算语言学研究所师从俞士汶教授学习电子词典及语言知识库相关理论。曾主持完成了2期国家高技术研究发展计划（863计划）项目、3期国家自然科学基金项目、1期国家社科基金项目以及21项省部级科研项目，参加18项国家、省部级项目，出版2部学术专著，在国内外学术期刊和学术会议上发表70多篇学术论文，获得过自治区科技进步奖、教育部科技进步奖、北京市科技奖、国家图书奖提名奖、蒙古国科学院科技成果金质奖章等15个奖项，具有相关专业领域多个学术机构和团体的兼职和专家称号。",
          researchResult:{
            data:[
              {
                title:"国家高技术研究发展计划（863）项目：面向政府文献的汉蒙机器辅助翻译系统；"
              },{
                title:"国家自然科学基金资助项目：蒙古语语法信息词典的框架设计；"
              },{
                title:"自治区321人才工程科研资助项目：蒙古语电子词典框架结构；"
              },{
                title:"国家社会科学基金资助项目：面向信息处理的蒙古语语义研究；"
              },{
                title:"国家高技术研究发展计划(863)项目：汉蒙机器翻译系统（30万）；"
              },{
                title:"国家自然科学基金资助项目：蒙古语语法信息词典的建立及调试；"
              },{
                title:"内蒙古自治区人才基金项目：汉蒙公文机器翻译研究；"
              },{
                title:"内蒙古自治区科技攻关项目：汉蒙机器翻译系统-汉蒙双语在线词典；"
              },{
                title:"国家语委项目：面向信息处理的蒙古语规范化研究；"
              },{
                title:"教育部、国家语委项目：蒙古语语言知识库的建立；"
              },{
                title:"与清华大学电子工程系横向合作项目：多字体印刷蒙古文（混排汉英）识别系统；"
              },{
                title:"与中科院合肥智能机械研究所横向合作项目：蒙古文农业专家系统；"
              },{
                title:"国家自然科学基金资助项目：《蒙古语语义信息词典》的设计与实现；"
              },{
                title:"中国科学院计算所智能信息处理国家重点实验室委托项目：面向机器翻译的汉蒙平行语料库建设；"
              },{
                title:"内蒙古大学文科创新团队项目：蒙古语语言资源与工程技术；"
              },{
                title:"电子信息产业发展基金项目：跨平台蒙古语言文字输入系统；"
              },{
                title:"与清华大学合作项目（国家自然科学基金重点项目）：多民族文字识别及理解的理论与方法研究；"
              },{
                title:"中国科学院计算技术研究所委托项目：面向机器翻译的汉蒙平行语料库；"
              },{
                title:"内蒙古自治区草原英才工程专项资助项目：蒙古语语言资源与工程技术；"
              },{
                title:"国家自然科学基金项目（与中科院智能所合作）：互译语言形态非对称的统计机器翻译模型构造方法研究；"
              },{
                title:"内蒙古自治区政府办公厅委托项目“汉蒙英日大词典数据库建设与平台开发”；"
              },{
                title:"内蒙古自治区民族事务管理委员会2013 年度蒙古语言文字信息化专项扶持项目：蒙古语语言资源建设,信息化理论与相关技术研究；"
              },{
                title:"内蒙古自治区标准化院委托项目：中蒙标准信息服务平台；"
              },{
                title:"内蒙古自治区标准化院委托项目：中俄标准信息服务平台；"
              },
            ]
          },
          researchDirection:[
            {
              title:"蒙古文信息处理"
            }
          ],
          thesis:[
            "蒙古语语言资源平台架构设想，商务印书馆，《中国语言资源论丛》第一集，2009年9月",
            "A Chinese-Mongolian Machine Translation System》S.Wang, Nasun-urtu .（检索号：UT： ISI：000257568400068 刊物号：ISBN：978-981-08-0099-4）.",
            "汉蒙机器翻译系统中量词翻译研究（与王斯日古楞，斯琴图合作），中文信息学报，2010年第5期",
            "基于短语的汉蒙统计机器翻译系统研究（与王斯日古楞合作），计算机工程与应用，2010年第14期",
            "蒙古文同形同音同类词知识库的构建，（与淑琴合作），中央民族大学学报，2010年第4期",
            "蒙古语名词语义分类的重要性（与海银花合作），内蒙古社会科学；2010年第1期",
            "汉蒙机器翻译系统中量词翻译研究（与王斯日古楞, 斯琴图合作），Journal of Chinese Information Processing，2010年第5期",
            "面向信息处理的蒙古语名词语义网络研究（与哈斯合作），中国蒙古学，2010年第2期",
            "蒙古文WordNet名词同义词集合构建算法（与哈斯合作），中国计算语言学研究前沿进展（2009-2011），2011年7月",
            "蒙古语语言知识库的建立与应用，中文信息学报，2011年第6期",
            "蒙古语词法分析的有向图模型（与姜文斌，吴金星，长青合作），中文信息学报，2011年第5期",
            "蒙古文同音同形同类词知识库的构建（与淑琴合作），中央民族大学学报，2010年第4期",
            "汉蒙统计机器翻译中的调序方法研究（与王斯日古楞，斯琴图合作），中文信息学报，2011年第4期",
            "蒙古语名词语义信息词典数据库的构建（与海银花合作），中央民族大学学报，2012年第4期",
            "The initial framework of developing semantic knowledge base of Mongolian idioms（与海银花合作），Altai Hakpo，2012年第6期",
            "蒙古语连接形式信息词典的建设（与林八鸽合作），内蒙古大学学报，2012年第2期",
            "蒙古语有向图形态分析器的判别式词干词缀切分（与姜文斌，吴金星等合作），中文信息学报，2011年第4期",
            "The Automatic Construction Method of Mongolian Lexical-Semantic Network Based on WordNet（EI检索，与哈斯合作），The 5th International Conference on Intelligent Networks and Intelligent Systems，2012.11",
            "The Design and Application of Mongolian Homograph Words Information Dictionary（EI检索，与哈斯合作），ICINIS2012，2012.11",
            "Construction and Implementation of the Mongolian Lexical-Semantic Network（EI检索，与哈斯合作），第二届计算机科学与服务系统国际会议（CSSS2012)；2012.08,",
            "Research of Mongolian Homograph Words Ambiguity Based on Collocation Lexical Corpus（ EI检索，与哈斯合作），The 2nd International Conference on Computer Science and Service System (CSSS 2012)，2012.08",
            "蒙古语连续多词单元的识别和标注（与雪艳合作），少数民族青年自然语言处理技术研究与进展——第三届全国少数民族青年自然语言信息处理、第二届全国多语言知识库建设联合学术研讨会论文集，乌鲁木齐，大会报告，2010.06",
            "蒙古语词法分析的生成式统计建模（与姜文斌，吴金星合作），少数民族青年自然语言处理技术研究与进展——第三届全国少数民族青年自然语言信息处理、第二届全国多语言知识库建设联合学术研讨会论文集，乌鲁木齐，大会报告，2010.06",
            "蒙古语名词语义信息词典的开发与应用（与海银花合作），第四届全国少数民族青年自然语言处理学术研讨会，西宁，大会报告，2012.07",
            "基于WORDNET的蒙古文词汇语义网络自动构建（与哈斯合作），第四届全国少数民族青年自然语言处理学术研讨会，西宁，大会报告，2012.07",
            "“蒙古语名词语义信息词典数据库的构建”，“中央民族大学学报”（哲学社会科学版），2012年第4期",
            "The initial framework of developing semantic knowledge base of Mongolian idioms”， “Altai Hakpo”（KOREA）；2012年第22期",
            "论蒙古经典之作108卷知识库编码（与Purevsuren合作），《ALTAICA》2013年",
            "Mongolian Academy of Sciences Institute of Language and Literature Centre for Altaic Studies,ULAANBAATAR,2013",
            "蒙古语熟语资源库的初步构建（与海银花合作）,《计算机工程与应用》，2014年第4期",
            
          ],
        },
        24:{
          id:24,
          img:require("../../../../assets/home/specialist/zhangmin1.jpg"),
          name:'张民',
          desrc:"苏州大学特聘教授，计算机学院副院长，人类语言技术研究所所长，人工智能研究院副院长。国家杰出青年科学基金获得者，江苏省“双创人才计划” 获得者，江苏省“双创团队” 领军人才。长期从事自然语言处理和人工智能研究。1997年在哈尔滨工业大学获博士学位，1997-2013年在海外学术界和产业界从事研发和管理工作16年。已发表CCF A/B类会议和期刊论文150余篇，出版Springer专著2部，主编英文论著（论文集）16本，获部级科技进步奖3项。在研主持国家自然科学基金杰青、重点、科技部重点研发计划课题、大型产业界项目多项。现任IEEE/ACM T-ASLP、SCIENTIA SINICA Informationis、《中国科学：信息科学》和《自动化学报》编委，SIGHAN/ACL主席，PACLIC国际咨询委员会委员，中国中文信息学会常务理事，中国人工智能学会理事，苏州市计算机学会理事长，曾任COLIPS副理事长和AFNLP常务理事。担任国内外学术会议大会主席、程序委员会主席、特邀报告讲者50余次。",
          researchResult:{
            data:[
              {
                title:"杰出青年科学基金项目，自然语言的结构分析与机器翻译；"
              },{
                title:"重点项目，面向多层次章语义的机器翻译理论、方法与实现；"
              },{
                title:"面上项目，基于句法结构和篇章结构的统计机器翻译关键技术研究；"
              }
            ]
          },
          researchDirection:[
            {
              title:"机器翻译，自然语言处理，面向大规模文本和互联网文本数据的机器学习，智能计算，社会网络计算和基于互联网的极大规模文本数据处理等。"
            }
          ],
          thesis:[
            "Kai Song, Yue Zhang, Min Zhang, Weihua Luo. Improved English to Russian Translation by Neural Suffix Prediction, Proceedings of AAAI-2018, pp410-417, New Orleans, USA,Feb 2018[C] ",
            "YaoSheng Yang, Meishan Zhang, Wenliang Chen*, Haofen Wang, Wei Zhang, Min Zhang. Adversarial Learning for Chinese NER from Crowd Annotations, Proceedings of AAAI-2018, pp1627-1634, New Orleans, USA,Feb 2018[C] ",
            "Zhengqiu He, Wenliang Chen*, Zhenghua Li, Meishan Zhang, Wei Zhang, Min Zhang. SEE: Syntax-aware Entity Embedding for Neural Relation Extraction, Proceedings of AAAI-2018, pp5795-5802, New Orleans, USA,Feb 2018[C] ",
            "Wenliang Chen, Muhua Zhu, Min Zhang, Yue Zhang, Jingbo Zhu. Improving Shift-Reduce Phrase-Structure Parsing with Constituent Boundary Information. Computational Intelligence Journal, 33(3):428-447, August 2017[J]",
            "Zhenghua Li, Jiayuan Chao, Min Zhang, Wenliang Chen, Meishan Zhang, Guohong Fu. Coupled POS Tagging on Heterogeneous Annotations. IEEE/ACM Transactions on Audio, Speech and Language Processing, 25(3):557-571, 2017[J]",
            "Chen Gong, Zhenghua Li, Min Zhang, Xinzhou Jiang. 2017. Multi-Grained Chinese Word Segmentation. Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing (EMNLP-2017), pp703-714, Copenhagen, Denmark,Sept 2017[C]",
            "Yue Zhang, Zhenghua Li, Jun Lang, Qingrong Xia, Min Zhang. 2017. Dependency Parsing with Partial Annotations: An Empirical Comparison. Proceedings of the 8th International Joint Conference on Natural Language Processing (IJCNLP-2017), pp49-58. Taiwan, Nov.27-Dec.1, 2017[C]","	Zhenghua Li, Min Zhang, Yue Zhang, Zhanyi Liu, Wenliang Chen, Hua Wu, Haifeng Wang. 2016.Active Learning for Dependency Parsing with Partial Annotation. Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (ACL-2016), pp. 344-354. Berlin, 7-12 Aug. 2016",
            "Wenliang Chen, Min Zhang, Yue Zhang, Xiangyu Duan. Exploiting Meta Features for Dependency Parsing and Part-of-speech Tagging. Artificial Intelligence Journal, 230(2016):173-191, January 2016[J] ",
            "Wenliang Chen, Zhenjie Zhang, Zhenghua Li, Min Zhang. Distributed Representations for Building Profiles of Users and Items from Text Reviews. In Proc. of the 26th International Conference on Computational Linguistics (COLING-2016), pp2143-2153, Osaka, 11-17 Dec. 2016[C]",
            "Zhenghua Li, Jiayuan Chao, Min Zhang, Jiwen Yang. 2016. Fast Coupled Sequence Labeling on Heterogeneous Annotations via Context-aware Pruning. Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing (EMNLP-2016), pp753-762, Austin, Texas, USA, Nov 2016[C]",
            "Wenliang Chen, Min Zhang*, Yue Zhang. Distributed Feature Representations for Dependency Parsing. IEEE/ACM Transactions on Audio, Speech and Language Processing, 23(3):451-460, 2015[J]",
            "Zhenghua Li, Jiayuan Chao, Min Zhang, Wenliang Chen. 2015. Coupled Sequence Labeling on Heterogeneous Annotations: POS Tagging as a Case Study. Proceedings of the 53rd Annual Meeting of the Association for Computational Linguistics (ACL-2015), pp1783-1792, Beijing, 26-31 July 2015",
            "Zhenghua Li, Min Zhang, Wenliang Chen. Soft Cross-lingual Syntax Projection for Dependency Parsing. In Proc. of the 25th International Conference on Computational Linguistics (COLING2014), pp783-793, Dublin, Ireland, August 2014",
            "Zhenghua Li, Min Zhang, Wenliang Chen. Ambiguity-aware Ensemble Training for Semi-supervised Dependency Parsing. In Proc. of Annual Meeting of the Association for Computational Linguistics (ACL2014), pp457-467, Baltimore, June 2014",
            "Min ZHANG, Xiangyu Duan, Wenliang CHEN. Bayesian Constituent Context Model for Grammar Induction. IEEE/ACM Transactions on Audio, Speech and Language Processing, 22(2):531-541, 2014[J]",
            "Zhenghua LI, Min ZHANG, Wanxiang CHE, Ting LIU, Wenliang CHEN. Joint Optimization for Chinese POS Tagging and Dependency Parsing. IEEE/ACM Transactions on Audio, Speech and Language Processing, 22(1):274-286, 2014[J]",
            "Xiangyu Duan, Min Zhang, Qiaoming Zhu. Synchronous Constituent Context Model for Inducing Bilingual Synchronous Structures. In Proc. of the 25th International Conference on Computational Linguistics (COLING2014), pp783-793, Dublin, Ireland, August 2014",
            "Min Zhang, Wenliang Chen*, Xiangyu Duan, and Rong Zhang. Improving Graph-based Dependency Parsing Models with Dependency Language Models. IEEE Transactions on Audio, Speech and Language Processing (IEEE-TASL), Vol.21, No.11, pp2313-2323 November 2013. ",
            "Muhua Zhu, Yue Zhang, Wenliang Chen, Min Zhang, and Jingbo Zhu. Fast and Accurate Constituent Parsing. In Proc. of ACL2013, pp 434-443, Sofia, Bulgaria, August 2013.",
            "Xiangyu Duan, Min Zhang, Wenliang Chen. Smoothing for Bracketing Induction. In Proc. of IJCAI2013, pp 2085-2091, Beijing, China, August 2013.",
          ],
        },
        25:{
          id:25,
          img:require("../../../../assets/home/specialist/chenjiajun1.jpg"),
          name:'陈家俊',
          desrc:"南京大学计算机科学与技术系，教授，博士生导师。毕业于南京大学计算机软件专业，获学士、硕士和博士学位。领导南京大学自然语言处理研究组，先后承担过该领域的18项国家科技攻关项目、863项目、国家自然科学基金和江苏省自然科学基金以及多项对外合作项目的研制。其中，承担的国家七五科技攻关项目“日汉机译系统研究”获七五国家科技攻关重大成果奖、教委科技进步二等奖以及江苏省科技进步三等奖。在自然语言处理顶级国际会议ACL、人工智能顶级国际会议IJCAI和AAAI上发表论文多篇，相关系统在机器翻译、中文分词、命名实体识别、情感计算等多个国际国内评测中名列前茅。",
          researchResult:{
            data:[
              {
                title:"国家自然科学基金，基于结构信息的神经网络机器翻译研究；"
              },{
                title:"江苏省自然科学基金，神经网络机器翻译中的未登录词翻译问题研究；"
              },{
                title:"国家自然科学基金，统计机器翻译中的参数学习问题研究；"
              },{
                title:"国家自然科学基金，基于时间感知模型的学术主题检索与演化挖掘研究；"
              },{
                title:"国家自然科学基金，文本分类中的文本图表示模型和结构化稀疏模型研究；"
              },{
                title:"江苏省自然科学基金，汉语句法分析中基于主动学习技术的数据标记方法研究；"
              },{
                title:"国家自然科学基金，汉语句法分析中的自动歧义识别和分类问题研究；"
              },{
                title:"国家自然科学基金，基于依存图的汉语依存分析技术研究；"
              },{
                title:"高等学校博士学科点专项科研基金，面向基于句法统计翻译模型的词对齐、句法分析和翻译规则抽取联合学习模型；"
              },{
                title:"江苏省自然科学基金，基于组块的汉语依存分析研究；"
              },{
                title:"国家自然科学基金，基于结构化学习的有监督词对齐方法研究；"
              },{
                title:"国家自然科学基金，基于统计关系学习的汉语指代消解研究；"
              },{
                title:"国家社科基金，基于语料库及树型结构模式匹配的汉语句法自动分析；"
              },{
                title:"江苏省自然科学基金，基于条件随机场和核集成的自适应中文信息抽取技术研究；"
              },
            ]
          },
          researchDirection:[
            {
              title:"文本分析技术，机器翻译，智能问答系统，推荐系统，情感分析。"
            }
          ],
          thesis:[
            "Hongjie Ji, Shujian Huang, Qi Hou, Cunyan Yin, Jiajun Chen. RGraph: Generating Reference Graphs for Better Machine Translation Evaluation. In: Wong D., Xiong D. (eds) Machine Translation. CWMT 2017. Communications in Computer and Information Science, vol 787, pages 55-67. Springer, Singapore ",
            "hen Wu, Xin-Yu Dai, Cun-yan Yin, Shujian Huang, Jiajun Chen. Improving Review Representations with User Attention and Product Attention for Sentiment Classification. accepted by AAAI'18.",
            "Zaixiang Zheng*, Hao Zhou*, Shujian Huang, Lili Mou, Xinyu Dai, Jiajun Chen, and Zhaopeng Tu. Modeling Past and Future for Neural Machine Translation. accepted by TACL'2017.",
            "Guang-Neng Hu, Xin-Yu Dai*, Feng-Yu Qiu, Rui Xia, Tao Li, Shu-Jian Huang, Jia-Jun Chen. Collaborative Filtering with Topic and Social Latent Factors Incorporating Implicit Feedback. accepted by ACM TKDD. ",
            "Hao Zhou*, Zhenting Yu*, Yue Zhang, Shujian Huang, Xin-Yu Dai, and Jiajun Chen. Word Context Character Embeddings for Chinese Word Segmentation. (Short paper) Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 760-766, Copenhagen, Denmark, 2017. ",
            "Rongxiang Weng, Shujian Huang, Zaixiang Zheng, Xinyu Dai and Jiajun Chen. Neural Machine Translation with Word Predictions. Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 136-145, Copenhagen, Denmark, 2017. ",
            "Huadong Chen, Shujian Huang, David Chiang, XIN-YU DAI and Jiajun CHEN. Top-rank Enhanced Listwise Optimization for Statistical Machine Translation. Conference on Computational Natural Language Learning (CoNLL), pages 90-99, Vancouver, Canada, 2017. ",
            "Hong-Jian Xue, Xin-Yu Dai, Jianbing Zhang, Shujian Huang, Jiajun Chen. Deep Matrix Factorization Models for Recommender Systems. International Joint Conference on Artificial Intelligence (IJCAI), pages 3203-3209, 2017. ",
            "Jianbing Zhang, Yixin Sun, Shujian Huang*, Cam-Tu Nguyen, Xiaoliang Wang, Xinyu Dai, Jiajun Chen, Yang Yu. AGRA: An Analysis-Generation-Ranking Framework for Automatic Abbreviation from Paper Titles. International Joint Conference on Artificial Intelligence (IJCAI), pages 4221-4227, 2017. ",
            "Hao Zhou, Yue Zhang, Chuan Chen, Shujian Huang, Xin-Yu Dai, and Jiajun Chen. A Neural Probabilistic Structured-Prediction Method for Transition-Based Natural Language Processing. Journal of Artificial Intelligence Research (JAIR), Volume 58, pages 703-729. ",
            "Huadong Chen, Shujian Huang, David Chiang, Jiajun Chen, Improved Neural Machine Translation with a Syntax-Aware Encoder and Decoder. Meeting of the Association for Computational Linguistics (ACL), pages 580-585, Vancouver Canada, 2017. ",
            "Hao Zhou, Zhaopeng Tu, Shujian Huang, Xiaohua Liu, Hang Li and Jiajun Chen. Chunk-based Bi-Scale Decoder for Neural Machine Translation. Meeting of the Association for Computational Linguistics (ACL), pages 1936-1945, Vancouver Canada, 2017. ",
            "Hao Zhou, Yue Zhang, Shujian Huang, Junsheng Zhou, XIN-YU DAI and Jiajun Chen. A Search-Based Dynamic Reranking Model for Dependency Parsing. Meeting of the Association for Computational Linguistics (ACL), 2016:1393-1402. ",
            "Hao Zhou, Yue Zhang, Shujian Huang, Xin-Yu Dai, and Jiajun Chen. Evaluating a Deterministic Shift-Reduce Neural Parser for Constituent Parsing. in Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC 2016), pages 659-663, Slovenia, Portoroz, May 23-28, 2016. ",
            "Shanbo Cheng, Shujian Huang, Huadong Chen, Xinyu DAI and Jiajun Chen. PRIMT: A Pick-Revise Framework for Interactive Machine Translation. Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL), 2016:1240-1249. ",
            "Shujian Huang, Huifeng Sun, Chengqi Zhao, Jinsong Su, Xinyu DAI and Jiajun Chen. Tree-state based Rule Selection Models for Hierarchical Phrase-based Machine Translation. Proceedings of the Twenty-Fifth International Joint Conference on Artificial Intelligence (IJCAI). AAAI Press, 2016: 2817-2823. ",
            "Yinggong Zhao, Shujian Huang*, Xinyu Dai, and Jiajun Chen. Adaptation of Langage Models for SMT Using Neural Networks with Topic Information. ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP), 2016, 15(3): 19:1-19:15. ",
            "Hao Zhou, Shujian Huang*, Junsheng Zhou, Yue Zhang, Huadong Chen, Xinyu Dai, Chuan Cheng, Jiajun Chen. Enhancing Shift-Reduce Constituent Parsing with Action N-Gram Model. ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP), 2016, 15(3): 13:1-13:17. "
            
          ],
        },
        26:{
          id:26,
          img:require("../../../../assets/home/specialist/wushouer1.jpg"),
          name:'吾守尔•斯拉木',
          desrc:" 新疆大学信息科学与工程学院教授、博士生导师、新疆民文信息技术研发中心、新疆多语种信息技术重点实验室(省部级)主任、中国工程院院士 、中国中文信息学会副理事长。研发出20多种多语种信息处理系统软件，开拓计算机民文处理新领域；发展了多语种信息技术的多媒体化、网络化，使民文信息处理事业有了新的突破和进展；与国内区内有关公司合作，在自治区形成了新疆多语种信息技术的研发、生产、经营、服务一体化的产学研基地，取得重大经济及社会效益，对新疆多语种信息化事业的发展做出了突出贡献。",
          researchResult:{
            data:[
              {
                title:"国家自然科学基金，维吾尔语汉语语音翻译系统关键技术研究;"
              },{
                title:"国家其它部委项目，以科技创新引领丝绸之路经济带发展咨询研究;"
              },{
                title:"国家自然科学基金，多语言大数据环境下的复杂网络行为分析、预测和干预;"
              },{
                title:"国家重点基础研究规划项目(973)，面向公共安全与社会管理的互联网中文信息处理验证系统;"
              },{
                title:"国家自然科学基金，基于网络及通讯设备的维吾尔语文本信息监控应用系统研发;"
              },{
                title:"国家自然科学基金，基于电话语音的维吾尔语说话人识别研究;"
              },{
                title:"国家自然科学基金，维吾尔语大词汇量连续语音识别研究与实现;"
              },{
                title:"国家“863”项目，维文信息处理;"
              },{
                title:"国家自然科学基金，多语言多媒体网络教学系统的新技术新方法研究;"
              },{
                title:"国家其它部委项目， 面向少数民族语言的智能语音技术及系统研发;"
              },{
                title:"自治区重点实验室专项，多语言舆情信息监控系统研发与应用;"
              },{
                title:"自治区科技厅项目，基于网络及通讯设备的维吾尔语智能信息监控平台研发与应用;"
              },{
                title:"国家其它部委项目，现代维吾尔语语言基础资源平台构建和共享技术的研究;"
              },{
                title:"自治区教育厅项目维、哈、柯、汉多文种多向搜索引擎关键技术研究与开发，;"
              },{
                title:"自然科学横向课题，新疆大学多语种云智能教育研究;"
              },{
                title:"自然科学横向课题，维哈柯语信息舆情监测系统软件技术开发;"
              },{
                title:"自然科学横向课题，新疆少数民族文字互联网出版监管系统;"
              },{
                title:"自然科学横向课题，基于微软翻译平台的汉维机器翻译;"
              },{
                title:"自然科学横向课题，基于移动设备的维吾尔语检索系统的研究和开发;"
              }
            ]
          },
          researchDirection:[
            {
              title:"自然语言处理，多语种信息处理、计算机应用及网络技术研究与开发。"
            }
          ],
          thesis:[
            "基于移动智能设备的汉语学习软件的研究与实现，热合曼•吾拉音; 吾守尔•斯拉木； 热依曼•吐尔逊；努尔麦麦提•尤鲁瓦斯，电脑知识与技术，2016-12-01，12（29）：183-186.",
            "改进的Re-FCBF算法在入侵检测中的应用 沙丽瓦尔•阿里木；努尔布力；吾守尔•斯拉木，计算机工程与设计，2016-11-16，37（11）：2956-2960.",
            "基于网络文本信息的敏感信息过滤算法，薛朋强；努尔布力； 吾守尔•斯拉木；计算机工程与设计，2016-09-16，37（9）：2447-2451.",
            "大数据下微博推荐算法，张磊；吾守尔•斯拉木；买买提依明•哈斯木；于清，激光杂志，2016-06-25，37（6）：1-6.",
            "基于智能手机的维吾尔语语音控制系统的开发，米尔阿迪力江•麦麦提；吾守尔•斯拉木；努尔麦麦提•尤鲁瓦斯；热依曼•吐尔逊；艾尼宛尔•托乎提，计算机应用与软件，2016-06-15，33(6):221-223.",
            "说话人自适应技术在维吾尔语语音识别中的应用研究，努尔麦麦提•尤鲁瓦斯；张力文； 吾守尔•斯拉木，中文信息学报，2016-05-15，30(3):79-84.",
            "自动发音错误检测中基于最大化F1值准则的区分性特征补偿训练算法，黄浩； 徐海华； 王羡慧；吾守尔•斯拉木；电子学报，2015-07-15，43(7):1294-1299.",
            "基于词序统计组合的中文文本关键词提取技术，苏祥坤； 吾守尔•斯拉木；买买提依明•哈斯木，计算机工程与设计，2015-06-16，36（6）：1648-1651.",
            "基于综合的句子特征的文本自动摘要，程园；吾守尔•斯拉木；买买提依明•哈斯木，计算机科学，2015-04-15，42(4):226-229.",
            "关于维吾尔语口语语料的三音子选取方法研究，徐宝龙; 努尔麦麦提•尤鲁瓦斯；吾守尔•斯拉木；中文信息学报，2015-03-15，29（2）：118-124.",
            "基于统计专用字符的维、哈、柯文文种识别研究，买买提依明•哈斯木； 吾守尔•斯拉木；维尼拉•木沙江；努尔麦麦提•尤鲁瓦斯，中文信息学报，2015-03-15，29（2）：111-117.",
            "基于N元模型的维吾尔文文本分类技术研究 ，买买提依明•哈斯木；吾守尔•斯拉木；维尼拉•木沙江；努尔麦麦提•尤鲁瓦斯，计算机应用研究，2015-01-30，32（7）：1986-1988.",
            "基于LibreOffice的维吾尔文断行算法的研究与实现，肉克艳木•买买提；吾守尔•斯拉木；艾尼宛尔•托乎提，计算机工程与科学，2014-10-15，36（10）：2014-2018.",
            "维吾尔语语音检索技术研究，张力文；努尔麦麦提•尤鲁瓦斯；吾守尔•斯拉木，中文信息学报，2014-09-15，28(5):182-186.",
            "一种维吾尔语联机手写识别系统，热依曼•吐尔逊；吾守尔•斯拉木，中文信息学报，2014-05-15，28(3):112-115.",
            "语音技术在少数民族语言的应用研究，达瓦•伊德木草； 木合亚提•尼亚孜别克；吾守尔•斯拉木，新疆大学学报(自然科学版)，2014-02-15 ，31(1):88-96.",
            "维吾尔语大词汇语音识别系统识别单元研究，努尔麦麦提•尤鲁瓦斯；吾守尔•斯拉木；热依曼•吐尔逊，北京大学学报(自然科学版)，2014-01-20，50(1):149-152.",
            "维吾尔语音素的声学特征分析，王辉； 努尔麦麦提•尤鲁瓦斯；吾守尔•斯拉木，中文信息学报，2014-01-15，28(1):100-106.",
            "语言计算的重要国际前沿，孙茂松；刘挺；姬东鸿；穗志方；赵军；张钹；吾守尔•斯拉木；俞士汶；朱军；李建民；刘洋；王厚峰；吐尔根•依布拉音；刘群；刘知远，中文信息学报，2014-01-15，28(1):1-8.",

          ],
        },
        // 27:{
        //   id:27,
        //   img:require("../../../../assets/home/specialist/yaotianfang1.jpg"),
        //   name:'姚天昉',
        //   desrc:" 博士，上海交通大学计算机科学与工程系副教授，中国中文信息学会理事、中国中文信息学会计算语言学专委会委员、中国中文信息学会信息检索专委会委员。2005年获得德国萨尔州大学计算机科学专业工学博士学位。曾在德国康斯坦茨大学进修，在德国人工智能研究中心担任访问学者。在德国萨尔州大学计算语言学系从事研究工作。曾获得国家级教学成果二等奖一项，上海市教学成果一等奖二项以及校内教学成果奖和教学优秀奖多项。主持和参加了多项国家自然科学基金项目、国家863计划项目、973计划项目。此外，在国内外重要刊物和会议上发表了多篇论文。",
        //   researchResult:{
        //     data:[
        //       {
        //         title:"脱机手写体汉字自动识别系统的研究；"
        //       },{
        //         title:"德汉题录机器翻译系统研究，项目获得第三届上海科学技术博览会金奖；"
        //       },{
        //         title:"主持了国家自然科学基金项目，自然语言多语种文本生成模型的研究；"
        //       },{
        //         title:"德国大众基金会 （Volkswagen-Stiftung）的国际合作项目，自然语言生成技术在中国的应用；"
        //       },{
        //         title:"上海市科技发展基金国际合作项目，自然语言多语种文本生成理论、技术及应用研究；"
        //       },{
        //         title:"自然科学基金项目，基于信息抽取和模板生成的多语种信息检索模型的研究；"
        //       },{
        //         title:"德国教育和研究部（BMBF）的研究项目COLLATE（Computational Linguistics and Language Technology for Real Life Applications）；"
        //       },{
        //         title:"国家自然科学基金项目，细颗粒度汉语文本意见挖掘方法的研究，此项目与德国萨尔州大学计算语言学系和德国人工智能研究中心合作进行；"
        //       },
        //     ]
        //   },
        //   researchDirection:[
        //     {
        //       title:"主要研究领域包括文本挖掘、信息抽取、信息检索、自然语言生成等。"
        //     }
        //   ],
        //   thesis:[ 
        //     "Tianfang Yao and Mosha Chen. Constructing Chinese Opinion-Element Collocation Dataset using Search Engine and Ontology. Chinese Lexical Semantics. Lecture Notes in Computer Science. Vol. 7717, 2013. pp. 332-343.",
        //     "Tianfang Yao, Jun Liu, Wei Qiu. Mining Space-time Elements of Opinion. Proceeding of 2012 International Conference on Asian Language Processing (IALP 2012). Nov. 13-15, 2012. Hanoi, Vietnam. pp. 89-92.",
        //     "顾正甲，姚天昉. 评价对象及其倾向性的抽取. 中文信息学报. 第26卷第4期. 2012年7月. 第91-97页.",
        //     "卡哈尔江•阿比的热西提，吐尔根•依布拉音，姚天昉，艾山•吾买尔，艾山•毛力尼亚孜. 一种改进的维吾尔语句子相似度计算方法.中文信息学报. 第25卷第4期. 2011年7月. 第50页-53页.",
        //     "刘军，姚天昉，仇伟. 意见时空元素的研究. 中文信息学报. 第25卷第3期. 2011年5月. 第72页-78页.",
        //     "李婷玉，葛正荣，姚天昉. 汉语情感问题类型分类研究. 中文信息学报. 第25卷第2期. 2011年3月. 第94页-98页.",
        //     "杨瑞，胡弘思，张文波，姚天昉. 一种分布式网络爬虫的设计与实现. 第八届全国信息检索学术会议（CCIR 2012）. 南昌. 2012年11月.",
        //     "Bao Jiana, Li Tingyu, and Yao Tianfang. Event Information Extraction Approach based on Complex Chinese Texts. Proceeding of 2012 International Conference on Asian Language Processing (IALP 2012). Nov. 13-15, 2012. Hanoi, Vietnam. pp. 61-64.",
        //     "Hu Hongsi, Zhang Wenbo, Yao Tianfang. Paraphrase Extraction from Interactive Q&A Communities. Proceeding of the 8th International Conference on Computing and Networking Technology (ICCNT 2012, INC 2012, ICCIS 2012, ICMIC 2012). Aug. 27-29, 2012. Gyeongju, Korea. pp. 268-272.",
        //     "张文波，蒋春华，姚天昉. 基于贝叶斯及多模式串模糊匹配算法的不良短信甄别混合模型. 微型电脑应用. 第28卷第2期，2012年2月. 第31-34页.• Tianfang Yao and Jianchao Li. A Token-based Online Web-Snippet Clustering Approach based on Directed Probability Graph. Journal of Computational Information Systems, Vol. 5, No. 3, 2009. pp 1235-1244.",
        //     "张冬茉, 葛永, 姚天昉. 多语种自然语言生成系统中的预映射句子规划器. 计算机研究与发展. 2001年4月.• Tianfang Yao, Dongmo Zhang, Qian Wang. MLWFA: A Multilingual Weather Forecast Text Generation System. In Proc. of 38 th Annual Meeting of the Association for Computational Linguistics (ACL 2000): Tutorial Abstracts and Demonstration Notes. Hong Kong, China, Oct., 2000, 13~14. ",
        //     "张冬茉, 葛永, 姚天昉. 多语种自然语言生成系统中的语言模型. 上海交通大学学报. 2000年7月. 944-947页. ",
        //     "姚天昉, 汤学彦. 文本规划中焦点移动控制算法的研究. 软件学报. 第11卷第二期. 2000年2月. 277~284页.",
        //     "姚天昉, 黄海. 基于GPSG的汉语语义表达结构CFAS. 云南大学学报 （自然科学版）. 1997年第19期",
        //     "姚天昉, 林莉, 玉素甫.艾白都拉. 基于德语语料库词性标注和统计方法的研究. 上海交通大学学报. 1996年第六期.",
        //     "姚天昉, 高国栋, 何厚存. 德汉题录机器翻译系统中句法分析器的设计与实现. 上海交通大学学报. 1996年第六期.",

        //   ],
        // }
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
      if(this.title1 == "首页"){
        this.$router.push({name:"home"})
      }else{
        this.$router.push({name:"specialist"})
      } 
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
  watch:{
    $route(){
      console.log("监听路由：当前专家id："+this.$route.params.specialistId)
      console.log(this.$route.params.specialistId)
      if(this.$route.params.specialistId){
        var index = this.$route.params.specialistId
        this.detailInit(index)
      }else{
        console.log("12312")
        this.init()
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
      left: 11%;
      align-items: center;
      color: #fff;
      a:first-child:hover{
        text-decoration: underline;
      }
  }
  .display_sort_way {
    position: absolute;
    /* top: 0; */
    bottom: 20px;
    right: 11%;
    color: #ffffffbf;
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
    
    
    
    .specialist-item1{
      background-color: #fff;
      display: inline-block;
      padding: 0 20px 20px 20px;
      .specialistName{
        display: block;
        margin: 12px 0;
        color: #333333;
        font-weight: 400;
      }
      .portrait{
        max-width: 155px;
        max-height: 191px;
        margin-right: 20px;
      }
      .specialistDesrc{
        color: #868686;
        line-height: 26px;
        height: 135px;
      }
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
          width: 155px;
          height: 191px;
        }
      }
      .right{
        padding-left: 20px;
        .specialistName{
          
          color: #333333;
          font-weight: 400;
        }
        .specialistDesrc{
          color: #868686;
          line-height: 26px;
        }
        .height135 {
          height: 135px;
          overflow: hidden;
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
            // list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .thesis{
          ul{
            // list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .patentApplication{
          ul{
            // list-style: none;
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

