webpackJsonp([55],{yHUR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v={name:"style",data:function(){return{title:"插入属性",txt:"插入文本",html:"<del>插入 html</del>"}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/bind-data/bind-data.vue",this.$router.push("/popup")}}},_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("绑定数据到模板: ")]),t._v(" "),e("dd",[e("b",[t._v("｛｛｝｝")]),t._v(" "),e("s",[t._v(t._s(t.txt))])]),t._v(" "),e("dd",[e("b",[t._v("｛｛ 1+1 ｝｝")]),t._v(" 表达式计算"),e("s",[t._v(t._s(2))])]),t._v(" "),e("dd",[e("b",[t._v("｛｛ true ? 100 : 200 ｝｝")]),t._v(" 三元运算"),e("s",[t._v(t._s(100))])]),t._v(" "),e("dd",[e("b",[t._v('v-bind:attr=""')]),t._v(" "),e("s",{attrs:{attr:t.title}},[t._v("绑定属性")])]),t._v(" "),e("dd",[e("b",[t._v('v-html=""')]),t._v(" "),e("s",{domProps:{innerHTML:t._s(t.html)}},[t._v("插入 html")])]),t._v(" "),e("dd",[e("b",[t._v('v-text=""')]),t._v(" "),e("s",{domProps:{textContent:t._s(t.txt)}},[t._v("插入文本")])])])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"})])},n=[],o={render:_,staticRenderFns:n},l=o,a=e("VU/8"),d=a(v,l,!1,null,null,null);s.default=d.exports}});