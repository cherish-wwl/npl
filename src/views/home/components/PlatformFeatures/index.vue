<template>
  <el-container class='platform_features'>
    <el-row style="width: 100%;">
      <el-col :span="6" class="item">
        <div class="grid-content">
          <label class="font20">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            权威学者
          </label>
          <p class="font16">
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="grid-content">
          <label class="font20">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            权威学者入驻
          </label>
          <p class="font16">
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="grid-content">
          <label class="font20">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
             创新合作院校
          </label>
          <p class="font16">
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="grid-content">
          <label class="font20">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            中国中文信息学会
          </label>
          <p class="font16">
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  

}
</script>
<style lang="scss" scoped>
.platform_features {
    background-color: #f5f5f5;
    padding: 0 8%;
    .el-col:not(:first-child) {
      border-left: 1px solid #ddd;
    }
    .el-col:last-child {
      padding-right:0;
     
    }
    .el-col{
       padding: 15px 30px 0 30px;
       p{
         color:rgb(153, 153, 153)
       }
       label{
         font-weight:400;
         color: rgb(51, 51, 51);
       }
    }
    .item:hover{
      background-color: #fcfafa;
    }
}
</style>

