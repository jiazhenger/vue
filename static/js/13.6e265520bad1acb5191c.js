webpackJsonp([13],{"8gUN":function(t,n,e){"use strict";function u(t){e("jwwj")}Object.defineProperty(n,"__esModule",{value:!0});var o={name:"event",data:function(){return{code:null}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/event/event-btn.vue",this.$router.push("/popup")},onSubmit:function(t){this.code="@keyup："+t.keyCode}}},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(n){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(n){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("div",{staticClass:"lh30"},[e("p",{staticClass:"mb10"},[t._v("\n\t\t\tenter：\n\t\t\t"),e("input",{attrs:{placeholder:"v-on:keyup.13='onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&13!==n.keyCode)return null;t.onSubmit(n)}}}),t._v(" "),e("input",{attrs:{placeholder:"@keyup.enter= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("tab："),e("input",{attrs:{placeholder:"@keyup.tab= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"tab",9,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("delete："),e("input",{attrs:{placeholder:"@keyup.delete= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"delete",[8,46],n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("esc："),e("input",{attrs:{placeholder:"@keyup.esc= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("space："),e("input",{attrs:{placeholder:"@keyup.space= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"space",32,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("up："),e("input",{attrs:{placeholder:"@keyup.up= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"up",38,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("down："),e("input",{attrs:{placeholder:"@keyup.down= 'onSubmit'"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"down",40,n.key))return null;t.onSubmit(n)}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("left："),e("input",{attrs:{placeholder:"@keyup.left= 'onSubmit'"},on:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"left",37,n.key)?"button"in n&&0!==n.button?null:void t.onSubmit(n):null}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("right："),e("input",{attrs:{placeholder:"@keyup.right= 'onSubmit'"},on:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"right",39,n.key)?"button"in n&&2!==n.button?null:void t.onSubmit(n):null}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("alt+c："),e("input",{attrs:{placeholder:"@keyup.alt.67= 'onSubmit'"},on:{keyup:function(n){return("button"in n||67===n.keyCode)&&n.altKey?void t.onSubmit(n):null}}})]),t._v(" "),e("p",{staticClass:"mb10"},[t._v("ctrl+click："),e("input",{attrs:{placeholder:"@click.ctrl= 'onSubmit'"},on:{click:function(n){if(!n.ctrlKey)return null;t.onSubmit(n)}}})]),t._v(" "),e("h2",{staticClass:"mb10"},[t._v("code："+t._s(t.code))])])])},l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("按键修饰符")])])])}],s={render:i,staticRenderFns:l},a=s,c=e("VU/8"),r=u,p=c(o,a,!1,r,null,null);n.default=p.exports},Vvsm:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\ninput{width:300px;margin-left:20px;\n}\n",""])},jwwj:function(t,n,e){var u=e("Vvsm");"string"==typeof u&&(u=[[t.i,u,""]]),u.locals&&(t.exports=u.locals);e("rjj0")("ae3ed012",u,!0)}});