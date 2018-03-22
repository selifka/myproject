/***
Project Javascript for smooth scrolling, auto closing navbar, and animation
***/

// Shows the active div your on with scroll
$('body').scrollspy({
  target: "#navbarNav", offset: 60
});   

// Smooth scrolling for js-scroll-trigger class
$(".js-scroll-trigger[href^='#']").on('click', function(e) {

  //prevent the default click behavior 
  e.preventDefault();

  //store this has for use
  var hash = this.hash;

  //animate 
  $('html, body').animate({
      scrollTop: $(hash).offset().top 
    }, 800, function(){

      //when done add hash to url
      window.location.hash = hash;
  });
});

// Closes the menu automatically when link is clicked.
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

//Revealing images and text on scroll/load 
window.sr = ScrollReveal();
  
  //Navbar
  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });

  //Banner section
  sr.reveal('.banner-greeting', {
    duration: 2000,
    origin: 'top'
  });

  sr.reveal('.banner-btn-js', {
    duration: 2000,
    delay: 600,
    origin: 'bottom'
  });
    
  //About section
  sr.reveal('.about-image', {
    duration: 2000,
    delay: 400,
    origin: 'left',
    viewFactor: 0.2
  });

  sr.reveal('.about-content', {
    duration: 2000,
    delay: 400,
    origin: 'right',
    viewFactor: 0.2
  });
  
  //Experience section
  sr.reveal('.t-right', {
    duration: 2000,
    delay: 600,
    origin: 'right',
    viewFactor: 0.7
  });

  sr.reveal('.t-left', {
    duration: 2000,
    delay: 600,
    origin: 'left',
    viewFactor: 1
  });
  
  //Skills section
  sr.reveal('.skill-1', {
    duration: 2000,
    delay: 400,
    origin: 'bottom',
    viewFactor: 0.5
  });

  sr.reveal('.skill-2', {
    duration: 2000,
    delay: 400,
    origin: 'bottom',
    viewFactor: 0.5
  });

  sr.reveal('.skill-3', {
    duration: 2000,
    delay: 400,
    origin: 'bottom',
    viewFactor: 0.5
  });

  sr.reveal('.skill-4', {
    duration: 2000,
    delay: 400,
    origin: 'bottom',
    viewFactor: 0.5
  });

  //Project section
  sr.reveal('.project-js', {
    duration: 2000,
    delay: 400,
    origin: 'bottom',
    viewFactor: 0.5
  });

//Contact social media section
  sr.reveal('.social-1', {
    duration: 2000,
    delay: 200,
    origin: 'top',
    viewFactor: 0.2
  });

  sr.reveal('.social-2', {
    duration: 2000,
    delay: 200,
    origin: 'top',
    viewFactor: 0.2
  });

  sr.reveal('.social-3', {
    duration: 2000,
    delay: 200,
    origin: 'top',
    viewFactor: 0.2
  });