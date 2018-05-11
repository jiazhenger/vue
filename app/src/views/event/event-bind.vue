<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>v-on:click='' === @click='' 事件绑定</dt>
				<dd><b>v-on:click='' === @click=''</b></dd>
				<dd><b>v-on:mousedown=''  === @mousedown=''</b></dd>
				<dd><b>v-on:mouseup=''  === @mouseup=''</b></dd>
				<dd><b>v-on:mouseleave=''  === @mouseleave=''</b></dd>
				<dd><b>v-on:mouseenter=''  === @mouseenter=''</b></dd>
				<dd><b>v-on:resize=''  === @resize=''</b></dd>
			</dl>
			<dl class="mvvm-list">
				<dt>表单事件</dt>
				<dd><b>v-on:submit=''  === @submit=''</b></dd>
				<dd><b>v-on:change=''  === @change=''</b></dd>
				<dd><b>v-on:blur=''  === @blur=''</b></dd>
				<dd><b>v-on:focus=''  === @focus=''</b></dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<div class="lh30">
			<h2><a v-on:click="foo($event)" class="btn-o">v-on:click='foo($event)' 方法事件处理器，有括号</a></h2>
			
			<h2 class="mt10"><a @click="foo" class="btn-o">@click="foo" 方法事件处理器,没有括号</a></h2>
			
			<h2 class="mt10"><a @click="count++" class="btn-o">@click="count++" {{count}}</a></h2>
			
			<h2 class="mt10"><a @click="say('hello')" class="btn-o">@:click="say('hello')" 带参数</a></h2>
			
			<h3>tagName：{{tagName}}</h3>
		
			<h3>target：{{target}}</h3>
		</div>

		
	</div>
</template>

<script>
	export default {
		name: 'event',
		data(){
			return {
				tagName: null,
                target: null,
                count: 0
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/event/bind-event.vue';
				this.$router.push('/popup')
			},
			foo: function (event) {
				this.tagName = event.target.tagName;
				
				this.target = event.target;
				
				event.preventDefault();	    // 阻止冒泡并阻止默认行为
			},
			say: function (msg) {
				alert(msg)
				event.stopPropagation();     // 阻止冒泡不阻止默认行为
			}
		}
	}
</script>
