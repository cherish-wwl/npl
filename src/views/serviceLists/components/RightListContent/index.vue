<template>
  <el-main class='service_content'>
    <el-row class='service_tools'>
      <el-col :span='12'>
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <span class='small'>{{ serviceInfo.service_title }}</span>
        &nbsp;&nbsp;
        <span>  
          <el-input placeholder="请输入内容" size="mini" v-model="search_key" v-on:change="searchThirdList" class="search_input" suffix-icon="el-icon-search"></el-input>
        </span>
      </el-col>
      <el-col  :span='12' class='text_right'>
        <span class='smaller'>排序：</span>
        &nbsp;
        <span class='small tool-sort-icon' :class="sortType != 1 ? '' : (countSort ? 'sort_desc' : 'sort_asc')"   @click="sortList(1)">使用次数&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
        &nbsp;
        <span class='small tool-sort-icon' :class="sortType != 2 ? '' : (timeSort ? 'sort_desc' : 'sort_asc')" @click="sortList(2)">发布时间&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class='tool-style-icon active'><i class="fa fa-bars" aria-hidden="true"></i></span>
        <span class='tool-style-icon'><i class="el-icon-menu" aria-hidden="true"></i></span>
      </el-col>
    </el-row>
    <el-row class='service_list'>
        <el-row class='item' v-for="item in thridList" :key='item.id'>
          <el-col :span='8' class='item_img'>
            <img :src=" item.serviceIcon | getImage">
          </el-col>
          <el-col :span='16' class='item_info'>
            <h4>
              {{ item.serviceName }}
            </h4>
            <div class='f_c_grey'>
              <span class="smaller">
                服务类型:&nbsp;&nbsp;  {{item.className}}&nbsp; &nbsp; &nbsp; 
                提供者：{{ item.academyName }}&nbsp; &nbsp; 
                发布时间：{{ item.rel_time | formatTime}}
              </span>
            </div>
            <p class="small">
              {{ item.serviceDescr}}
            </p>
            <div>
              <el-button type="primary">立即使用</el-button>
              <el-button @click="seeDetailPage(item.id,item.fromType)">
                查看详情
              </el-button>
            </div>
          </el-col>
        </el-row>
    </el-row>
    <el-row class="text_center">
      <el-pagination
        layout="prev, pager, next"
        :total="paginationTotal"
        :page-size="paginationPageSize"
        :current-page="paginationCurrentPage"
        @current-change="changePaginationCurrentPage">
      </el-pagination>
    </el-row>
  </el-main>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    props:["serviceInfo"]
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>

