<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goComponent()">子组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>组件通信：子取父属性</dt>
				<dd>第一步：在父组件传入通信属性 &lt;Component  <b>:msg="msg"</b> <b>msg="string"</b> /&gt;</dd>
				<dd>第二步：在子组件用接收并声明与父组件通信的值  <b> props:['msg']</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>组件通信：子监听父事件</dt>
				<dd>第一步：在父组件绑定要监听的事件 &lt;Component  <b>@play="start"</b> <b>v-on:play="start"</b> /&gt;</dd>
				<dd>第二步：在子组件执行父事件  <b> this.$emit('play','在此传入参数1','参数2')</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<ChildComponent :msg="msg" @play="start" />
	</div>
</template>

<script>
	// 同步加载组件 
	//import ChildComponent from '@views/component/child/child.component';
	// 异步加载组件
	//const ChildComponent = ()=> import('@views/component/child/child.component')
	
	export default {
		name: 'component',
		// 挂载组件
		components:{
			//ChildComponent, 			// 在外部加载组件
			//'A' : ChildComponent,		// 给组件加别名
			
			ChildComponent : ()=> import('@views/component/child/child.component'),	// 异步加载组件
			//ChildComponent : ChildComponent,	// 同步加载组件
		},
		
		data(){
			return {
				msg : '这是父组件的属性'
			}
		},
		methods:{
			goComponent(){
				localStorage.code = 'views/component/child/child.component.vue';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/component/communication.vue';
				this.$router.push('/popup')
			},
			start(v,n){
				alert(v + '\n' + n)
			}
		}
	}
</script>
