<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>computed 计算属性</dt>
				<dd>一个函数，不用在 data 声明，即可使用<s>{{count}}</s></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button class="btn-default" @click="index++">计算属性</button>
	</div>
</template>

<script>
	export default {
		name: 'computed',
		data(){
			return {
				index: 0
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/component/computed.vue';
				this.$router.push('/popup')
			}
		},
		// 计算属性是基于它们的依赖进行缓存的
		// 只要属性发生变化，就会执行里面对应的方法
		computed:{
			count(){
				return this.index
			}
		}
	}
</script>
