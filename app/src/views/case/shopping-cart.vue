<template>
	<div>
		<button class="btn-default" @click="goVue()">本组件</button>
		<button class="btn-default" @click="goCompoent()">查看 counter 组件</button>
		
		<hr class="_mt10_mb10x">
		<div><label class="checkbox mr10" :class="{checked:model.all}">
				<span>
					<input type="checkbox" 
						v-model="model.all"
						@change="allChange($event.target.checked)"
					>
				</span>
				选择全部
			</label>
		<hr class="_mt10_mb10x">
		</div>
		<ul>
			<li v-for="(item,index) of data" :key="index">
				<header class="_mb10">
					<label class="checkbox mr10" :class="{checked:model.block[index]}">
						<span>
							<input type="checkbox" 
								v-model="model.block[index]"
								@change="blockChange($event.target.checked,index)" 
							>
						</span>
						{{item.header}}
					</label>
				</header>
				<menu>
					<li v-for="(v,i) of item.products" :key="i" class="_fl_lh30_mb10_ml20" 
						v-if="$isData(model.checked[index])"
					>
						<p>
							<label class="checkbox mr10" :class="{checked:model.checked[index][i]}">
								<span>
									<input type="checkbox" 
										v-model="model.checked[index][i]" 
										@change="checkedChange($event.target,index,i)"
										:value="v.id"
									>
								</span>
							</label>
						</p>
						<CounterComponent v-model="model.num[index][i]" :value="model.num[index][i]" @change="numChange(index,i,model.num[index][i])" :min="1" class="mlr10" />
						<p>单价：{{v.price}}</p>
						<button @click="del(index,i,item.id)" class="btn-default ml20">删除当条数据</button>
					</li>
				</menu>
				<hr class="_mt10_mb10x">
			</li>
		</ul>
		<div class="mvvm-code">
			<p>总价：<i>{{model.totalPrice}}</i></p>
			<p>选择商品总数：<i>{{model.total}}</i></p>
			<p>所有商品总数：<i>{{model.allTotal}}</i></p>
			<p>id组：<i>{{model.ids}}</i></p>
		</div>
		
		<hr class="_mt10_mb10x">
		
		<div class="mvvm-pre"><s>全选：{{model.block}}</s></div>
		<div class="mvvm-pre"><s>单选：{{model.checked}}</s></div>
		<div class="mvvm-pre"><s>数量：{{model.num}}</s></div>
		<div class="mvvm-pre"><s>价格：{{model.price}}</s></div>
	</div>
</template>

