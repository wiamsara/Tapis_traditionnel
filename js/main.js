$(function(){
    
    'use strict';
/* Adjust height slider*/ 
    var windowheight = $(window).height(),

        upperH       = $('.upper-bar').innerHeight(),
        
        navH         = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(windowheight-(upperH + navH));

/*Featured work shuffle image */   
    $('.feature-work ul li').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {

            $('.shuffle-imgs .col-sm').css('opacity', 1);

        }

        else {

            $('.shuffle-imgs .col-sm').css('opacity', .09);

            $($(this).data('class')).parents().css('opacity', 1);

        }
    });
});

$(document).ready(function(){

    $(window).scroll(function(){

        if($(this).scrollTop() > 40) {

            $('#scrollBtn').fadeIn();

        }

        else {

            $('#scrollBtn').fadeOut();

        }

    });




    $('#scrollBtn').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
});