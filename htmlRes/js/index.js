/* tab */

function tabMenu(tName){
    $(tName+ '> li > .list_dep_02:gt(0)').hide();
     $(tName+ '> li:nth-of-type(1) > p > a').addClass('active');
  
    /* depth 01 */
     $(tName+ '> li > p > a').on('click',function(e){
       e.preventDefault();
       $(tName+ '> li > p > a.active').removeClass('active');
       $(this).addClass('active');
       $(tName+ '> li > .list_dep_02').hide();
       $(this).parents(tName+ '> li').find('.list_dep_02').show();
  
     });
  
  }
  function tabMenu20(tName){
    $(tName+ '> li .js_tab_content:gt(0)').hide();
     $(tName+ '> li:nth-of-type(1)').addClass('active');
  
    /* depth 01 */
     $(tName+ '> li .js_tab_btn').on('click',function(e){
       e.preventDefault();
       $(tName+ '> li.active').removeClass('active');
       $(this).parents('li').addClass('active');
       $(tName+ '> li .js_tab_content').hide();
       $(this).parents(tName+ '> li').find('.js_tab_content').show();
  
     });
  
  }
  function tabMenu_depth02(tName){
    /* depth 02 */
     $(tName+ '> li > .list_dep_03').hide();
     $(tName+ '> li:nth-of-type(1) > .list_dep_03').show();
     $(tName+ '> li:nth-of-type(1) > p > a').addClass('active');
  
      $(tName+ ' > li > p > a').on('click',function(e){
        e.preventDefault();
        $(this).parents('.list_dep_02').find('a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents(tName).find('.list_dep_03').hide();
        $(this).parents('.dep_02_li').find('.list_dep_03').show();
      });
  
  }
  
  $(document).ready(function(){
  
  
  /* slide */
    $('.ban_list.no01').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      cssEase: 'ease-out',
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: "<button type='button' class='slick-prev slide_s'></button>",
      nextArrow: "<button type='button' class='slick-next slide_s'></button>"
    });
    /*$('.ban_list.no03').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      cssEase: 'ease-out',
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: "<button type='button' class='slick-prev slide_s'></button>",
      nextArrow: "<button type='button' class='slick-next slide_s'></button>"
    });*/
    $('.info_ban_area > ul').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      prevArrow: "<button type='button' class='slick-prev slide_s'></button>",
      nextArrow: "<button type='button' class='slick-next slide_s'></button>"
    });
    $('.mid_ban > ul').slick({
      dots: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 1,
      cssEase: 'ease-out',
      prevArrow: "<button type='button' class='slick-prev slide_s'></button>",
      nextArrow: "<button type='button' class='slick-next slide_s'></button>"
    });
  
     $('.ban_list.no02_nav li a').on('click',function(e){
         e.preventDefault();
     });
    $('.ban_list.no02').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       autoplay: true,
       autoplaySpeed: 4000,
       fade: true,
       asNavFor: '.ban_list.no02_nav'
    });
    $('.slick-prev.no02').on('click', function(e) {
        e.preventDefault();
        $('.ban_list.no02').slick('slickPrev');
    });
    $('.slick-next.no02').on('click', function(e) {
        e.preventDefault();
        $('.ban_list.no02').slick('slickNext');
    });
    $('.ban_list.no02_nav').slick({
       slidesToShow: 5,
       slidesToScroll: 1,
       asNavFor: '.ban_list.no02',
       dots: false,
       focusOnSelect: true,
       arrows:false
     /*  prevArrow: "<button type='button' class='slick-prev top_wide'></button>",
       nextArrow: "<button type='button' class='slick-next top_wide'></button>"*/
    });
    
    
    $('.pub_list').slick({
      dots: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: 'ease-out',
      prevArrow: "<button type='button' class='slick-prev slide_s'></button>",
          nextArrow: "<button type='button' class='slick-next slide_s'></button>"
    });
  
    /* tabs */
  
    tabMenu20('.pick_lecture');
    tabMenu('.best_lecture');
    tabMenu('.book_list');
    tabMenu_depth02('.list_dep_02');
  
  /* depth 01 */
  
  $('.tab_dep01 > ul > li:nth-of-type(1) > a').addClass('active');
  $('.tab_content_dep01').eq(0).addClass('active');
  
  $('.tab_dep01 > ul > li > a').on('click',function(e){
      e.preventDefault();
      var num=$(this).parent('li').index();
      $('.tab_content_dep01.active').removeClass('active');
      $('.tab_content_dep01').eq(num).addClass('active');
      $('.tab_dep01 > ul > li > a.active').removeClass('active');
      $(this).addClass('active');
  
  });
  
  /* depth 02 */
    $('.tab_dep02 > ul > li:nth-of-type(1)').addClass('active');
    $('.tab_dep02 > ul > li:nth-of-type(5)').addClass('active');
    $('.tab_content_dep02').eq(0).addClass('active');
    $('.tab_content_dep02').eq(4).addClass('active');
  
    $('.tab_dep02 > ul > li > a').on('click',function(e){
        e.preventDefault();
        var num=$(this).parent('li').index();
        $(this).parents('.tab_content_dep01').find('.tab_content_dep02.active').removeClass('active');
        $(this).parents('.tab_content_dep01').find('.tab_content_dep02').eq(num).addClass('active');
        $(this).parents('.tab_content_dep01').find('.tab_dep02 > ul > li.active').removeClass('active');
        $(this).parent('li').addClass('active');
  
    });
  
    /* depth 03 */
  $('.list_subject > ul > li:nth-of-type(1) > a').addClass('active');
  $('.tab_content_dep03:eq(0),.tab_content_dep03:eq(5),.tab_content_dep03:eq(10),.tab_content_dep03:eq(15)').addClass('active');
  $('.tab_content_dep03:eq(20),.tab_content_dep03:eq(25),.tab_content_dep03:eq(30),.tab_content_dep03:eq(35)').addClass('active');
  
  
  $('.list_subject > ul > li > a').on('click',function(e){
      e.preventDefault();
      var num=$(this).parent('li').index();
      $(this).parents('.tab_content_dep02').find('.tab_content_dep03.active').removeClass('active');
      $(this).parents('.tab_content_dep02').find('.tab_content_dep03').eq(num).addClass('active');
      $(this).parents('.tab_content_dep02').find('.list_subject > ul > li > a.active').removeClass('active');
      $(this).addClass('active');
  
  });
  
  
  $('.find_lec').on('click',function(){
    $('.layer_lecture').addClass('active');
    $('.mask').addClass('active');
  
  });
  $('.btn_cl').on('click',function(){
    $('.layer_lecture').removeClass('active');
    $('.mask').removeClass('active');
  
  });
  
  $('.layer_lecture > ul > li:nth-of-type(1) > a').addClass('on');
  $('.item').eq(0).addClass('on');
  
  $('.layer_lecture > ul > li > a').on('click',function(e){
      e.preventDefault();
      var num=$(this).parent('li').index();
      $('.item.on').removeClass('on');
      $('.item').eq(num).addClass('on');
      $('.layer_lecture > ul > li > a.on').removeClass('on');
      $(this).addClass('on');
  
  });
  
  $('.srh_typebox > li > a, .srh_tchlist > li > a').on('click',function(e){
      $(this).parents('.srh_typebox, .srh_tchlist').find('a.on').removeClass('on');
      $(this).addClass('on');
  
  });
  
  });