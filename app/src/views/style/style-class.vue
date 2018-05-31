<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>添加 class 样式 : </dt>
				<dd><b>:class=""</b> == <b>v-bind:class=""</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dd :class="{active:!flag, hover:flag}">:class="{active:flag,hover}"</dd>
			
			<dd :class="classObject1">:class="classObject1"</dd>
			
			<dd :class="classObject">:class="classObject"</dd>
			
			<dd :class="[classA,classB]">:class="[classA,classB]"</dd>
			
			<dd v-bind:class="[!flag ? classA : '',classB]">:class="[!flag ? classA : '',classB]"</dd>
			
			<dd v-bind:class="[{active:flag},classB]">:class="[{active:flag},classB]"</dd>
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
				classObject: {
					active: true, 
					hover: true
				},
				classA: 'active',
				classB: 'hover'
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/style/style-class.vue';
				this.$router.push('/popup')
			}
		},
		computed: {
			classObject1: function () {
				return {
					active: this.flag,
					hover: !this.flag
				}
			}
		}
	}
</script>
<style>
	.active{color:red}
	.hover{text-decoration:underline}
</style>