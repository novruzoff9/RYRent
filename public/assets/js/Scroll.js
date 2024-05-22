$(function () {
  $(window).on("scroll", function () {
    // //Header Scroll
    // if ($(this).scrollTop() > 50) {
    //     $('header').addClass('scrolled');
    // } else {
    //     $('header').removeClass('scrolled');
    // }
    var windowHeight = $(window).height();
    var scrollDistance = $(window).scrollTop();
    var elementTop = $(".advantage").offset().top;

    if (scrollDistance + windowHeight - 150 >= elementTop) {
      $(".advantage").addClass("show");
    } else {
      $(".advantage").removeClass("show");
    }
  });
});
