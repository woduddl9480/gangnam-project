
$(document).ready(function(){
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


    /* 영어 수강후기 */
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
    /* //영어 수강후기 */

    
    /* 수학 수강후기 */
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
    /* //수학 수강후기 */

    
    /* 사회 수강후기 */
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
    /* //사회 수강후기 */

    
    /* 과학 수강후기 */
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
    /* //과학 수강후기 */


    /* 유명출판사별 강의 */
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


    

    /* //유명출판사별 강의 */


});

    