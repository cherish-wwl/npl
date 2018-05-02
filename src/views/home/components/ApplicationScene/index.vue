<template>
  <el-container class='applicatin_scene'>
    <el-row class='text_center'>
      <h2>应用场景</h2>
    </el-row>
    <el-row class='display_panel'>    
      <div v-for='item in datalist' :key='item.id'>
        <div class="grid-content item">
          <div class="normol_panel">
            <img :src="'static/index/'+item.icon+'.jpg'">
            
            <div class='mask'>
              <div class="bg other-bg"></div>
              <div class="content text_center">
                <div class='title'>
                  <!-- <img src='../../../../assets/home/news02.png'> -->
                  <svg-icon :icon-class="item.icon"></svg-icon>
                  <h2>{{ item.name }}</h2>
                </div>
                <div class='content_text'>
                  <p>{{ item.descr}}</p>
                  <div><a>新闻分类</a>|<a>其他</a></div>
                  <div><el-button size="mini" @click="seeDetails(item.id)">查看详情</el-button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </el-container>
   
</template>

<script>
  import { getApplicationSceneList} from '@/api/home'
  export default {
    data() {
      return {
        currentIndex: 0,
        datalist:[],
        imglist:[require('../../../../assets/home/xinwen01.jpg'),require('../../../../assets/home/kefu01.jpg'),require('../../../../assets/home/sifa01.jpg')],
      }
    },
    computed:{
      getIMG(index){
        if( index > 3 ){
          index = index%3
          return this.imglist[index]
        }else{
          return this.imglist[index]
        }
      }
    },
    methods: {
      
    },
    mounted () {
      getApplicationSceneList().then(response =>{
        this.datalist = response.data
      })
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .applicatin_scene {
    display: block;
    margin-bottom: 50px;
    h2{
      font-weight: 500;
      margin: 45px 0;
    }
    .display_panel{
      padding: 0 15%;
      display: flex;   
      .item{
        position: relative;
        cursor:pointer;
        .normol_panel{
          position: relative;
        }
        .mask {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          bottom: 4px;
          .bg {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              opacity: .6;  
              filter: alpha(opacity=60);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
              transition: all .4s cubic-bezier(.4,0,.2,1);
          }
          .bg.other-bg {
              opacity: .82;
              filter: alpha(opacity=82);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(82));
          }      
          .content {
              position: absolute;
              padding: 0 12%;
              left: 0;
              right: 0;
              top: 25%;
              bottom: 0;
              color:rgba(255, 255, 255, 0.66);
              filter: alpha(opacity=0);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
              transition: all .4s cubic-bezier(.4,0,.2,1);
              .content_text{
                opacity: 0;
                 filter: alpha(opacity=0);
                -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
                transition: all .4s cubic-bezier(.4,0,.2,1);
              }
              .title {

                .svg-icon{
                  width: 80px;
                  height: 80px;
                }
                h2{
                  margin-top:0; 
                  margin-bottom:0; 
                }
              }
              .content_text{
                p{
                  font-weight:300;
                  transition: all .4s cubic-bezier(.4,0,.2,1);
                }
                a{
                  font-size: smaller;
                  text-decoration: underline;
                  transition: all .4s cubic-bezier(.4,0,.2,1);
                  &:first-child{
                    margin-right: 10px;
                  }
                  &:last-child {
                    margin-left: 10px;
                  }
                }
                button{
                  background-color: rgba(255,255,255,0);
                  color: #fff;
                  border-radius: 0;
                  margin-top: 20px;
                  transition: all .4s cubic-bezier(.4,0,.2,1);
                }
              }
          }
        }
        &:hover .content {
            top: 5%;
            color: #fff;
            filter: alpha(opacity=100);
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
             transition: all .4s cubic-bezier(.4,0,.2,1);
            .content_text{
              opacity: 1;
              filter: alpha(opacity=100);
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
             transition: all .4s cubic-bezier(.4,0,.2,1);
            }
          }
          &:hover .bg.other-bg{
              background-color: #00c2de;
              opacity: .9;
              filter: alpha(opacity=90);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90));
          }
        
      }  
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>

