<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
	        <dl class="mvvm-list">
	        	<dt>子路由及路由过渡 </dt>
	        	<dt>&lt;transition name="fade"&gt;&lt;/transition name="fade"&gt;</dt>
	        	<dd><b>&lt;transition name="fade"&gt;&lt;router-view&gt;&lt;/router-view&gt;&lt;/transition name="fade"&gt;</b></dd>
	        	<dd>所有路由设置一样的过渡效果：设置在路由出口上</dd>
	        	<dd>每个路由过渡效果不一样：设置模板中</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        
		<router-link to="/router-children/a" active-class="active" class="btn-o mr10" tag="button" replace>到 A 路由</router-link>
		<router-link to="/router-children/b" active-class="active" class="btn-o mr10" tag="button" replace>到 B 路由</router-link>
		<router-link to="/router-children/c/15" active-class="active" class="btn-o mr10" tag="button" replace>到 C 路由</router-link>
		
		<hr class="_mt10_mb10x">
		
		<a class="btn-o mr10" @click="$router.back()">后退</a>
		
		<!-- 路由过渡 -->
		<transition name="slide-fade">
     		<router-view></router-view> <!-- 子路由出口 -->
    	</transition>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data(){
			return {
				
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/router/router-children.vue';
				this.$router.push('/popup')
			}
		},
		// 基于路由的动态过渡
		watch: {
			'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}
		}
	}
</script>
<style>
	.btn-o.active{border-color:#d15b47;color:#d15b47}
	
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