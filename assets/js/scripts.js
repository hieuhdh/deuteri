// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
    $(".content").fitVids();
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
    });
});


// TOC - script
// $(function () {
//     const content = document.querySelector('.post-article');
//     scrollnav.init(content, {
//         debug: false,
//       //easingStyle: 'linear',
//         sections: ($('.post-content > h1').length>0) ? 'h1' : 'h2',
//         subSections: ($('.post-content > h1').length > 0) ? 'h2' : 'h3'
        
//     });
// });

// function sideNav(){
//     var mainRect = document.getElementById('post-content').getBoundingClientRect();
//     var oldReac = document.getElementsByClassName('scroll-nav')[0].getBoundingClientRect();
//     $('#post-content > div.content.loading > nav').css('left', mainRect.right+10+'px'); 
// }

window.onload = function() {

	var toc = document.querySelector( '.scroll-nav' );
	var tocPath = document.querySelector( '.toc-marker path' );
	var tocItems;

	// Factor of screen size that the element must cross
	// before it's considered visible
	var TOP_MARGIN = 0.1,
		BOTTOM_MARGIN = 0.2;

	var pathLength;

	var lastPathStart,
		lastPathEnd;

	window.addEventListener( 'resize', drawPath, false );
	window.addEventListener( 'scroll', sync, false );

	drawPath();

	function drawPath() {

		tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

		// Cache element references and measurements
		tocItems = tocItems.map( function( item ) {
			var anchor = item.querySelector( 'a' );
			var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

			return {
				listItem: item,
				anchor: anchor,
				target: target
			};
		} );

		// Remove missing targets
		tocItems = tocItems.filter( function( item ) {
			return !!item.target;
		} );

		var path = [];
		var pathIndent;

		tocItems.forEach( function( item, i ) {

			var x = item.anchor.offsetLeft - 5,
				y = item.anchor.offsetTop,
				height = item.anchor.offsetHeight;

			if( i === 0 ) {
				path.push( 'M', x, y, 'L', x, y + height );
				item.pathStart = 0;
			}
			else {
				// Draw an additional line when there's a change in
				// indent levels
				if( pathIndent !== x ) path.push( 'L', pathIndent, y );

				path.push( 'L', x, y );

				// Set the current path so that we can measure it
				tocPath.setAttribute( 'd', path.join( ' ' ) );
				item.pathStart = tocPath.getTotalLength() || 0;

				path.push( 'L', x, y + height );
			}

			pathIndent = x;

			tocPath.setAttribute( 'd', path.join( ' ' ) );
			item.pathEnd = tocPath.getTotalLength();

		} );

		pathLength = tocPath.getTotalLength();

		sync();

	}

	function sync() {

		var windowHeight = window.innerHeight;

		var pathStart = pathLength,
			pathEnd = 0;

		var visibleItems = 0;

		tocItems.forEach( function( item ) {

			var targetBounds = item.target.getBoundingClientRect();

			if( targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * ( 1 - BOTTOM_MARGIN ) ) {
				pathStart = Math.min( item.pathStart, pathStart );
				pathEnd = Math.max( item.pathEnd, pathEnd );

				visibleItems += 1;

				item.listItem.classList.add( 'visible' );
			}
			else {
				item.listItem.classList.remove( 'visible' );
			}

		} );

		// Specify the visible path or hide the path altogether
		// if there are no visible items
		if( visibleItems > 0 && pathStart < pathEnd ) {
			if( pathStart !== lastPathStart || pathEnd !== lastPathEnd ) {
				tocPath.setAttribute( 'stroke-dashoffset', '1' );
				tocPath.setAttribute( 'stroke-dasharray', '1, '+ pathStart +', '+ ( pathEnd - pathStart ) +', ' + pathLength );
				tocPath.setAttribute( 'opacity', 1 );
			}
		}
		else {
			tocPath.setAttribute( 'opacity', 0 );
		}

		lastPathStart = pathStart;
		lastPathEnd = pathEnd;

	}

};