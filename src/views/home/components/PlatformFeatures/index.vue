<template>
  <el-container class='platform_features'>
    <el-row>
      <el-col :span="6">
        <div class="grid-content">
          <label>权威学者</label>
          <p>
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <label>权威学者</label>
          <p>
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <label>权威学者</label>
          <p>
            国内外大部分自然语言权威学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <label>权威学者</label>
          <p>
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
    .el-col{
       padding: 15px 30px 0 30px;
       p{
         color: #918b8b;
       }
       label{
         font-weight:bold;
       }
    }
}
</style>

