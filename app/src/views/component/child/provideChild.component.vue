<template>
	<div class="mvvm-box-2">
		<h3>这是子组件</h3>
		
		<p>{{store.msg}}</p>
		<p>{{my.nsg}}</p>
		
		<a v-on:click="store.commit(456)" class="btn-default mr20">子级改变父值</a>
	</div>
	
</template>

<script>
	export default {
		name: 'provideChild',
		// inject在子组件中注入变量
		inject: ['store','my'],
		data(){
			return {
				childA : '子组件的属性',
				name : '子组件一的属性'
			}
		},
		methods:{
			childMethodA(){
				alert('子组件的方法')
			},
			go(){
				alert('子组件一事件')
			}
		}
	}
</script>
