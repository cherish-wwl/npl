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
              <span class="item" :class="currentNode == 1?'active':''" @click="currentNode = 1">研究成果</span>
              <span class="item" :class="currentNode == 2?'active':''" @click="currentNode = 2">研究成果</span>
              <span class="item" :class="currentNode == 3?'active':''" @click="currentNode = 3">研究成果</span>
            </div>
            <br />
            <div class="dispaly-content">
              
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="specialist-contact bordertopbule">
            <div>同研究领域相关专家</div>
            <el-row>
              <el-col :span="8" class="specialist-content-item text_center">
                <img src="../../../../assets/home/specialist/u596.png">
                <p class="text_center"><span>赵铁军</span></p>
              </el-col>
              <el-col :span="8" class="specialist-content-item text_center">
                <img src="../../../../assets/home/specialist/u596.png">
                <p class="text_center"><span>赵铁军</span></p>
              </el-col>
              <el-col :span="8" class="specialist-content-item text_center">
                <img src="../../../../assets/home/specialist/u596.png">
                <p class="text_center"><span>赵铁军</span></p>
              </el-col>
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
      specialistData:[
        {
          name:'黄德根',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。"
        },{
          name:'黄德根1',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。"
        },{
          name:'黄德根2',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。"
        },{
          name:'黄德根3',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。"
        },{
          name:'黄德根4',
          desrc:"福州大学计算机系学士，大连理工大学计算力学硕士，大连理工大学计算机应用技术博士。1988年12月硕士毕业后留校工作，曾在日本国立德岛大学任高级访问学者，主持开发过“孙悟空中日机器翻译系统”等系列商用软件，现为大连理工大学计算机学院教授、博导。"
        }
      ],
      currentSpecialistIndex:''

    }
  },
  methods:{
    seeDetails (index) {
      this.isDetail = true
      this.title1 = '专家列表'
      this.title2 = this.specialistData[index].name
      this.currentSpecialistIndex = index
    },
    returnBack () {
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
      padding: 12px 24px;
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
    }
    .specialist-contact{
      background-color: #fff;
      padding: 12px 24px;
      img{
        width: 69px;
        height: 92px;
      }
    }
  }
}
</style>

