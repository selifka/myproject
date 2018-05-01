/***
Project Javascript for smooth scrolling, auto closing navbar, and animation
***/
$(document).ready(function() {
  
  document.getElementsByTagName("html")[0].style.visibility = "visible";
  
  //Hiding navbar until scroll
  $(".navbar").hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });

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
      }, 700, function(){

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

  //Banner section
  sr.reveal('.banner-img', {
  	delay: 150,
    duration: 2000,
    origin: 'top',
    distance: '60px'
  });

  sr.reveal('.banner-greeting', {
  	delay: 150,
    duration: 2000,
    scale: 0.7
  });

  sr.reveal('.banner-btn-js', {
  	delay: 150,
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
  });
    
  //Experience section
  sr.reveal('.t-right', {
    duration: 1500,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.6
  });

  sr.reveal('.t-left', {
    duration: 1500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.6
  });
  
  //Skills section
  sr.reveal('.skills-js', {
    duration: 1300,
    origin: 'bottom'
  }, 150);

  //Contact Me section
  sr.reveal('.social', {
    duration: 2000,
    origin: 'bottom',
    distance: '60px'
  });
})