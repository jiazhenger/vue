<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>.vue 组件中的样式: </dt>
				<dd><b>:style=""</b> == <b>v-bind:style=""</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dt>.vue 配置 css </dt>
		</dl>
		<pre class="mvvm-pre">
			// 在  style 标签中导入样式
			&lt;style
				<b>scoped</b>						// 限制 css 只在当前组件起作用
				<b>lang = "@css/less/sass"</b>		// 使用的 css 编译器
				<b>src = '@css/login.css'</b>		// 导入外部样式
			&gt;
			
			// 在 js 中导入样式
			<b>require('@css/login.css')</b>	
			<b>@import '@css/login.less'</b>
		</pre>
		
		<hr class="_mt10_mb10x">
		
		<dl class="mvvm-list">
			<dt>webpack 配置 less </dt>
		</dl>
		<pre class="mvvm-pre">
			npm install less-loader less --save-dev
			<b>
			{
				test: /\.less$/,		
				loader: ['style-loader', 'css-loader', 'less-loader'],
				loader: 'style-loader!css-loader!less-loader'
			}</b>
		</pre>
	</div>
</template>

<script>
	export default {
		name: 'style',
		data(){
			return {

			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/style/style-vue.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
