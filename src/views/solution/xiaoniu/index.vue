<template>
  <div class="xiaoniu-container">
    <xiao-niu-banner :title-data="titleData"></xiao-niu-banner>
    <service-feature :feature-data="featureData"></service-feature>
    <br />
    <property-index :feature-data="propertyData"></property-index> 
    <br />
    <service-mode :table-data="tableData"></service-mode>
    <br />
    <specialist :specialist="specialist"></specialist>
    <br />
    <cooperation-platform :cooperation-data="cooperationData"></cooperation-platform>
    <br />
    <contact></contact>


  </div>
</template>

<script>
import { xiaoNiuBanner, ServiceFeature,
 PropertyIndex, ServiceMode, Specialist ,
 CooperationPlatform, Contact} from '@/views/solution/components'
export default {
  components:{
    xiaoNiuBanner,
    ServiceFeature,
    PropertyIndex,
    ServiceMode,
    Specialist,
    CooperationPlatform,
    Contact
  },
  data(){
    return{
      titleData:{
        img:"static/solution/xiaoniu/u1525.png",
        title:"让语言交流无障碍",
        desrc:"NiuTrans是一个开源的统计机器翻译系统，由中国的 东北大学 自然语言处理实验室 开发。NiuTrans系统全部由C++开发，运行速度快，占用内存少。目前该系统支持基于（层次）短语/基于句法的模型，可供研究之用。",
        bgimg:"static/solution/xiaoniu/u1460.jpg"
      },
      featureData:
        {name:"服务特色",
        data:[
        {name:'提供api接口',descr:'与其他应用轻松集成',img:"static/solution/xiaoniu/u1468.png"},
        {name:'多种翻译插件',descr:'可应用于主流CAT工具及Office软件中',img:"static/solution/xiaoniu/u1474.png"},
        {name:'在线文本翻译',descr:'在线输入，轻松搞定译文',img:"static/solution/xiaoniu/u1480.png"},
        {name:'批量文档翻译',descr:'支持多种文件格式',img:"static/solution/xiaoniu/u1632.png"},
        {name:'多个垂直行业引擎',descr:'例如新闻、口语、医药等',img:"static/solution/xiaoniu/u1517.png"},
        {name:'个性化定制',descr:'满足用户语种、场景、领域等需求',img:"static/solution/xiaoniu/u1523.png"},
      ]},
      propertyData:
      {name:"性能指标",
        data:[
        {name:'译文质量',descr:'在口语及通用新闻领域，中文与英、日、韩、维、藏等5种语言双向译文流畅，准确率超过80%',img:'static/solution/xiaoniu/u1529.jpg'},
        {name:'翻译速度',descr:'每秒可至少处理300n个词，其中n为翻译服务器中GPU卡（1080Ti）的数量。一台2张GPU卡的服务器每小时翻译量达到216万词以上',img:'static/solution/xiaoniu/u1531.jpg'},
        {name:'秒级并发量',descr:'大于30（平均句长10个词）/GPU卡',img:'static/solution/xiaoniu/u1533.jpg'},
      ]},
      tableData:{
        headList:[
          {id:"col1",name:"服务名称"},{id:"col2",name:"适用客户"},
          {id:"col3",name:"支持语言"},{id:"col4",name:"反馈学习能力"},
          {id:"col5",name:"引擎部署及使用方式"},{id:"col6",name:"计费方式"}
        ],
        data:[
          {col1:"小牛翻译私有云",col2:"大型企业",col3:"中文与64种语言",col4:"有",col5:"用户服务器本地部署，私有使用",col6:"一次性买断"},
          {col1:"小牛翻译专有云",col2:"大中型企业",col3:"中文与64种语言",col4:"有",col5:"小牛翻译云服务器，用户独享使用",col6:"按年租赁"},
          {col1:"小牛翻译离线版",col2:"大中型企业",col3:"中文与英日韩泰俄",col4:"无",col5:"用户服务器本地部署，私有使用",col6:"按年授权"},
          {col1:"小牛翻译引擎定制",col2:"大型企业",col3:"根据用户需求",col4:"根据用户需求",col5:"根据用户需求",col6:"一次性买断"},
         
        ]
      },
      specialist:{
        name:"专家介绍",
        data:[
        {teamname:'NiuTrans团队',principal:'朱靖波',
        detail:'国内顶级自然语言处理领域专家，任东北大学计算机学院教授、博士生导师。曾先后在香港城市大学、美国南加州大学USC/ISI开展语言分析和机器翻译的访问研究。',
        img:"static/solution/xiaoniu/u1622.jpg",url:"/specialistDetails/5",type:1},
        {teamname:'NiuTrans团队',principal:'肖桐',
        detail:'国内顶级自然语言处理领域专家，任东北大学计算机学院教授、博士生导师。曾先后在香港城市大学、美国南加州大学USC/ISI开展语言分析和机器翻译的访问研究。',
        img:"static/solution//xiaoniu/u1626.jpg",url:"http://www.yatrans.com/plus/list.php?tid=79",type:0}
        ]
      },
      cooperationData:[
        "static/solution/xiaoniu/u1612.png","static/solution/xiaoniu/u1614.png","static/solution/xiaoniu/u1616.png",
        "static/solution/xiaoniu/u1758.png","static/solution/xiaoniu/u1754.png","static/solution/xiaoniu/u1618.png",
        "static/solution/xiaoniu/u1748.png","static/solution/xiaoniu/u1750.png","static/solution/xiaoniu/u1744.png",
        "static/solution/xiaoniu/u1746.png","static/solution/xiaoniu/u1752.png","static/solution/xiaoniu/u1756.png"
        ]
    }
   
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>