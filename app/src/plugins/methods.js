﻿/* ====================================== 方法插件  ====================================== */
export default{
	install(Vue){
		// ===================================================== test
		Vue.prototype.test = () => {
			alert('test')
		}
		// ===================================================== 判断数据有效性
		Vue.prototype.$isData = (v)=>{
			return F.isData(v);
		}
	}
}