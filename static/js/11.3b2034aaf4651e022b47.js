webpackJsonp([11],{"6koR":function(s,t,a){t=s.exports=a("FZ+f")(!1),t.push([s.i,"\n.active{color:red\n}\n.hover{text-decoration:underline\n}\n",""])},bKPX:function(s,t,a){var c=a("6koR");"string"==typeof c&&(c=[[s.i,c,""]]),c.locals&&(s.exports=c.locals);a("rjj0")("70afcd28",c,!0)},vZF1:function(s,t,a){"use strict";function c(s){a("bKPX")}Object.defineProperty(t,"__esModule",{value:!0});var l={name:"style",data:function(){return{flag:!0,classObject:{active:!0,hover:!0},classA:"active",classB:"hover"}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/style/style-class.vue",this.$router.push("/popup")}},computed:{classObject1:function(){return{active:this.flag,hover:!this.flag}}}},e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("nav",{staticClass:"my-box"},[a("button",{staticClass:"btn-default",on:{click:function(t){s.goRouter()}}},[s._v("路由集合")]),s._v(" "),a("button",{staticClass:"btn-default",on:{click:function(t){s.goVue()}}},[s._v("到本组件")])]),s._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),s._v(" "),s._m(0,!1,!1),s._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),s._v(" "),a("dl",{staticClass:"mvvm-list"},[a("dd",{class:{active:!s.flag,hover:s.flag}},[s._v(':class="{active:flag,hover}"')]),s._v(" "),a("dd",{class:s.classObject1},[s._v(':class="classObject1"')]),s._v(" "),a("dd",{class:s.classObject},[s._v(':class="classObject"')]),s._v(" "),a("dd",{class:[s.classA,s.classB]},[s._v(':class="[classA,classB]"')]),s._v(" "),a("dd",{class:[s.flag?"":s.classA,s.classB]},[s._v(":class=\"[!flag ? classA : '',classB]\"")]),s._v(" "),a("dd",{class:[{active:s.flag},s.classB]},[s._v(':class="[{active:flag},classB]"')])]),s._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),s._v(" "),a("button",{staticClass:"btn-default",on:{click:function(t){s.flag=!s.flag}}},[s._v("改变判断值")])])},o=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"lh30 mvvm-code"},[a("dl",{staticClass:"mvvm-list"},[a("dt",[s._v("添加 class 样式 : ")]),s._v(" "),a("dd",[a("b",[s._v(':class=""')]),s._v(" == "),a("b",[s._v('v-bind:class=""')])])])])}],n={render:e,staticRenderFns:o},v=n,i=a("VU/8"),r=c,u=i(l,v,!1,r,null,null);t.default=u.exports}});