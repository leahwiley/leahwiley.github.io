/*   https://github.com/briancribb/mobile-tester */
(function(){ return false;

var timeoutID,
	pageCanScroll = true;

// Add page listeners
/*
document.ontouchmove = function (event){
		// Can cancelwith: event.preventDefault()
		console.log(event);
		if (!pageCanScroll) {
			if ( !($(event.srcElement).closest('.scroll-test')[0]) ) {
				console.log('1. ontouchmove returning false.');
				event.preventDefault();
				return false;
			} else {
				console.log('2. ontouchmove returning true.');
			}
		} else {
			console.log('3. ontouchmove returning true.');
		}
}
*/

$("body").on({
	ontouchmove: function(event) {
		// Can cancelwith: event.preventDefault()
		console.log(event);
		if (!pageCanScroll) {
			if ( !($(event.srcElement).closest('.scroll-test')[0]) ) {
				console.log('1. ontouchmove returning false.');
				event.preventDefault();
				return false;
			} else {
				console.log('2. ontouchmove returning true.');
			}
		} else {
			console.log('3. ontouchmove returning true.');
		}
	}
});

$("#test-button").on({
	mouseenter: function(event) {
		event.preventDefault();
		// Handle mouseenter...
		setParagraph('#event-desc', event.type);
	},
	mouseleave: function(event) {
		event.preventDefault();
		// Handle mouseleave...
		setParagraph('#event-desc', event.type);
	},
	click: function(event) {
		event.preventDefault();
		pageCanScroll = !pageCanScroll;

		if (pageCanScroll) {
			// Currently can scroll the body, so stop that. Only scroll in the target section.
			$('body').addClass('webkit-scroll-touch');
		} else {
			// Currently only scrolling in the target section. Release the body tag.
			$('body').removeClass('webkit-scroll-touch');
		}

		setParagraph('#event-desc', ('pageCanScroll = ' + pageCanScroll.toString()) );
	}
});






// Functions

// Sets the text inside something.
function setParagraph(selector, text){
	$(selector).html(text);
	//delayedClearText();
}

function delayedClearText() {
	timeoutID = window.setTimeout( function(){
		console.log('delayedClearText()');
		setParagraph('#event-desc', '');
		clearInterval(timeoutID);
	}, 2000);
}

function scrollPage() {
	$('html, body').stop().animate(
		{
			scrollTop: 500
		},
		'fast',
		'swing',
		function(){
			setParagraph('#event-desc', 'Done scrolling.');
		}
	);
}

}());
