webpackJsonp([54],{XlbZ:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"v-show",data:function(){return{isA:!0}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/bind-data/v-show.vue",this.$router.push("/popup")},go:function(){this.isA=!this.isA}}},n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(s){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(s){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("v-show='' 条件渲染")]),t._v(" "),e("dd",[e("b",[t._v('v-show=""')]),e("s",{directives:[{name:"show",rawName:"v-show",value:t.isA,expression:"isA"}]},[t._v("v-show")])])])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("button",{staticClass:"btn-default mt10",on:{click:t.go}},[t._v("change")])])},a=[],i={render:n,staticRenderFns:a},u=i,c=e("VU/8"),l=c(o,u,!1,null,null,null);s.default=l.exports}});