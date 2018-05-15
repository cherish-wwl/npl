<template>
  <el-container class='about_platform'>
    <div v-on:mouseenter='loadingCount'>
      <el-row class="text_center">
        <h2 class="font30">关于平台</h2>
      </el-row>
      <el-row class="display_panel" >
        <div class="display_content"  >
          <p>接受中国信息学会指导并得到计算机学会自然语言处理专委会周明博士的建议依托国内外人工智能特别是自然语言处理领域所有专家学者，
            神州泰岳以及有志合作伙伴，覆盖了中文（不限于汉语）信息深度处理最先进、最新、最全成果的，由神州泰岳为建设和运营主体的产学研一体化开放创新生态平台。<p>
          <p>平台旨在为NLP领域聚智、聚知、聚人、聚力、做行业全面领先的自然语言领域平台；做科研成果和行业产品的沟通桥梁；做多机构的优势互补中间站；做NLP领域开发创新的温床；做NLP教育的第一战线</p>
          <div >
            <el-row class='text_center display_count' >
              <el-col :span='6'  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num1 }}</span> 个
                </div>
                <div class='item_name'>基础服务</div>
              </el-col>
              <el-col :span='6'  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num2 }}</span> 个
                </div>
                <div class='item_name'>应用方案</div>
              </el-col>
              <el-col :span='6'  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num3 }}</span> 个
                </div>
                <div class='item_name'>解决方案</div>
              </el-col>
              <el-col :span='6'  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num4 }}</span> 个
                </div>
                <div class='item_name'>数据集</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <img class='zhehe' src='../../../../assets/home/zhehe.png'>
      </el-row>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return{
      num1:0,
      num2:0,
      num3:0,
      num4:0
    }
  },
  methods: {
    loadingCount(){
      console.log("进入区域")
      var endNum1 = 44
      var endNum2 = 5
      var endNum3 = 44
      var endNum4 = 5

      var that = this
      var interval1 = setInterval(function(){
        if(that.num1 >= endNum1){
          clearInterval(interval1)
        }else{
          that.num1 += 1
        }
      }, 10)
      var interval2 = setInterval(function(){
        if(that.num2 >= endNum2){
          clearInterval(interval2)
        }else{
          that.num2 += 1
        }
      }, 10)
      var interval3 = setInterval(function(){
        if(that.num3 >= endNum3){
          clearInterval(interval3)
        }else{
          that.num3 += 1
        }
      }, 10)
      var interval4 = setInterval(function(){
        if(that.num4 >= endNum4){
          clearInterval(interval4)
        }else{
          that.num4 += 1
        }
      }, 10)
    }
  }

}
</script>
<style lang="scss" scoped>
.about_platform {
  display: block;
  color: #fff;
  background-color: #4f7bf7;
  margin-bottom: 30px;
  .display_content {
    padding: 0 10% 100px;
    .display_count{
      cursor:pointer;
      .item{
      .item_num {
        margin-bottom: 17px;
        margin-top: 30px;
        .countNum {
          font-size: 55px;
        }
      }
      .item_name {
        font-size: larger;
      }
    }
    }
    
    p{
      text-indent: 33px;
      font-weight: 300;
    }
    
  }
  h2{
    font-weight: 500;
    margin: 45px 0;
  }
  .zhehe{
    height: 275px;
    position: absolute;
    bottom: -151px;
  }
}
</style>

