import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Store from '@vuex/store'
// =====================================================  异步加载路由
const loadAsync = (name) => {
	// 同步加载，不起作用
	//return require('@views/'+ name)
	// 按需加载，一个组件一个js文件
	return () => import('@views/'+ name)
	// 按需加载，所有按需组件全部打包到一个js文件
	//return resolve => require(['@views/'+ name], resolve)
	//return resolve => require.ensure([], () => resolve(require('@views/'+ name)), '')
}
// =====================================================  同步加载路由
import Index from '@views/index';
import Code from '@cpt/code.component';
// =====================================================  子路由
const RouterChildren = resolve => { require.ensure([], () => resolve(require('@views/router/router-children')), 'children') }
const A = resolve => { require.ensure([], () => resolve(require('@views/router/child/a')), 						'children') }
const B = resolve => { require.ensure([], () => resolve(require('@views/router/child/b')), 						'children') }
const C = resolve => { require.ensure([], () => resolve(require('@views/router/child/c')), 						'children') }
// =====================================================  表单模块
const Form           = resolve => { require.ensure([], () => resolve(require('@views/form/form')),			 	'form') }
const FormDecoration = resolve => { require.ensure([], () => resolve(require('@views/form/form-decoration')), 	'form') }
const FormOneBind    = resolve => { require.ensure([], () => resolve(require('@views/form/form-one-bind')), 	'form') }
const CheckboxAll    = resolve => { require.ensure([], () => resolve(require('@views/form/checkbox-all')), 		'form') }
const FormWidget     = resolve => { require.ensure([], () => resolve(require('@views/form/form-widget')), 		'form') }
const FormValidator  = resolve => { require.ensure([], () => resolve(require('@views/form/form-validator')), 	'form') }
// =====================================================  路由分配
const routes = [
	{ 
		path: '/index', 			// url	
		name: 'Index',				// 命名路由
		alias: '/my-index',			// 路由别名
		component: Index, 			// 组件
		meta: { keepAlive: true } 	// 自定义路由被缓存
	},
	// ===================================================== 多个 router-view 出口
	// 组件到 <router-view name="popup"></router-view> 中
	// components: {default:Fool, a:Car, b: Cart}
	{ path: '/popup', 			name: 'Popup',			components: { popup : Code } }, 
	// =====================================================
	{ path: '/router-route', 	name: 'RouterRoute',	component: loadAsync('router/router-route') },
	// ===================================================== 子路由,按模块打包
	{ 
		path: '/router-children',
		name: 'RouterChildren',
		component: RouterChildren,
		children: [
			//{ path: '',  component: require('@views/router/child/a') },		 // 空的路由，为 fool 默认做准备	
			{ path: '/router-children/a', component: A},
			{ path: '/router-children/b', component: B},
			{ path: '/router-children/c/:id', name:'User', component: C}
		]	
	},
	// =====================================================  
	{ path: '/router-param/:id', name: 'RouterParam', component: loadAsync('router/router-param') },
	{ path: '/router-nav-no-param', 	component: loadAsync('router/router-nav-no-param') },
	{ path: '/router-nav-has-param', 	component: loadAsync('router/router-nav-has-param') },
	{ path: '/router-cache', 			component: loadAsync('router/router-cache') },
	/* 样式模块 */
	{ path: '/style-class', 			component: resolve => { require.ensure([], () => resolve(require('@views/style/style-class')),	'style')} },
	{ path: '/style-style', 			component: resolve => { require.ensure([], () => resolve(require('@views/style/style-style')),	'style')} },
	{ path: '/style-vue', 				component: resolve => { require.ensure([], () => resolve(require('@views/style/style-vue')),	'style')} },
	/* 模板语法模块 */
	{ path: '/bind-data',				component: resolve => { require.ensure([], () => resolve(require('@views/bind-data/bind-data')),	'bind-data')} },
	{ path: '/v-for',					component: resolve => { require.ensure([], () => resolve(require('@views/bind-data/v-for')),		'bind-data')} },
	{ path: '/v-if',					component: resolve => { require.ensure([], () => resolve(require('@views/bind-data/v-if')),			'bind-data')} },
	{ path: '/v-show',					component: resolve => { require.ensure([], () => resolve(require('@views/bind-data/v-show')),		'bind-data')} },
	/* 事件模块 */
	{ path: '/event-bind',				component: resolve => { require.ensure([], () => resolve(require('@views/event/event-bind')),		'event')} },
	{ path: '/event-decoration',		component: resolve => { require.ensure([], () => resolve(require('@views/event/event-decoration')),	'event')} },
	{ path: '/event-btn',				component: resolve => { require.ensure([], () => resolve(require('@views/event/event-btn')),		'event')} },
	/* 组件模块 */
	{ path: '/life',					component: resolve => { require.ensure([], () => resolve(require('@views/component/life')), 			'component')} },
	{ path: '/communication',			component: resolve => { require.ensure([], () => resolve(require('@views/component/communication')), 	'component')} },
	{ path: '/parent-children',			component: resolve => { require.ensure([], () => resolve(require('@views/component/parent-children')), 	'component')} },
	{ path: '/ref',						component: resolve => { require.ensure([], () => resolve(require('@views/component/ref')), 				'component')} },
	{ path: '/computed',				component: resolve => { require.ensure([], () => resolve(require('@views/component/computed')), 		'component')} },
	{ path: '/watch',					component: resolve => { require.ensure([], () => resolve(require('@views/component/watch')), 			'component')} },
	/* 表单模块 */
	{ path: '/form/form',				component: Form },
	{ path: '/form/form-decoration',	component: FormDecoration },
	{ path: '/form/form-one-bind',		component: FormOneBind },
	{ path: '/form/checkbox-all',		component: CheckboxAll },
	{ path: '/form/form-widget',		component: FormWidget },
	{ path: '/form/form-validator',		component: FormValidator },
	/* 动画 */
	{ path: '/transition',				component: loadAsync('animation/transition') },
	{ path: '/transition-css3',			component: loadAsync('animation/transition-css3') },
	{ path: '/transition-name',			component: loadAsync('animation/transition-name') },
	{ path: '/transition-appear',		component: loadAsync('animation/transition-appear') },
	{ path: '/transition-many',			component: loadAsync('animation/transition-many') },
	{ path: '/transition-list',			component: loadAsync('animation/transition-list') },
	{ path: '/transition-event',		component: loadAsync('animation/transition-event') },
	/* 指令 */
	{ path: '/directive',				component: loadAsync('directive/directive') },
	/* http */
	{ path: '/http',					component: loadAsync('http/http') },
	/* api */
	{ path: '/next-tick',				component: loadAsync('api/next-tick') },
	{ path: '/render',					component: loadAsync('api/render') },
	/* 缓存 */
	{ path: '/cache-router', 			component: loadAsync('cache/cache-router') },
	{ path: '/cache-component', 		component: loadAsync('cache/cache-component') },
	
	/* vuex */
	{ path: '/vuex',					component: resolve => { require.ensure([], () => resolve(require('@views/vuex/vuex')), 			'vuex')} },
	// ===================================================== 案例
	{ path: '/send-code',				component: loadAsync('case/send-code') },
	{ path: '/counter',					component: loadAsync('case/counter') },
	{ path: '/shopping-cart',			component: loadAsync('case/shopping-cart') },
	// =====================================================  
	{ path: '', 	redirect: '/index' },					// 重定向
	{ path: '*',	component: loadAsync('404') },	// 404
]
// =====================================================  路由配置
const router =  new Router({
	//base: __dirname,	// 根路由
	mode: 'hash',	// 路由三种模式：hash(#) | history(无#) | abstract(支持所有 JavaScript 运行环境)
	hash: '?',
  	routes,
  	//设置切换路由滚动行为
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})
// =====================================================  路由监听
// 进入路由之前
router.beforeEach((to, from, next) => {
	//console.log('form',from.path)
	//console.log('to',to.path)
	//Vue.$store.commit('loading',true)
	Store.commit('loading',true)
	next();
})
// 进入路由之前后
router.afterEach((to, from, next) => {
	//console.log('form',from.path)
	//console.log('to',to.path)
	//next();
	Store.commit('loading',false)
})

export default router;

