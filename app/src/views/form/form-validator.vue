<template>
	<div>
		<button class="btn-default" @click="goVue()">本组件</button>
		<button class="btn-default" @click="goValidator()">到 validator</button>
		
		<hr class="_mt10_mb10x">
		<form id="form" @submit.prevent="submit($event)">
			<ul class="res-tr-tl clearfox _lh32">
				<li>
					<h6 class="col-sm-3">用户名：</h6>
					<div class="col-sm-6 _fl">
						<input :class="{error:valid.username}" v-model="model.username" name="text" placeholder="edit me">
					</div>
					<p class="col-sm-3 form-error" v-show="valid.username">{{errmsg}}</p>
				</li>
				<li class="mt10">
					<h6 class="col-sm-3">密码：</h6>
					<div class="col-sm-6 _fl">
						<input :class="{error:valid.password}" v-model="model.password" name="text" placeholder="edit me">
					</div>
					<p class="col-sm-3 form-error" v-show="valid.password">{{errmsg}}</p>
				</li>
				<li class="mt10">
					<h6  class="col-sm-3"></h6>
					<div class="col-sm-6">
						<button class="btn-default">提交表单</button>
					</div>
					<p class="col-sm-3 form-error"></p>
				</li>
			</ul>
		</form>
		<hr class="_mt10_mb10x">
		<pre class="mvvm-pre">{{test}}</pre>
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return {
				// 必须声明的变量
				model: {
					username:'',
					password:''
				},
				valid: {}, 
				errmsg: '',
				// test
				test: {}
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/form-validator.vue';
				this.$router.push('/popup')
			},
			goValidator(){
				localStorage.code = 'plugins/validator.js';
				this.$router.push('/popup')
			},
			formValidator(){
				return this.$validator(this,{
					username : {
						required : '用户名不能为空',
					},
					password : {
						required : '密码不能为空',
						password: '密码必须以字母开头，长6-18位'
					}
				})
			},
			submit(value){
				this.test = {}
				if(this.formValidator()){
					this.test = F.json(this.model)
				}
			}
		}
	}
</script>