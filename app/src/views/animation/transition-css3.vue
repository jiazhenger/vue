<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>css3 动画：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<transition name="bounce">
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
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
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
