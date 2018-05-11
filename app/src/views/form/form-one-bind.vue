<template>
	<div id="checkboxs">
		<button class="btn-default" @click="goVue()">本组件</button>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>表单单向绑定：</dt>
				<dd><b>:value=""</b> == <b>v-bind:value=""</b> 绑定表单元素的 value 值</dd>
				<dd><b>@input=""</b> == <b>v-on:input=""</b> 绑定输入事件，相当于 keyup</dd>
				<dd><b>@input="" :value=""</b> == <b>v-model=""</b> v-model 语法糖实现原理</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<ul class="res-tr-tl clearfox _lh32">
			<li>
				<h6  class="col-sm-3">:value="" || v-bind:value=""：</h6>
				<div class="col-sm-9 _fl">
					<input :value="value">
					<span class="form-error">{{value}}</span>
				</div>
			</li>
			<li class="mt10">
				<h6  class="col-sm-3">@input="" || v-on:input=""：</h6>
				<div class="col-sm-9 _fl">
					<input v-on:input="updata($event.target.value)">
					<span class="form-error">{{val}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'checkboxs',
		data(){
			return {
				value : '单向绑定表单默认值',
				val: '单向绑定输入默认值'
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/form-one-bind.vue';
				this.$router.push('/popup')
			},
			updata(value){
				this.val = value
			}
		}
	}
</script>
