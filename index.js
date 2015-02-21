// works
// var jQ = window.jQuery;

(function(window, document, undefined) {
	// doesn't work
	var jQ = window.jQuery;

	jQ(document).on('ready', function() {
		alert('works');
	});
})(window, document);