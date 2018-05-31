<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>按键修饰符</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30">
			<p class="mb10">
				enter：
				<input v-on:keyup.13="onSubmit" placeholder="v-on:keyup.13='onSubmit'"> 
				<input @keyup.enter="onSubmit" placeholder="@keyup.enter= 'onSubmit'">
			</p>
	
			<p class="mb10">tab：<input @keyup.tab="onSubmit" placeholder="@keyup.tab= 'onSubmit'"></p>
			
			<p class="mb10">delete：<input @keyup.delete="onSubmit" placeholder="@keyup.delete= 'onSubmit'"></p>
			
			<p class="mb10">esc：<input @keyup.esc="onSubmit" placeholder="@keyup.esc= 'onSubmit'"></p>
			
			<p class="mb10">space：<input @keyup.space="onSubmit" placeholder="@keyup.space= 'onSubmit'"></p>
			
			<p class="mb10">up：<input @keyup.up="onSubmit" placeholder="@keyup.up= 'onSubmit'"></p>
			
			<p class="mb10">down：<input @keyup.down="onSubmit" placeholder="@keyup.down= 'onSubmit'"></p>
			
			<p class="mb10">left：<input @keyup.left="onSubmit" placeholder="@keyup.left= 'onSubmit'"></p>
			
			<p class="mb10">right：<input @keyup.right="onSubmit" placeholder="@keyup.right= 'onSubmit'"></p>
			
			<p class="mb10">alt+c：<input @keyup.alt.67="onSubmit" placeholder="@keyup.alt.67= 'onSubmit'"></p>
			
			<p class="mb10">ctrl+click：<input @click.ctrl="onSubmit" placeholder="@click.ctrl= 'onSubmit'"></p>
			
			<h2 class="mb10">code：{{code}}</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'event',
		data(){
			return {
				code : null	
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/event/event-btn.vue';
				this.$router.push('/popup')
			},
			onSubmit : function(event){
				this.code = '@keyup：'+ event.keyCode;
			}
		}
	}
	/*
		全部的按键别名：
		.enter
		.tab
		.delete (捕获 “删除” 和 “退格” 键)
		.esc
		.space
		.up
		.down
		.left
		.right
		
		.ctrl
		.alt
		.shift
		.meta
	*/
</script>
<style>
	input{width:300px;margin-left:20px;}
</style>