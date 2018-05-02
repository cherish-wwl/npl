<template>
   <el-container class='popularServices' id="popularServices">
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2>热门服务</h2> 
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" v-for="item in list1" :key='item.id' :class="icon_panel_index == item.id ? 'active':''" v-on:click="toggleIconPanel(item.id)">
        <div class="grid-content text_center">
          <svg-icon :icon-class="item.icon" ></svg-icon>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </el-row>
    <el-row class='font_panel'>
      <div class='font_panel_item' v-for="item in list2" :key='item.id'>
        <label>{{ item.name }}</label>
        <ul>
          <li v-for="child in item.children" :key='child.id' @click="linkServiceListPage(child.class_id)">{{ child.name }}</li>
        </ul>
      </div>      
    </el-row>
   </el-container>
</template>

<script>
  import { getpopularServicesList, getpopularSubServicesList} from '@/api/home'
  import { scrollAnimation } from '@/utils/scrollAnimation.js'
  import Cookies from 'js-cookie'
  export default {
    data () {
      return {
        icon_panel_index:0,
        font_panel_span:0,
        list1:[],
        list2:[]
      }
    },
    methods:{
      init () {
        // axios  获取全部数据
       getpopularServicesList ().then(response =>{
          this.list1 = response.data
          if(this.list1.length !=0 ){
            this.icon_panel_index = this.list1[0].id
            this.refrushIconPanel()
          }
          
       })
      },
      toggleIconPanel (index) {
        // console.log(index)
        this.icon_panel_index = index
        this.refrushIconPanel()
        // 滚动动画
        scrollAnimation(".popularServices")
        // let jump = document.querySelectorAll('.popularServices')
        //  // 获取需要滚动的距离
        //  let total = jump[0].offsetTop

        //  // Chrome
        //  document.body.scrollTop = total
        //  // Firefox
        //  document.documentElement.scrollTop = total
        //  // Safari
        //  window.pageYOffset = total
      },

      refrushIconPanel(){
        getpopularSubServicesList ({ "id": this.icon_panel_index }).then(response => {
            this.list2 = response.data
        })
      },
      linkServiceListPage (id) {
        Cookies.set("service_id",id)
        //  this.$router.push({name: 'serviceLists', params: { service_id: id }})
        this.$router.push({name: 'serviceLists',params:{ randomValue: Math.random().toString(36).substr(2) }})
        console.log(Cookies.get("service_id"))
      },
    },
    mounted () {
      this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .popularServices {
     display: block;
      h2{
        font-weight:500;
        margin: 45px 0;
      }
      .icon_panel{
        display: flex;
        justify-content: space-around;
        .icon_panel_item {
            position: relative;
            cursor: pointer;
            .svg-icon{
              font-size: 100px;
              color: #aaaaaa;
            }
            &:hover{
              .svg-icon{
                color: blue;
              }
            }
        }
        .icon_panel_item.active:after {
          content: '';
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #f1eded;
          position: absolute;
          bottom: 0;
          left: 41%;
        }
        .icon_panel_item.active{
          .svg-icon{
            color: blue;
          }
        }
       
        
      }
      .font_panel{
        display: flex;
        justify-content: center;
        background-color: #f1eded;
        padding: 20px 0;
        .font_panel_item:not(:first-child) {
          border-left: 1px solid #ddd;
          padding-left: 4%;
          padding-right: 4%;
        }
        .font_panel_item:first-child{
           padding-right: 4%;
        }
        label{
          font-size:small;
        }
        ul{
          list-style: none;
          margin: 0;
          padding:0;
          font-size: smaller;
          margin-top: 20px;
          margin-bottom: 15px;
          color: #8a8989;
          li{
            padding-bottom: 10px;
            cursor: pointer;
            &:hover{
              color:#5c5cf3;
            }
          }
        }
      }
   }
</style>

