<template>
	<div id="checkboxs">
		<button class="btn-default" @click="goVue()">本组件</button>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>表单修饰符：</dt>
				<dd><b>v-model.lazy=""</b> 失去焦点击时才会有值</dd>
				<dd><b>v-model.number=""</b> 自动将用户的输入值转为 Number 类型</dd>
				<dd><b>v-model.trim=""</b> 自动过滤用户输入的首尾空格</dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<ul class="res-tr-tl clearfox _lh32">
			<li>
				<h6  class="col-sm-3">失去焦点击时才会有值：</h6>
				<div class="col-sm-9 _fl">
					<input v-model.lazy="lazy" placeholder="edit me">
					<span class="form-error">{{lazy}}</span>
				</div>
			</li>
			<li class="mt10">
				<h6  class="col-sm-3">自动将用户的输入值转为 Number 类型：</h6>
				<div class="col-sm-9 _fl">
					<input v-model.number="number" type="number" placeholder="edit me">
					<span class="form-error">{{number}}</span>
				</div>
			</li>
			<li class="mt10">
				<h6  class="col-sm-3">自动过滤用户输入的首尾空格：</h6>
				<div class="col-sm-9 _fl">
					<input v-model.trim="trim" type="text" placeholder="edit me">
					<span class="form-error">{{trim}}</span>
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
				lazy : null,
                number : null,
                trim : null,
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/form-decoration.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
