$(function() {
	// on nav-item click
	$('.nav-item').on('click', function() {
		// get the kind
		var kind = $(this).data('kind');
			splitKind = kind.split('-');
			lowerKind = kind.toLowerCase();
		// get the page stuff
		$.get('../examples/' + kind + '.html', function(data) {
			$('.result').html(data);
			document.title = 'DNA - ' + splitKind[1];
		});
	});
});