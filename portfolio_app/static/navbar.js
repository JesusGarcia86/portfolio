$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll >= 670 && scroll < 1100) {
      $("#about_nav").css("background-color", "white");
    }
    else {
      $("#about_nav").css("background-color", "");
    }
    if (scroll >= 1100 && scroll < 4500) {
      $("#portfolio_nav").css("background-color", "white");
    }
    else {
      $("#portfolio_nav").css("background-color", "");
    }
    if (scroll >= 4500) {
      $("#contact_nav").css("background-color", "white");
    }
    else {
      $("#contact_nav").css("background-color", "");
    }
  });
  