<script>
	export default {
		name:'',
		components:{
			CounterComponent:()=>import('@cpt/counter.component')
		},
		data(){
			return {
				model:{
					// 辅助变量
					block:{},
					checked:{},
					num: {},
					price : {},
					all:false,	// 全选全部
					// 默认使用的变量名
					property:{
						products:'products',		// data 中商品列表对象属性名
						price: 'price'				// data 中商品列表具体价格属性名
					},
					// 使用变量
					ids:[],			// 选择的 id 数组
					totalPrice : 0,	// 总价格
					total:0,			// 选择的商品总数
					allTotal:0			// 所有购物车商品总数
				},
				data:[
					{
						header: '全选1',
						id:100,
						products:[
							{ id:'0005', price:'￥1.00',num:1 },
							{ id:'0006', price:'￥2.00',num:1 },
						]
					},
					{
						header: '全选2',
						id:200,
						products:[
							{ id:'0008', price:'4.00',num:1 },
							{ id:'0005', price:'5.50',num:1 },
						]
					},
					{
						header: '全选3',
						id:300,
						products:[
							{ id:'a124556', price:'$7.00',num:4 },
							{ id:'0006', price:'$8.50',num:5 },
						]
					}
				]
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			goVue(){
				localStorage.code = 'views/case/shopping-cart.vue';
				this.$router.push('/popup')
			},
			goCompoent(){
				localStorage.code = 'components/counter.component.vue';
				this.$router.push('/popup')
			},
			// 初始化变量
			init(products){
				for(let index in this.data){
					//this.model.checked[index] = []
					
					this.$set(this.model.block,index,false);
					this.$set(this.data[index],'block',false);
					
					this.$set(this.model.checked,index,{});
					this.$set(this.model.num,index,{});
					this.$set(this.model.price,index,{});
					this.data[index][this.model.property.products].map((v,i)=>{
						this.$set(this.data[index][this.model.property.products][i],'checked',false);
						this.$set(this.model.checked[index],i,false);
						this.$set(this.model.num[index],i,v.num);
						this.$set(this.model.price[index],i,0);
					})
				}
				
				this.lastResult();
			},
			// 全选时
			blockChange(checked,index){
				this.$set(this.data[index],'block',checked);
				this.data[index][this.model.property.products].map((v,i)=>{
					if(checked){
						this.$set(this.model.checked[index],i,true);
						this.$set(this.model.price[index],i, this.model.num[index][i] * this.priceToNumber(this.data[index][this.model.property.products][i][this.model.property.price]));
						this.$set(this.data[index][this.model.property.products][i],'checked',true);
					}else{
						this.$set(this.data[index][this.model.property.products][i],'checked',false);
						this.$set(this.model.checked[index],i,false);			// 单选全 false
						this.$set(this.model.price[index],i,0);					// 价格清零
					}
				})
				this.lastResult();
			},
			// 单选时
			checkedChange(v,index,i){
				// 全选判断
				let stack = []
				let checked = this.model.checked[index];
				for(let i in checked){
					if(checked[i]){
						stack.push(checked[i])
					}
				}
				if(stack.length == this.data[index][this.model.property.products].length){
					this.$set(this.model.block,index,true);
					this.$set(this.data[index],'block',true);
				}else{
					this.$set(this.model.block,index,false);
					this.$set(this.data[index],'block',false);
				}
				
				// 单选时控制数据
				if(v.checked){
					this.$set(this.model.price[index],i, this.model.num[index][i] * this.priceToNumber(this.data[index][this.model.property.products][i][this.model.property.price]));
					this.$set(this.data[index][this.model.property.products][i],'checked',true);
				}else{
					this.$set(this.model.price[index],i,0);
					this.$set(this.data[index][this.model.property.products][i],'checked',false);
				}
				
				this.lastResult();
							
			},
			// 计算改变时
			numChange(index,i,num){
				if(this.model.checked[index][i]){
					this.$set(this.model.price[index],i,num * this.priceToNumber(this.data[index][this.model.property.products][i][this.model.property.price]))	// 改变价格
				}
				//this.data[index][this.model.property.products]['num'] = num;
				
				this.$set(this.data[index][this.model.property.products][i],'num',num);
				this.lastResult();
			},
			// 全选全部
			allChange(checked){
				for(let index in this.data){
					this.$set(this.data[index],'block',checked);
					this.data[index][this.model.property.products].map((v,i)=>{
						if(checked){
							this.$set(this.model.block,index,true);
							this.$set(this.model.checked[index],i,true);
							this.$set(this.data[index][this.model.property.products][i],'checked',true);
							this.$set(this.model.price[index],i, this.model.num[index][i] * this.priceToNumber(this.data[index][this.model.property.products][i][this.model.property.price]));
						}else{
							this.$set(this.model.block,index,false);
							this.$set(this.model.checked[index],i,false);			// 单选全 false
							this.$set(this.model.price[index],i,0);					// 价格清零
							this.$set(this.data[index][this.model.property.products][i],'checked',false);
						}
					})
				}
				this.lastResult();
			},
			// 得出最后结果数据
			lastResult(){
				this.model.ids = [];
				this.model.totalPrice = 0;
				// 选择的商品总数
				this.model.total = 0;
				for(let index in this.data){
					for(let i in this.model.checked[index]){
						if(this.model.checked[index][i]){
							this.model.total += this.model.num[index][i];
							this.model.ids.push(this.data[index][this.model.property.products][i]['id'])
						}
					}
				}
				// 购物车商品总数
				this.model.allTotal = 0;
				for(let index in this.model.num){
					for(let i in this.model.num[index]){
						this.model.allTotal += this.model.num[index][i];
					}
				}
				// 计算商品总价
				for(let index in this.model.price){
					for(let i in this.model.price[index]){
						if(this.model.checked[index][i]){
							this.model.totalPrice += this.model.price[index][i];
						}
						
					}
				}
				// 判断全选
				this.isAll();
			},
			// 格式化价格为数字
			priceToNumber(price){
				var price = price.toString();
				if(price.indexOf('￥') + 1 !=0){
					return price.replace('￥','') * 1
				}else if(price.indexOf('$') + 1 !=0){
					return price.replace('$','') * 1 
				}else{
					return price * 1;
				}
			},
			// 判断全部非全选
			isAll(){
				let stack = []
				for(let index in this.data){
					this.data[index][this.model.property.products].map((v,i)=>{
						stack.push(v.id);
					})
				}
				if(stack.length == this.model.ids.length && stack.length != 0){
					this.model.all = true;
				}else{
					this.model.all = false;
				}
			},
			del(index,i,id){
				this.$delete(this.data[index][this.model.property.products],i)
				if(this.data[index][this.model.property.products].length == 0){
					this.$delete(this.data,index);
				}
				
				this.model.num = {}
				this.model.price = {}
				this.model.checked = {}
				this.model.block = {}
				
				// 重置 num
				for(let idx in this.data){
					this.$set(this.model.block,idx,this.data[idx]['block']);
					this.$set(this.model.num,idx,{});
					this.$set(this.model.checked,idx,{});
					this.$set(this.model.price,idx,{});
					this.data[idx][this.model.property.products].map((v,k)=>{
						this.$set(this.model.num[idx],k,v.num);
						this.$set(this.model.checked[idx],k,v.checked);
						this.$set(this.model.price[idx],k,this.priceToNumber(v.price));
					})
				}
				
				this.lastResult();
			}
		}
	}
</script>