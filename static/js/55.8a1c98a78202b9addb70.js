webpackJsonp([55],{"DQ/d":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"v-if",data:function(){return{isA:!0,isB:null}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/bind-data/v-if.vue",this.$router.push("/popup")},go:function(){this.isA=!this.isA}}},a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"my-box"},[s("button",{staticClass:"btn-default",on:{click:function(e){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),s("button",{staticClass:"btn-default",on:{click:function(e){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),s("div",{staticClass:"lh30"},["angular"==t.isB?s("h2",[t._v("angular + ionic")]):"react"==t.isB?s("h2",[t._v("react + native")]):"vue"==t.isB?s("h2",[t._v("vue + vuex")]):s("h2",[t._v("都不是")])]),t._v(" "),s("p",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.isB,expression:"isB"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.isB=e.target.multiple?s:s[0]}}},[s("option",[t._v("angular")]),t._v(" "),s("option",[t._v("react")]),t._v(" "),s("option",[t._v("vue")]),t._v(" "),s("option",[t._v("nodejs+express")])])]),t._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t.isA?[t._m(1,!1,!1)]:t._e(),t._v(" "),s("button",{staticClass:"btn-default mt10",on:{click:t.go}},[t._v("change")])],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lh30 mvvm-code"},[s("dl",{staticClass:"mvvm-list"},[s("dt",[t._v("v-if='' v-else 条件渲染")]),t._v(" "),s("dd",[s("b",[t._v('v-if=""')])]),t._v(" "),s("dd",[s("b",[t._v('v-else-if=""')])]),t._v(" "),s("dd",[s("b",[t._v("v-else")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lh30"},[s("h1",[t._v("切换多个元素")]),t._v(" "),s("p",[t._v("template 1")]),t._v(" "),s("p",[t._v("template 2")])])}],v={render:a,staticRenderFns:n},l=v,o=s("VU/8"),u=o(i,l,!1,null,null,null);e.default=u.exports}});