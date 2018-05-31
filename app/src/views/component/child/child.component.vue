<template>
	<div class="mvvm-box-2">
		<h3>这是子组件</h3>
		
		<p class="mt20">
			<a v-on:click="start" class="btn-default mr20">获取父组件的属性</a>
			<a v-on:click="stop" class="btn-default">监听父组件事件</a>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'child',
		props:['msg'],	// 声明要接收的变量
		data(){
			return {
				childA : '子组件的属性',
				name : '子组件一的属性'
			}
		},
		methods:{
			childMethodA(){
				alert('子组件的方法')
			},
			start(){
				alert(this.msg)
			},
			stop(){
				this.$emit('play','触发的是父组件的事件','在父事件中传入了第二个参数');	// 监听父组件事件
			},
			go(){
				alert('子组件一事件')
			}
		}
	}
</script>
