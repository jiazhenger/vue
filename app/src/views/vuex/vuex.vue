<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goVuex()">到 vuex</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>vuex 全局数据状态管理: </dt>
				<dd><b>getters</b> 直接可取模块与非模块上的 state</dd>
				<dd><b>actions</b> 调用的是 <b>mutations</b> 的方法</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>获取 state 的方式 : </dt>
				<dd><b>$store.state.txt</b> ：直接绑在 state 中的变量 == <s>{{ $store.state.txt }}</s></dd>
				<dd><b>$store.state.User.prompt</b> ：绑在 state 上的模块中的变量 == <s>{{ $store.state.User.prompt }}</s></dd>
				<dd><b>$store.state.User.txt</b> ：获取 getter 上的值 == <s>{{ $store.state.User.txt }}</s></dd>
				<dd><b>$store.getters.prompt</b> ：getters 直接可取模块与非模块上的 state == <s>{{ $store.getters.prompt }}</s></dd>
				<dd><b>$store.getters.mytxt</b> ：getters 直接可取模块与非模块上的 state == <s>{{ $store.getters.mytxt }}</s></dd>
			</dl>
		</div>
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>取映射取 state 值 </dt>
				<dd><b>...mapState(['txt'])</b> ：state 映射 == <s>{{ txt }}</s></dd>
				<dd><b>...mapGetters(['mytxt'])</b> ：getter 映射 == <s>{{ mytxt }}</s></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt><b>mutations</b> 改变 state 的方式 : </dt>
				<dd><button @click="()=>{$store.commit('prompt',{prompt:true,txt:'加载中...'})}" class="btn-o">$store.commit('prompt',{ prompt: true, txt: '加载中...' })</button></dd>
				<dd><button @click="()=>{$store.commit({type:'prompt',prompt:true,txt:'正在加载中...'})}" class="btn-o">$store.commit({ type:'prompt', prompt:true, txt:'加载中...' })</button>：对象风格的提交方式</dd>
				<dd><button @click="()=>{$store.commit({type:'Do_Prompt',prompt:true,txt:'努力加载中...'})}" class="btn-o">$store.commit({ type:'Do_Prompt', prompt:true, txt:'加载中...' })</button>：使用常量替代 Mutation 事件类型</dd>
				<dd><button @click="prompt({type:'Do_Prompt',prompt:true,txt:'loading...'})" class="btn-o">methods:mapMutations(['prompt']) 映射调用</button></dd>
				<dd><button @click="prompt({type:'Do_Prompt',prompt:true,txt:'is loading...'})" class="btn-o">methods:{ ...mapMutations(['start']) } 映射调用</button></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt><b>actions</b> 改变 state 的方式 : （调用的是 <b>mutations</b> 的方法）</dt>
				<dd><button @click="()=>{$store.dispatch('prompt',{prompt:true,txt:'加载中...'})}" class="btn-o">$store.dispatch('prompt',{prompt:true,txt:'加载中...'})</button></dd>
				<dd><button @click="()=>{$store.dispatch({type:'prompt',prompt:true,txt:'正在加载中...'})}" class="btn-o">$store.dispatch({ type:'prompt', prompt:true, txt:'加载中...' })</button>：对象风格的提交方式</dd>
				<dd><button @click="()=>{$store.dispatch({type:'Do_Prompt',prompt:true,txt:'努力加载中...'})}" class="btn-o">$store.dispatch({ type:'Do_Prompt', prompt:true, txt:'加载中...' })</button>：使用常量替代 Mutation 事件类型</dd>
				<dd><button @click="myprompt({type:'Do_Prompt',prompt:true,txt:'loading...'})" class="btn-o">methods:mapActions(['prompt']) 映射调用</button></dd>
				<dd><button @click="myprompt({type:'Do_Prompt',prompt:true,txt:'is loading...'})" class="btn-o">methods:{ ...mapActions(['start']) } 映射调用</button></dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
	export default {
		name: 'vuex',
		data(){
			return {
				
			}
		},
		//methods:mapMutations(['start']),
		methods:{
			/* mutations 映射调用 */
			...mapMutations(['prompt']),
			//...mapMutations({ myprompt:'prompt' }),	// 别名调用
			
			/* actions 映射调用 */
			//...mapActions(['prompt']),
			...mapActions({ myprompt:'prompt' }),	// 别名调用
			goVuex(){
				localStorage.code = 'vuex/store.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/vuex/vuex.vue';
				this.$router.push('/popup')
			}
		},
		//computed:mapState(['txt']),
		//computed:mapGetters(['mytxt']),
		computed:{
			...mapState(['txt','mytxt']),
			/*
			// 用对象映射 state
			...mapState({
				count: state => state.count,
				countAlias: 'count',			// 别名即：countAlias = count
				countPlusLocalState (state) {
					return state.num + this.count
				}
			}),
			*/
			...mapGetters(['mytxt'])
		}
	}
</script>
