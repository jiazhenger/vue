webpackJsonp([37],{"90oG":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"checkboxs",data:function(){return{lazy:null,number:null,trim:null}},methods:{goVue:function(){localStorage.code="views/form/form-decoration.vue",this.$router.push("/popup")}}},l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"checkboxs"}},[s("button",{staticClass:"btn-default",on:{click:function(e){t.goVue()}}},[t._v("本组件")]),t._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),s("ul",{staticClass:"res-tr-tl clearfox _lh32"},[s("li",[s("h6",{staticClass:"col-sm-3"},[t._v("失去焦点击时才会有值：")]),t._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.lazy,expression:"lazy",modifiers:{lazy:!0}}],attrs:{placeholder:"edit me"},domProps:{value:t.lazy},on:{change:function(e){t.lazy=e.target.value}}}),t._v(" "),s("span",{staticClass:"form-error"},[t._v(t._s(t.lazy))])])]),t._v(" "),s("li",{staticClass:"mt10"},[s("h6",{staticClass:"col-sm-3"},[t._v("自动将用户的输入值转为 Number 类型：")]),t._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.number,expression:"number",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"edit me"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"form-error"},[t._v(t._s(t.number))])])]),t._v(" "),s("li",{staticClass:"mt10"},[s("h6",{staticClass:"col-sm-3"},[t._v("自动过滤用户输入的首尾空格：")]),t._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.trim,expression:"trim",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"edit me"},domProps:{value:t.trim},on:{input:function(e){e.target.composing||(t.trim=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"form-error"},[t._v(t._s(t.trim))])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lh30 mvvm-code"},[s("dl",{staticClass:"mvvm-list"},[s("dt",[t._v("表单修饰符：")]),t._v(" "),s("dd",[s("b",[t._v('v-model.lazy=""')]),t._v(" 失去焦点击时才会有值")]),t._v(" "),s("dd",[s("b",[t._v('v-model.number=""')]),t._v(" 自动将用户的输入值转为 Number 类型")]),t._v(" "),s("dd",[s("b",[t._v('v-model.trim=""')]),t._v(" 自动过滤用户输入的首尾空格")])])])}],i={render:l,staticRenderFns:r},o=i,m=s("VU/8"),n=m(a,o,!1,null,null,null);e.default=n.exports}});