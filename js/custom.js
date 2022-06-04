$(function(){
// banner slider
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    fade:true,
    speed:1500,
    autoplaySpeed: 3000,
  });
  
// banner slider
$('.portfolio-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  fade:false,
  speed: 1500,
  autoplaySpeed: 2000,
});

  //venobox 
  $('.venobox').venobox(); 
    //scroll
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling  > 200) {
          $('.back-to-top').fadeIn(500);
      } 
      else{
          $('.back-to-top').fadeOut(500);
      }
      if (scrolling > 100){
          $('.navbar').addClass ('bg');
      }
      else{
          $('.navbar').removeClass ('bg');
      }
  });

});
