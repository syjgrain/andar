$(document).ready(function(){
  const win_w = $(window).width();
    
  $(window).on('resize', function(){
      win_w = $(this).width();
  });
  

  $('.gnb_1>li').on('mouseenter', function(){    
        $(this).addClass('on');

});


$('.gnb_1>li').on('mouseleave', function(){

        $(this).removeClass('on');

});


    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".toggle_gnb").toggleClass('on');
    });

$(".toggle_gnb .navbar > li").on('click', function(){
      $('.navbar .sub_gnb').slideUp();
      $(this).find('.sub_gnb').stop().slideToggle();
});
    const $grid = $('.best_con').isotope({
      itemSelector: '.best_con>li',
      layoutMode: 'fitRows',
    });


    // bind filter button click
    $('.btn_set>li').on( 'click', function() {
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

  });