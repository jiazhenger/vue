<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>事件监听动画：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="show = !show" class="btn-default">Toggle</button>
		
		<hr class="_mt10_mb10x">
		
		<!-- v-bind:css="false"：Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响 -->
		<transition
			v-bind:css="false"	
			v-on:enter="enter"
			v-on:after-enter="afterEnter"
			v-on:enter-cancelled="enterCancelled"
			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
			v-on:after-leave="afterLeave"
			v-on:leave-cancelled="leaveCancelled"
		>
			<p v-if="show">Hello Vue</p>
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
				localStorage.code = 'views/animation/transition-event.vue';
				this.$router.push('/popup')
			},
			
			// 进入之前
			beforeEnter(el) {
				el.style.opacity = 0
				el.style.transformOrigin = 'left'
			},
			// 进入时
			enter(el, done) {
				el.style.opacity = 80
				//Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
				//Velocity(el, { fontSize: '1em' }, { complete: done })
				done()
			},
			// 进入之后
			afterEnter(el) {

			},
			enterCancelled(el) {
			
			},
			// 离开之前时
			beforeLeave(el) {
			},
			// 离开时
			leave(el, done) {
				//Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
				//Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
				//Velocity(el, { rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0 }, { complete: done });
				done()
			},
			// 离开之后
			afterLeave(el) {
				
			},
			// leaveCancelled 只用于 v-show 中
			leaveCancelled(el) {
				
			}
		}
	}
	// 在 enter 和 leave 中，回调函数 done 是必须的
</script>
