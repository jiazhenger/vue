webpackJsonp([7,10,23,24],{"6koR":function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"\n.active{color:red\n}\n.hover{text-decoration:underline\n}\n",""])},bKPX:function(t,s,e){var l=e("6koR");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);e("rjj0")("70afcd28",l,!0)},rUqD:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={name:"style",data:function(){return{}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/style/style-vue.vue",this.$router.push("/popup")}}},a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(3,!1,!1),t._v(" "),t._m(4,!1,!1)])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v(".vue 组件中的样式: ")]),t._v(" "),e("dd",[e("b",[t._v(':style=""')]),t._v(" == "),e("b",[t._v('v-bind:style=""')])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v(".vue 配置 css ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"mvvm-pre"},[t._v("\t\t// 在  style 标签中导入样式\n\t\t<style\n\t\t\t"),e("b",[t._v("scoped")]),t._v("\t\t\t\t\t\t// 限制 css 只在当前组件起作用\n\t\t\t"),e("b",[t._v('lang = "@css/less/sass"')]),t._v("\t\t// 使用的 css 编译器\n\t\t\t"),e("b",[t._v("src = '@css/login.css'")]),t._v("\t\t// 导入外部样式\n\t\t>\n\t\t\n\t\t// 在 js 中导入样式\n\t\t"),e("b",[t._v("require('@css/login.css')")]),t._v("\t\n\t\t"),e("b",[t._v("@import '@css/login.less'")]),t._v("\n\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("webpack 配置 less ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"mvvm-pre"},[t._v("\t\tnpm install less-loader less --save-dev\n\t\t"),e("b",[t._v("\n\t\t{\n\t\t\ttest: /\\.less$/,\t\t\n\t\t\tloader: ['style-loader', 'css-loader', 'less-loader'],\n\t\t\tloader: 'style-loader!css-loader!less-loader'\n\t\t}")]),t._v("\n\t")])}],n={render:a,staticRenderFns:c},o=n,v=e("VU/8"),r=v(l,o,!1,null,null,null);s.default=r.exports},vZF1:function(t,s,e){"use strict";function l(t){e("bKPX")}Object.defineProperty(s,"__esModule",{value:!0});var a={name:"style",data:function(){return{flag:!0,classObject:{active:!0,hover:!0},classA:"active",classB:"hover"}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/style/style-class.vue",this.$router.push("/popup")}},computed:{classObject1:function(){return{active:this.flag,hover:!this.flag}}}},c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("dl",{staticClass:"mvvm-list"},[e("dd",{class:{active:!t.flag,hover:t.flag}},[t._v(':class="{active:flag,hover}"')]),t._v(" "),e("dd",{class:t.classObject1},[t._v(':class="classObject1"')]),t._v(" "),e("dd",{class:t.classObject},[t._v(':class="classObject"')]),t._v(" "),e("dd",{class:[t.classA,t.classB]},[t._v(':class="[classA,classB]"')]),t._v(" "),e("dd",{class:[t.flag?"":t.classA,t.classB]},[t._v(":class=\"[!flag ? classA : '',classB]\"")]),t._v(" "),e("dd",{class:[{active:t.flag},t.classB]},[t._v(':class="[{active:flag},classB]"')])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.flag=!t.flag}}},[t._v("改变判断值")])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("添加 class 样式 : ")]),t._v(" "),e("dd",[e("b",[t._v(':class=""')]),t._v(" == "),e("b",[t._v('v-bind:class=""')])])])])}],o={render:c,staticRenderFns:n},v=o,r=e("VU/8"),i=l,u=r(a,v,!1,i,null,null);s.default=u.exports},zTgR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={name:"style",data:function(){return{flag:!0,styleObject:{color:"red",textDecoration:"underline"},classA:{color:"red"},classB:{textDecoration:"underline"}}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/style/style-style.vue",this.$router.push("/popup")}}},a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("dl",{staticClass:"mvvm-list"},[e("dd",{style:{color:t.flag?"red":"blue","text-decoration":"underline"}},[t._v("v-bind:style='' 绑定")]),t._v(" "),e("dd",{style:t.styleObject},[t._v(':style="styleObject" 对象绑定')]),t._v(" "),e("dd",{style:[t.classA,t.classB]},[t._v(':style="[classA,classB]" 数组语法')])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.flag=!t.flag}}},[t._v("改变判断值")])])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("添加 style 样式 : ")]),t._v(" "),e("dd",[e("b",[t._v(':style=""')]),t._v(" == "),e("b",[t._v('v-bind:style=""')])])])])}],n={render:a,staticRenderFns:c},o=n,v=e("VU/8"),r=v(l,o,!1,null,null,null);s.default=r.exports}});