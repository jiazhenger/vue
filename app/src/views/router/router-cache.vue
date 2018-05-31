<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dt>在组件缓存路由 </dt>
		</dl>
		<pre class="mvvm-pre">
			<b>&lt;keep-alive&gt;</b>
				&lt;router-view&gt;&lt;/router-view&gt;
			<b>&lt;/keep-alive&gt;</b>
		</pre>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dt>在路由缓存路由 </dt>
		</dl>
		<pre class="mvvm-pre">
			{
				path: '',
				name: '',
				component: ,
				<b>meta: { keepAlive: true }</b>	// 自定义组件被缓存
			}
		</pre>
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
				localStorage.code = 'views/router/router-cache.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
