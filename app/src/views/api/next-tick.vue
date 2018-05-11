<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>$nextTick()：</dt>
				<dd>处理改变后的变量：<s>{{ message }}</s></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
			
		<button @click="update" class="btn-default">改变变量</button>
	</div>
</template>

<script>
	export default {
		name: 'nextTick',
		data(){
			return {
				message: 'not updated'
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/api/next-tick.vue';
				this.$router.push('/popup')
			},
			update() {
				this.message = 'updated'
				
				//console.log(this.$el.textContent) 	// 输出本路由中的所有文本 
				
				// 在 DOM 状态更新后做点什么
				// 当变量改变时，调用此函数
				this.$nextTick(()=>{
					console.log(this.$el.textContent) // => '更新完成'
				})
			}
		}
	}
</script>
