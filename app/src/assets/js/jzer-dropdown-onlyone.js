// =================================================  下拉展开，始终是一个
$.fn.dropdownOnlyone = function(option){
	var opt = {
		slideId : 'menu',
		threeId : '.three',
		    show : 'slideDown',
		    hide : 'slideUp',
		changeCallback : function(){}
	}
	
	$.extend(opt,option);
	
	$(this).click(function(){
		var $this = $(this);
		$(this).next().stop(true,false)[opt.show](function(){
			$(this).parent().addClass('active');
			opt.changeCallback.call($this)
		})
		
		$(this).parent().siblings().find(opt.slideId)[opt.hide](function(){ $(this).parent().removeClass('active') });
		return false;
	})
}
