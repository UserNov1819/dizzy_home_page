$(document).ready(function(){
    $('.asort__carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1143,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 927,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
     }
    ]
  });
  $(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.nav__links').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });
});