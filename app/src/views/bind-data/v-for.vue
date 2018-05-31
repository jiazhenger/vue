<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>v-for 数据循环数组 [ ]: </dt>
				<dd><b>v-for="(item,index) in json" :key="index"</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<ul class="lh30">
			<li v-for="(item,index) in json" :key="index" @click="delArr(index)">{{index}} --- {{item.msg}}</li>
		</ul>
        
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>v-for 数据循环对象｛｝: </dt>
				<dd><b>v-for="(item,index) in json" :key="index"</b></dd>
			</dl>
		</div>
        
		<hr class="_mt10_mb10x">
		
		<template v-for="(item,index) of jsonData">
			<p :key="index"  @click="delObj(index)" class="lh30">{{index}} --- {{item}}</p>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'v-for',
		data(){
			return {
				json: [
					{ msg: 'html' },
					{ msg: 'css' },
					{ msg: 'javascript' },
					{ msg: 'angularjs' },
					{ msg: 'vuejs' }
				],
				jsonData: {
					a: 'vue',
					b: 'react',
					c: 'angular',
					d: 'nodejs',
					e: 'express'
				}
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/bind-data/v-for.vue';
				this.$router.push('/popup')
			},
			delArr: function (index) {
				this.json.splice(index, 1);			// 数据移出当条数据
			},
			delObj: function (index) {
				this.$delete(this.jsonData,index);    // 删除对象当条数据
			}
		}
	}
	
	/*
		push()		// 向数组的末尾添加一个或多个元素，并返回新的长度
		pop()		// 用于删除并返回数组的最后一个元素

		unshift()	// 向数组的开头添加一个或更多元素，并返回新的长度
		shift()		// 用于把数组的第一个元素从其中删除，并返回第一个元素的值

		splice()	// 删除、插入、替换

		sort()		// 用于对数组的元素进行排序

		reverse()	// 反转数组
	*/
</script>
