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
        $(this).toggleClass('active').siblings().removeClass('active');
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

        $('.slide_counter ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });


    $('.korean_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(0).append('<span class="korean_best_current"></span><span class="korean_best_slash">/</span><span class="korean_best_total"></span>');
        $('.korean_best_current').text(slick.currentSlide + 1);
        $('.korean_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.korean_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    
    $('.english_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(1).append('<span class="english_best_current"></span><span class="english_best_slash">/</span><span class="english_best_total"></span>');
        $('.english_best_current').text(slick.currentSlide + 1);
        $('.english_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.english_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    
    $('.math_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(2).append('<span class="math_best_current"></span><span class="math_best_slash">/</span><span class="math_best_total"></span>');
        $('.math_best_current').text(slick.currentSlide + 1);
        $('.math_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.math_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    
    $('.society_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(3).append('<span class="society_best_current"></span><span class="society_best_slash">/</span><span class="society_best_total"></span>');
        $('.society_best_current').text(slick.currentSlide + 1);
        $('.society_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.society_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    
    $('.science_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(4).append('<span class="science_best_current"></span><span class="science_best_slash">/</span><span class="science_best_total"></span>');
        $('.science_best_current').text(slick.currentSlide + 1);
        $('.science_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.science_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    
    
    $('.new_best ul').on('init', function(event, slick) {
        $('.slide_counter ul li').eq(5).append('<span class="new_best_current"></span><span class="new_best_slash">/</span><span class="new_best_total"></span>');
        $('.new_best_current').text(slick.currentSlide + 1);
        $('.new_best_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.new_best_current').text(nextSlide + 1);
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });


    $('.korean_review .review_slide').on('init', function(event, slick) {
        $('.korean_review .slide_counter').append('<span class="korean_review_current"></span><span class="korean_review_slash">/</span><span class="korean_review_total"></span>');
        $('.korean_review_current').text(slick.currentSlide + 1);
        $('.korean_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.korean_review_current').text(nextSlide + 1);
    });
    $('.english_review .review_slide').on('init', function(event, slick) {
        $('.english_review .slide_counter').append('<span class="english_review_current"></span><span class="english_review_slash">/</span><span class="english_review_total"></span>');
        $('.english_review_current').text(slick.currentSlide + 1);
        $('.english_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.english_review_current').text(nextSlide + 1);
    });
    $('.math_review .review_slide').on('init', function(event, slick) {
        $('.math_review .slide_counter').append('<span class="math_review_current"></span><span class="math_review_slash">/</span><span class="math_review_total"></span>');
        $('.math_review_current').text(slick.currentSlide + 1);
        $('.math_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.math_review_current').text(nextSlide + 1);
    });
    $('.society_review .review_slide').on('init', function(event, slick) {
        $('.society_review .slide_counter').append('<span class="society_review_current"></span><span class="society_review_slash">/</span><span class="society_review_total"></span>');
        $('.society_review_current').text(slick.currentSlide + 1);
        $('.society_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.society_review_current').text(nextSlide + 1);
    });
    $('.science_review .review_slide').on('init', function(event, slick) {
        $('.science_review .slide_counter').append('<span class="science_review_current"></span><span class="science_review_slash">/</span><span class="science_review_total"></span>');
        $('.science_review_current').text(slick.currentSlide + 1);
        $('.science_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.science_review_current').text(nextSlide + 1);
    });


    $('.new_review .review_slide').on('init', function(event, slick) {
        $('.new_review .slide_counter').append('<span class="new_review_current"></span><span class="new_review_slash">/</span><span class="new_review_total"></span>');
        $('.new_review_current').text(slick.currentSlide + 1);
        $('.new_review_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.new_review_current').text(nextSlide + 1);
    });








    $('.famous_publisher .slide_ul').on('init', function(event, slick) {
        $('.famous_publisher .slide_counter').append('<span class="famous_publisher_current"></span><span class="famous_publisher_slash">/</span><span class="famous_publisher_total"></span>');
        $('.famous_publisher_current').text(slick.currentSlide + 1);
        $('.famous_publisher_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.famous_publisher_current').text(nextSlide + 1);
    });


    
    $('.onepick_area .onepick_mcontent ul').on('init', function(event, slick) {
        $('.onepick_area .slide_counter').prepend('<span class="onepick_mcontent_current"></span><span class="onepick_mcontent_slash">/</span><span class="onepick_mcontent_total"></span>');
        $('.onepick_area .onepick_mcontent_current').text(slick.currentSlide + 1);
        $('.onepick_area .onepick_mcontent_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.onepick_area .onepick_mcontent_current').text(nextSlide + 1);
    });


    $('.mentoring_mcontent ul').on('init', function(event, slick) {
        $('.mentoring_area .slide_counter').prepend('<span class="mentoring_mcontent_current"></span><span class="mentoring_mcontent_slash">/</span><span class="mentoring_mcontent_total"></span>');
        $('.mentoring_area .mentoring_mcontent_current').text(slick.currentSlide + 1);
        $('.mentoring_area .mentoring_mcontent_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.mentoring_area .mentoring_mcontent_current').text(nextSlide + 1);
    });
    



    
    $('.promotion_area .promotion_slide').on('init', function(event, slick) {
        $('.promotion_area .slide_counter').prepend('<span class="promotion_event_current"></span><span class="promotion_event_slash">/</span><span class="promotion_event_total"></span>');
        $('.promotion_area .promotion_event_current').text(slick.currentSlide + 1);
        $('.promotion_area .promotion_event_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.promotion_area .promotion_event_current').text(nextSlide + 1);
    });



    $('.event_area .event_slide').on('init', function(event, slick) {
        $('.event_area .slide_counter').prepend('<span class="event_current"></span><span class="event_slash">/</span><span class="event_total"></span>');
        $('.event_area .event_current').text(slick.currentSlide + 1);
        $('.event_area .event_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.event_area .event_current').text(nextSlide + 1);
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

    