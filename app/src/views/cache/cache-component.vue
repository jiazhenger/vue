<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">缓存组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>缓存组件: </dt>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<pre class="mvvm-pre">
	<b>&lt;keep-alive&gt;
		&lt;Component>&gt;&lt;/Component&gt;
	&lt;/keep-alive>&gt;</b>
		</pre>		
		
		<hr class="_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>判断缓存组件: </dt>
				<dd><b>&lt;Component name='a' &gt;</b> #这里需要用到组件的名称即name来进行设置</dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<pre class="mvvm-pre">
	# 包含a,b
	<b>&lt;keep-alive include="a,b"&gt;
		&lt;component&gt;&lt;/component&gt;
	&lt;/keep-alive&gt;</b>
	
	# 除了c,d
	<b>&lt;keep-alive exclude="c,d"&gt;
		&lt;component&gt;&lt;/component&gt;
	&lt;/keep-alive&gt;</b>
	
		
		</pre>		
		
		<hr class="_mb10x">
        
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
				localStorage.code = 'views/cache/cache-component.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
