<template>
	<section class="pop-wraper pop-wraper-copy db">
        <div>
            <div>
                <div class="pop-container _w500">
                    <!-- content start -->
                    <header class="pop-header">
                        <h3>
                            <i class="font-file-code-o"></i> 源码</h3>
                            <a class="close" @click="close()">
                        </a>
                    </header>
                    <section class="pop-content">
                    	<div v-if="data.length > 0" class="code-list-container">
                    		<dl class="code-number">
                    			<dt v-for="let (item,index) of data" :key="index">{{index+1}}</dt>
                    		</dl>
                    		<dl class="code-content" contenteditable="true" spellcheck="false">
                    			<dd v-for="let (v,i) of data" :key="i">{{v}}</dd>
                    		</dl>
                    	</div>
                    	<div v-if="data.length == 0" class="p20">正在加载中，请稍候...</div>
                    </section>
                    <!-- content end -->
                </div>
                <q @click="close()"></q>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: 'code',
		data(){
			return {
				data: []
			}
		},
		created(){
			this.$getTxt(localStorage.code).then((data)=>{
    			this.data = data.split('\n');
			})
		},
		methods:{
			close(){
				this.$router.go(-1)
			},
			
		}
	}
</script>
