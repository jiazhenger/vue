<template>
	<div>
		<button class="btn-default" @click="goVue()">本组件</button>
		<button class="btn-default" @click="goCompoent()">查看 counter 组件</button>
		
		<hr class="_mt10_mb10x">
		
		<div class="_fl_lh30">
			<CounterComponent v-model="counter1"/>
			<span class="ml10">默认取值：<i class="c1">{{counter1}}</i></span>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="_fl_lh30">
			<CounterComponent v-model="counter2" :min="5" :max="10"/>
			<span class="ml10">取值范围5-10：<i class="c1">{{counter2}}</i></span>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="_fl_lh30">
			<CounterComponent v-model="counter3" :min="10" :max="15"/>
			<span class="ml10">取值范围10-15：<i class="c1">{{counter3}}</i></span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'',
		components:{
			CounterComponent:()=>import('@cpt/counter.component')
		},
		data(){
			return {
				counter1: 0,
				counter2: 5,
				counter3: 10
			}
		},
		mounted(){
			
		},
		methods:{
			goVue(){
				localStorage.code = 'views/case/counter.vue';
				this.$router.push('/popup')
			},
			goCompoent(){
				localStorage.code = 'components/counter.component.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>