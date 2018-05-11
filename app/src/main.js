// =====================================================  全局 js 
import '@common/common.js'
// =====================================================  全局 css
import '@css/main.css'
// =====================================================  模块
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
// =====================================================  设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// =====================================================  vuex
import store from '@vuex/store';
// =====================================================  web library
import $ from 'jquery'
// =====================================================  公共方法 plugins
import Mehtods from '@plugins/methods'
Vue.use(Mehtods)
// =====================================================  ajax plugins 
import Ajax from '@plugins/ajax'
Vue.use(Ajax)
// =====================================================  表单验证 plugins
import Validator from '@plugins/validator'
Vue.use(Validator)
// =====================================================  启动方式
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
/*
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)	// === template: '<App/>',
						//     components: { App }
})

new Vue({
	router,
	store,
	template: '<App/>',
	components: { App }
}).$mount('#app')

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
*/