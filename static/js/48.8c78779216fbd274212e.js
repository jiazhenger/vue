webpackJsonp([48],{e3yd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={name:"component",components:{ChildComponent:function(){return e.e(6).then(e.bind(null,"hpG+"))}},data:function(){return{msg:"这是父组件的属性"}},methods:{goComponent:function(){localStorage.code="views/component/child/child.component.vue",this.$router.push("/popup")},goVue:function(){localStorage.code="views/component/communication/communication.vue",this.$router.push("/popup")},start:function(t,n){alert(t+"\n"+n)}}},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"my-box"},[e("button",{staticClass:"btn-default",on:{click:function(n){t.goVue()}}},[t._v("到本组件")]),t._v(" "),e("button",{staticClass:"btn-default",on:{click:function(n){t.goComponent()}}},[t._v("子组件")])]),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(1,!1,!1),t._v(" "),e("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),e("ChildComponent",{attrs:{msg:t.msg},on:{play:t.start}})],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("组件通信：子取父属性")]),t._v(" "),e("dd",[t._v("第一步：在父组件传入通信属性 <Component  "),e("b",[t._v(':msg="msg"')]),t._v(" "),e("b",[t._v('msg="string"')]),t._v(" />")]),t._v(" "),e("dd",[t._v("第二步：在子组件用接收并声明与父组件通信的值  "),e("b",[t._v(" props:['msg']")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lh30 mvvm-code"},[e("dl",{staticClass:"mvvm-list"},[e("dt",[t._v("组件通信：子监听父事件")]),t._v(" "),e("dd",[t._v("第一步：在父组件绑定要监听的事件 <Component  "),e("b",[t._v('@play="start"')]),t._v(" "),e("b",[t._v('v-on:play="start"')]),t._v(" />")]),t._v(" "),e("dd",[t._v("第二步：在子组件执行父事件  "),e("b",[t._v(" this.$emit('play','在此传入参数1','参数2')")])])])])}],c={render:o,staticRenderFns:a},v=c,i=e("VU/8"),l=i(s,v,!1,null,null,null);n.default=l.exports}});