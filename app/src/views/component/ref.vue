<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goComponent1()">子组件一</button>
			<button class="btn-default" @click="goComponent2()">子组件二</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>父级组件监听指定子组件</dt>
				<dd>&lt;Component <b>ref="childName"</b>/&gt;标记子组件</dd>
				<dd><b>this.$refs.childName</b> 获取子组件</dd>
			</dl>
		</div>

		<hr class="_mt10_mb10x">
		
		<p class="lh30">
			<a v-on:click="getPropery1" class="btn-default mr20">获取子组件一的属性</a>
			<a v-on:click="getEvent1" class="btn-default">监听子组件一事件</a>
			<span class="c1">{{msg1}}</span>
		</p>
		
		<hr class="_mt10_mb10x">
		
		<p class="lh30">
			<a v-on:click="getPropery2" class="btn-default mr20">获取子组件二的属性</a>
			<a v-on:click="getEvent2" class="btn-default">监听子组件二事件</a>
			<span class="c1">{{msg2}}</span>
		</p>
		
		<hr class="_mt10_mb10x">
		
		<ChildComponent1 ref="a" />
		
		<ChildComponent2  ref="b" />
	</div>
</template>

<script>
	// 同步加载组件
	//import ChildComponent1 from '@views/component/child/child.component';
	//import ChildComponent2 from '@views/component/child/children.component';
	// 异步加载组件
	//const ChildComponent = ()=> import('@views/component/child/children.component')
	
	export default {
		name: 'component',
		// 挂载组件
		components:{
			//ChildComponent, 			// 在外部加载组件
			//'A' : ChildComponent,		// 给组件加别名
			ChildComponent1 : ()=> import('@views/component/child/child.component'),	// 在内部加载组件
			ChildComponent2 : ()=> import('@views/component/child/children.component'),	// 在内部加载组件
		},
		data(){
			return {
				msg1:'',
				msg2:''
			}
		},
		methods:{
			goComponent1(){
				localStorage.code = 'views/component/child/children.component.vue';
				this.$router.push('/popup')
			},
			goComponent2(){
				localStorage.code = 'views/component/child/child.component.vue';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/component/ref.vue';
				this.$router.push('/popup')
			},
			getPropery1(){
				this.msg1 = this.$refs.a.name;
			},
			getPropery2(){
				this.msg2 = this.$refs.b.name;
			},
			getEvent1(){
				this.$refs.a.go();
			},
			getEvent2(){
				this.$refs.b.go();
			},
		}
	}
</script>
