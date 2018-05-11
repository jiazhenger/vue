<template>
	<div class="lh30 mvvm-code">
		<div>
			<a class="btn-default mr10" href="https://cn.vuejs.org/" target="_blank">vue 官方文档</a>
			<a class="btn-default mr10" href="https://github.com/vuejs" target="_blank">angular 官方版本</a>
			<a class="btn-default mr10" href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli 官方版本</a>
		</div>
		<div class="mt10">
			<a class="btn-default mr10" href="http://element.eleme.io/#/zh-CN/component/installation" target="_blank">element-ui</a>
			<a class="btn-default mr10" href="https://www.iviewui.com/docs/guide/install" target="_blank">iView-ui</a>
			<a class="btn-default mr10" href="https://n3-components.github.io/N3-components/component_en.html" target="_blank">N3</a>
			<a class="btn-default mr10" href="http://mui.yaobieting.com/docs/index.html" target="_blank">vue-mui</a>
			<a class="btn-default mr10" href="http://okoala.github.io/vue-antd/#!/components" target="_blank">vue-antd</a>
			<a class="btn-default mr10" href="https://luojilab.github.io/radon-ui/#!/" target="_blank">radon-ui</a>
			<a class="btn-default mr10" href="https://vuikit.js.org/guide/components" target="_blank">vuikit</a>
			<a class="btn-default mr10" href="http://www.muse-ui.org/#/install" target="_blank">muse-ui(Material Design + vue2)</a>
		</div>
		<div class="mt10">
			<a class="btn-default mr10" href="https://wangdahoo.github.io/vonic/docs/#/" target="_blank">vonic（vue+ionic）</a>
			
			<a class="btn-default mr10" href="https://vux.li/demos/v2/?x-page=v2-doc-home#/" target="_blank">vux-ui(WeUI+vue2)</a>
			<a class="btn-default mr10" href="https://doc.vux.li/zh-CN/" target="_blank">vux-ui(WeUI+vue2)</a>
			
			<a class="btn-default mr10" href="http://mint-ui.github.io/docs/#/" target="_blank">mint-ui(饿了么)</a>
			<a class="btn-default mr10" href="https://www.youzanyun.com/zanui/vant#/zh-CN/intro" target="_blank">vant(有赞)</a>
		</div>
		<hr class="_mt10_mb10x">
		<dl class="mvvm-list mt10">
			<dt>搭建开发环境 : </dt>
			<dd><b>npm install -g vue-cli</b> # 全局安装脚手架</dd>
			<dd><b>vue init webpack myProject</b> # 创建文件目录</dd>
			<dd><b> cd myProject</b> # 到项目文件夹</dd>
			<dd><b>npm install</b> # 安装依赖模块</dd>
			<dd><b>npm run dev</b> # 启动 vue</dd>
			<dd><b>npm run build</b> # 打包项目</dd>
		</dl>
		<dl class="mvvm-list mt10">
			<dt>其它命令 : </dt>
			<dd><b>npm run unit</b> # 单元测试</dd>
			<dd><b>npm run e2e</b> #  端到端的测试</dd>
		</dl>
		<dl class="mvvm-list mt10">
			<dt>手机测试环境：</dt>
			<dd>host: <b>'0.0.0.0'</b> # config/index.js</dd>
			<dd><b>http://10.1.22.15:8080</b> # 本地 ip 直接访问</dd>
		</dl>
		<dl class="mvvm-list mt10">
			<dt>本地跨域代理配置：</dt>
			<dd>以下红色部分必须保持一致</dd>
		</dl>
		<pre class="mvvm-pre">
	# <b>config/index.js</b>
	proxyTable: ｛
		'<b>/b2c1919</b>': ｛
		    target: 'https://kuaihe-test-weixin.1919.cn<b>/b2c1919</b>', 	//表示跨域请求的接口的域名
		    changeOrigin: true, 									//如果接口跨域，需要进行这个参数配置
		    pathRewrite: ｛											// 重写路径，用 '/b2c1919' 代替target里面的地址
				'^<b>/b2c1919</b>': '/'
			｝
		｝
	
	# <b>common/common.js</b>
	window.Config = {
		api : '<b>/b2c1919/</b>',							// 开发环境配置
		api : 'https://kuaihe-test-weixin.1919.cn/b2c1919',	// 生环境配置
		init : 'sys/init.do'
	}
		</pre>
		
		<dl class="mvvm-list mt10">
			<dt>ie环境配置：</dt>
			<dd><b>npm install babel-polyfill --dev</b> # 安装 ie 插件</dd>
			<dd><b>entry：｛ app : ["babel-polyfill", resolve('src') + '/main.js'] ｝</b> # 配置入口文件 </dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data(){
			return {
				
			}
		}
	}
</script>
