<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>多个元素的过渡：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<transition name="fade" mode="out-in">
			<button v-if="show" key="save" class="btn-default">Save</button>
			<button v-else key="edit" class="btn-default">Edit</button>
		</transition>
		
		<hr class="_mt10_mb10x">
		
		<transition name="slide-fade" mode="out-in">
			<button v-if="show" key="save" class="btn-default">Save</button>
			<button v-else key="edit" class="btn-default">Edit</button>
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
				localStorage.code = 'views/animation/transition-many.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
	
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
