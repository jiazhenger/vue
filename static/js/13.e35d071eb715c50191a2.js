webpackJsonp([13],{"/joN":function(e,c,s){"use strict";function o(e){s("LT7Q")}Object.defineProperty(c,"__esModule",{value:!0});var t=s("mvHQ"),a=s.n(t),r={name:"checkboxs",data:function(){return{form:{text:"设置默认值",textarea:"",checkbox:"",checked:"",checkboxs:[],radio:"",select:"angular"},data:{}}},methods:{goVue:function(){localStorage.code="views/form/form.vue",this.$router.push("/popup")},submit:function(e){this.data=a()(this.form,null,"\t")}}},l=function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("div",{attrs:{id:"checkboxs"}},[s("button",{staticClass:"btn-default",on:{click:function(c){e.goVue()}}},[e._v("本组件")]),e._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),s("form",{attrs:{id:"form"},on:{submit:function(c){c.preventDefault(),e.submit(c)}}},[s("ul",{staticClass:"res-tr-tl clearfox _lh32"},[s("li",[s("h6",{staticClass:"col-sm-3"},[e._v("单行文本框：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.text,expression:"form.text"}],attrs:{name:"text",placeholder:"edit me"},domProps:{value:e.form.text},on:{input:function(c){c.target.composing||e.$set(e.form,"text",c.target.value)}}}),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.text))])])]),e._v(" "),s("li",{staticClass:"mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("多行文本框：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("span",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.textarea,expression:"form.textarea"}],attrs:{placeholder:"edit me"},domProps:{value:e.form.textarea},on:{input:function(c){c.target.composing||e.$set(e.form,"textarea",c.target.value)}}})]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.textarea))])])]),e._v(" "),s("li",{staticClass:"lh18 mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("单个复选框选择 true/false：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checkbox,expression:"form.checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.checkbox)?e._i(e.form.checkbox,null)>-1:e.form.checkbox},on:{change:function(c){var s=e.form.checkbox,o=c.target,t=!!o.checked;if(Array.isArray(s)){var a=e._i(s,null);o.checked?a<0&&(e.form.checkbox=s.concat([null])):a>-1&&(e.form.checkbox=s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.form,"checkbox",t)}}})]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.checkbox))])])]),e._v(" "),s("li",{staticClass:"lh18 mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("单个复选框选择 value：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checked,expression:"form.checked"}],attrs:{type:"checkbox","true-value":"为真时选择此项","false-value":"为假时选择此项"},domProps:{checked:Array.isArray(e.form.checked)?e._i(e.form.checked,null)>-1:e._q(e.form.checked,"为真时选择此项")},on:{change:function(c){var s=e.form.checked,o=c.target,t=o.checked?"为真时选择此项":"为假时选择此项";if(Array.isArray(s)){var a=e._i(s,null);o.checked?a<0&&(e.form.checked=s.concat([null])):a>-1&&(e.form.checked=s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.form,"checked",t)}}})]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.checked))])])]),e._v(" "),s("li",{staticClass:"lh18 mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("多个复选框选择 value：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checkboxs,expression:"form.checkboxs"}],attrs:{type:"checkbox",value:"vue"},domProps:{checked:Array.isArray(e.form.checkboxs)?e._i(e.form.checkboxs,"vue")>-1:e.form.checkboxs},on:{change:function(c){var s=e.form.checkboxs,o=c.target,t=!!o.checked;if(Array.isArray(s)){var a=e._i(s,"vue");o.checked?a<0&&(e.form.checkboxs=s.concat(["vue"])):a>-1&&(e.form.checkboxs=s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.form,"checkboxs",t)}}})]),e._v(" "),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checkboxs,expression:"form.checkboxs"}],attrs:{type:"checkbox",value:"angular"},domProps:{checked:Array.isArray(e.form.checkboxs)?e._i(e.form.checkboxs,"angular")>-1:e.form.checkboxs},on:{change:function(c){var s=e.form.checkboxs,o=c.target,t=!!o.checked;if(Array.isArray(s)){var a=e._i(s,"angular");o.checked?a<0&&(e.form.checkboxs=s.concat(["angular"])):a>-1&&(e.form.checkboxs=s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.form,"checkboxs",t)}}})]),e._v(" "),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checkboxs,expression:"form.checkboxs"}],attrs:{type:"checkbox",value:"react"},domProps:{checked:Array.isArray(e.form.checkboxs)?e._i(e.form.checkboxs,"react")>-1:e.form.checkboxs},on:{change:function(c){var s=e.form.checkboxs,o=c.target,t=!!o.checked;if(Array.isArray(s)){var a=e._i(s,"react");o.checked?a<0&&(e.form.checkboxs=s.concat(["react"])):a>-1&&(e.form.checkboxs=s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.form,"checkboxs",t)}}})]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.checkboxs))])])]),e._v(" "),s("li",{staticClass:"lh18 mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("单选按钮：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.radio,expression:"form.radio"}],attrs:{type:"radio",name:"a"},domProps:{value:"男",checked:e._q(e.form.radio,"男")},on:{change:function(c){e.$set(e.form,"radio","男")}}})]),e._v(" "),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.radio,expression:"form.radio"}],attrs:{type:"radio",name:"a",value:"女"},domProps:{checked:e._q(e.form.radio,"女")},on:{change:function(c){e.$set(e.form,"radio","女")}}})]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.radio))])])]),e._v(" "),s("li",{staticClass:"mt10"},[s("h6",{staticClass:"col-sm-3"},[e._v("下拉框：")]),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.form.select,expression:"form.select"}],on:{change:function(c){var s=Array.prototype.filter.call(c.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"select",c.target.multiple?s:s[0])}}},[s("option",[e._v("angular")]),e._v(" "),s("option",[e._v("react")]),e._v(" "),s("option",[e._v("vue")]),e._v(" "),s("option",{domProps:{value:"nodejs+express"}},[e._v("all")])]),e._v(" "),s("span",{staticClass:"form-error"},[e._v(e._s(e.form.select))])])]),e._v(" "),e._m(0,!1,!1)])]),e._v(" "),s("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),s("pre",{staticClass:"mvvm-pre"},[e._v(e._s(e.data))])])},i=[function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("li",{staticClass:"mt10"},[s("h6",{staticClass:"col-sm-3"}),e._v(" "),s("div",{staticClass:"col-sm-9 _fl"},[s("button",{staticClass:"btn-default"},[e._v("提交表单")])])])}],m={render:l,staticRenderFns:i},n=m,v=s("VU/8"),f=o,d=v(r,n,!1,f,null,null);c.default=d.exports},LT7Q:function(e,c,s){var o=s("okEt");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s("rjj0")("59839f26",o,!0)},okEt:function(e,c,s){c=e.exports=s("FZ+f")(!1),c.push([e.i,"\ninput[type='checkbox'],input[type='radio']{margin-right:10px;\n}\n",""])}});