$(document).ready(function () {
  $(".header__menu__item").click(function () {
    $(".header__menu__item").removeClass("active");
    $(this).addClass("active");
  });
  $(".category").focus(function () {
    $(".category").removeClass("category--selected");
    $(this).addClass("category--selected");
  });
});

$(window).on("scroll", function () {
  var pos = $(window).scrollTop();
  var pos2 = pos + 50;
  var scrollBottom = pos + $(window).height();

  // Link Highlighting
  highlightLink("home");
  if (pos2 > $("#about").offset().top) {
    highlightLink("about");
  }
  if (pos2 > $("#skill").offset().top) {
    highlightLink("skill");
  }
  if (pos2 > $("#work").offset().top) {
    highlightLink("work");
  }
  if (pos2 > $("#testimonial").offset().top) {
    highlightLink("testimonial");
  }
  if (
    pos2 > $("#contact").offset().top ||
    pos + $(window).height() === $(document).height()
  ) {
    highlightLink("contact");
  }
});

function highlightLink(anchor) {
  $("nav .active").removeClass("active");
  $("nav")
    .find('[href="#' + anchor + '"]')
    .addClass("active");
}
