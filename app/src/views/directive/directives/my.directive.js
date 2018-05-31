import Vue from 'vue'

/*
 * 参数详解
 * 
	el: 指令所绑定的元素，可以用来直接操作 DOM，相当于 document.getElementById() 的作用，用法也一样
	
	binding 一个对象，包含以下属性 = {
		name: 指令名，不包括 v- 前缀。

		value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
		
		oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
		
		expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
		
		arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
		
		modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
	}
	
	vnode: Vue 编译生成的虚拟节点
 	
 	oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
 * */

Vue.directive('focus',{
	// 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
	inserted(el,binding) {		// 当绑定元素插入到 DOM 中，执行这个元素
		el.focus()					// 聚焦元素
		el.style.color = 'red';
		el.style.borderColor = 'red';
	},
	
	// 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作
	bind(el,binding){	
		console.log(binding)
	},
	
	// 只调用一次， 指令与元素解绑时调用
	unbind(el){
	
	},
	// 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新
	update(el,binding){
		var color = 'red';
		if( binding.value == 1 ){
			color = 'blue'
		}else if( binding.value == 12 ){
			color = 'green'
		}else if( binding.value == 123 ){
			color = 'yellow'
		}else if( binding.value == 1234 ){
			color = 'brown'
		}
		
		el.style.color = color;
		el.style.borderColor = color;
		
	},
	
	// 被绑定元素所在模板完成一次更新周期时调用
	componentUpdated(el){
	
	}
})

