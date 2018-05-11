<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>基本过渡动画：</dt>
				<dd><b>&lt;transition name="fade"&gt;&lt;div&gt;&lt;/div&gt;&lt;/transition name="fade"&gt;</b> 给元素设置过渡效果</dd>
			</dl>
			
			<hr class="_mt10_mb10x">
			
			<dl class="mvvm-list">
	        	<dt>路由过渡样式  name="X"</dt>
	        	<dd><b>X-enter:</b> 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除</dd>
	        	<dd><b>X-enter-active:</b> 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除</dd>
	        	<dd><b>X-leave:</b> 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除</dd>
	        	<dd><b>X-leave-active:</b> 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除</dd>
	        </dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<transition name="slide-fade">
			<p v-if="show">hello</p>
		</transition>
		
		<hr class="_mt10_mb10x">
		
		<transition name="fade">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'animate',
		data(){
			return {
				show : false
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/animation/transition.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
	
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-active {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
