webpackJsonp([47],{h1Mi:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"",components:{CounterComponent:function(){return o.e(61).then(o.bind(null,"LTUu"))}},data:function(){return{model:{block:{},checked:{},num:{},price:{},all:!1,property:{products:"products",price:"price"},ids:[],totalPrice:0,total:0,allTotal:0},data:[{header:"全选1",id:100,products:[{id:"0005",price:"￥1.00",num:1},{id:"0006",price:"￥2.00",num:1}]},{header:"全选2",id:200,products:[{id:"0008",price:"4.00",num:1},{id:"0005",price:"5.50",num:1}]},{header:"全选3",id:300,products:[{id:"a124556",price:"$7.00",num:4},{id:"0006",price:"$8.50",num:5}]}]}},mounted:function(){this.init()},methods:{goVue:function(){localStorage.code="views/case/shopping-cart.vue",this.$router.push("/popup")},goCompoent:function(){localStorage.code="components/counter.component.vue",this.$router.push("/popup")},init:function(e){var t=this;for(var o in this.data)!function(e){t.$set(t.model.block,e,!1),t.$set(t.data[e],"block",!1),t.$set(t.model.checked,e,{}),t.$set(t.model.num,e,{}),t.$set(t.model.price,e,{}),t.data[e][t.model.property.products].map(function(o,l){t.$set(t.data[e][t.model.property.products][l],"checked",!1),t.$set(t.model.checked[e],l,!1),t.$set(t.model.num[e],l,o.num),t.$set(t.model.price[e],l,0)})}(o);this.lastResult()},blockChange:function(e,t){var o=this;this.$set(this.data[t],"block",e),this.data[t][this.model.property.products].map(function(l,c){e?(o.$set(o.model.checked[t],c,!0),o.$set(o.model.price[t],c,o.model.num[t][c]*o.priceToNumber(o.data[t][o.model.property.products][c][o.model.property.price])),o.$set(o.data[t][o.model.property.products][c],"checked",!0)):(o.$set(o.data[t][o.model.property.products][c],"checked",!1),o.$set(o.model.checked[t],c,!1),o.$set(o.model.price[t],c,0))}),this.lastResult()},checkedChange:function(e,t,o){var l=[],c=this.model.checked[t];for(var s in c)c[s]&&l.push(c[s]);l.length==this.data[t][this.model.property.products].length?(this.$set(this.model.block,t,!0),this.$set(this.data[t],"block",!0)):(this.$set(this.model.block,t,!1),this.$set(this.data[t],"block",!1)),e.checked?(this.$set(this.model.price[t],o,this.model.num[t][o]*this.priceToNumber(this.data[t][this.model.property.products][o][this.model.property.price])),this.$set(this.data[t][this.model.property.products][o],"checked",!0)):(this.$set(this.model.price[t],o,0),this.$set(this.data[t][this.model.property.products][o],"checked",!1)),this.lastResult()},numChange:function(e,t,o){this.model.checked[e][t]&&this.$set(this.model.price[e],t,o*this.priceToNumber(this.data[e][this.model.property.products][t][this.model.property.price])),this.$set(this.data[e][this.model.property.products][t],"num",o),this.lastResult()},allChange:function(e){var t=this;for(var o in this.data)!function(o){t.$set(t.data[o],"block",e),t.data[o][t.model.property.products].map(function(l,c){e?(t.$set(t.model.block,o,!0),t.$set(t.model.checked[o],c,!0),t.$set(t.data[o][t.model.property.products][c],"checked",!0),t.$set(t.model.price[o],c,t.model.num[o][c]*t.priceToNumber(t.data[o][t.model.property.products][c][t.model.property.price]))):(t.$set(t.model.block,o,!1),t.$set(t.model.checked[o],c,!1),t.$set(t.model.price[o],c,0),t.$set(t.data[o][t.model.property.products][c],"checked",!1))})}(o);this.lastResult()},lastResult:function(){this.model.ids=[],this.model.totalPrice=0,this.model.total=0;for(var e in this.data)for(var t in this.model.checked[e])this.model.checked[e][t]&&(this.model.total+=this.model.num[e][t],this.model.ids.push(this.data[e][this.model.property.products][t].id));this.model.allTotal=0;for(var o in this.model.num)for(var l in this.model.num[o])this.model.allTotal+=this.model.num[o][l];for(var c in this.model.price)for(var s in this.model.price[c])this.model.checked[c][s]&&(this.model.totalPrice+=this.model.price[c][s]);this.isAll()},priceToNumber:function(e){var e=e.toString();return e.indexOf("￥")+1!=0?1*e.replace("￥",""):e.indexOf("$")+1!=0?1*e.replace("$",""):1*e},isAll:function(){var e=[];for(var t in this.data)this.data[t][this.model.property.products].map(function(t,o){e.push(t.id)});e.length==this.model.ids.length&&0!=e.length?this.model.all=!0:this.model.all=!1},del:function(e,t,o){var l=this;this.$delete(this.data[e][this.model.property.products],t),0==this.data[e][this.model.property.products].length&&this.$delete(this.data,e),this.model.num={},this.model.price={},this.model.checked={},this.model.block={};for(var c in this.data)!function(e){l.$set(l.model.block,e,l.data[e].block),l.$set(l.model.num,e,{}),l.$set(l.model.checked,e,{}),l.$set(l.model.price,e,{}),l.data[e][l.model.property.products].map(function(t,o){l.$set(l.model.num[e],o,t.num),l.$set(l.model.checked[e],o,t.checked),l.$set(l.model.price[e],o,l.priceToNumber(t.price))})}(c);this.lastResult()}}},c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("button",{staticClass:"btn-default",on:{click:function(t){e.goVue()}}},[e._v("本组件")]),e._v(" "),o("button",{staticClass:"btn-default",on:{click:function(t){e.goCompoent()}}},[e._v("查看 counter 组件")]),e._v(" "),o("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),o("div",[o("label",{staticClass:"checkbox mr10",class:{checked:e.model.all}},[o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.all,expression:"model.all"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model.all)?e._i(e.model.all,null)>-1:e.model.all},on:{change:[function(t){var o=e.model.all,l=t.target,c=!!l.checked;if(Array.isArray(o)){var s=e._i(o,null);l.checked?s<0&&(e.model.all=o.concat([null])):s>-1&&(e.model.all=o.slice(0,s).concat(o.slice(s+1)))}else e.$set(e.model,"all",c)},function(t){e.allChange(t.target.checked)}]}})]),e._v("\n\t\t\t选择全部\n\t\t")]),e._v(" "),o("hr",{staticClass:"_mt10_mb10x"})]),e._v(" "),o("ul",e._l(e.data,function(t,l){return o("li",{key:l},[o("header",{staticClass:"_mb10"},[o("label",{staticClass:"checkbox mr10",class:{checked:e.model.block[l]}},[o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.block[l],expression:"model.block[index]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model.block[l])?e._i(e.model.block[l],null)>-1:e.model.block[l]},on:{change:[function(t){var o=e.model.block[l],c=t.target,s=!!c.checked;if(Array.isArray(o)){var d=e._i(o,null);c.checked?d<0&&(e.model.block[l]=o.concat([null])):d>-1&&(e.model.block[l]=o.slice(0,d).concat(o.slice(d+1)))}else e.$set(e.model.block,l,s)},function(t){e.blockChange(t.target.checked,l)}]}})]),e._v("\n\t\t\t\t\t"+e._s(t.header)+"\n\t\t\t\t")])]),e._v(" "),o("menu",e._l(t.products,function(c,s){return e.$isData(e.model.checked[l])?o("li",{key:s,staticClass:"_fl_lh30_mb10_ml20"},[o("p",[o("label",{staticClass:"checkbox mr10",class:{checked:e.model.checked[l][s]}},[o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.checked[l][s],expression:"model.checked[index][i]"}],attrs:{type:"checkbox"},domProps:{value:c.id,checked:Array.isArray(e.model.checked[l][s])?e._i(e.model.checked[l][s],c.id)>-1:e.model.checked[l][s]},on:{change:[function(t){var o=e.model.checked[l][s],d=t.target,i=!!d.checked;if(Array.isArray(o)){var a=c.id,r=e._i(o,a);d.checked?r<0&&(e.model.checked[l][s]=o.concat([a])):r>-1&&(e.model.checked[l][s]=o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.model.checked[l],s,i)},function(t){e.checkedChange(t.target,l,s)}]}})])])]),e._v(" "),o("CounterComponent",{staticClass:"mlr10",attrs:{value:e.model.num[l][s],min:1},on:{change:function(t){e.numChange(l,s,e.model.num[l][s])}},model:{value:e.model.num[l][s],callback:function(t){e.$set(e.model.num[l],s,t)},expression:"model.num[index][i]"}}),e._v(" "),o("p",[e._v("单价："+e._s(c.price))]),e._v(" "),o("button",{staticClass:"btn-default ml20",on:{click:function(o){e.del(l,s,t.id)}}},[e._v("删除当条数据")])],1):e._e()})),e._v(" "),o("hr",{staticClass:"_mt10_mb10x"})])})),e._v(" "),o("div",{staticClass:"mvvm-code"},[o("p",[e._v("总价："),o("i",[e._v(e._s(e.model.totalPrice))])]),e._v(" "),o("p",[e._v("选择商品总数："),o("i",[e._v(e._s(e.model.total))])]),e._v(" "),o("p",[e._v("所有商品总数："),o("i",[e._v(e._s(e.model.allTotal))])]),e._v(" "),o("p",[e._v("id组："),o("i",[e._v(e._s(e.model.ids))])])]),e._v(" "),o("hr",{staticClass:"_mt10_mb10x"}),e._v(" "),o("div",{staticClass:"mvvm-pre"},[o("s",[e._v("全选："+e._s(e.model.block))])]),e._v(" "),o("div",{staticClass:"mvvm-pre"},[o("s",[e._v("单选："+e._s(e.model.checked))])]),e._v(" "),o("div",{staticClass:"mvvm-pre"},[o("s",[e._v("数量："+e._s(e.model.num))])]),e._v(" "),o("div",{staticClass:"mvvm-pre"},[o("s",[e._v("价格："+e._s(e.model.price))])])])},s=[],d={render:c,staticRenderFns:s},i=d,a=o("VU/8"),r=a(l,i,!1,null,null,null);t.default=r.exports}});