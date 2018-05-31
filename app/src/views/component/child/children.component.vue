<template>
	<div class="mvvm-box-2">
		<h3>这是子组件</h3>
		
		<p class="mt20">
			<a v-on:click="start" class="btn-default mr20">获取父组件的属性</a>
			<a v-on:click="stop" class="btn-default">监听父组件事件</a>
		</p>
		<div class="mvvm-code lh30 mt20">
			<p><b>this.$parent.msg</b> 获取 <s>{{ $parent.msg }}</s> </p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'child',
		data(){
			return {
				msg : '子组件的属性',
				name : '子组件二的属性'
			}
		},
		methods:{
			childMethodA(){
				alert('子组件的方法')
			},
			start(){
				let msg = this.$parent.msg; // 子取父属性
				
				alert(msg)	
			},
			stop(){
				this.$parent.play('触发的是父组件的事件','在父事件中传入了第二个参数')
			},
			go(){
				alert('子组件二事件')
			}
		}
	}
</script>
