<template>
	<div class="app-wraper">
		<!-- header -->
		<header class="header">
			<div class="col-md-4 header-left lh40">
				<a class="small-nav-btn" id="smallNavBtn"></a>
				<!-- logo -->
				<div class="logo">Vue</div>
			</div>
		</header>
		<!-- main -->
		<main class="main">
			<!-- 导航 -->
			<aside class="aside" id="aside">
				<ul class="navigation" id="navigation">
					<li class="js">
						<h3><a><i class="font-navicon"></i>路由于导航</a></h3>
						<menu>
							<router-link to="/router-route" tag="li" active-class="active"><a>路由基础</a></router-link>
							<router-link to="/router-children" tag="li" active-class="active"><a>子路由及路由过渡</a></router-link>
							<router-link to="/router-nav-no-param" tag="li" active-class="active"><a>无参数路由导航</a></router-link>
							<router-link to="/router-nav-has-param" tag="li" active-class="active"><a>有参数路由导航</a></router-link>
							<router-link to="/router-param/15" tag="li" active-class="active"><a>获取参数</a></router-link>
							<router-link to="/router-cache" tag="li" active-class="active"><a>路由缓存</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>样式</a></h3>
						<menu>
							<router-link to="/style-class" tag="li" active-class="active"><a>class</a></router-link>
							<router-link to="/style-style" tag="li" active-class="active"><a>style</a></router-link>
							<router-link to="/style-vue" tag="li" active-class="active"><a>.vue 中的样式处理</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>模板与数据绑定</a></h3>
						<menu>
							<router-link to="/bind-data" tag="li" active-class="active"><a>绑定数据到模板</a></router-link>
							<router-link to="/v-for" tag="li" active-class="active"><a>v-for 数据循环</a></router-link>
							<router-link to="/v-if" tag="li" active-class="active"><a>v-if 条件判断</a></router-link>
							<router-link to="/v-show" tag="li" active-class="active"><a>v-show 条件判断</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>组件</a></h3>
						<menu>
							<router-link to="/life" tag="li" active-class="active"><a>组件生命周期</a></router-link>
							<li class="three"><a>组件通信</a>
								<menu>
									<router-link to="/communication" tag="li" active-class="active"><a>props $emit 子取父</a></router-link>
									<router-link to="/ref" tag="li" active-class="active"><a>$refs 父取子</a></router-link>
									<router-link to="/parent-children" tag="li" active-class="active"><a>$parent与$children 双向通信</a></router-link>
									
								</menu>
							</li>
							<router-link to="/computed" tag="li" active-class="active"><a>computed 计算属性</a></router-link>
							<router-link to="/watch" tag="li" active-class="active"><a>watch 监听属性</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>绑定事件</a></h3>
						<menu>
							<router-link to="/event-bind" tag="li" active-class="active"><a>v-on:click ==  @click</a></router-link>
							<router-link to="/event-decoration" tag="li" active-class="active"><a>事件修饰符</a></router-link>
							<router-link to="/event-btn" tag="li" active-class="active"><a>按键修饰符</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>表单</a></h3>
						<menu>
							<router-link to="/form/form" tag="li" active-class="active"><a>form 表单</a></router-link>
							<router-link to="/form/form-decoration" tag="li" active-class="active"><a>表单修饰符</a></router-link>
							<router-link to="/form/form-one-bind" tag="li" active-class="active"><a>表单单向绑定</a></router-link>
							<router-link to="/form/checkbox-all" tag="li" active-class="active"><a>checkbox 全选</a></router-link>
							<router-link to="/form/form-widget" tag="li" active-class="active"><a>自定义表单控件</a></router-link>
							<router-link to="/form/form-validator" tag="li" active-class="active"><a>我的表单验证</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>动画</a></h3>
						<menu>
							<router-link to="/transition" tag="li" active-class="active"><a>基本过渡动画</a></router-link>
							<router-link to="/transition-css3" tag="li" active-class="active"><a>css3动画</a></router-link>
							<router-link to="/transition-name" tag="li" active-class="active"><a>自定义过渡类名</a></router-link>
							<router-link to="/transition-appear" tag="li" active-class="active"><a>appear 初始渲染的过渡</a></router-link>
							<router-link to="/transition-many" tag="li" active-class="active"><a>多个元素的过渡</a></router-link>
							<router-link to="/transition-list" tag="li" active-class="active"><a>列表的进入和离开过渡</a></router-link>
							<router-link to="/transition-event" tag="li" active-class="active"><a>事件监听动画</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>指令</a></h3>
						<menu>
							<router-link to="/directive" tag="li" active-class="active"><a>自定义指令</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>Http</a></h3>
						<menu>
							<router-link to="/http" tag="li" active-class="active"><a>http 接口测试</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>缓存</a></h3>
						<menu>
							<router-link to="/cache-router" tag="li" active-class="active"><a>缓存路由</a></router-link>
							<router-link to="/cache-component" tag="li" active-class="active"><a>缓存组件</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>Vuex</a></h3>
						<menu>
							<router-link to="/vuex" tag="li" active-class="active"><a>vuex</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>API</a></h3>
						<menu>
							<router-link to="/next-tick" tag="li" active-class="active"><a>nextTick()</a></router-link>
							<router-link to="/render" tag="li" active-class="active"><a>render()</a></router-link>
						</menu>
					</li>
					<li class="js">
						<h3><a><i class="font-navicon"></i>案例</a></h3>
						<menu>
							<router-link to="/send-code" tag="li" active-class="active"><a>发送验证码</a></router-link>
							<router-link to="/counter" tag="li" active-class="active"><a>增减计数器</a></router-link>
							<router-link to="/shopping-cart" tag="li" active-class="active"><a>购物车</a></router-link>
						</menu>
					</li>
				</ul>
			</aside>
			<!-- 内容 -->
			<section id="content" class="content">
				<div class="page-content p20">
					<!-- 缓存路由组件 -->
					<!--<keep-alive><router-view/></keep-alive>-->
					
      					<router-view/>
    				
				</div>
			</section>
		</main>
		
		<router-view name="popup"/>
		<!-- 页面全局部分 -->
		<div class="my-pop" v-if="$store.state.User.prompt">{{$store.state.User.txt}}</div>
		<div v-if="$store.state.User.loading" class="loading-wraper-1 fxmc">
        	<dl class="loading-circle-1">
	        	<dd><i></i><i></i><i></i><i></i></dd>
	        	<dd><i></i><i></i><i></i><i></i></dd>
	        	<dd><i></i><i></i><i></i><i></i></dd>
			</dl>
        </div>
	</div>
</template>

<script>
	import '@js/jzer-dropdown-onlyone';
	import '@js/jzer-dropdown-toggle';
	export default {
		name: 'app',
		data(){
			return {
				logo: require('@images/logo.png')
			}
		},
		mounted(){
			$('#navigation h3').dropdownOnlyone({show:'show',hide:'hide'});
			$('#navigation .three>a').dropdownToggle();
			// 刷新展开当前路由的目录
			setTimeout(function(){
				$('#navigation menu li').each(function(){
					var $this = $(this);
					if($(this).hasClass('active')){
						$(this).parents('menu').show(function(){
							$(this).parents('.js').addClass('active');
							$(this).parents('.three').addClass('active');
						})
					}
				})
			},200)
		}
	}
</script>
<style>
	.app-wraper{width:100%;height:100%;position:absolute;left:0;top:0;}
	.my-pop{width:150px;height:40px;line-height:40px;text-align:center;background:#fff;border:1px solid #ddd;
		position:absolute;left:50%;top:50%;margin:-20px 0 0 -20px;
	}
</style>