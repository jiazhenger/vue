<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>添加 style 样式 : </dt>
				<dd><b>:style=""</b> == <b>v-bind:style=""</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dd :style="{color:flag ? 'red' : 'blue','text-decoration':'underline'}">v-bind:style='' 绑定</dd>
			
			<dd :style="styleObject">:style="styleObject" 对象绑定</dd>
			
			<dd v-bind:style="[classA,classB]">:style="[classA,classB]" 数组语法</dd>
		</dl>
		
		<hr class="_mt10_mb10x">

		<button @click="flag=!flag" class="btn-default">改变判断值</button>
	</div>
</template>

<script>
	export default {
		name: 'style',
		data(){
			return {
				flag: true,
				styleObject: {
					color: 'red',
					textDecoration: 'underline'
				},
				classA: {
					color: 'red',
				},
				classB: {
				    textDecoration: 'underline'
				}
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/style/style-style.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
