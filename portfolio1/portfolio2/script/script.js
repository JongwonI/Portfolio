$(document).ready(function(){
    $('.menu>li:nth-child(1)').on(
    'click',function(){
        $('.notice_popup').fadeIn(200);
    }).on(
        'click',function(){
            $('.menu_popup').fadeOut(0);
        })
    $('.notice_img').on(
        'mouseover',function(){
            $('.notice_img').nextAll().stop(true).fadeOut(200);
            $(this).nextAll().stop(true).fadeIn(200);
        });
    $('.menu>li:nth-child(2)').on(
        'click',function(){
            $('.menu_popup').fadeIn(200);
        }).on(
            'click',function(){
                $('.notice_popup').fadeOut(0);
            })
    $('.sns').find('li:nth-child(1)').on(
        'mouseenter',function(){
            $(this).find('a').find('img').attr('src','images/icon_logo/kakaohover.png')
        }).on(
            'mouseleave',function(){
                $(this).find('a').find('img').attr('src','images/icon_logo/kakaotalk.png')
            });
    $('.sns').find('li:nth-child(2)').on(
        'mouseenter',function(){
            $(this).find('a').find('img').attr('src','images/icon_logo/instahover.png')
        }).on(
            'mouseleave',function(){
                $(this).find('a').find('img').attr('src','images/icon_logo/instagram.png')
            });
    $('.sns').find('li:nth-child(3)').on(
        'mouseenter',function(){
            $(this).find('a').find('img').attr('src','images/icon_logo/facebookhover.png')
        }).on(
            'mouseleave',function(){
                $(this).find('a').find('img').attr('src','images/icon_logo/facebook.png')
            });
    
    // 원페이지만들기
    var animate1 = false;        // 스크롤 동작중일때 다른 동작 작동하지 않기 위한 변수
    var page1 = 0;           // 현재 페이지 변수선언
    var pageCount = $('.page').length;      // 전체 길이(개수)
    var scrollHeight = 0;       //현재 스크롤의 위치(화면맨위의 위치,첫화면이 0=>[top=0])
    var windowHeight = $(window).height();// 한번 스크롤 할때 이동 값 [$(window).height()==100%]
    $('html,body').on(
        'mousewheel DOMMouseScroll',function(e){
            if(animate1==true){return false;};
            var event = e.originalEvent;        //자바스크립트 이용
            var delta = 0;      //마우스 휠 방향 0==정지상태 
            if(event.detail){
                delta = event.detail * -40;
                }else{
                    delta = event.wheelDelta;
                }       // 마우스 휠이 되는 브라우저 만들기
                if(delta<0 && page1 <pageCount-1){
                    page1++;
                }else if(delta>0 && page1>0){
                    page1--;
                }else{
                    return false;
                };
            scrollHeight = page1 * windowHeight;
            animate1 = true;
            $('.here').removeClass('here');
            $('.bullet').find('li').eq(page1).addClass('here');
            $('html,body').stop(true).animate({'scrollTop':scrollHeight},500,function(){
                animate1 = false;
            });
    });
        // 원페이지만들기
    
    $('.bullet').find('li').on(
        'click',function(){
            if(animate1==true){return false;};
            $('.bullet').find('li').each(function(index){
                $(this).attr('data-index',index)
            });
            var bulletindex = $(this).attr('data-index');
            var clickscroll =  bulletindex*windowHeight;
            page1 = bulletindex;
            animate1=true;
            $('.here').removeClass('here');
            $(this).addClass('here');
            $('html,body').stop(true).animate({'scrollTop':clickscroll},500,function(){
                animate1=false;
            });
        });
    $('.logo_wrap').find('a').on(
        'click',function(){
            if(animate1==true){return false;};
            animate1=true;
            page1=0;
            $('.here').removeClass('here');
            $('.bullet').find('li').eq(0).addClass('here');
            $('html,body').animate({'scrollTop':0},500,function(){
                animate1=false;
            });
        });
    $('.footer_button').on(
        'click',function(){
            if(animate1==true){return false;};
            animate1=true;
            page1=5;
            $('.here').removeClass('here');
            $('.bullet').find('li').eq(5).addClass('here');
            $('html,body').animate({'scrollTop':page1*windowHeight},500,function(){
                animate1=false;
            });
    });
    $(function(){
        if(animate1==true){return false;};
            animate1=true;
            page1=0;
        $("html, body").animate({ scrollTop: 0 },500,function(){
            animate1=false;
        }); 
    });
    $('.popup_close').on(
        'click',function(){
            $('.notice_popup').fadeOut(200);
        }).on(
            'click',function(){
                $('.menu_popup').fadeOut(200);
            })
    $('.close_button').on(
        'click',function(){
            $(this).toggleClass('popupbutton')
            if ($(this).hasClass('popupbutton')){
                $('.instagram_widget_wrap').animate({
                    'bottom':'-460px'
                },300)
                $(this).text('열기 솑');
            }else{
                $('.instagram_widget_wrap').animate({
                    'bottom':'0'
                },300)
                $(this).text('접기 솑');
            }
        })
    $('#content').on(
        'click',function(){
            $('#popup').fadeOut(0);
        }).on(
            'click',function(){
                $('.menu_popup').fadeOut(0);
            })
    $('.menu_tap>li:nth-child(1)').on(
        'click',function(){
            $('.donut_menu').fadeIn(0);
        }).on(
            'click',function(){
                $('.coffee_menu').fadeOut(0);
            }).on(
                'click',function(){
                    $('.menu_tap>li:nth-child(1)').css({'color':'#f06b02'})
                }).on(
                    'click',function(){
                        $('.menu_tap>li:nth-child(2)').css({'color':'#fff'})
                    })
    $('.menu_tap>li:nth-child(2)').on(
        'click',function(){
            $('.donut_menu').fadeOut(0);
        }).on(
            'click',function(){
                $('.coffee_menu').fadeIn(0);
            }).on(
                'click',function(){
                    $('.menu_tap>li:nth-child(1)').css({'color':'#fff'})
                }).on(
                    'click',function(){
                        $('.menu_tap>li:nth-child(2)').css({'color':'#f06b02'})
                    })

})