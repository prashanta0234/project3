$(function()
{
    var mmm=$(".menu").offset().top;
    $(window).on("scroll" ,function()
    {
        var winscroll=$(window).scrollTop();

       if(winscroll>mmm)
       {
           $('.menu').addClass('fixed')
       }else{
        $('.menu').removeClass('fixed')
       
       }
       if(winscroll>300){
           $('.topButton').addClass('xyz')
       }else{
           $('.topButton').removeClass('xyz')
       }
       
        
       

    })

    $('.topButton').on("click" , function()
    {
        $('html,body').animate({
            scrollTop:0
        })
    })

    $(window).ready(function() {
        $('.pre').fadeOut();
     });
})
