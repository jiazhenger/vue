<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>watch 方法监听 data 中数据变化：</dt>
				<dd>只要 data 中指定数据发生变化，就会执行该方法：<s>{{count}}</s></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div><input type="text" v-model="model.a"></div>
		
		<div class="mt10"><input type="text" v-model="model.b"></div>
		
		<hr class="_mt10_mb10x">
		
		<button class="btn-default" @click="index++">监听数据变化</button>
	</div>
</template>

<script>
	export default {
		name: 'watch',
		data(){
			return {
				index: 0,
				count: 0,
				model:{
					a:0,
					b:1
				}
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/component/watch.vue';
				this.$router.push('/popup')
			}
		},
		watch:{
			index(val){
				this.count = this.index * 2;
			},
			// 更深层次监听，监听对象
			model:{
				handler(v){
					console.log(v.a)
				},
				deep:true
			},
			// 监听对象中的某一属性
			['model.a'](v){
  				console.log(v)
  			}
		}
	}
</script>
