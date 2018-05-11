<template>
	<div id="checkboxs">
		<button class="btn-default" @click="goVue()">本组件</button>
		
		<hr class="_mt10_mb10x">
		
		<!-- <form v-on:submit.prevent="submit"> -->
		<form id="form" @submit.prevent="submit($event)">
			<ul class="res-tr-tl clearfox _lh32">
				<li>
					<h6  class="col-sm-3">单行文本框：</h6>
					<div class="col-sm-9 _fl">
						<input v-model="form.text" name="text" placeholder="edit me">
						<span class="form-error">{{form.text}}</span>
					</div>
				</li>
				<li class="mt10">
					<h6  class="col-sm-3">多行文本框：</h6>
					<div class="col-sm-9 _fl">
						<span><textarea v-model="form.textarea" placeholder="edit me"></textarea></span>
						<span class="form-error">{{form.textarea}}</span>
					</div>
				</li>
				<li class="lh18 mt10">
					<h6  class="col-sm-3">单个复选框选择 true/false：</h6>
					<div class="col-sm-9 _fl">
						<span><input type="checkbox" v-model="form.checkbox"></span>
						<span class="form-error">{{form.checkbox}}</span>
					</div>
				</li>
				<li class="lh18 mt10">
					<h6  class="col-sm-3">单个复选框选择 value：</h6>
					<div class="col-sm-9 _fl">
						<span><input type="checkbox" v-model="form.checked" v-bind:true-value="'为真时选择此项'" v-bind:false-value="'为假时选择此项'"></span>
						<span class="form-error">{{form.checked}}</span>
					</div>
				</li>
				<li class="lh18 mt10">
					<h6  class="col-sm-3">多个复选框选择 value：</h6>
					<div class="col-sm-9 _fl">
						<span><input type="checkbox" v-model="form.checkboxs" value="vue"></span>
						<span><input type="checkbox" v-model="form.checkboxs" value="angular"></span>
						<span><input type="checkbox" v-model="form.checkboxs" value="react"></span>
						<span class="form-error">{{form.checkboxs}}</span>
					</div>
				</li>
				<li class="lh18 mt10">
					<h6  class="col-sm-3">单选按钮：</h6>
					<div class="col-sm-9 _fl">
						<span><input type="radio" v-model="form.radio" name='a' v-bind:value="'男'"></span>
						<span><input type="radio" v-model="form.radio" name='a' value="女"></span>
						<span class="form-error">{{form.radio}}</span>
					</div>
				</li>
				<li class="mt10">
					<h6  class="col-sm-3">下拉框：</h6>
					<div class="col-sm-9 _fl">
						<select v-model="form.select">
							<option>angular</option>
							<option>react</option>
							<option>vue</option>
							<option :value="'nodejs+express'">all</option>
						</select>
						<span class="form-error">{{form.select}}</span>
					</div>
				</li>
				<li class="mt10">
					<h6  class="col-sm-3"></h6>
					<div class="col-sm-9 _fl">
						<button class="btn-default">提交表单</button>
					</div>
				</li>
			</ul>
		</form>
		<hr class="_mt10_mb10x">
		<pre class="mvvm-pre">{{data}}</pre>
	</div>
</template>

<script>
	export default {
		name:'checkboxs',
		data(){
			return {
				form:{
					text : '设置默认值',		
					textarea : '',
					checkbox : '',
					checked: '',
					checkboxs : [],
					radio : '',
					select : 'angular'
				},
				data : {}
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/form.vue';
				this.$router.push('/popup')
			},
			submit(event){
				//var data = new FormData(document.getElementById('form'));
				this.data = JSON.stringify(this.form,null,'\t');
			}
		}
	}
</script>
<style>
	input[type='checkbox'],input[type='radio']{margin-right:10px;}
</style>