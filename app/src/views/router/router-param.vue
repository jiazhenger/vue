<template>
	<div class="login-wraper">
		<nav class="my-box">
			<button class="btn-default" @click="goRouter">路由集合</button>
			<button class="btn-default" @click="goVue">本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
	        <dl class="mvvm-list">
	        	<dt>获取参数 </dt>
	        	<dd><b>获取参数：$route.params</b><s>{{$route.params}}</s></dd>
	        	<dd><b>获取可选参数：$route.query</b><s>{{$route.query}}</s></dd>
	        	<dd><b>获取hash值：$route.hash</b><s>{{$route.hash}}</s></dd>
	        	<dd><b>获取path值：$route.path</b><s>{{$route.path}}</s></dd>
	        	<dd><b>完整 url：$route.fullpath</b><s>{{$route.fullPath}}</s></dd>
	        	<dd><b>当前路由的名称：$route.name</b><s>{{$route.name}}</s></dd>
	        </dl>
        </div>
        <pre class="mvvm-pre">{{data}}</pre>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data(){
			return {
				data : ''
			}
		},
		created(){
			var data = {
					param : this.$route.params,			// index.html/user/12
					query : this.$route.query,   		// index.html?a=1&b=2
					 hash : this.$route.hash,    		// index.html#user
					 path : this.$route.path,    		// /foo/bar
				 fullpath : this.$route.fullPath,		// 完整 url
					 name : this.$route.name			// 当前路由的名称
			}
			this.data = JSON.stringify(data,null,'\t');
			
			console.log(this.$route.matched)	// 一个数组，包含当前路由的所有嵌套路径片段的 路由记录 。
												// 路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）
			
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/router/router-param.vue';
				this.$router.push('/popup')
			}
		},
		watch: {
			'$route' (to, from) {	// 对路由变化作出响应
				console.log(to);
				console.log(from);
			}
		},
	}
</script>