$(document).ready(function(){
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('.page_1').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    $('.wd_slide_wrap').on(
        'mouseenter',function(){
            $('.page_3').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        }).on(
            'mouseleave',function(){
                $('.page_3').off('scroll touchmove mousewheel');
            });
    $('.glide__track').slideUp(0);
    $('.page_3').find('button').fadeOut(0);
    $('.p4_button_wrap').slideUp(0);
    $('.footer_wrap').find('p').fadeOut(0);
    $('.qrcode').fadeOut(0);
    new TypeIt(".start_button", {
        speed: 100,
        loop: false,
        waitUntilVisible: true,
        })
        .break({delay:0})
        .break({delay:0})
        .type("---------------------------------------------",{instant:true})
        .break({delay:0})
        .break({delay:0})
        .type("Hi ! My name is Im Jong Won",{delay:1000})
        .move(-11)
        .delete(11)
        .move(1)
        .type("'")
        .move(null,{to:"END"})
        .break({delay:100})
        .break({delay:100})
        .type("---------------------------------------------",{instant:true})
        .break({delay:300})
        .break({delay:300})
        .type("Click me !!")
        .go();
        new TypeIt(".slide1_p", {
        speed: 100,
        loop: false,
        waitUntilVisible: true,
        })
        .type("기본에 충실한 UI와")
        .break({delay:0})
        .type("기억에 남는 UX를 추구하는")
        .break({delay:0})
        .type("웹퍼블리셔 임종원입니다. 솒")
        .go();
        const ins1 = new TypeIt(".slide1_p_2", {
            speed: 50,
            loop: false,
            waitUntilVisible: true,
            })
            .break({delay:0})
            .break({delay:0})
            .pause(5200)
            .break({delay:0})
            .type("멞 E-mail : Ljw95220971@gmail.com",{instant:true})
            .break({delay:0})
            .break({delay:0})
            .type("폱 Phone : 010.9522.0971",{instant:true})
            .break({delay:0})
            .break({delay:0})
            .type("썱 Kakaotalk : Ljw942",{instant:true})
            .break({delay:0})
            .break({delay:0})
            .break({delay:1000})
            .type("옆으로 끌어당겨주세요 → →")
            .go();
          ins1.destroy();
        const ins2 = new TypeIt(".li1", {
            speed: 100,
            loop: false,
            waitUntilVisible: true,
            })
            .type("license")
            .break({delay:0})
            .go();
        ins2.destroy();

        new TypeIt(".li2", {
            speed: 50,
            loop: false,
            waitUntilVisible: true,
            })
            .pause(620)
            .type("gtq photoshop")
            .break({delay:0})
            .type("gtq illustrator")
            .break({delay:0})
            .type("웹디자인 기능사")
            .break({delay:0})
            .type("컴퓨터 그래픽스 운용 기능사")
            .go();

            const ins3 = new TypeIt(".li3", {
                speed: 100,
                loop: false,
                waitUntilVisible: true,
                })
                .type("skills")
                .break({delay:0})
                .go();
            ins3.destroy();

            new TypeIt(".li4", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("포토샵　 　■■■■■■■■■□ 90%")
                .break({delay:0})
                .type("일러스트 　■■■■■■■■■□ 90%")
                .break({delay:0})
                .type("HTML5　　■■■■■■■■■▣ 95%")
                .break({delay:0})
                .type("CSS3　　　■■■■■■■■▣□ 85%")
                .break({delay:0})
                .type("JS/Jquery ■■■■■■■▣□□ 75%")
                .go();

            const ins4 = new TypeIt(".wd_title", {
                speed: 100,
                loop: false,
                waitUntilVisible: true,
                })
                .type("------------------------------------------------------",{instant:true})
                .break({delay:0})
                .type("Web Design")
                .break({delay:0})
                .type("------------------------------------------------------",{instant:true})
                .go();
            ins4.destroy();

            const ins5 = new TypeIt(".gallery_title", {
                speed: 100,
                loop: false,
                waitUntilVisible: true,
                })
                .type("-------------------------------------------------------",{instant:true})
                .break({delay:0})
                .type("Gallery")
                .break({delay:0})
                .type("-------------------------------------------------------",{instant:true})
                .go();
            ins5.destroy();
            const ins6 = new TypeIt(".footer_title", {
                speed: 100,
                loop: false,
                waitUntilVisible: true,
                })
                .type("Contact Me")
                .go();
            ins6.destroy();
            new TypeIt(".gt0", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("1번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt1", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("2번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt2", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("3번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt3", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("4번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt4", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("5번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt5", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("6번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt6", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("7번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt7", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("8번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt8", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("9번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt9", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("10번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt10", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("11번입니다.")
                .break({delay:0})
                .go();
            new TypeIt(".gt11", {
                speed: 20,
                loop: false,
                waitUntilVisible: true,
                })
                .pause(620)
                .type("12번입니다.")
                .break({delay:0})
                .go();

        // https://www.typeitjs.com/
    // 원페이지만들기
    var animate1 = false;        // 스크롤 동작중일때 다른 동작 작동하지 않기 위한 변수
    var page1 = 0;           // 현재 페이지 변수선언
    var pageCount = $('#page').length;      // 전체 길이(개수)
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
                if(delta<0 && page1 <pageCount+3){
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
            if(page1==2){
                $('.wd_text_wrap').delay(1750).fadeIn(1000);
                $('.wd_slide_wrap').delay(1750).animate({'opacity':'100%'},1000);
                $('.page_3').find('button').delay(1750).fadeIn(1000);
                $('.anibox').delay(3000).fadeOut(1000);
            }
            else if(page1==3){
                $('.gallery').delay(1750).fadeIn(500);
                $('.gallery_s').delay(1750).fadeIn(1000);
                $('.page_4').find('button').delay(2000).fadeIn(1000);
                $('.gt0').delay(1750).fadeIn(0);            
            }
            else if(page1==4){
                $('.footer_wrap').find('p').delay(2000).fadeIn(1000);
                $('.qrcode').delay(2000).fadeIn(1000);
            }
    });
        // 원페이지만들기
    $('.start_button').on(
        'click',function(){
            page1=1;
            animate1=true;
            $('.here').removeClass('here');
            $('.nav').find('li').eq(1).addClass('here');
            $('html,body').stop(true).animate({'scrollTop':windowHeight},500,function(){
                animate1=false;
            })
        });
    function p3right(){
        $('.wd_container').stop(true).animate({'left':'-200%'},500,function(){
            $('.wd_container').find('li:first-child').appendTo('.wd_container');
            $('.wd_container').css({'left':'-100%'});
        });
    };
    function p3left(){
        $('.wd_container').stop(true).animate({'left':'0'},500,function(){
            $('.wd_container').find('li:last-child').prependTo('.wd_container');
            $('.wd_container').css({'left':'-100%'});
        });
    };
    $('.p3_left').on(
        'click',function(){
            p3left();
        });
    $('.p3_right').on(
        'click',function(){
            p3right();
        });
    $('.gallery_s').find('li').each(function(index){
        $(this).attr('data-index',index);
    });
    $('.gallery_s').find('li').on(
        'click',function(){
            var $imgsrc=$(this).find('img').attr('src');
            var $imgindex=$(this).attr('data-index');
            $('.hereli').removeClass('hereli');
            $(this).addClass('hereli');
            $('.gallery_txt2').stop(true).fadeOut(0);
            $('.gt'+$imgindex).fadeIn(500);
            $('.gallery').find('img').fadeOut(0);
            $('.gallery').find('img').attr('src',$imgsrc);
            $('.gallery').find('img').attr('data-index',$imgindex);
            $('.gallery').find('img').fadeIn(300);
            $('.gallery_txt2').animate({'height':'312.5px'},0);
            $('.gt'+$imgindex).animate({'height':$('.gallery').find('img').css('height')},300);
        }).on(
            'mouseenter',function(){
                $(this).transition({
                    perspective: '100px',
                    rotateY: '180deg'
                    });
            }).on(
                'mouseleave',function(){
                    $('.gallery_s').find('li').transition({
                        perspective: '100px',
                        rotateY: '0'
                    })
                });
    $('.p4_left').on(
        'click',function(){
            var $gallimg=$('.gallery').find('img');
            var $gallimg_index=$gallimg.attr('data-index');
            var $gall_s_li=$('.gallery_s').find('li');    
            $gallimg_index--;
            if($gallimg_index<0){
                $gallimg_index=11;
            }
            $gallimg.attr('data-index',$gallimg_index);
            $gallimg.stop(true).fadeOut(0);
            $('.hereli').removeClass('hereli');
            $gall_s_li.eq(parseInt($gallimg_index)).addClass('hereli');
            $('.gallery_txt2').stop(true).fadeOut(0);
            $('.gt'+$gallimg_index).fadeIn(500);
            $gallimg.attr('src',$gall_s_li.eq(parseInt($gallimg_index)).find('img').attr('src'));
            $gallimg.stop(true).fadeIn(300);
            $('.gallery_txt2').animate({'height':'312.5px'},0);
            $('.gt'+$gallimg_index).animate({'height':$('.gallery').find('img').css('height')},300);
        });
    $('.p4_right').on(
        'click',function(){
            var $gallimg=$('.gallery').find('img');
            var $gallimg_index=$gallimg.attr('data-index');
            var $gall_s_li=$('.gallery_s').find('li');
            $gallimg_index++;
            if($gallimg_index>11){
                $gallimg_index=0;
            }
            $gallimg.attr('data-index',$gallimg_index);
            $gallimg.stop(true).fadeOut(0);
            $('.hereli').removeClass('hereli');
            $gall_s_li.eq(parseInt($gallimg_index)).addClass('hereli');
            $('.gallery_txt2').stop(true).fadeOut(0);
            $('.gt'+$gallimg_index).fadeIn(500);
            $gallimg.attr('src',$gall_s_li.eq(parseInt($gallimg_index)).find('img').attr('src'));
            $gallimg.stop(true).fadeIn(500);
            $('.gallery_txt2').animate({'height':'0'},0);
            $('.gt'+$gallimg_index).animate({'height':$('.gallery').find('img').css('height')},300);
        });
});
