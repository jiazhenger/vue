<template>
	<button class="btn-default" 
			@click="sendCode()" 
			:class="{disabled:disabled}" 
			:disabled="disabled" type="button">
		<span v-show="disabled">(<b style="color:red">{{time}}</b>s)</span> {{txt}}
	</button>
</template>

<script>
	export default {
		name: '',
		props:['tel'],
		data(){
			return {
				time: 5,
				txt: '获取验证码',
				disabled:false
			}
		},
		methods:{
			sendCode(){
				let $this = this;
				let defaultTime = this.time;
				let tel = this.tel;
			
				if(tel=='' || tel == undefined || tel == null){
					alert('电话号码不能为空');
					return;
				}
				let reg = /^((((13[0-9]{1})|(15[0-9]{1}))|(18[0-9]{1}))+\d{8})$/.test(tel);
				if(!reg){
					alert('电话号码格式不正确');
					return;
				}
				
				// this.$post()
				
				this.txt = '后重新获取验证码';
				
				this.disabled = true;
				let cleartime = setInterval(()=>{
					$this.time--;
					
					if($this.time <= 0){
						clearInterval(cleartime);
						$this.time = defaultTime;
						$this.disabled = false;
						$this.txt = '重新获取验证码'
					}
				},1000)
			}
		}
	}
</script>
