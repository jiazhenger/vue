webpackJsonp([21,22],{"AAB+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("mvHQ"),o=i.n(n),v=(i("Impm"),{name:"directive",data:function(){return{text:null,msg:null}},directives:{demo:{inserted:function(e,t,i){void 0!=t.value?e.innerHTML=o()(t.value,null,"\t"):e.innerHTML="v-myDirectiveName 动态操作 DOM"},bind:function(e,t,i){},unbind:function(e,t,i){},update:function(e,t,i,n){},componentUpdated:function(e,t,i,n){}}},methods:{goVue:function(){localStorage.code="views/directive/directive.vue",this.$router.push("/popup")},goDirective:function(){localStorage.code="views/directive/directives/my.directive.js",this.$router.push("/popup")}}}),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{staticClass:"my-box"},[i("button",{staticClass:"btn-default",on:{click:function(t){e.goVue()}}},[e._v("到本组件")]),e._v(" "),i("button",{staticClass:"btn-default",on:{click:function(t){e.goDirective()}}},[e._v("到指令")])]),e._v(" "),i("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),e._m(0,!1,!1),e._v(" "),i("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),e._v(" "),i("h2",[e._v("给指令赋于参数")]),e._v(" "),i("pre",{directives:[{name:"demo",rawName:"v-demo",value:{a:"angular",b:"react",c:"vue"},expression:'{a:"angular",b:"react",c:"vue"}'}]}),e._v(" "),i("h3",{directives:[{name:"demo",rawName:"v-demo"}]}),e._v(" "),i("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),i("p",[i("input",{directives:[{name:"focus",rawName:"v-focus:hello.a.b",value:e.msg,expression:"msg",arg:"hello",modifiers:{a:!0,b:!0}},{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}})])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lh30 mvvm-code"},[i("dl",{staticClass:"mvvm-list"},[i("dt",[e._v("自定义指令：")]),e._v(" "),i("dd",[i("b",[e._v('v-directiveNmae == "value"')]),e._v(" 指令绑定格式")]),e._v(" "),i("dd",[i("b",[e._v('v-directive:foo == ""')]),e._v(" 指令参数，用 "),i("b",[e._v("binding.arg")]),e._v(" 获取")]),e._v(" "),i("dd",[i("b",[e._v('v-directive.a.b == ""')]),e._v(" 修饰符，用 "),i("b",[e._v("binding.modifiers")]),e._v(" 获取")]),e._v(" "),i("dd",[e._v("外部指令，可引入公共部分，或组件内部")]),e._v(" "),i("dd",[e._v("内部指令直接挂在 "),i("b",[e._v("directives:｛｝")]),e._v(" 上")])])])}],s={render:a,staticRenderFns:r},u=s,c=i("VU/8"),l=c(v,u,!1,null,null,null);t.default=l.exports},Impm:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("7+uW").a.directive("focus",{inserted:function(e,t){e.focus(),e.style.color="red",e.style.borderColor="red"},bind:function(e,t){console.log(t)},unbind:function(e){},update:function(e,t){var i="red";1==t.value?i="blue":12==t.value?i="green":123==t.value?i="yellow":1234==t.value&&(i="brown"),e.style.color=i,e.style.borderColor=i},componentUpdated:function(e){}})}});