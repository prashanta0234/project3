$(function(){

  $('#banner_part').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass:'banner_dots',
    });


$('.counter').counterUp({
    delay: 10,
    time: 1000
});


    // filterize js
    var filterizd = $('.filtr-container').filterizr();
  
        $(".work_filter ul li").on('click',function(){
          $(".work_filter ul li").removeClass('active');
          $(this).addClass('active');
        });

          $('#bar1').barfiller();
          $('#bar2').barfiller();
          $('#bar3').barfiller();
          $('#bar4').barfiller();

});
