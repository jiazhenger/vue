<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">缓存路由组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>缓存路由组件: </dt>
				<dd>将首次触发请求写到<b>created</b>钩子里边，就能实现缓存。比如从列表页，去了详情页，回来还是原来的页面</dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<pre class="mvvm-pre">
	<b>&lt;keep-alive&gt;
		&lt;router-view>&gt;&lt;/router-view&gt;
	&lt;/keep-alive>&gt;</b>
		</pre>		
		
		<hr class="_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>判断缓存路由组件: </dt>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<pre class="mvvm-pre">
	<b>&lt;keep-alive v-if="$route.meta.keepAlive"&gt;
		&lt;router-view&gt;&lt;/router-view&gt;
	&lt;/keep-alive&gt;
	
	&lt;router-view  v-if="! $route.meta.keepAlive"&gt;&lt;/router-view&gt;
		
	route = [{ 
		path: '/index',
		component: Index,
		meta: { keepAlive: true }
	}]</b>
		</pre>		
		
		<hr class="_mb10x">
        
        <div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>如果缓存的组件想要清空数据或者执行初始化方法，在加载组件的时候调用activated钩子函数: </dt>
				<dd><b>activated()｛this.data=''｝</b> # 清除缓存</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cache',
		data(){
			return {
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/cache/cache-router.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
