
$(document).ready(function(){
    $('.openLayer ul li').on('click', function(){
        var layer = $(this).find('button').attr('data-open');
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + layer).addClass('active').siblings().removeClass('active');
    });
});

    