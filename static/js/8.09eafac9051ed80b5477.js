webpackJsonp([8,14,40,41],{"8gUN":function(t,e,n){"use strict";function o(t){n("jwwj")}Object.defineProperty(e,"__esModule",{value:!0});var s={name:"event",data:function(){return{code:null}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/event/event-btn.vue",this.$router.push("/popup")},onSubmit:function(t){this.code="@keyup："+t.keyCode}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"my-box"},[n("button",{staticClass:"btn-default",on:{click:function(e){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),n("button",{staticClass:"btn-default",on:{click:function(e){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),n("div",{staticClass:"lh30"},[n("p",{staticClass:"mb10"},[t._v("\n\t\t\tenter：\n\t\t\t"),n("input",{attrs:{placeholder:"v-on:keyup.13='onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.onSubmit(e)}}}),t._v(" "),n("input",{attrs:{placeholder:"@keyup.enter= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("tab："),n("input",{attrs:{placeholder:"@keyup.tab= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("delete："),n("input",{attrs:{placeholder:"@keyup.delete= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("esc："),n("input",{attrs:{placeholder:"@keyup.esc= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("space："),n("input",{attrs:{placeholder:"@keyup.space= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"space",32,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("up："),n("input",{attrs:{placeholder:"@keyup.up= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("down："),n("input",{attrs:{placeholder:"@keyup.down= 'onSubmit'"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;t.onSubmit(e)}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("left："),n("input",{attrs:{placeholder:"@keyup.left= 'onSubmit'"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.onSubmit(e):null}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("right："),n("input",{attrs:{placeholder:"@keyup.right= 'onSubmit'"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.onSubmit(e):null}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("alt+c："),n("input",{attrs:{placeholder:"@keyup.alt.67= 'onSubmit'"},on:{keyup:function(e){return("button"in e||67===e.keyCode)&&e.altKey?void t.onSubmit(e):null}}})]),t._v(" "),n("p",{staticClass:"mb10"},[t._v("ctrl+click："),n("input",{attrs:{placeholder:"@click.ctrl= 'onSubmit'"},on:{click:function(e){if(!e.ctrlKey)return null;t.onSubmit(e)}}})]),t._v(" "),n("h2",{staticClass:"mb10"},[t._v("code："+t._s(t.code))])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh30 mvvm-code"},[n("dl",{staticClass:"mvvm-list"},[n("dt",[t._v("按键修饰符")])])])}],i={render:l,staticRenderFns:u},a=i,c=n("VU/8"),v=o,r=c(s,a,!1,v,null,null);e.default=r.exports},MpPc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"event",data:function(){return{}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/event/event-decoration.vue",this.$router.push("/popup")},say:function(t){alert(t)}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"my-box"},[n("button",{staticClass:"btn-default",on:{click:function(e){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),n("button",{staticClass:"btn-default",on:{click:function(e){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),n("div",{staticClass:"lh30"},[n("h2",[n("a",{staticClass:"btn-o",on:{click:function(e){e.stopPropagation(),t.say("hello",e)}}},[t._v("@:click.stop=\"say('hello',$event)\" 阻止单击事件冒泡")])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.say("hello",e)}}},[t._v("@click.stop.prevent=\"say('hello',$event)\" 修饰符可以串")])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{"!click":function(e){t.say("hello",e)}}},[t._v("@click.capture=\"say('hello',$event)\" 添加事件侦听器时使用事件捕获模式")])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.say("hello",e)}}},[t._v("@click.self=\"say('hello',$event)\" 只当事件在该元素本身（而不是子元素）触发时触发回调")])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{"~click":function(e){t.say("hello",e)}}},[t._v("@click.once=\"say('hello',$event)\" 点击事件将只会触发一次")])]),t._v(" "),n("form",{staticClass:"mt10",on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[n("button",{staticClass:"btn-o"},[t._v('@submit.prevent="onSubmit" 提交事件不再重载页面')])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh30 mvvm-code"},[n("dl",{staticClass:"mvvm-list"},[n("dt",[t._v("事件修饰符")]),t._v(" "),n("dd",[n("b",[t._v("@click.stop=''")]),t._v(" 阻止单击事件冒泡")]),t._v(" "),n("dd",[n("b",[t._v("@click.prevent=''")]),t._v(" 阻止冒泡并阻止默认行为")]),t._v(" "),n("dd",[n("b",[t._v("@click.stop.prevent=''")]),t._v(" 修饰符可以串")]),t._v(" "),n("dd",[n("b",[t._v("@click.capture=''")]),t._v(" 添加事件侦听器时使用事件捕获模式")]),t._v(" "),n("dd",[n("b",[t._v("@click.self=''")]),t._v(" 只当事件在该元素本身（而不是子元素）触发时触发回调")]),t._v(" "),n("dd",[n("b",[t._v("@click.once=''")]),t._v(" 点击事件将只会触发一次")])])])}],u={render:s,staticRenderFns:l},i=u,a=n("VU/8"),c=a(o,i,!1,null,null,null);e.default=c.exports},OLKI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"event",data:function(){return{tagName:null,target:null,count:0}},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/event/bind-event.vue",this.$router.push("/popup")},foo:function(t){this.tagName=t.target.tagName,this.target=t.target,t.preventDefault()},say:function(t){alert(t),event.stopPropagation()}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"my-box"},[n("button",{staticClass:"btn-default",on:{click:function(e){t.goRouter()}}},[t._v("路由集合")]),t._v(" "),n("button",{staticClass:"btn-default",on:{click:function(e){t.goVue()}}},[t._v("到本组件")])]),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),n("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),n("div",{staticClass:"lh30"},[n("h2",[n("a",{staticClass:"btn-o",on:{click:function(e){t.foo(e)}}},[t._v("v-on:click='foo($event)' 方法事件处理器，有括号")])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{click:t.foo}},[t._v('@click="foo" 方法事件处理器,没有括号')])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{click:function(e){t.count++}}},[t._v('@click="count++" '+t._s(t.count))])]),t._v(" "),n("h2",{staticClass:"mt10"},[n("a",{staticClass:"btn-o",on:{click:function(e){t.say("hello")}}},[t._v("@:click=\"say('hello')\" 带参数")])]),t._v(" "),n("h3",[t._v("tagName："+t._s(t.tagName))]),t._v(" "),n("h3",[t._v("target："+t._s(t.target))])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh30 mvvm-code"},[n("dl",{staticClass:"mvvm-list"},[n("dt",[t._v("v-on:click='' === @click='' 事件绑定")]),t._v(" "),n("dd",[n("b",[t._v("v-on:click='' === @click=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:mousedown=''  === @mousedown=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:mouseup=''  === @mouseup=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:mouseleave=''  === @mouseleave=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:mouseenter=''  === @mouseenter=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:resize=''  === @resize=''")])])]),t._v(" "),n("dl",{staticClass:"mvvm-list"},[n("dt",[t._v("表单事件")]),t._v(" "),n("dd",[n("b",[t._v("v-on:submit=''  === @submit=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:change=''  === @change=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:blur=''  === @blur=''")])]),t._v(" "),n("dd",[n("b",[t._v("v-on:focus=''  === @focus=''")])])])])}],u={render:s,staticRenderFns:l},i=u,a=n("VU/8"),c=a(o,i,!1,null,null,null);e.default=c.exports},Vvsm:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\ninput{width:300px;margin-left:20px;\n}\n",""])},jwwj:function(t,e,n){var o=n("Vvsm");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("ae3ed012",o,!0)}});