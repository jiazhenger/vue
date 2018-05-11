<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>appear 初始渲染的过渡：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<transition name="slide-fade" appear v-on:before-appear="beforeAppearHook" v-on:appear="appearHook" v-on:after-appear="afterAppearHook">
			<p v-show="show">hello</p>
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
				localStorage.code = 'views/animation/transition-appear.vue';
				this.$router.push('/popup')
			},
			beforeAppearHook(){
				
			},
			appearHook(){
				
			},
			afterAppearHook(){
				
			}
		}
	}
</script>
<style>
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
