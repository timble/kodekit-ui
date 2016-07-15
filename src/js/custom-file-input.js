/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

( function ( document, window, index )
{
	var inputs = document.querySelectorAll('.k-js-file-input');
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener('change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector('.k-file-input__files').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Add class for drop hover
		input.ondragover = function(ev) { this.classList.add('has-drop-focus'); };
		input.ondragleave = function(ev) { this.classList.remove('has-drop-focus'); };
		input.ondragend = function(ev) { this.classList.remove('has-drop-focus'); };
		input.ondrop = function(ev) { this.classList.remove('has-drop-focus'); };

		// Firefox bug fix
		input.addEventListener('focus', function(){ input.classList.add('has-focus'); });
		input.addEventListener('blur', function(){ input.classList.remove('has-focus'); });
	});
}( document, window, 0 ));
