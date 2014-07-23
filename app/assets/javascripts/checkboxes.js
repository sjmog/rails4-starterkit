var check = function(el) {
	var $el = $(el);
	var $input = $("#" + $el.attr('data-checkbox-id'));
	console.log($input);
	$el.toggleClass('checked');
	$input.click();
};