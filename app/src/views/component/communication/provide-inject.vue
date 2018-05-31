<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goComponent()">子组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>深层次组件通信：无论子组件有多深，只要调用了inject那么就可以注入provider中的数据</dt>
				<dd>第一步：provide 在父组件提供变量  <b>provide:｛msg:0｝</b> <b>provide()｛return ｛msg:this.msg｝｝</b> </dd>
				<dd>第二步：inject 在子组件中注入变量  <b> inject:['msg']</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<ChildComponent />
		
		<hr class="_mt10_mb10x">
		
		<a v-on:click="start" class="btn-default mr20">父改变子级 {{store.msg}}</a>
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
			
			ChildComponent : ()=> import('@views/component/child/provideChild.component'),	// 异步加载组件
			//ChildComponent : ChildComponent,	// 同步加载组件
		},
		// provider 在父组件提供变量
//		provide: {
//			msg: 'provide 在父组件提供变量',
//			nsg: 'inject在子组件中注入变量'
//		},
		// provider 在父组件提供变量
		provide(){
			return {	// 值必须是对象，否则无法动态改变值
				store: this.store,
				//nsg: 'inject在子组件中注入变量',
				my: this.my
			}
		},
		data(){
			return {
				store: {
					msg:'provide 在父组件提供变量',
					commit (value) {
			          this.msg = value
			        }
				},
				my:{
					nsg:'inject在子组件中注入变量'
				}
			}
		},
		methods:{
			goComponent(){
				localStorage.code = 'views/component/child/provideChild.component.vue';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/component/communication/provide-inject.vue';
				this.$router.push('/popup')
			},
			start(){
				this.store.msg = '父级改变值';
				this.my.nsg = 0
			}
		}
	}
</script>
