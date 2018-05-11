<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
			<button class="btn-default" @click="goAjax()">到 ajax</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>Http 请求测试：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
			
		<button class="btn-default" @click="goAjax()">get 文本</button>
        <button class="btn-default" @click="getToken()">获取 token</button>
        <button class="btn-default" @click="getData()">get 获取获取</button>
        <button class="btn-default" @click="postData()">post 提交数据</button>
        <button class="btn-default" @click="posts()">请求多个接口</button>
	</div>
</template>

<script>
	export default {
		name: 'http',
		data(){
			return {
				
			}
		},
		methods:{
			getToken(){
				this.token();
				console.log(localStorage)
			},
			getData(){
				this.ajax('index/index.do',{brandMark:''}).then(data=>{
					console.log(data);
				})
			},
			postData(){
				let param = {
		       
		        }
				this.ajax('tasks/create',param).then((data)=>{
					console.log(data)
				})
			},
			posts(){
				/*
				let res = [
					this.http.post('',{},this.config),
					this.http.post('',{},this.config),
				]
				this.ajaxs(res,(res1,res2)=>{
					
				})*/
			},
			goVue(){
				localStorage.code = 'views/http/http.vue';
				this.$router.push('/popup')
			},
			goAjax(){
				localStorage.code = 'plugins/ajax.js';
				this.$router.push('/popup')
			}
		}
	}
</script>
