webpackJsonp([7],{"2znn":function(t,e,n){var a=n("T77s");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("516f5001",a,!0)},"4LGW":function(t,e,n){"use strict";e.c=function(t){return Object(a.a)({url:"service/searchServiceByCondition",method:"post",data:s.a.stringify(t)})},e.a=function(t){return Object(a.a)({url:"/service/details/list?id="+t,method:"get"})},e.d=function(t){return Object(a.a)({url:"/execute/service",method:"post",data:s.a.stringify(t)})},e.b=function(t){return Object(a.a)({url:"/service/getServiceTypeNameById",method:"post",data:s.a.stringify(t)})};var a=n("vLgD"),i=n("DEjr"),s=n.n(i)},"4rRK":function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.serviceDetail-container .service_info[data-v-c58966da] {\n  position: relative;\n}\n.serviceDetail-container .service_info .service_bg_img[data-v-c58966da] {\n    width: 100%;\n    max-height: 300px;\n}\n.serviceDetail-container .service_info .title_desc[data-v-c58966da] {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #fff;\n    left: 20%;\n    right: 20%;\n    bottom: 0;\n    top: 0;\n}\n.serviceDetail-container .font01[data-v-c58966da] {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  color: #8F8F8F;\n}\n",""])},BkkN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("4LGW"),i=n("0xDb"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"technicalFeatures"},[n("el-row",[n("el-col",{staticClass:"text_center",attrs:{span:24}},[n("h2",{staticClass:"font30"},[t._v("技术特点")])])],1),t._v(" "),n("el-row",{staticClass:"icon_panel"},t._l(t.featureData,function(e,a){return"006001"==e.relateType?n("div",{key:a,staticClass:"icon_panel_item"},[n("div",{staticClass:"grid-content"},[n("img",{staticClass:"img ",attrs:{src:"static/services/serviceDetails/"+e.banner}}),t._v(" "),n("p",{staticClass:"font18"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"font_color_grey font14"},[t._v("\n         "+t._s(e.content)+"\n       ")])])]):t._e()}))],1)},staticRenderFns:[]};var c={data:function(){return{beforeValue:this.inArg,afterValue:null,executeUrl:"",waiting:!1}},props:["inArg","url","type"],watch:{inArg:function(t){this.beforeValue=t}},methods:{execute:function(){var t=this;this.waiting=!0;var e={type:this.type,url:this.url,param:this.beforeValue};Object(a.d)(e).then(function(e){e.data.data?t.afterValue=e.data.data:t.afterValue=e.data,t.waiting=!1})}},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"functionalEmbodiment"},[n("el-row",[n("el-col",{staticClass:"text_center",attrs:{span:24}},[n("h2",{staticClass:"font30"},[t._v("功能体验")]),t._v(" "),n("p",{staticClass:"small font_color_grey"},[t._v("采用双向最大匹配方法实现最长分词匹配")])])],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-row",{staticClass:"panel"},[n("el-col",{attrs:{span:10}},[n("div",{staticClass:"left"},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.beforeValue,callback:function(e){t.beforeValue=e},expression:"beforeValue"}})],1)]),t._v(" "),n("el-col",{staticClass:"text_center",attrs:{span:4}},[n("el-button",{attrs:{type:"primary",loading:t.waiting},nativeOn:{click:function(e){t.execute(e)}}},[t._v("    执行     ")])],1),t._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"right"},[t._v("\n       "+t._s(t.afterValue)+"\n     ")])])],1)],1)},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"applicationScene2"},[n("el-row",[n("el-col",{staticClass:"text_center",attrs:{span:24}},[n("h2",{staticClass:"font30"},[t._v("推荐场景")])])],1),t._v(" "),n("el-row",{staticClass:"panel"},t._l(t.sceneData,function(e,a){return"006002"==e.relateType?n("div",{key:a,staticClass:"item"},[n("el-col",{attrs:{span:5}},[n("img",{staticClass:"img ",attrs:{src:"static/services/serviceDetails/"+e.banner}})]),t._v(" "),n("el-col",{staticClass:"content",attrs:{span:19}},[n("label",{staticClass:"font18"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"font16"},[t._v(t._s(e.content))])])],1):t._e()}))],1)},staticRenderFns:[]};var o={data:function(){return{service_title:"",service_type_name:"",service_desc:"",serviceId:"",serviceType:"",url:"",inArg:"",featureData:{},sceneData:{},type:""}},components:{TechnicalFeatures:n("/Xao")({data:function(){return{}},props:["featureData"],methods:{init:function(){}},mounted:function(){this.init()}},s,!1,function(t){n("2znn")},"data-v-40076dd1",null).exports,FunctionalEmbodiment:n("/Xao")(c,r,!1,function(t){n("SN09")},"data-v-469908e6",null).exports,ApplicationScene2:n("/Xao")({data:function(){return{}},props:["sceneData"]},l,!1,function(t){n("FRHI")},"data-v-8c0b2a86",null).exports},filters:{subStringNoMore3line:function(t){return Object(i.a)(t,40)}},mounted:function(){var t=this;console.log(this.$route.params.service_id),this.serviceId=this.$route.params.service_id,Object(a.a)(this.serviceId).then(function(e){t.service_title=e.data.serviceName,t.service_desc=e.data.serviceDescr,t.featureData=e.data.serviceRelates,t.sceneData=e.data.serviceRelates,t.url=e.data.url,t.inArg=e.data.in_arg,t.type=e.data.methodType;var n={class_id:e.data.class_id};Object(a.b)(n).then(function(e){t.service_type_name=e.data.classifyName})})}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"serviceDetail-container"},[a("el-row",{staticClass:"service_info"},[a("img",{staticClass:"service_bg_img",attrs:{src:n("psox")}}),t._v(" "),a("div",{staticClass:"title_desc"},[a("div",{staticClass:"title_content"},[a("h2",{staticClass:"font36 nomargin"},[a("span",{staticClass:"font20"},[t._v(t._s(t.service_type_name)+" /")]),t._v(" "+t._s(t.service_title)+" ")]),t._v(" "),a("p",{staticClass:"font18",attrs:{title:t.service_desc}},[t._v(" "+t._s(t._f("subStringNoMore3line")(t.service_desc))+" ")]),t._v(" "),a("div",[a("el-button",{staticClass:"font16",attrs:{type:"primary"}},[t._v("立即使用")]),t._v(" "),a("el-button",{staticClass:"font16"},[t._v("技术文档")])],1)])])]),t._v(" "),a("technical-features",{attrs:{"feature-data":t.featureData}}),t._v(" "),a("br"),t._v(" "),a("functional-embodiment",{attrs:{"in-arg":t.inArg,url:t.url,type:t.type}}),t._v(" "),a("application-scene2",{attrs:{"scene-data":t.sceneData}}),t._v(" "),a("div",{staticClass:"text_center"},[a("el-button",{staticClass:"font14  custom_button_blue",attrs:{type:"primary"}},[t._v("立即使用")]),t._v(" "),a("el-button",{staticClass:"font16"},[t._v("技术文档")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(0),t._v(" "),a("br"),t._v(" "),a("br")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text_center"},[e("p",{staticClass:"font01"},[this._v("如果您有以上需求，欢迎【合作咨询】: 联系电话：010-38686868633   QQ：845666634")])])}]};var p=n("/Xao")(o,d,!1,function(t){n("Wksf")},"data-v-c58966da",null);e.default=p.exports},FRHI:function(t,e,n){var a=n("MZbi");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("38f65975",a,!0)},"Fco/":function(t,e,n){t.exports=n.p+"static/img/u513.fa4bc08.jpg"},MZbi:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.applicationScene2[data-v-8c0b2a86] {\n  display: block;\n  background: url("+n("Fco/")+") no-repeat;\n  background-size: 100% 100%;\n  color: #fff;\n  padding-bottom: 50px;\n  margin-bottom: 50px;\n}\n.applicationScene2 h2[data-v-8c0b2a86] {\n    font-weight: 500;\n    margin: 35px 0;\n}\n.applicationScene2 .panel[data-v-8c0b2a86] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.applicationScene2 .panel .item[data-v-8c0b2a86] {\n      width: 24%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background-color: #f2f2f238;\n      cursor: pointer;\n      padding: 20px;\n}\n.applicationScene2 .panel .item[data-v-8c0b2a86]:hover {\n        background-color: #4945458a;\n}\n.applicationScene2 .panel .item[data-v-8c0b2a86]:not(:last-child) {\n        border-right: 1px solid #474545;\n}\n.applicationScene2 .panel .item .content[data-v-8c0b2a86] {\n        padding-left: 10px;\n}\n.applicationScene2 .panel .item .content label[data-v-8c0b2a86] {\n          font-weight: 500;\n}\n",""])},SN09:function(t,e,n){var a=n("xc54");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("2379d778",a,!0)},T77s:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.technicalFeatures[data-v-40076dd1] {\n  display: block;\n  background-color: #fff;\n}\n.technicalFeatures h2[data-v-40076dd1] {\n    font-weight: 500;\n    margin: 45px 0;\n}\n.technicalFeatures .icon_panel[data-v-40076dd1] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.technicalFeatures .icon_panel .icon_panel_item[data-v-40076dd1] {\n      position: relative;\n      width: 20%;\n      text-align: center;\n}\n.technicalFeatures .icon_panel .icon_panel_item img[data-v-40076dd1] {\n        width: 32%;\n}\n",""])},Wksf:function(t,e,n){var a=n("4rRK");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("31f6160f",a,!0)},xc54:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.functionalEmbodiment[data-v-469908e6] {\n  display: block;\n  background-color: #f2f2f2;\n  padding-bottom: 50px;\n}\n.functionalEmbodiment h2[data-v-469908e6] {\n    font-weight: 500;\n    margin: 45px 0;\n}\n.functionalEmbodiment .panel[data-v-469908e6] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.functionalEmbodiment .panel .left[data-v-469908e6] {\n      width: 79%;\n      height: 300px;\n      float: right;\n}\n.functionalEmbodiment .panel .right[data-v-469908e6] {\n      width: 79%;\n      height: 300px;\n      float: left;\n      background-color: #fff;\n      overflow: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n      color: #606266;\n      font-size: 14px;\n      border: 1px solid #ddd;\n      line-height: 21px;\n}\n",""])}});