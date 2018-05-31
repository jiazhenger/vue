<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>绑定数据到模板: </dt>
				<dd><b>｛｛｝｝</b> <s>{{txt}}</s></dd>
				<dd><b>｛｛ 1+1 ｝｝</b> 表达式计算<s>{{ 1+1 }}</s></dd>
				<dd><b>｛｛ true ? 100 : 200 ｝｝</b> 三元运算<s>{{ true ? 100 : 200 }}</s></dd>
				<dd><b>v-bind:attr=""</b> <s v-bind:attr="title">绑定属性</s></dd>
				<dd><b>v-html=""</b> <s v-html="html">插入 html</s></dd>
				<dd><b>v-text=""</b> <s v-text="txt">插入文本</s></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
	</div>
</template>

<script>
	export default {
		name: 'style',
		data(){
			return {
				title : '插入属性',
				txt : '插入文本',
				html : '<del>插入 html</del>'
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/bind-data/bind-data.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
