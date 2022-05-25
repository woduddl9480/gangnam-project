$(document).ready(function(){

    $('.header_renewal .hamburger button').on('click', function(){
        $('.header_renewal .header_gnb').addClass('active');
    });
    $('.header_renewal .txt_info button').on('click', function(){
        $('.header_renewal .header_gnb').removeClass('active');
    });
    for(let i = 0; i < $('.header_gnb .depth01 > li').length; i++ ) {
        if ($('.header_gnb .depth01 > li').eq(i).find('.depth02').length === 0) {
            $('.header_gnb .depth01 > li').eq(i).find('a').css('background', 'none');
        }
    }
    $('.header_gnb .depth01 > li').on('click', function(){
        $(this).toggleClass('active');
    });
    $('.main_banner_slide').on('init', function(event, slick) {
        $('.main_banner_counter').append('<span class="main_banner_current"></span><span class="main_banner_slash">/</span><span class="main_banner_total"></span>');
        $('.main_banner_current').text(slick.currentSlide + 1);
        $('.main_banner_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        // vertical: true,
        prevArrow: $('.main_banner_prev'), 
        nextArrow: $('.main_banner_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.main_banner_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });
    $('.lecture_best ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.lecture_review .review_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.famous_publisher .slide_ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.onepick_mcontent ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.mentoring_mcontent ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.promotion_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.event_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    $('.notice_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        autoplay: true,
        // centerMode: true,
    });
});

    