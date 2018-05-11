<template>
	<div class="mvvm-box-2">
		<h3>自定义的表单控件</h3>
		
		<hr class="_mt10_mb10x">
		
		<div><input @input="update($event.target.value)"><h4>子组件取到的值：{{value}}</h4></div>
		
	</div>
</template>

<script>
	export default {
		name:'widget',
		props: ['value'],	 // 获取 input 的 value 值
		data(){
			return {
				
			}
		},
		methods:{
			// 更新值，并发送到组件 v-model="" 上
			update(v){
				this.$emit('input', v);	// 将 input 的值 绑定到 value上，并发送给父组件的 v-mode="price"
			}
		}
	}
</script>
