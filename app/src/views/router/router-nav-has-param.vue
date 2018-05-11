<template>
	<div class="login-wraper">
		<nav class="my-box">
			<button class="btn-default" @click="goRouter">路由集合</button>
			<button class="btn-default" @click="goVue">本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>&lt;router-link to="/" tag="button" replace exact active-class="active"&gt;&lt;/router-link&gt;  有参数链接属性</dt>
				<dd><b>to=</b> '/user/20' == '/user/20#hash'</dd>
				<dd><b>:to=</b> "'/user/20'" == "{path:'/user/20', query:{id:20}}" == "{name:'UserName', params:{id:300}}" </dd>
				<dd><b>v-bind:to=</b> "'/user/20'" == "{path:'/user/20', query:{id:20}}" == "{name:'UserName', params:{id:300}}" </dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>无参数模板导航: </dt>
				<dd>可带 /，可不带 /，建议带上</dd>
				<dd><router-link to="/router-param/1" class="btn-o">to="/router-param/1"</router-link></dd>
				<dd><router-link :to="'/router-param/20#hash'" class="btn-o">:to="'/router-param/20#hash'"</router-link></dd>
				<dd><router-link :to="{ path:'/router-param/500'}" class="btn-o">:to="{ path:'/router-param/500' }"</router-link></dd>
				<dd><router-link :to="{ path:'/router-param/1', query:{ id:300 } }" class="btn-o">:to="{ path:'/router-param/1', query:{ id:300 } }"</router-link></dd>
				<dd><router-link :to="{ path:'/router-param/200', query:{ id:700 } }" class="btn-o">:to="{ path:'/router-param/200', query:{ id:700 } }"</router-link></dd>
				<dd><router-link :to="{ name:'RouterParam', params:{ id:300 } }" class="btn-o">:to="{ name:'RouterParam', params:{ id:300 } }"</router-link></dd>
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
				<dd><button @click="$router.push('/router-param/1')" class="btn-o">@click="$router.push('/router-param/1')"</button></dd>
				<dd><button @click="$router.push({ path:'/router-param/500'})" class="btn-o">@click="$router.push({path:'/router-param/500'})</button></dd>
				<dd><button @click="$router.push({ path:'/router-param/1', query:{ id:300 } })" class="btn-o">@click="$router.push({ path:'/router-param/1', query:{ id:300 })"</button></dd>
				<dd><button @click="$router.push({ path:'/router-param/200', query:{ id:700 } })" class="btn-o">@click="$router.push({ path:'/router-param/200', query:{ id:700 }})"</button></dd>
				<dd><button @click="$router.push({ name:'RouterParam', params:{ id:300 } })" class="btn-o">@click="$router.push({name:'RouterParam', params:{ id:300 }})"</button></dd>
			</dl>
			<hr class="_mt10_mb10x">
			<dl class="mvvm-list">
				<dd><button @click="$router.replace('/router-param/1')" class="btn-o">@click="$router.replace('/router-param/1')"</button></dd>
				<dd><button @click="$router.replace({ path:'/router-param/500'})" class="btn-o">@click="$router.replace({path:'/router-param/500'})</button></dd>
				<dd><button @click="$router.replace({ path:'/router-param/1', query:{ id:300 } })" class="btn-o">@click="$router.replace({ path:'/router-param/1', query:{ id:300 })"</button></dd>
				<dd><button @click="$router.replace({ path:'/router-param/200', query:{ id:700 } })" class="btn-o">@click="$router.replace({ path:'/router-param/200', query:{ id:700 }})"</button></dd>
				<dd><button @click="$router.replace({ name:'RouterParam', params:{ id:300 } })" class="btn-o">@click="$router.replace({name:'RouterParam', params:{ id:300 }})"</button></dd>
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
				localStorage.code = 'views/router/router-nav-has-param.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
