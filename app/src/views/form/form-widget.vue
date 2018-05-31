<template>
	<div id="checkboxs">
		<button class="btn-default" @click="goVue()">本组件</button>
		<button class="btn-default" @click="goWidget()">自定义表单控制</button>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>自定义表单控制：</dt>
				<dd><b>&lt;Component v-model="price" /&gt;</b> 接收 this.$emit('input') 发送过来的值</dd>
				<dd><b>@input=""</b> == <b>v-on:input=""</b> 绑定输入事件，相当于 keyup</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<WidgetComponent v-model="price" />
		
		<hr class="_mt10_mb10x">
		
		<div>主组件获取子组件变化值：{{price}}</div>
	</div>
</template>

<script>
	import Widget from '@views/form/form/widget';
	export default {
		name:'checkboxs',
		components:{
			WidgetComponent: Widget
		},
		data(){
			return {
				price : null	// v-model="price"	price 获取子组件中 this.$emit('input', Number(formattedValue))的值
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/form-widget.vue';
				this.$router.push('/popup')
			},
			goWidget(){
				localStorage.code = 'views/form/form/widget.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
