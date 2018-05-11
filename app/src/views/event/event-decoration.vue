<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>事件修饰符</dt>
				<dd><b>@click.stop=''</b> 阻止单击事件冒泡</dd>
				<dd><b>@click.prevent=''</b> 阻止冒泡并阻止默认行为</dd>
				<dd><b>@click.stop.prevent=''</b> 修饰符可以串</dd>
				<dd><b>@click.capture=''</b> 添加事件侦听器时使用事件捕获模式</dd>
				<dd><b>@click.self=''</b> 只当事件在该元素本身（而不是子元素）触发时触发回调</dd>
				<dd><b>@click.once=''</b> 点击事件将只会触发一次</dd>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<div class="lh30">
			<h2><a @click.stop="say('hello',$event)" class="btn-o">@:click.stop="say('hello',$event)" 阻止单击事件冒泡</a></h2>
			
			<h2 class="mt10"><a @click.stop.prevent="say('hello',$event)" class="btn-o">@click.stop.prevent="say('hello',$event)" 修饰符可以串</a></h2>
			
			<h2 class="mt10"><a @click.capture="say('hello',$event)" class="btn-o">@click.capture="say('hello',$event)" 添加事件侦听器时使用事件捕获模式</a></h2>
			
			<h2 class="mt10"><a @click.self="say('hello',$event)" class="btn-o">@click.self="say('hello',$event)" 只当事件在该元素本身（而不是子元素）触发时触发回调</a></h2>
			
			<h2 class="mt10"><a @click.once="say('hello',$event)" class="btn-o">@click.once="say('hello',$event)" 点击事件将只会触发一次</a></h2>
			
			<form  class="mt10" @submit.prevent="onSubmit"><button class="btn-o">@submit.prevent="onSubmit" 提交事件不再重载页面</button></form>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'event',
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
				localStorage.code = 'views/event/event-decoration.vue';
				this.$router.push('/popup')
			},
			say: function (msg) {
				alert(msg)
				//event.stopPropagation();     // 阻止冒泡不阻止默认行为
				//event.preventDefault();	    // 阻止冒泡并阻止默认行为
			}
		}
	}
</script>
