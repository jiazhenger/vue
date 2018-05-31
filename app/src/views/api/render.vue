<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>render()：动态创建组件</dt>
				<dd>字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
			
		<button @click="play" class="btn-default">动态创建组件</button>
		
		<hr class="_mt10_mb10x">
		
		<anchored-heading :level="count">Hello world!</anchored-heading>
	</div>
</template>

<script>
	export default {
		name: 'render',
		components:{
			'anchored-heading' : {
				render: function (createElement) {
					return createElement(			// 创建 html标签							
						'h' + this.level,   		// tag name 标签名称
						//{},						// 可省略
						this.$slots.default 		// slot
					)
				},
				props: {
					level: {
						type: Number,
						required: true
					}
				}
			}
		},
		data(){
			return {
				count: 1
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/api/render.vue';
				this.$router.push('/popup')
			},
			play:function(){
				this.count++
				if(this.count == 6){
					this.count = 1
				}
			}
		}
	}
</script>

<style>
	h1{font-size:24px}
	h2{font-size:22px}
	h3{font-size:20px}
	h4{font-size:18px}
	h5{font-size:16px}
	h6{font-size:14px}
</style>
