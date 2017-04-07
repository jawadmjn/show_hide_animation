$(document).ready(function () {

  $(".show_hide").click(function (event) {

    // By using preventDefault we can avoid # symbol in our url.
    event.preventDefault();

    // Using this clickedHeadline variable to play with classes and make code dynamic.
    var clickedHeadline = $(this);
    clickedHeadline.next().slideToggle("slow", function () {
      
      // On Animation complete add or remove calss for the right one arrow.
      if (clickedHeadline.hasClass("opened")) {
        clickedHeadline.removeClass("opened");
        // Hide the content of open div/p.
        $(this).animate({
          left: "-100%",
        }, 100);
      }
      else {
        clickedHeadline.addClass("opened");
        // Bring the content of open div/p to the right position.
        $(this).animate({
          left: "0%",
        }, 500);
      }
      
    });
  });

});