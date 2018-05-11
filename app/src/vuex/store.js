import Vue from 'vue'
import Vuex from 'vuex'
// =====================================================  vuex
Vue.use(Vuex)
// =====================================================  state
const Do_Prompt = 'Do_Prompt';
const User = {
	// 需要维护的状态
	// 需提前在 store 中初始化好所有所需属性
	state:{
		prompt: false,
		loading: false,
		txt: '默认值'
	},
	// 派生出一些状态
	// 为了初步获取和简单处理state里面的数据(这里的简单处理不能改变 state里面的数据)
	// this.$store.getters.prompt
	getters:{
		prompt: (state, getters) => {
			return state.prompt
	   	}
	},
	// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
	// Vuex 中的 mutations 非常类似于事件
	// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler),并且它会接受 state 作为第一个参数
	// mutation 必须是同步函数
	mutations:{
		prompt(state,payload){
			state.prompt = payload.prompt;
			state.txt = payload.txt;
			setTimeout(()=>{ state.prompt = false },1000)
		},
		loading(state,payload){
			state.loading = payload;
		},
		// 使用常量替代 Mutation 事件类型
		[Do_Prompt] (state,payload) {
	    	state.prompt = payload.prompt;
			state.txt = payload.txt;
			setTimeout(()=>{ state.prompt = false },1000)
		}
	},
	// Action 类似于 mutation
	// Action 提交的是 mutation，而不是直接变更状态
	// Action 可以包含任意异步操作
	actions:{
		/*
		 *	context 对象，与 store 实例具有相同方法和属性，但不是 store 实例本身
		 * 
		 	1、context.commit('replay')	// 提交一个 mutation
		 	2、 context.state === store.state
		 	3、context.getters === store.getter
		 * 
		 * */
		go(context) {	// context == store = this.$store
			context.commit('replay')
	    },
		prompt({ commit,dispatch,state,getters,rootState,rootGetters },payload){
	   		//commit({ type:'prompt', payload: payload })
	   		commit('prompt',payload)
		},
		loading(context,payload) {
			context.commit('loading',payload)
	    },
		// 使用常量替代 Mutation 事件类型
		[Do_Prompt] ({ commit },payload) {
	    	commit('prompt',payload)
		},
		// 异步
		async({commit},payload){
	   		setTimeout(() => {	// 异步处理
				commit('prompt',payload)
		    }, 10)
	   	},
	   	// 组合 Actions
		actionA({ commit,state }){
			let cleartime;
			clearTimeout(cleartime);
			return new Promise((resolve, reject) => {
				cleartime = setTimeout(() => {
					commit('prompt')
					resolve(state)
		      	}, 1000)
		    })
		},
		actionB ({ dispatch, commit }) {
			return dispatch('actionA').then(() => {
				commit('prompt')
			})
		},
		// 异步调用
		// async：用来申明里面包裹的内容可以进行同步的方式执行
		// await：进行执行顺序控制，每次执行一个await，程序都会暂停等待await返回值，然后再执行之后的await
		async newAction({ commit }){
			commit('prompt', await getData())
		}
	}
}
/*
// =====================================================  store 简单组织方式
const Store = new Vuex.Store({ namespaced: true, state:{ }, getters:{}, mutations:{}, actions:{} })
// ===================================================== store 分开组织方式
const state = {}
const getters = {}
const mutations = {}
const actions = {}
const Store = new Vuex.Store({ namespaced: true, state, getters, mutations,  actions })
// =====================================================  store 模块组织方式
const ModuleA = { state:{ }, getters:{}, mutations:{}, actions:{} }
const ModuleB = { state:{ }, getters:{}, mutations:{}, actions:{} }
const Store = new Vuex.Store({
	modules: {
		ModuleA,
		ModuleB,
		ModuleC: { state:{ }, getters:{}, mutations:{}, actions:{} },
		//或添加别名声明
		A : ModuleA,
		B : ModuleB,
	}
})
*/
// =====================================================  store 混合组织方式
const Store = new Vuex.Store({
	namespaced: true,	// 成为命名空间模块，所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
	state: { txt: 'state 中的值'},
	getters: {
		mytxt(state,playload){
			return 'getters 取值: ' + state.txt;
		}
	},
	mutations: {
		start(state,payload){
			alert('只能映射直接绑定在 Store 上的  mutations')
		}
	},
	actions: {},
	modules: { User }
})
// =====================================================s
export default Store