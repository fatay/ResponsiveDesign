$(document).on('click','.click-class',function() {
	iClass($(this))
})


function iClass(_this){
	if (_this.hasClass('disabled'))
		return false;
	var target = _this.data('target') ? _this.data('target') : 'body' ;
	
	if(_this.data('remove'))
		eval(selector(target)).removeClass(_this.data('remove'))

	if(_this.data('add'))
		eval(selector(target)).addClass(_this.data('add'))

	if(_this.data('toggle'))
		eval(selector(target)).toggleClass(_this.data('toggle'))

}

function selector(dir) {
	var sp = dir.split('->'),
	_this,
	selector = '';

	$.each(sp,function(key,val){
		if(_this){
			var brackets = val.split(/[(\)]/);
			selector = selector + "." + brackets[0] + "('" + brackets[1] + "')";
		} else{
			_this = (val == 'this' ? "_this" : "$('" + val + "')");
		}
	})

	return _this + selector;

}