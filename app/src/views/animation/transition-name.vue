<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>自定义过渡类名：</dt>
				<dd>transition 中的 name 是 自定义，可省略</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<transition name="my-transition" enter-active-class="enter manyclass" leave-active-class="leave manyclass">
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
				localStorage.code = 'views/animation/transition-name.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
<style>
	.enter {
		animation: bounce-in .5s;
	}
	.leave {
		animation: bounce-out .5s;
	}
	@keyframes bounce-in {
		0% { transform: scale(0) }
		50% { transform: scale(1.5) }
		100% { transform: scale(1) }
	}
	
	@keyframes bounce-out {
		0% { transform: scale(1) }
		50% { transform: scale(1.5) }
		100% { transform: scale(0) }
	}
</style>
