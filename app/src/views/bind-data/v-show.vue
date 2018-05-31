<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>v-show='' 条件渲染</dt>
				<dd><b>v-show=""</b><s v-show="isA">v-show</s></dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<button @click="go" class="btn-default mt10">change</button>
	</div>
</template>

<script>
	export default {
		name: 'v-show',
		data(){
			return {
				isA: true,
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/bind-data/v-show.vue';
				this.$router.push('/popup')
			},
			go: function () {
				this.isA = !this.isA;
			}
		}
	}
</script>
