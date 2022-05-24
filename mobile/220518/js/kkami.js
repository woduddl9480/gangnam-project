
$(document).ready(function(){

    /* 메인배너 */
    $('.main_banner_slide').on('init', function(event, slick) {
        $('.main_banner_counter').append('<span class="main_banner_current"></span><span class="main_banner_slash">/</span><span class="main_banner_total"></span>');
        $('.main_banner_current').text(slick.currentSlide + 1);
        $('.main_banner_total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // vertical: true,
        prevArrow: $('.main_banner_prev'), 
        nextArrow: $('.main_banner_next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.main_banner_current').text(nextSlide + 1);
    });
    /* //메인배너 */


    $('.tab_btn_area .tab_btn_ul > li').on('click', function(){
        var layer = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });

    /* 강좌별 BEST */
    $('.lecture_best ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    /* //강좌별 BEST */

    
    /* 강좌별 수강후기 */
    $('.lecture_review .review_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    /* //강좌별 수강후기 */


    /* 유명 출판사별 강의 */
    $('.famous_publisher .slide_ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
    });
    /* //유명 출판사별 강의 */

});

    