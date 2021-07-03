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
new Filterizr('.filter-container');

  





    
 