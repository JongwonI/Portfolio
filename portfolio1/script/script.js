$(document).ready(function(){
$('#page_1').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
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
       $('html,body').stop(true).animate({'scrollTop':scrollHeight},500,function(){
           animate1 = false;
       });
       $('.bullet').find('li').eq(page1).addClass('here');
       if(page1==0){
        $('.p1_cloud').fadeIn(0);
        }else if(page1>=1){
            $('.p1_cloud').fadeOut(0);
        }
});
   // 원페이지만들기
    $(function(){
        if(animate1==true){return false;};
            animate1=true;
            page1=0;
        $("html, body").animate({ scrollTop: 0 },500,function(){
            animate1=false;
        }); 
    });
    var $prop1 = 0;
    function $blink(){
        $('.click_box').animate({'opacity':0},200,function(){
            $('.click_box').animate({'opacity':'1'},200)
        })
    };
    function $propmove(){
        $('.na').animate({'marginLeft':'-5px'},100,function(){
            $('.na').animate({'marginLeft':'5px'},100);
        });
    };
    function $propmove2(){
        $('.popc').animate({'marginLeft':'-5px'},100,function(){
            $('.popc').animate({'marginLeft':'5px'},100);
        });
        $('.bev').animate({'marginLeft':'-5px'},100,function(){
            $('.bev').animate({'marginLeft':'5px'},100);
        });
    };
    function $proptimer(){
        $prop1 = window.setInterval($propmove,800);
    };
    function $proptimer2(){
        $prop2 = window.setInterval($propmove2,800);
    };
    function $bullet_ani(){
        $('#bullet').animate({'left':'-5.5%'},300,function(){
            $('#bullet').animate({'left':'-6%'},300);
        })
    }
    var $bulletani_timer = 0;
    function $bulletani_run(){
        $bulletani_timer = window.setInterval($bullet_ani,1500);
    };
    $bulletani_run();
    window.setInterval($blink,1500);
    $proptimer();
    $('.bullet').find('li').on(
        'click',function(){
            $('.bullet').find('li').each(function(index){
                $(this).attr('data-index',index);
            });
            var $bullet_index = $(this).attr('data-index');
            $('.here').removeClass('here');
            $(this).addClass('here');
            page1 = $bullet_index;
            $('html,body').stop(true).animate({'scrollTop':windowHeight*$bullet_index},500);
        });
    $('#bullet').on(
        'mouseenter',function(){
            window.clearInterval($bulletani_timer);
            $(this).stop(true).animate({'left':0},300);
        }).on(
            'mouseleave',function(){
                $(this).stop(true).animate({'left':'-6%'},300);
                $bulletani_run();
            });
    $('.click_box').on(
        'click',function(){
            $('.p1_shadow_box').fadeOut(500);
            $('.off').fadeOut(500);
            $('#bullet').fadeIn(500);
            $('.cloud1').addClass('ac1');
            $('.cloud2').addClass('ac2');
            $('.cloud3').addClass('ac3');
            $('.cloud4').addClass('ac4');
            $('.p1_downbox').fadeIn(2000);
            $('.p1_title').animate({'color':'#fff'},500);
            $('.p1_title').css({'textShadow':'#fff 1px 1px 10px'});
        });
    $('.p1_downbox').on(
        'click',function(){
            page1=1;
            animate1=true;
            $('.here').removeClass('here');
            $('.bullet').find('li').eq(1).addClass('here');
            $('.p1_cloud').fadeOut(0);
            $('html,body').stop(true).animate({'scrollTop':windowHeight},500,function(){
                animate1=false;
            });
        });
    $('.na').on(
        'click',function(){
            window.clearInterval($prop1);
            $proptimer2();
            $('.p2_tab').stop(true).animate({'marginLeft':'-100%'},500);
            $('.skills').find('div').find('div').delay(500).animate({'marginLeft':'0'},2000);
        });
    $('.popc').on(
        'click',function(){
            window.clearInterval($prop2);
            $proptimer();
            $('.skills').find('div').find('div').delay(300).animate({'marginLeft':'-100%'},100);
            $('.p2_tab').stop(true).animate({'marginLeft':'0'},500);
        });
    $('.bev').on(
        'click',function(){
            window.clearInterval($prop2);
            $proptimer();
            $('.skills').find('div').find('div').delay(300).animate({'marginLeft':'-100%'},100);
            $('.p2_tab').stop(true).animate({'marginLeft':'0'},500);
        });
    $('.p4_right').on(
        'click',function(){
            $('.gallery_hide').slideDown(0);
            $('.gallery_text').find('ul').find('li').stop(true).animate({'opacity':'0'},0);
            $('.gallery_text').find('ul').find('li').eq(0).appendTo('.gallery_text>ul');
            $('.gallery_text').find('ul').find('li').eq(0).appendTo('.gallery_text>ul');
            $('.gallery_text').find('ul').find('li').animate({'opacity':'1'},1200);
            $('.gallery').find('li').stop(true).animate({'opacity':'0'},0);
            $('.gallery').find('li').eq(0).appendTo('.gallery');
            $('.gallery').find('li').eq(0).appendTo('.gallery');
            $('.gallery').find('li').animate({'opacity':'1'},700);
            $('.gallery_hide').stop(true).slideUp(700);
        });
    $('.p4_left').on(
        'click',function(){
            $('.gallery_hide').slideDown(0);
            $('.gallery_text').find('ul').find('li').stop(true).animate({'opacity':'0'},0);
            $('.gallery_text').find('ul').find('li:last-child').prependTo('.gallery_text>ul');
            $('.gallery_text').find('ul').find('li:last-child').prependTo('.gallery_text>ul');
            $('.gallery_text').find('ul').find('li').animate({'opacity':'1'},1200);
            $('.gallery').find('li').stop(true).animate({'opacity':'0'},0);
            $('.gallery').find('li:last-child').prependTo('.gallery');
            $('.gallery').find('li:last-child').prependTo('.gallery');
            $('.gallery').find('li').animate({'opacity':'1'},700);
            $('.gallery_hide').stop(true).slideUp(700);
        });
    var $wd_wrap = $('.wd_wrap').find('ul');
    var $wd_list = $('.wd_list').find('li');
    var $now_data = $('.wd_wrap').attr('data-index');
    $wd_list.each(function(index){
        $(this).attr('data-index',index);
    });
    $wd_wrap.each(function(index){
        $(this).attr('data-index',index);
    });
    $wd_list.on(
        'click',function(){
            var $thisdata=$(this).attr('data-index');
            $thisdata = parseInt($thisdata);
            $('.wd_wrap').attr('data-index',$thisdata);
            $wd_wrap.fadeOut(300);
            $wd_wrap.animate({'marginTop':0},0);
            $('.detail_box').fadeOut(500);
            $('.p3_detail').text('detail');
            $('.p3_detail').removeClass('detail');
            $('.p3_text').find('a').attr('href','#1');
            $('.wd'+$thisdata+'').fadeIn(300);
        });
    function $wd_t_move(){
        $now_data=$('.wd_wrap').attr('data-index');
        var $move_ul = $('.wd'+$now_data+'');
        var $move_margin = $move_ul.css('marginTop');
        $move_margin = parseInt($move_margin);
        $move_margin+=720;
        $move_ul.stop(true).animate({'marginTop':$move_margin},500);
        }
    function $wd_b_move(){
        $now_data=$('.wd_wrap').attr('data-index');
        var $move_ul = $('.wd'+$now_data+'');
        var $move_margin = $move_ul.css('marginTop');
        $move_margin = parseInt($move_margin);
        $move_margin-=720;
        $move_ul.stop(true).animate({'marginTop':$move_margin},500);
        }

    $('.p3_top').on(
        'click',function(){
            $now_data=$('.wd_wrap').attr('data-index');
            var $move_ul = $('.wd'+$now_data+'');
            var $move_margin = $move_ul.css('marginTop');
            var $move_li_count = $move_ul.children().length;
            $move_margin = parseInt($move_margin);
            $move_li_count = $move_li_count-2;
            if($move_margin<0){
                $wd_t_move();
            }
        });
    $('.p3_bottom').on(
        'click',function(){
            $now_data=$('.wd_wrap').attr('data-index');
            var $move_ul = $('.wd'+$now_data+'');
            var $move_margin = $move_ul.css('marginTop');
            var $move_li_count = $move_ul.children().length;
            $move_margin = parseInt($move_margin);
            $move_li_count = $move_li_count-2;
            if($move_margin<=0&&$move_margin>=$move_li_count*-720){
                $wd_b_move();
            }else{
                $move_ul.animate({'marginTop':0},500);
            }
        });
    $('.p3_detail').on(
        'click',function(){
            $now_data=$('.wd_wrap').attr('data-index');
            $(this).toggleClass('detail');
            if($(this).hasClass('detail')){
                $('.p3b'+$now_data+'').fadeIn(500);
                $(this).text('hide');
                $('.b_body').fadeOut(500);
                $('.b_circle1').fadeOut(500);
                $('.b_circle2').fadeOut(500);
                $('.wd_wrap').addClass('wdon');
            }else{
                $('.detail_box').fadeOut(500);
                $(this).text('detail');
                $('.b_body').fadeIn(500);
                $('.b_circle1').fadeIn(500);
                $('.b_circle2').fadeIn(500);
                $('.wd_wrap').removeClass('wdon');
            }
        });
    $('.p5_box').on(
        'mouseenter',function(){
            $(this).addClass('p_ani');
        }).on(
            'mouseleave',function(){
                $('.p5_box').removeClass('p_ani');
            });
});