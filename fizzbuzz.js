$(document).ready(function() {
	$('body').on('click', 'button', function(event) {
	
		var i = 1;

		for (i = 1; i <= 100; i++) {
			if (i % 3 === 0 && i % 5 === 0){
				$('.fizzbuzz').append("<li>Fizz Buzz</li>");
			} else if (i % 3 === 0) {
				$('.fizzbuzz').append("<li>Fizz</li>");
			} else if (i % 5 === 0) {
				$('.fizzbuzz').append("<li>Buzz</li>");
			} else {
				$('.fizzbuzz').append("<li>" + i + "</li>");
			}
		}
	})
});