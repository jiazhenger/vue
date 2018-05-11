<template>
	<div id="checkboxs">
		<button class="btn-default" @click="goVue()">本组件</button>
		
		<hr class="_mt10_mb10x">
		
		<p>
			<label :class="{checked:checkall}">
				<input type="checkbox" ref="checkAll" v-on:change="checkAllChange($event.target.checked)"> 全选
			</label>
		</p>
		
		<hr class="_mt10_mb10x">
		
		<ul>
			<li v-for="(item,index) of data" :key="index" class="mb10">
				<label><input type="checkbox" v-model="checkboxs" :value="item.id">{{item.name}}</label>
			</li>
		</ul>
		
		<hr class="_mt10_mb10x">
		
		<div>{{checkboxs}}</div>
	</div>
</template>

<script>
	export default {
		name:'checkboxs',
		data(){
			return {
				data : [
					{id:1,name:'vuejs'},
					{id:2,name:'react'},
					{id:3,name:'angular'},
					{id:4,name:'html'},
					{id:5,name:'css'}
				],
				checkall:false,
				checkboxs:[]
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/form/checkbox-all.vue';
				this.$router.push('/popup')
			},
			checkAllChange(val){
				let stack = [];
				if(val){
					this.data.forEach((v,i)=>{
						stack[i] = v.id;
					})
				}
				this.checkboxs = stack;
			}
		},
		watch:{
			checkboxs(){
				this.$refs.checkAll.checked = this.checkboxs.length == this.data.length;
			}
		}
	}
</script>