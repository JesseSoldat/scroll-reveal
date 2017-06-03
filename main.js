window.sr = ScrollReveal();

sr.reveal('.navbar', {
	duration: 2000,
	origin: 'bottom'
});
sr.reveal('.hinata', {
	duration: 1500,
	origin: 'left',
	delay: 1000,
	distance: '300px'
});
sr.reveal('.neji', {
	duration: 1500,
	origin: 'right',
	delay: 2000,
	distance: '300px'
});

sr.reveal('.hyuga', {
	duration: 3000,
	origin: 'bottom',
	delay: 3000,
	distance: '300px',
	// viewFactor: 0.2
});

sr.reveal('.sasuke', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});


sr.reveal('.itachi', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '300px'
});

sr.reveal('.mangekyou', {
	duration: 3000,
	origin: 'bottom',
	delay: 2000,
	distance: '300px',
	// viewFactor: 0.2
});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});