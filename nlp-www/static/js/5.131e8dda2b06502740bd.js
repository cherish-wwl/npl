webpackJsonp([5],{"/7W8":function(t,n,e){var a=e("C9GH");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("5a8b6c70",a,!0)},"1shR":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("el-header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#000","text-color":"#fff","active-text-color":"#fff"}},[a("el-menu-item",{attrs:{index:"0"}},[a("img",{attrs:{src:e("w1cs")}})]),t._v(" "),a("el-menu-item",{attrs:{index:"5"}},[a("a",{attrs:{href:"#innovation_support"}},[t._v("扶持计划")])]),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[t._v("\n     产品管理\n   ")]),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("a",{attrs:{href:"#innovation_example"}},[t._v("优秀案例")])]),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[t._v("\n     AI辅助工具集\n   ")]),t._v(" "),a("el-menu-item",{attrs:{index:"1"}},[t._v("\n     技术咨询\n   ")]),t._v(" "),a("div",{staticClass:"rightPanel"},[a("el-menu-item",{attrs:{index:"10"}},[a("router-link",{attrs:{to:{name:"home"}}},[t._v(">>返回开放平台首页")])],1)],1)],1)],1)},staticRenderFns:[]};var o=e("/Xao")({data:function(){return{isLogin:!1}},computed:{},methods:{handleSelect:function(){this.$emit("login",!0)}}},a,!1,function(t){e("/7W8")},"data-v-4e3f61aa",null).exports,i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",{staticClass:"cooperation-content content"},[e("el-row",{staticClass:"text_center"},[e("h2",{staticClass:"font30"},[t._v(t._s(t.cooperationData.title))])]),t._v(" "),e("el-row",{staticClass:"display_panel"},t._l(t.cooperationData.data,function(n,a){return e("div",{key:a,staticClass:"coulum-3",on:{mouseenter:function(n){t.currentIndex=a}}},[t.currentIndex==a?e("img",{attrs:{src:n.img}}):e("img",{attrs:{src:n.activeImg}})])}))],1)},staticRenderFns:[]};var c={components:{cooperation:e("/Xao")({props:["cooperationData"],data:function(){return{currentIndex:0}}},i,!1,function(t){e("2i3A")},"data-v-97cffc14",null).exports},data:function(){return{featherData:[{id:1,year:"2018",date:"5/22",title:"平台融合多学校资",descr:"智慧语义理解开放创新平台融合多学校资源..."},{id:2,year:"2018",date:"5/22",title:"平台融合多学校资",descr:"智慧语义理解开放创新平台融合多学校资源..."},{id:3,year:"2018",date:"5/22",title:"平台融合多学校资",descr:"智慧语义理解开放创新平台融合多学校资源..."},{id:54,year:"2018",date:"5/22",title:"平台融合多学校资",descr:"智慧语义理解开放创新平台融合多学校资源..."}],cooperationData:{title:"合作伙伴",data:[{activeImg:"static/cooperation/u469.png",img:"static/cooperation/u469_mouseOver.png"},{activeImg:"static/cooperation/u471.png",img:"static/cooperation/u471_mouseOver.png"},{activeImg:"static/cooperation/u473.png",img:"static/cooperation/u473_mouseOver.png"},{activeImg:"static/cooperation/u475.png",img:"static/cooperation/u475_mouseOver.png"},{activeImg:"static/cooperation/u477.png",img:"static/cooperation/u477_mouseOver.png"},{activeImg:"static/cooperation/u479.png",img:"static/cooperation/u479_mouseOver.png"},{activeImg:"static/cooperation/u481.png",img:"static/cooperation/u481_mouseOver.png"},{activeImg:"static/cooperation/u483.png",img:"static/cooperation/u483_mouseOver.png"},{activeImg:"static/cooperation/u485.png",img:"static/cooperation/u485_mouseOver.png"},{activeImg:"static/cooperation/u487.png",img:"static/cooperation/u487_mouseOver.png"}]},exampleData:[{title:"Dinfo-OEC",descr1:"非结构化文本分析挖掘平台",descr2:"DINFO-OEC非结构化文本分析挖掘平台具有非结构化文本的分析、挖掘的超凡能力，是企业实施大数据战略的强大利器，也是业界首款完全面向业务建模的非结构化文本分析挖掘平台",img:e("e0lb")},{title:"泰岳语义云",descr1:"基于应用场景的大数据语义分析云服务平台",descr2:"泰岳语义云是为合作伙伴、企业用户和应用开发者提供基于应用场景的大数据语义分析云服务平台。其旨在培养和完善中文语义解析领域生态系统，最终实现神州泰岳在中文语义解析领域的领导地位。",img:e("Er8w")},{title:"小富机器人",descr1:"超强语义识别能力的智能人机互动系统",descr2:"小富机器人是采用国内领先的智慧语义认知技术和DINFO-OEC非结构化大数据分析挖掘技术研发的智能人机互动系统。",img:e("oPAJ")}]}}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"innovation"},[a("el-row",[a("img",{attrs:{src:e("AoWO")}})]),t._v(" "),a("el-row",{staticClass:"content content_feather"},t._l(t.featherData,function(n){return a("el-col",{key:n.id,staticClass:"inline_flex item",attrs:{span:6}},[a("div",{staticClass:"dateDiv"},[a("div",{staticClass:"md font28"},[t._v(t._s(n.date))]),t._v(" "),a("div",{staticClass:"year font18"},[t._v(t._s(n.year))])]),t._v(" "),a("div",{staticClass:"fea_info"},[a("label",{staticClass:"font18"},[t._v(t._s(n.title))]),t._v(" "),a("p",{staticClass:"font14"},[t._v(t._s(n.descr))])])])})),t._v(" "),a("br"),t._v(" "),a("el-row",{staticClass:"content content_support",attrs:{id:"innovation_support"}},[a("h2",{staticClass:"text_center font30"},[t._v("扶持计划")]),t._v(" "),a("p",{staticClass:"text_center"},[t._v("旨在收集泰岳及合作伙伴的优势，为自然语言处理创新团队提供优质的自然语言研究资源。")]),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"font-desc-ul"},[a("span",{staticClass:"font20"},[t._v("为团队提供自然语言资源支持")]),t._v(" "),a("li",[t._v("多样的自然语言服务")]),t._v(" "),a("li",[t._v("自然语言相关的资源（行业数据、测试数据等）")]),t._v(" "),a("li",[t._v("成熟的解决方案模版")])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("img",{attrs:{src:e("nwUd")}})])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:12}},[a("img",{attrs:{src:e("GIGf")}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"font-desc-ul"},[a("span",{staticClass:"font20"},[t._v("提供NLP相关的知识讲解，从理论到应用")]),t._v(" "),a("li",[t._v("多样的自然语言服务")]),t._v(" "),a("li",[t._v("自然语言相关的资源（行业数据、测试数据等）")]),t._v(" "),a("li",[t._v("成熟的解决方案模版")])])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"font-desc-ul"},[a("span",{staticClass:"font20"},[t._v("为创新的成果提供产业实践机会，反馈结果、二次优化")]),t._v(" "),a("li",[t._v("多样的自然语言服务")]),t._v(" "),a("li",[t._v("自然语言相关的资源（行业数据、测试数据等）")]),t._v(" "),a("li",[t._v("成熟的解决方案模版")])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("img",{attrs:{src:e("SQhY")}})])],1)],1),t._v(" "),a("br"),t._v(" "),a("el-row",{staticClass:"content text_center",attrs:{id:"innovation_example"}},[a("el-row",[a("h2",{staticClass:"font30"},[t._v("优秀案例")])]),t._v(" "),a("el-row",t._l(t.exampleData,function(n,e){return a("div",{key:e,staticClass:"colums-3"},[a("figure",{staticClass:"effect-lily"},[a("img",{attrs:{src:n.img}}),t._v(" "),a("figcaption",[a("div",[a("h2",[t._v("Nice "),a("span",[t._v("Lily")])]),t._v(" "),a("p",[t._v("Lily likes to play with crayons and pencils")])]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("View more")])])])])}))],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("cooperation",{attrs:{"cooperation-data":t.cooperationData}})],1)},staticRenderFns:[]};var r={name:"layout",components:{HeaderPanel:o,ContentPanel:e("/Xao")(c,s,!1,function(t){e("Fwz3")},"data-v-307fddcc",null).exports,Login:e("NQQ+").a},data:function(){return{loginVisible:!1}},computed:{},methods:{login:function(t){console.log(t),this.loginVisible=t}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"register app-wrapper"},[n("header-panel",{staticClass:"header-container",on:{login:this.login}}),this._v(" "),n("content-panel"),this._v(" "),n("el-footer",[this._v("Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1")]),this._v(" "),n("login",{attrs:{visible:this.loginVisible},on:{login:this.login}})],1)},staticRenderFns:[]};var p=e("/Xao")(r,l,!1,function(t){e("PzLb")},"data-v-26c2f494",null);n.default=p.exports},"2i3A":function(t,n,e){var a=e("5jJ7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("d3bbc9a4",a,!0)},"5jJ7":function(t,n,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.cooperation-content[data-v-97cffc14] {\n  background-color: #f3f3f3;\n}\n.cooperation-content .display_panel .coulum-3[data-v-97cffc14] {\n    width: 23%;\n    display: inline-block;\n    clear: both;\n    margin: 8px;\n}\n.cooperation-content .display_panel img[data-v-97cffc14] {\n    width: 100%;\n    cursor: pointer;\n}\n",""])},AoWO:function(t,n,e){t.exports=e.p+"static/img/u2303.50b6d87.png"},C9GH:function(t,n,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.loginDiv[data-v-4e3f61aa] {\n  color: #9f9696;\n  display: inline-block;\n  float: right;\n  line-height: 50px;\n  font-size: small;\n}\n.loginDiv a[data-v-4e3f61aa] {\n    color: #409eff;\n}\n",""])},Er8w:function(t,n,e){t.exports=e.p+"static/img/u2537.bd78698.jpg"},Fwz3:function(t,n,e){var a=e("fvX5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("9f7db83a",a,!0)},GIGf:function(t,n,e){t.exports=e.p+"static/img/u2503.2c75a14.png"},PzLb:function(t,n,e){var a=e("dPiU");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("04b9df53",a,!0)},SQhY:function(t,n,e){t.exports=e.p+"static/img/u2527.04a35f9.png"},dPiU:function(t,n,e){(t.exports=e("BkJT")(!1)).push([t.i,'\n.app-wrapper[data-v-26c2f494] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.app-wrapper[data-v-26c2f494]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n',""])},e0lb:function(t,n,e){t.exports=e.p+"static/img/u2535.ba6c07b.jpg"},fvX5:function(t,n,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.innovation[data-v-307fddcc] {\n  margin-top: 51px;\n}\n.innovation .content[data-v-307fddcc] {\n    padding: 0 10%;\n}\n.innovation .content_feather[data-v-307fddcc] {\n    background-color: #f3f3f3;\n    margin-top: -4px;\n}\n.innovation .content_feather .item[data-v-307fddcc] {\n      padding: 22px 17px;\n      border-left: 1px solid #DDD;\n}\n.innovation .content_feather .item[data-v-307fddcc]:last-child {\n      border-right: 1px solid #DDD;\n}\n.innovation .content_feather .dateDiv .md[data-v-307fddcc] {\n      color: #99cc33;\n}\n.innovation .content_feather .dateDiv .year[data-v-307fddcc] {\n      color: #cccccc;\n}\n.innovation .content_feather .fea_info[data-v-307fddcc] {\n      padding-left: 7px;\n}\n.innovation .content_feather .fea_info label[data-v-307fddcc] {\n        color: #333333;\n}\n.innovation .content_feather .fea_info p[data-v-307fddcc] {\n        color: #333333;\n}\n.innovation .content_support[data-v-307fddcc] {\n    text-align: center;\n}\n.innovation .content_support .font-desc-ul[data-v-307fddcc] {\n      margin-top: 140px;\n      margin-left: 35px;\n      text-align: left;\n}\n.innovation .content_support .font-desc-ul img[data-v-307fddcc] {\n        min-width: 419px;\n        max-width: 449px;\n        max-height: 437px;\n}\n.innovation .content_support .font-desc-ul span[data-v-307fddcc]:first-child {\n        color: #333333;\n        margin-left: -15px;\n        border-left: 4px solid #2b9eeb;\n        padding-left: 11px;\n        line-height: 60px;\n}\n.innovation .content_support .font-desc-ul li[data-v-307fddcc] {\n        color: #999;\n        line-height: 40px;\n}\n.colums-3[data-v-307fddcc] {\n  width: 30%;\n  display: inline-block;\n  position: relative;\n}\n.colums-3 .example-panel[data-v-307fddcc] {\n    position: absolute;\n    top: 20%;\n    color: #fff;\n}\n.colums-3 .example-panel .hidden-panel[data-v-307fddcc] {\n      display: none;\n}\n.colums-3:hover .example-panel[data-v-307fddcc] {\n    top: 0;\n    bottom: 0;\n    background-color: #2b9eeb;\n}\n.colums-3:hover .example-panel .hidden-panel[data-v-307fddcc] {\n      display: block;\n}\n",""])},nwUd:function(t,n,e){t.exports=e.p+"static/img/u2491.1fc2161.png"},oPAJ:function(t,n,e){t.exports=e.p+"static/img/u2539.1a9045a.jpg"},w1cs:function(t,n){t.exports="data:image/png;base64,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"}});