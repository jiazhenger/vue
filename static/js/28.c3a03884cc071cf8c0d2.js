webpackJsonp([28],{Z8TI:function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e={name:"hello",methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/router/router-nav-has-param.vue",this.$router.push("/popup")}}},o=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"login-wraper"},[a("nav",{staticClass:"my-box"},[a("button",{staticClass:"btn-default",on:{click:t.goRouter}},[t._v("路由集合")]),t._v(" "),a("button",{staticClass:"btn-default",on:{click:t.goVue}},[t._v("本组件")])]),t._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),t._m(0,!1,!1),t._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),a("div",{staticClass:"lh30 mvvm-code"},[a("dl",{staticClass:"mvvm-list"},[a("dt",[t._v("无参数模板导航: ")]),t._v(" "),a("dd",[t._v("可带 /，可不带 /，建议带上")]),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:"/router-param/1"}},[t._v('to="/router-param/1"')])],1),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:"/router-param/20#hash"}},[t._v(":to=\"'/router-param/20#hash'\"")])],1),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:{path:"/router-param/500"}}},[t._v(":to=\"{ path:'/router-param/500' }\"")])],1),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:{path:"/router-param/1",query:{id:300}}}},[t._v(":to=\"{ path:'/router-param/1', query:{ id:300 } }\"")])],1),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:{path:"/router-param/200",query:{id:700}}}},[t._v(":to=\"{ path:'/router-param/200', query:{ id:700 } }\"")])],1),t._v(" "),a("dd",[a("router-link",{staticClass:"btn-o",attrs:{to:{name:"RouterParam",params:{id:300}}}},[t._v(":to=\"{ name:'RouterParam', params:{ id:300 } }\"")])],1)])]),t._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),a("div",{staticClass:"lh30 mvvm-code"},[a("dl",{staticClass:"mvvm-list"},[a("dt",[t._v("无参数命令式导航:  ")]),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1),t._v(" "),t._m(3,!1,!1),t._v(" "),a("dd",[t._v("path 可带 /，可不带 /，建议带上")]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.push("/router-param/1")}}},[t._v("@click=\"$router.push('/router-param/1')\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.push({path:"/router-param/500"})}}},[t._v("@click=\"$router.push({path:'/router-param/500'})")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.push({path:"/router-param/1",query:{id:300}})}}},[t._v("@click=\"$router.push({ path:'/router-param/1', query:{ id:300 })\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.push({path:"/router-param/200",query:{id:700}})}}},[t._v("@click=\"$router.push({ path:'/router-param/200', query:{ id:700 }})\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.push({name:"RouterParam",params:{id:300}})}}},[t._v("@click=\"$router.push({name:'RouterParam', params:{ id:300 }})\"")])])]),t._v(" "),a("hr",{staticClass:"_mt10_mb10x"}),t._v(" "),a("dl",{staticClass:"mvvm-list"},[a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.replace("/router-param/1")}}},[t._v("@click=\"$router.replace('/router-param/1')\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.replace({path:"/router-param/500"})}}},[t._v("@click=\"$router.replace({path:'/router-param/500'})")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.replace({path:"/router-param/1",query:{id:300}})}}},[t._v("@click=\"$router.replace({ path:'/router-param/1', query:{ id:300 })\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.replace({path:"/router-param/200",query:{id:700}})}}},[t._v("@click=\"$router.replace({ path:'/router-param/200', query:{ id:700 }})\"")])]),t._v(" "),a("dd",[a("button",{staticClass:"btn-o",on:{click:function(r){t.$router.replace({name:"RouterParam",params:{id:300}})}}},[t._v("@click=\"$router.replace({name:'RouterParam', params:{ id:300 }})\"")])])])])])},s=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"lh30 mvvm-code"},[a("dl",{staticClass:"mvvm-list"},[a("dt",[t._v('<router-link to="/" tag="button" replace exact active-class="active"></router-link>  有参数链接属性')]),t._v(" "),a("dd",[a("b",[t._v("to=")]),t._v(" '/user/20' == '/user/20#hash'")]),t._v(" "),a("dd",[a("b",[t._v(":to=")]),t._v(" \"'/user/20'\" == \"{path:'/user/20', query:{id:20}}\" == \"{name:'UserName', params:{id:300}}\" ")]),t._v(" "),a("dd",[a("b",[t._v("v-bind:to=")]),t._v(" \"'/user/20'\" == \"{path:'/user/20', query:{id:20}}\" == \"{name:'UserName', params:{id:300}}\" ")])])])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("dd",[a("b",[t._v("this.$router.push()")]),t._v(":  一般命令导航")])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("dd",[a("b",[t._v("this.$router.replace()")]),t._v(": 无历史记录，不能返回")])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("dd",[a("b",[t._v("this.$router.go(n)")]),t._v(": == window.history.go(n) 历史记录跳转")])}],u={render:o,staticRenderFns:s},c=u,i=a("VU/8"),n=i(e,c,!1,null,null,null);r.default=n.exports}});