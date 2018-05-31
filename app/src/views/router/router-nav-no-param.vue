<template>
	<div class="login-wraper">
		<nav class="my-box">
			<button class="btn-default" @click="goRouter">路由集合</button>
			<button class="btn-default" @click="goVue">本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>&lt;router-link to="/" tag="button" replace exact active-class="active"&gt;&lt;/router-link&gt; 无参数链接属性</dt>
				<dd><b>to=</b> '/user' == '/user/#hash'</dd>
				<dd><b>:to=</b> "'/user'" == "{path:'/user'}" == "{name:'UserName'}" </dd>
				<dd><b>v-bind:to=</b> "'/user'" == "{path:'/user'}" == "{name:'UserName'}" </dd>
			</dl>
			<dl class="mvvm-list">
				<dt>其它属性</dt>
				<dd><b>tag=</b> 'button': 渲染标签，默认生成 a 标签</dd>
				<dd><b>append</b> 'button': 在当前（相对）路径前添加基路径</dd>
				<dd><b>active-class</b> 'router-link-active': 设置链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置</dd>
				<dd><b>exact</b>: 激活路由全匹配</dd>
				<dd><b>replace</b>: 无历史记录，不能返回</dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>无参数模板导航: &lt;router-link&gt;&lt;/router-link&gt; </dt>
				<dd>path 可带 /，可不带 /，建议带上</dd>
				<dd><router-link to="/router-children" class="btn-o">to="/router-children"</router-link></dd>
				<dd><router-link :to="'/router-children'" class="btn-o">:to="'/router-children'"</router-link></dd>
				<dd><router-link :to="{path:'/router-children'}" class="btn-o">:to="{path:'/router-children'}"</router-link></dd>
				<dd><router-link :to="{name:'RouterChildren'}" class="btn-o">:to="{name:'RouterChildren'}"</router-link></dd>
				<dd><router-link v-bind:to="'/router-children'" class="btn-o">v-bind:to="'/router-children'"</router-link></dd>
				<dd><router-link v-bind:to="{path:'/router-children'}" class="btn-o">v-bind:to="{path:'/router-children'}"</router-link></dd>
				<dd><router-link v-bind:to="{name:'RouterChildren'}" class="btn-o">v-bind:to="{name:'RouterChildren'}"</router-link></dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>无参数命令式导航:  </dt>
				<dd><b>this.$router.push()</b>:  一般命令导航</dd>
				<dd><b>this.$router.replace()</b>: 无历史记录，不能返回</dd>
				<dd><b>this.$router.go(n)</b>: == window.history.go(n) 历史记录跳转</dd>
				<dd>path 可带 /，可不带 /，建议带上</dd>
				<dd><button @click="$router.push('/router-children')" class="btn-o">@click="$router.push('router-children')"</button></dd>
				<dd><button @click="$router.push({path:'/router-children'})" class="btn-o">@click="$router.push({path:'/router-children'})</button></dd>
				<dd><button @click="$router.push({name:'RouterChildren'})" class="btn-o">@click="$router.push({name:'RouterChildren'})"</button></dd>
				<dd><button @click="$router.replace('/router-children')" class="btn-o">@click="$router.replace('router-children')"</button></dd>
				<dd><button @click="$router.replace({path:'/router-children'})" class="btn-o">@click="$router.replace({path:'/router-children'})</button></dd>
				<dd><button @click="$router.replace({name:'RouterChildren'})" class="btn-o">@click="$router.replace({name:'RouterChildren'})"</button></dd>
				<dd><button @click="$router.go(-1)" class="btn-o">@click="$router.go(-1)"</button></dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/router/router-nav-no-param.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
