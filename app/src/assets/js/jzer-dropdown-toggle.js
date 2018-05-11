// ================================================= 下拉展开，多个
$.fn.dropdownToggle = function(option){
	var opt = {
		slideId : null,
		cancelButton : '.cancel',
		submitButton : '.submit',
		openCallback : function(){},
		closeCallback : function(){},
		submitCallback : function(){}
	}
	$.extend(opt,option);
	
	var slide = opt.slideId;
	
	
	$(this).click(function(){
		var $next = slide ? $(slide) : $(this).next();
		var $this = $(this);
		$next.stop(true,false).slideToggle(function(){
			if($(this).css('display') == 'none'){ 
				$(this).parent().removeClass('active');
				opt.closeCallback.call($this,$next)
			}else{ 
				$(this).parent().addClass('active');
				opt.openCallback.call($this,$next)
			}
		})
	})

	$(this).each(function(){ 
		var $next = slide ? $(slide) : $(this).next();
		var $this = $(this);
		$next.find(opt.cancelButton).click(function(){ 
			$next.slideUp(function(){ 
				opt.closeCallback.call($this,$next);
				$this.parent().removeClass('active');
			})
		})

		$next.find(opt.submitButton).click(function(){	
			$this.parent().removeClass('active');
			opt.submitCallback.call($this,$next);
		})
	})

}
$(function(){
	$('.js-dropdown').dropdownToggle();
})