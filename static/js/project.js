/***
Project Javascript for smooth scrolling, auto closing navbar, and animation
***/
$( document ).ready(function() {

  //Hiding navbar until scroll
  $(".navbar").hide();

  $(function () {
    // body...
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
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
      }, 800, function(){

        //when done add hash to url
        window.location.hash = hash;
    });
  });

  // Closes the menu automatically when link is clicked.
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
});
