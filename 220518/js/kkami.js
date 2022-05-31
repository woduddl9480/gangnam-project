
$(document).ready(function(){
    $('.gnb_area .depth01 > li').on('mouseover', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.gnb_area .depth02, .depth01').on('mouseout', function(){
        $('.gnb_area .depth01 > li').removeClass('active');
    });
    $('.openLayer ul li').on('click', function(){
        var layer = $(this).attr('data-open');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });
    $('.banner_play_stop button').on('click', function(){
        $(this).removeClass('active').siblings().addClass('active');
    });
    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });
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
        autoplay: true,
        autoplaySpeed: 5000,
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
    $('.main_stop').click(function(){
        $('.main_slider_for').slick('slickPlay');
    });
     
    $('.main_play').click(function(){
        $('.main_slider_for').slick('slickPause');
    });

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
    $('.english_review').on('init', function(event, slick) {
        $('.english_counter').append('<span class="english_current"></span><span class="english_slash">/</span><span class="english_total"></span>');
        $('.english_current').text(slick.currentSlide + 1);
        $('.english_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.english_prev'), 
        nextArrow: $('.english_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.english_current').text(nextSlide + 1);
    });
    $('.math_review').on('init', function(event, slick) {
        $('.math_counter').append('<span class="math_current"></span><span class="math_slash">/</span><span class="math_total"></span>');
        $('.math_current').text(slick.currentSlide + 1);
        $('.math_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.math_prev'), 
        nextArrow: $('.math_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.math_current').text(nextSlide + 1);
    });
    $('.society_review').on('init', function(event, slick) {
        $('.society_counter').append('<span class="society_current"></span><span class="society_slash">/</span><span class="society_total"></span>');
        $('.society_current').text(slick.currentSlide + 1);
        $('.society_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.society_prev'), 
        nextArrow: $('.society_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.society_current').text(nextSlide + 1);
    });
    $('.science_review').on('init', function(event, slick) {
        $('.science_counter').append('<span class="science_current"></span><span class="science_slash">/</span><span class="science_total"></span>');
        $('.science_current').text(slick.currentSlide + 1);
        $('.science_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.science_prev'), 
        nextArrow: $('.science_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.science_current').text(nextSlide + 1);
    });
    $('.famous_publisher_slide').on('init', function(event, slick) {
        $('.famous_publisher_counter').append('<span class="famous_publisher_current"></span><span class="famous_publisher_slash">/</span><span class="famous_publisher_total"></span>');
        // alert(slick.currentSlide + 1 * 4);
        $('.famous_publisher_current').text( slick.currentSlide + 1);
        $('.famous_publisher_total').text(Math.ceil(slick.slideCount / 4));
        
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        // vertical: true,
        prevArrow: $('.famous_publisher_prev'), 
        nextArrow: $('.famous_publisher_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.famous_publisher_current').text(nextSlide / 4 + 1);
    });


    $('.onepick_promotion_slide').on('init', function(event, slick) {
        $('.onepick_promotion_counter').append('<span class="onepick_promotion_current"></span><span class="onepick_promotion_slash">/</span><span class="onepick_promotion_total"></span>');
        // alert(slick.currentSlide + 1 * 4);
        $('.onepick_promotion_current').text( slick.currentSlide + 1);
        $('.onepick_promotion_total').text(Math.ceil(slick.slideCount / 3));
        
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        // vertical: true,
        prevArrow: $('.onepick_promotion_prev'), 
        nextArrow: $('.onepick_promotion_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.onepick_promotion_current').text(nextSlide / 3 + 1);
    });
    $('.promotion_slide').on('init', function(event, slick) {
        $('.promotion_counter').append('<span class="promotion_current"></span><span class="promotion_slash">/</span><span class="promotion_total"></span>');
        // alert(slick.currentSlide + 1 * 4);
        $('.promotion_current').text( slick.currentSlide + 1);
        $('.promotion_total').text(Math.ceil(slick.slideCount));
        
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.promotion_prev'), 
        nextArrow: $('.promotion_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.promotion_current').text(nextSlide + 1);
    });
    $('.mentoring_event_slide').on('init', function(event, slick) {
        $('.mentoring_event_counter').append('<span class="mentoring_event_current"></span><span class="mentoring_event_slash">/</span><span class="mentoring_event_total"></span>');
        // alert(slick.currentSlide + 1 * 4);
        $('.mentoring_event_current').text( slick.currentSlide + 1);
        $('.mentoring_event_total').text(Math.ceil(slick.slideCount / 3));
        
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        // vertical: true,
        prevArrow: $('.mentoring_event_prev'), 
        nextArrow: $('.mentoring_event_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.mentoring_event_current').text(nextSlide / 3 + 1);
    });
    $('.event_slide').on('init', function(event, slick) {
        $('.event_counter').append('<span class="event_current"></span><span class="event_slash">/</span><span class="event_total"></span>');
        // alert(slick.currentSlide + 1 * 4);
        $('.event_current').text( slick.currentSlide + 1);
        $('.event_total').text(Math.ceil(slick.slideCount));
        
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.event_prev'), 
        nextArrow: $('.event_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.event_current').text(nextSlide + 1);
    });
    $('.notice_slide').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

    