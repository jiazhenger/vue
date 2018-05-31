<template>
	<div>
		<nav class="my-box">
			<button class="btn-default" @click="goRouter()">路由集合</button>
			<button class="btn-default" @click="goVue()">到本组件</button>
		</nav>
		
		<hr class="_mt10_mb10x">
		
		<div class="lh30 mvvm-code">
			<dl class="mvvm-list">
				<dt>组件的生命周期</dt>
				<dd><b>beforeCreate()</b> 在实例创建之前，可以加 loadding 效果</dd>
				<dd><b>created()</b> 结束loading，还做一些初始化，实现函数自执行 </dd>
				<dd><b>mounted()</b> 在这发起后端请求，拿回数据，配合路由钩子做一些事情</dd>
				<dd><b>beforeDestory()</b> 在开始销毁实例时调用，即离开路由时</dd>
				<dd><b>destoryed()</b> 当前组件已被删除，清空相关内容</dd>
				
				<dd><b>updated()</b> 数据更新之后调用</dd>
				<dd><b>beforeCompile()</b> 未开始编译</dd>
				<dd><b>compiled()</b> 在编译结束后调用</dd>
				<dd><b>ready()</b> 在编译结束和 $el 第一次插入文档之后调用</dd>
				<dd><b>attached()</b> 在 vm.$el 插入 DOM 时调用</dd>
				<dd><b>detached()</b> 在 vm.$el 从 DOM 中删除时调用</dd>
				<dd><b>activated()</b> keep-alive组件激活时调用。该钩子在服务器端渲染期间不被调用</dd>
				<dd><b>deactivated()</b> keep-alive组件停用时调用。该钩子在服务端渲染期间不被调用</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		// 在实例创建之前
		// 加个loading事件 
		beforeCreate() {
			console.log('beforeCreate() 在实例创建之前')
			//this.$destroy();	// 销毁当前组件
		},
		// 在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
		// 但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来
		// 还可以做一些初始化，实现函数自执行
		// 结束loading事件 
		created() {
			console.log('created() 在实例创建之后调用')
		},
		// 在这发起后端请求，拿回数据，配合路由钩子做一些事情
		// 处理数据逻辑
		mounted() {
			console.log('mounted() 完成挂载');
		},
		// 数据更新之后调用
		updated() {
			console.log('updated() 数据更新之后调用');
		},
		// 未开始编译
		beforeCompile() {
			console.log("beforeCompile() 未开始编译");
		},
		// 在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
		compiled() {
			console.log("compiled() 编译完成");
		},
		// 在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
		ready(){
			console.log("ready() 一切准备好了");
		},
		// myVue.$appendTo(".test2")暂时触发不了,不知道怎么解决
		// 在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会 触发这个钩子。
		attached() { 
			console.log("attached() 插入DOM成功");
		},
		//触发事件 myVue.$destroy(true),其中参数true控制是否删除DOM节点或者myVue.$remove()
		//在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。
		detached() { 
			console.log("detached() 删除DOM成功");
		},
		//触发方式,在console里面打myVue.$destroy();
		//在开始销毁实例时调用。此时实例仍然有功能。
		// 你确认删除XX吗
		beforeDestroy() {
			console.log("beforeDestroy() 在实例销毁之前调用");
		},
		//触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
		//在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
		// 当前组件已被删除，清空相关内容
		destroyed() {
			console.log('destroyed() 在实例被销毁之后调用')
		},
		// keep-alive组件激活时调用。该钩子在服务器端渲染期间不被调用
		activated(){
			console.log('keep-alive组件激活时调用')
		},
		// keep-alive组件停用时调用。该钩子在服务端渲染期间不被调用
		deactivated(){
			console.log('keep-alive组件停用时调用')
		},
		methods:{
			goRouter(){
				localStorage.code = 'router.js';
				this.$router.push('/popup')
			},
			goVue(){
				localStorage.code = 'views/component/life.vue';
				this.$router.push('/popup')
			}
		}
	}
</script>
