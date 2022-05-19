
$(document).ready(function(){
    $('.openLayer ul li').on('click', function(){
        var layer = $(this).attr('data-open');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    $('.banner_play_stop button').on('click', function(){
        $(this).removeClass('active').siblings().addClass('active');
    });

    $('.tab_btn_area .tab_right > ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });


    /* 메인 배너 */
    $('.main_slider_for').on('init', function(event, slick) {
        $('.main_counter').append('<span class="main_current"></span><span class="main_slash">/</span><span class="main_total"></span>');
        $('.main_current').text(slick.currentSlide + 1);
        $('.main_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // vertical: true,
        prevArrow: $('.main_prev'), 
        nextArrow: $('.main_next'),
        asNavFor: '.main_slider_nav'
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.main_current').text(nextSlide + 1);
    });

    $('.main_slider_nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.main_slider_for',
        vertical: true,
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    /* //메인 배너 */

    
    /* 국어 수강후기 */
    $('.korean_review').on('init', function(event, slick) {
        $('.korean_counter').append('<span class="korean_current"></span><span class="korean_slash">/</span><span class="korean_total"></span>');
        $('.korean_current').text(slick.currentSlide + 1);
        $('.korean_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.korean_prev'), 
        nextArrow: $('.korean_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.korean_current').text(nextSlide + 1);
    });
    /* //국어 수강후기 */

});

    