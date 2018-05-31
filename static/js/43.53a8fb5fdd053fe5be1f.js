webpackJsonp([43],{"9PjY":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var d={beforeCreate:function(){console.log("beforeCreate() 在实例创建之前")},created:function(){console.log("created() 在实例创建之后调用")},mounted:function(){console.log("mounted() 完成挂载")},updated:function(){console.log("updated() 数据更新之后调用")},beforeCompile:function(){console.log("beforeCompile() 未开始编译")},compiled:function(){console.log("compiled() 编译完成")},ready:function(){console.log("ready() 一切准备好了")},attached:function(){console.log("attached() 插入DOM成功")},detached:function(){console.log("detached() 删除DOM成功")},beforeDestroy:function(){console.log("beforeDestroy() 在实例销毁之前调用")},destroyed:function(){console.log("destroyed() 在实例被销毁之后调用")},activated:function(){console.log("keep-alive组件激活时调用")},deactivated:function(){console.log("keep-alive组件停用时调用")},methods:{goRouter:function(){localStorage.code="router.js",this.$router.push("/popup")},goVue:function(){localStorage.code="views/component/life.vue",this.$router.push("/popup")}}},n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("nav",{staticClass:"my-box"},[t("button",{staticClass:"btn-default",on:{click:function(o){e.goRouter()}}},[e._v("路由集合")]),e._v(" "),t("button",{staticClass:"btn-default",on:{click:function(o){e.goVue()}}},[e._v("到本组件")])]),e._v(" "),t("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),e._m(0,!1,!1)])},c=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"lh30 mvvm-code"},[t("dl",{staticClass:"mvvm-list"},[t("dt",[e._v("组件的生命周期")]),e._v(" "),t("dd",[t("b",[e._v("beforeCreate()")]),e._v(" 在实例创建之前，可以加 loadding 效果")]),e._v(" "),t("dd",[t("b",[e._v("created()")]),e._v(" 结束loading，还做一些初始化，实现函数自执行 ")]),e._v(" "),t("dd",[t("b",[e._v("mounted()")]),e._v(" 在这发起后端请求，拿回数据，配合路由钩子做一些事情")]),e._v(" "),t("dd",[t("b",[e._v("beforeDestory()")]),e._v(" 在开始销毁实例时调用，即离开路由时")]),e._v(" "),t("dd",[t("b",[e._v("destoryed()")]),e._v(" 当前组件已被删除，清空相关内容")]),e._v(" "),t("dd",[t("b",[e._v("updated()")]),e._v(" 数据更新之后调用")]),e._v(" "),t("dd",[t("b",[e._v("beforeCompile()")]),e._v(" 未开始编译")]),e._v(" "),t("dd",[t("b",[e._v("compiled()")]),e._v(" 在编译结束后调用")]),e._v(" "),t("dd",[t("b",[e._v("ready()")]),e._v(" 在编译结束和 $el 第一次插入文档之后调用")]),e._v(" "),t("dd",[t("b",[e._v("attached()")]),e._v(" 在 vm.$el 插入 DOM 时调用")]),e._v(" "),t("dd",[t("b",[e._v("detached()")]),e._v(" 在 vm.$el 从 DOM 中删除时调用")]),e._v(" "),t("dd",[t("b",[e._v("activated()")]),e._v(" keep-alive组件激活时调用。该钩子在服务器端渲染期间不被调用")]),e._v(" "),t("dd",[t("b",[e._v("deactivated()")]),e._v(" keep-alive组件停用时调用。该钩子在服务端渲染期间不被调用")])])])}],l={render:n,staticRenderFns:c},v=l,a=t("VU/8"),i=a(d,v,!1,null,null,null);o.default=i.exports}});