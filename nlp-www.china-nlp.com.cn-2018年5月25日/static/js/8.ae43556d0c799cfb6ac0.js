webpackJsonp([8],{"2dvm":function(e,n,o){var t=o("Z23j");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("8bSs")("6e7126a6",t,!0)},"958R":function(e,n,o){(e.exports=o("BkJT")(!1)).push([e.i,'\n.app-wrapper[data-v-53db5754] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.app-wrapper[data-v-53db5754]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n',""])},VVDt:function(e,n,o){var t=o("958R");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("8bSs")("390f1e72",t,!0)},Z23j:function(e,n,o){(e.exports=o("BkJT")(!1)).push([e.i,"\n.register-container {\n  padding: 8% 20%;\n  background-color: #f1f3f5;\n}\n.register-container .show-pwd {\n    position: absolute;\n    right: 10px;\n    top: 5%;\n    font-size: 16px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.register-container form.el-form {\n    background-color: #fff;\n    padding: 10% 26%;\n}\n",""])},bqOp:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={render:function(){var e=this.$createElement,n=this._self._c||e;return n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#000","text-color":"#fff","active-text-color":"#fff"}},[n("el-menu-item",{attrs:{index:"0"}},[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{src:o("IEOQ")}})])],1),this._v(" "),n("div",{staticClass:"loginDiv"},[this._v("\n     已有帐号，"),n("a",{on:{click:this.handleSelect}},[this._v("立即登录")])])],1)],1)},staticRenderFns:[]};var r=o("/Xao")({data:function(){return{}},computed:{},methods:{handleSelect:function(){this.$emit("login",!0)}}},t,!1,function(e){o("zmT9")},"data-v-15debe64",null).exports,i=o("E4LH"),a={data:function(){var e=this;return{loginForm:{username:"",password:"",repassword:"",phone:"",verificationCode:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,n,o){Object(i.b)(n)?o():o(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,o,t){o.length<5?t(new Error("密码不能小于5位")):o!==e.loginForm.repassword?t(new Error("两次密码输入不一致")):t()}}],repassword:[{required:!0,trigger:"blur",validator:function(n,o,t){o.length<5?t(new Error("密码不能小于5位")):o!==e.loginForm.password?t(new Error("两次密码输入不一致")):t()}}],phone:[{required:!0,trigger:"blur",validator:function(e,n,o){Object(i.a)(n)?o():o(new Error("请输入正确的手机号"))}}],verificationCode:[{required:!0,trigger:"blur",validator:function(e,n,o){0==n.length?o(new Error("请输入正确的验证码")):o()}}]},loading:!1,pwdType:"password",countDownValue:60,verifiy:!1}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(n){console.log(n),e.loading=!1,n?e.$router.push({path:"/"}):e.$message("用户名或密码错误！")}).catch(function(){e.loading=!1})})},getVerificationCode:function(){var e=this;this.verifiy=!0;var n=setInterval(function(){if(0==e.countDownValue)return e.verifiy=!1,void clearInterval(n);e.countDownValue-=1},1e3);this.$message({message:"验证码发送成功！请注意接收",type:"success"})}}},s={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"register-container"},[o("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:e.loginForm,rules:e.loginRules,"label-position":"left","label-width":"0px"}},[o("h3",{staticClass:"title"},[e._v("欢迎注册")]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"用户名（6-20位数字字母）"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{name:"password",type:e.pwdType,autoComplete:"on",placeholder:"输入密码"},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"repassword"}},[o("el-input",{attrs:{name:"repassword",type:e.pwdType,autoComplete:"on",placeholder:"再次输入密码"},model:{value:e.loginForm.repassword,callback:function(n){e.$set(e.loginForm,"repassword",n)},expression:"loginForm.repassword"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{name:"phone",type:"text",placeholder:"手机号码",autoComplete:"on"},model:{value:e.loginForm.phone,callback:function(n){e.$set(e.loginForm,"phone",n)},expression:"loginForm.phone"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"verificationCode"}},[o("el-input",{attrs:{name:"verificationCode",type:"text",placeholder:"验证码",autoComplete:"on"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.handleLogin(n)}},model:{value:e.loginForm.verificationCode,callback:function(n){e.$set(e.loginForm,"verificationCode",n)},expression:"loginForm.verificationCode"}},[e.verifiy?e._e():o("template",{slot:"append"},[o("span",{staticStyle:{cursor:"pointer"},on:{click:e.getVerificationCode}},[e._v("获取验证码")])]),e._v(" "),e.verifiy?o("template",{slot:"append"},[e._v(e._s(e.countDownValue)+"s")]):e._e()],2)],1),e._v(" "),o("el-form-item",[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(n){n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        注册\n      ")])],1)],1)],1)},staticRenderFns:[]};var l={name:"layout",components:{HeaderPanel:r,ContentPanel:o("/Xao")(a,s,!1,function(e){o("2dvm")},null,null).exports,Login:o("NQQ+").a},data:function(){return{loginVisible:!1}},computed:{},methods:{login:function(e){console.log(e),this.loginVisible=e}}},c={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"register app-wrapper"},[n("header-panel",{staticClass:"header-container",on:{login:this.login}}),this._v(" "),n("content-panel"),this._v(" "),n("el-footer",[this._v("Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1")]),this._v(" "),n("login",{attrs:{visible:this.loginVisible},on:{login:this.login}})],1)},staticRenderFns:[]};var p=o("/Xao")(l,c,!1,function(e){o("VVDt")},"data-v-53db5754",null);n.default=p.exports},h75Y:function(e,n,o){(e.exports=o("BkJT")(!1)).push([e.i,"\n.loginDiv[data-v-15debe64] {\n  color: #9f9696;\n  display: inline-block;\n  float: right;\n  line-height: 50px;\n  font-size: small;\n}\n.loginDiv a[data-v-15debe64] {\n    color: #409eff;\n}\n",""])},zmT9:function(e,n,o){var t=o("h75Y");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("8bSs")("1e98536e",t,!0)}});