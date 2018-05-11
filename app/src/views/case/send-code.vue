<template>
	<div>
		<button class="btn-default" @click="goVue()">本组件</button>
		<button class="btn-default" @click="goCompoent()">到发送验证码组件</button>
		
		<hr class="_mt10_mb10x">
		<div><input v-model.lazy="model.tel" class="mr10"><SendCodeComponent :tel="model.tel"/></div>
	</div>
</template>

<script>
	export default {
		name:'',
		components:{
			SendCodeComponent:()=>import('@cpt/send-code.component')
		},
		data(){
			return {
				model : { tel:'' }
			}
		},
		methods:{
			goVue(){
				localStorage.code = 'views/case/send-code.vue';
				this.$router.push('/popup')
			},
			goCompoent(){
				localStorage.code = 'components/send-code.component.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>