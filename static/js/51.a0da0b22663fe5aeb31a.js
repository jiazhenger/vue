webpackJsonp([51],{"+Jg7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"cache",data:function(){return{}},methods:{goVue:function(){localStorage.code="views/cache/cache-component.vue",this.$router.push("/popup")}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"my-box"},[n("button",{staticClass:"btn-default",on:{click:function(t){e.goVue()}}},[e._v("缓存组件")])]),e._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),e._m(0,!1,!1),e._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),e._m(1,!1,!1),e._v(" "),n("hr",{staticClass:"_mb10x"}),e._v(" "),e._m(2,!1,!1),e._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),e._m(3,!1,!1),e._v(" "),n("hr",{staticClass:"_mb10x"})])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lh30 mvvm-code"},[n("dl",{staticClass:"mvvm-list"},[n("dt",[e._v("缓存组件: ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"mvvm-pre"},[n("b",[e._v("<keep-alive>\n\t<Component>></Component>\n</keep-alive>>")]),e._v("\n\t")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lh30 mvvm-code"},[n("dl",{staticClass:"mvvm-list"},[n("dt",[e._v("判断缓存组件: ")]),e._v(" "),n("dd",[n("b",[e._v("<Component name='a' >")]),e._v(" #这里需要用到组件的名称即name来进行设置")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"mvvm-pre"},[e._v("# 包含a,b\n"),n("b",[e._v('<keep-alive include="a,b">\n\t<component></component>\n</keep-alive>')]),e._v("\n\n# 除了c,d\n"),n("b",[e._v('<keep-alive exclude="c,d">\n\t<component></component>\n</keep-alive>')]),e._v("\n\n\t\n\t")])}],v={render:s,staticRenderFns:c},l=v,_=n("VU/8"),i=_(a,l,!1,null,null,null);t.default=i.exports}});