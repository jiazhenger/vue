<template>
	<div>
		<div class="h100"></div>
		<h2 v-if="!api" class="_tc_f24_lh40">对不起,您访问的页面不存在</h2>
		<div v-else class="_tc_f24_lh40">
				<h2>对不起,您访问的接口</h2>
				<h2 style="color:red;">{{api}}</h2>
				<h2>不存在</h2>
			</div>
		<nav class="_tc_mt20">
			<a @click="$router.go(-1)" class="btn-default _w100_mr5_h34">返回</a>
			<a @click="$router.push('/')" class="btn-default _w100_ml5_h34">到首页</a>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'nopage',
		data () {
			return {
				api:null
			}
		},
		methods:{
			
		}
	}
</script>
