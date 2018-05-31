<template>
	<div class="_fl">
		<button @click="minus" :disabled="counter<=this.min" :class="{ disabled:counter<=min }" class="btn-default tc pr5"><i class="font-minus"></i></button>
		<input v-model.lazy="counter" class="mlr5" type="number" @blur="blur">
		<button @click="add" :disabled="counter>=this.max" :class="{ disabled:counter>=max }" class="btn-default tc pr5"><i class="font-plus"></i></button>
	</div>
</template>

<script>
	export default {
		name: '',
		props:{
			min:{
				type : Number,
				default: 0
			},
			max:{
				type : Number,
				default: 100
			},
			value:{
				default: 1
			}
		},
		data(){
			return {
				counter: 1
			}
		},
		mounted(){
			this.counter = this.value;
		},
		methods:{
			add(){
				this.counter ++;
			},
			minus(){
				this.counter --;
			},
			blur(){
				if(this.counter >=this.max){
					this.counter = this.max;
				}else if(this.counter <= this.min){
					this.counter = this.min;
				}
			}
		},
		watch:{
			counter(v){
				this.counter = parseInt(v);
				this.$emit('input', this.counter);
				this.$emit('change')
			},
			value(v){
				this.counter = parseInt(v);
			}
		}
	}
</script>
