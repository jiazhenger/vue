<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>v-if='' v-else 条件渲染</dt>
				<dd><b>v-if=""</b></dd>
				<dd><b>v-else-if=""</b></dd>
				<dd><b>v-else</b></dd>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30">
			<h2 v-if="isB == 'angular'">angular + ionic</h2>
		
			<h2 v-else-if="isB == 'react'">react + native</h2>
			
			<h2 v-else-if="isB == 'vue'">vue + vuex</h2>
			
			<h2 v-else>都不是</h2>
		</div>
        
		<p>
			<select v-model="isB">
				<option>angular</option>
				<option>react</option>
				<option>vue</option>
				<option>nodejs+express</option>
			</select>
		</p>
		
		<hr class="_mt10_mb10x">

		<template v-if="isA">
			<div class="lh30">
				<h1>切换多个元素</h1>
				<p>template 1</p>
				<p>template 2</p>
			</div>
		</template>

		<button @click="go" class="btn-default mt10">change</button>
	</div>
</template>

<script>
	export default {
		name: 'v-if',
		data(){
			return {
				isA: true,
				isB: null,
			}
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/bind-data/v-if.vue';
				this.$router.push('/popup')
			},
			go: function () {
				this.isA = !this.isA;
			}
		}
	}
</script>
