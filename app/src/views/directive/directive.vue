<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goDirective()">到指令</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>自定义指令：</dt>
				<dd><b>v-directiveNmae == "value"</b> 指令绑定格式</dd>
				<dd><b>v-directive:foo == ""</b> 指令参数，用 <b>binding.arg</b> 获取</dd>
				<dd><b>v-directive.a.b == ""</b> 修饰符，用 <b>binding.modifiers</b> 获取</dd>
				<dd>外部指令，可引入公共部分，或组件内部</dd>
				<dd>内部指令直接挂在 <b>directives:｛｝</b> 上</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<p><input v-model='text'></p>
		
		<h2>给指令赋于参数</h2>
		
		<pre v-demo='{a:"angular",b:"react",c:"vue"}'></pre>
		
		<h3 v-demo></h3>
		
		<hr class="_mt10_mb10x">
		
		<p><input v-focus:hello.a.b="msg" v-model="msg"></p>
	</div>
</template>

<script>
	import '@views/directive/directives/my.directive';
	export default {
		name: 'directive',
		data(){
			return {
				text : null,
				msg : null
			}
		},
		directives:{
			'demo' : {
				// 当绑定元素插入到 DOM 中，执行这个元素
				inserted(el,binding,vnode) {
					if(binding.value != undefined){
						el.innerHTML = JSON.stringify(binding.value,null,'\t')
					}else{
						el.innerHTML = 'v-myDirectiveName 动态操作 DOM'
					}
				},
				// 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作
				bind(el,binding,vnode) {
					
				},
				// 只调用一次， 指令与元素解绑时调用
				unbind(el,binding,vnode) {
					
				},
				// 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新
				update(el,binding,vnode,oldVnode) {
					
				},
				// 被绑定元素所在模板完成一次更新周期时调用
				componentUpdated(el,binding,vnode,oldVnode) {
					
				}
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/directive/directive.vue';
				this.$router.push('/popup')
			},
			goDirective(){
				localStorage.code = 'views/directive/directives/my.directive.js';
				this.$router.push('/popup')
			}
		}
	}
</script>