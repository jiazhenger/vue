<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goComponent()">子组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>$parent与$children 双向通信</dt>
			</dl>
		</div>

		<hr class="_mt10_mb10x">
		
		<p class="mt20">
			<a v-on:click="start" class="btn-default mr20">获取子组件的属性</a>
			<a v-on:click="stop" class="btn-default">监听子组件事件</a>
		</p>
		
		<hr class="_mt10_mb10x">
		
		<div class="mvvm-code lh30 mt20 mb20">
			<p><b>this.$children[0].msg</b> 获取 <s>{{ childMsg }}</s></p>
			<p><b>this.$refs.my.msg</b> 获取 <s>{{ childMsg }}</s></p>
		</div>
		
		<ChildComponent ref="my" />
	</div>
</template>

<script>
	// 同步加载组件
	//import ChildComponent from '@views/component/child/children.component';
	// 异步加载组件
	//const ChildComponent = ()=> import('@views/component/child/children.component')
	
	export default {
		name: 'component',
		// 挂载组件
		components:{
			//ChildComponent, 			// 在外部加载组件
			//'A' : ChildComponent,		// 给组件加别名
			
			ChildComponent : ()=> import('@views/component/child/children.component'),	// 异步加载组件
			//ChildComponent : ChildComponent
		},
		data(){
			return {
				msg : '这是父组件的属性',
				childMsg : ''
			}
		},
		methods:{
			goComponent(){
				localStorage.code = 'views/component/child/children.component.vue';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/component/communication/parent-children.vue';
				this.$router.push('/popup')
			},
			play(v,n){
				alert(v + '\n' + n)
			},
			start(){
				//let msg = this.$children[0].msg	// 获取子组件的属性
				let msg = this.$refs.my.msg;		// 获取子组件的属性
				this.childMsg = msg;
			},
			stop(){
				this.$children[0].childMethodA();	// 调用子组件的谅
			}
		}
	}
</script>
