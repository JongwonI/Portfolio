$(document).ready(function(){
    var gnbli = $('.gnb').find('li')
    var utilli = $('.util_tab').find('li')
    var nli = $('.notice_title').find('li')
    var tslide1 = 0;
    var $friend = $('.footer_top').find('li:last-child');
    function topslide(){
        $('.pop_wrap').animate({'marginTop':'-100px'},300,function(){
        $('.pop_wrap').find('li:first-child').appendTo('.pop_wrap')
        $('.pop_wrap').css({'marginTop':'-50px'})
        })
    };
    function run_topslide(){
        tslide1 = window.setInterval(topslide,2500);
    }
    run_topslide();
    gnbli.on(
        'mouseenter',function(){
            gnbli.each(function(index){
                $(this).attr('data-index',index)
            });
            var index1 = $(this).attr('data-index')
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
            $('.g'+parseInt(index1)).stop(true).fadeIn(0);
            $(this).find('.gbox').fadeIn(0);
        });
    $('#header').on(
        'mouseleave',function(){
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
        });
    $('.header').on(
        'mouseenter',function(){
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
        });
    utilli.on(
        'click',function(){
            utilli.each(function(index){
                $(this).attr('data-index',index);
            });
            var index2 = $(this).attr('data-index');
            $('.util').stop(true).animate({
                'left':-1200*index2
            });
            utilli.removeClass('util_here')
            $(this).addClass('util_here')
        });
    $('.pop_wrap').on(
        'mouseenter',function(){
            window.clearInterval(tslide1);
        }).on(
            'mouseleave',function(){
                run_topslide();
            });
    $('.sns_wrap').find('li').on(
        'mouseenter',function(){
            $('.sns_wrap').find('li').find('a').find('img:nth-child(1)').fadeIn(0);
            $('.sns_wrap').find('li').find('a').find('img:nth-child(2)').fadeOut(0);
            $('.sns_wrap').find('li').find('a').find('p').animate({'color':'#999'},0);
            $(this).find('a').find('img:nth-child(1)').fadeOut(0);
            $(this).find('a').find('img:nth-child(2)').fadeIn(0);
            $(this).find('a').find('p').animate({'color':'#213b77'},0);
        }).on(
            'mouseleave',function(){
                $('.sns_wrap').find('li').find('a').find('img:nth-child(1)').fadeIn(0);
                $('.sns_wrap').find('li').find('a').find('img:nth-child(2)').fadeOut(0);
                $('.sns_wrap').find('li').find('a').find('p').animate({'color':'#999'},0);
            });
    nli.on(
        'click',function(){
            nli.each(function(index){
                $(this).attr('data-index',index);
            });
            var index3 = $(this).attr('data-index');
            // var $index = parseInt(index3);
            nli.removeClass('n_here');
            $(this).addClass('n_here');
            $('.ntxt_wrap').fadeOut(0);
            $('.n'+index3).fadeIn(0);
        });
    $('.open_button').on(
        'click',function(){
            // $('.oneicon2').slideDown(300);
            // $(this).fadeOut(300);
            $(this).toggleClass('open123')
            if($(this).hasClass('open123')){
                $('.oneicon2').slideDown(300);
                $(this).stop(true).animate({'rotate':'180deg'},100)
            }else{
                $('.oneicon2').slideUp(300);
                $(this).stop(true).animate({'rotate':'360deg'},100)
            }
        });
    $friend.on(
        'click',function(){
            $(this).toggleClass('open1')
            if($(this).hasClass('open1')){
                $('.friendsite').fadeIn(0);
            }else{
                $('.friendsite').fadeOut(0);
            }
        });
    $('#popup').on(
        'click',function(){
            $(this).fadeOut(300);
        });
});
