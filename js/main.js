$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    infinite: true,
    
    dots:true,
    autoplaySpeed: 3000,
    prevArrow:'<i class="fas fa-long-arrow-alt-left arrow"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right arrow"></i>',
    dotsClass:'item_dots'
    
  });
  $('.number_counter').counterUp({
    delay: 5,
    time: 500
});
  var filterizd = $('.filtr-container').filterizr();
  
  $(".work_filter ul li").on('click',function(){
  $(".work_filter ul li").removeClass('active');
  $(this).addClass('active');
    });

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();



  





    
 