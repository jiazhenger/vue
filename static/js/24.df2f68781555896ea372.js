webpackJsonp([24],{rUqD:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={name:"style",data:function(){return{}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/style/style-vue.vue",this.$router.push("/popup")}}},n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(3,!1,!1),t._v(" "),t._m(4,!1,!1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v(".vue 组件中的样式: ")]),t._v(" "),e("dd",[e("b",[t._v(':style=""')]),t._v(" == "),e("b",[t._v('v-bind:style=""')])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v(".vue 配置 css ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"mvvm-pre"},[t._v("\t\t// 在  style 标签中导入样式\n\t\t<style\n\t\t\t"),e("b",[t._v("scoped")]),t._v("\t\t\t\t\t\t// 限制 css 只在当前组件起作用\n\t\t\t"),e("b",[t._v('lang = "@css/less/sass"')]),t._v("\t\t// 使用的 css 编译器\n\t\t\t"),e("b",[t._v("src = '@css/login.css'")]),t._v("\t\t// 导入外部样式\n\t\t>\n\t\t\n\t\t// 在 js 中导入样式\n\t\t"),e("b",[t._v("require('@css/login.css')")]),t._v("\t\n\t\t"),e("b",[t._v("@import '@css/login.less'")]),t._v("\n\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("webpack 配置 less ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"mvvm-pre"},[t._v("\t\tnpm install less-loader less --save-dev\n\t\t"),e("b",[t._v("\n\t\t{\n\t\t\ttest: /\\.less$/,\t\t\n\t\t\tloader: ['style-loader', 'css-loader', 'less-loader'],\n\t\t\tloader: 'style-loader!css-loader!less-loader'\n\t\t}")]),t._v("\n\t")])}],r={render:n,staticRenderFns:a},c=r,v=e("VU/8"),_=v(l,c,!1,null,null,null);s.default=_.exports}});