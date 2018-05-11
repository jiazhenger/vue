<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>列表的进入和离开过渡：</dt>
			</dl>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<button v-on:click="add" class="btn-default">Add</button>
		<button v-on:click="remove" class="btn-default">Remove</button>
		
		<hr class="_mt10_mb10x">
		
		<!-- 
			tag="html"	// 把transition-group标签在 html 结构中显示为指定 html 元素
		-->
		<transition-group name="list" tag="div">
			<p v-for="item in items" v-bind:key="item" class="list-item lh30">{{ item }}</p>
		</transition-group>
		
		<hr class="_mt10_mb10x">
		
		<transition-group name="list-complete" tag="div">
			<p v-for="item in items" v-bind:key="item" class="list-complete-item lh30">{{ item }}</p>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: 'animate',
		data(){
			return {
				items: ['anuglar','vue','react','html','javascript','css3'],
				nextNum: 10
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/animation/transition-list.vue';
				this.$router.push('/popup')
			},
			randomIndex() {
				return Math.floor(Math.random() * this.items.length)
			},
			add() {
				this.items.splice(this.randomIndex(), 0, this.nextNum++)
			},
			remove() {
				this.items.splice(this.randomIndex(), 1)
			}
		}
	}
</script>
<style>
	.list-item {
		display: inline-block;
		margin-right: 10px;
	}
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-active {
		opacity: 0;
		transform: translateY(30px);
	}
	
	.list-complete-item {
		transition: all 1s;
		display: block;
		margin-right: 10px;
	}
	.list-complete-enter, .list-complete-leave-active {
		opacity: 0;
		transform: translateY(30px);
	}
	.list-complete-leave-active {
		position: absolute;
	}
</style>
