$(document).ready(function(){
   changeBackground(); 
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    changeBackground();
})

function changeBackground() {
    let navHeight = $('#main-nav').outerHeight();
    let currentPosition = $(window).scrollTop();
    
    if(currentPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
            
        } else {
            $('#main-nav').removeClass('scrolled')
        }
    
}