<template>
	<div class="login-wraper">
		<nav class="my-box">
			<button class="btn-default" @click="goRouter">路由集合</button>
			<button class="btn-default" @click="goMain">启动文件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
	        <dl class="mvvm-list">
	        	<dt>基础路由 </dt>
	        </dl>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goMain(){
				localStorage.code = 'main.js';
				this.$router.push('/popup')
			}
		}
	}
</script>