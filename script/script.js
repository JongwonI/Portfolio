$(document).ready(function(){
  $('#header').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});
  $(function(){
    $('html,body').animate({scrollTop:0},750);
  });
particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

const slide = new Swiper('#my-swiper', {
  slidesPerView : '4', // 한 슬라이드에 보여줄 갯수
  spaceBetween : 75, // 슬라이드 사이 여백
  loop : true, // 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination : false, // pager 여부
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 2000,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
})


  new TypeIt(".shadow_text", {
    speed: 100,
    loop: false,
    waitUntilVisible: true,
    })
    .break({delay:0})
    .break({delay:0})
    .break({delay:0})
    .type("Hi ! My name is Im Jong Won",{delay:500})
    .move(-11)
    .delete(11,{speed:300})
    .move(1)
    .type("'")
    .move(null,{to:"END"})
    .break({delay:100})
    .break({delay:100})
    .break({delay:100})
    .break({delay:100})
    .type("Let me introduce myself :>")
    .go();
  function shadow_fade(){
    $('.shadow_box').fadeOut(300,function(){
      $('#bullet').fadeIn(300);
      $('.intro_box').fadeIn(300);
  });
  }
  window.setTimeout(shadow_fade,12000);
  // 12000
  new TypeIt(".intro_title", {
    speed: 70,
    loop: false,
    waitUntilVisible: true,
    })
    .type("기본에 충실한 UI와",{delay:300})
    .break()
    .type("기억에 남는 UX를 추구하는",{delay:300})
    .break()
    .type("웹 퍼블리셔 임종원 입니다.")
    .go();
  window.setTimeout(function(){$('.contact').animate({'marginLeft':0},1500)},17300);
  window.setTimeout(function(){$('.photo').find('p').animate({'margin':'0 30px'},1000)},17300);
  window.setTimeout(function(){$('.license_wrap').animate({'marginLeft':0},1500)},18300); // 18300
  window.setTimeout(function(){$('.p1_button').fadeIn(500)},19300); //19300
  // 17300
  $('.photo').find('p').on(
    'mouseenter',function(){
      $(this).stop(true).animate({'width':'270px','height':'270px','margin':'0 30px'},300)
    }).on(
      'mouseleave',function(){
        $('.photo').find('p').stop(true).animate({'width':'240px','height':'240px','margin':'0 30px'},300);
      });
  $('.p1_button').on(
    'click',function(){
      var $windowHeight = $(window).height();
      $windowHeight = $windowHeight;
      $('html,body').animate({'scrollTop':$windowHeight},1000)
    });

  var $contentshere = $(window).height();
  var $wdthere =  $contentshere+700;
  var $wdthere1 = $contentshere+1000;
  var $wdthere2 = $contentshere+1600;
  var $wdthere3 = $contentshere+2000;
  var $wdthere4 = $contentshere+2300;
  var $wdthere5 = $contentshere+2650;
  var $wdthere6 = $contentshere+3300;
  var $wdthere7 = $contentshere+4000;
  $(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() >= $contentshere-600 && $(this).scrollTop() <= $contentshere+600){
        $('.ps').animate({'margin':0,'opacity':1},500);
        $('.ai').animate({'margin':0,'opacity':1},500);
        $('.html').animate({'margin':0,'opacity':1},500);
        $('.css').animate({'marginTop':0,'opacity':1},500);
        $('.js').animate({'margin':0,'opacity':1},500);
      }
      else if($(this).scrollTop() <= $contentshere-600 || $(this).scrollTop() >= $contentshere+600){
        $('.ps').stop(true).animate({'margin':'-130px 0 0 -130px','opacity':0},200);
        $('.ai').stop(true).animate({'margin':'-130px 0 0 130px','opacity':0},200);
        $('.html').stop(true).animate({'margin':'130px 0 0 -130px','opacity':0},200);
        $('.css').stop(true).animate({'marginTop':'130px','opacity':0},200);
        $('.js').stop(true).animate({'margin':'130px 0 0 130px','opacity':0},200);
      }

      if($(this).scrollTop() <= Math.ceil($wdthere)){
        $('.here').removeClass('here');
        $('.bullet').find('li').eq(0).addClass('here');
      }

      if($(this).scrollTop()>=$wdthere && $(this).scrollTop()<=$wdthere2){
        $('.wd1').find('img').animate({'marginTop':'5px','opacity':1},500);
        $('.wd_title1').animate({'marginTop':0,'opacity':1},500);
        $('.wd_text1').animate({'marginTop':0,'opacity':1},500);
        $('.wdbutton1').animate({'opacity':1},200);
      }
      else if($(this).scrollTop()<=$wdthere || $(this).scrollTop()>=$wdthere2){
        $('.wd1').find('img').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wd_title1').stop(true).animate({'marginTop':'45px','opacity':0},250);
        $('.wd_text1').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wdbutton1').stop(true).animate({'opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere1 && $(this).scrollTop() <= $wdthere3){
        $('.wd2').find('img').animate({'marginTop':'5px','opacity':1},500);
        $('.wd_title2').animate({'marginTop':0,'opacity':1},500);
        $('.wd_text2').animate({'marginTop':0,'opacity':1},500);
        $('.wdbutton2').animate({'opacity':1},200);
      }
      else if($(this).scrollTop() <= $wdthere1 || $(this).scrollTop() >= $wdthere3){
        $('.wd2').find('img').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wd_title2').stop(true).animate({'marginTop':'45px','opacity':0},250);
        $('.wd_text2').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wdbutton2').stop(true).animate({'opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere2 && $(this).scrollTop() <= $wdthere4+200){
        $('.wd3').find('img').animate({'marginTop':'5px','opacity':1},500);
        $('.wd_title3').animate({'marginTop':0,'opacity':1},500);
        $('.wd_text3').animate({'marginTop':0,'opacity':1},500);
        $('.wdbutton3').animate({'opacity':1},200);
      }
      else if($(this).scrollTop() <= $wdthere2 || $(this).scrollTop() >= $wdthere4+200){
        $('.wd3').find('img').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wd_title3').stop(true).animate({'marginTop':'45px','opacity':0},250);
        $('.wd_text3').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wdbutton3').stop(true).animate({'opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere3 && $(this).scrollTop() <= $wdthere5+200){
        $('.wd4').find('img').animate({'marginTop':'5px','opacity':1},500);
        $('.wd_title4').animate({'marginTop':0,'opacity':1},500);
        $('.wd_text4').animate({'marginTop':0,'opacity':1},500);
        $('.wdbutton4').animate({'opacity':1},200);
      }
      else if($(this).scrollTop() <= $wdthere3 || $(this).scrollTop() >= $wdthere5+200){
        $('.wd4').find('img').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wd_title4').stop(true).animate({'marginTop':'45px','opacity':0},250);
        $('.wd_text4').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wdbutton4').stop(true).animate({'opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere5 && $(this).scrollTop() <= $wdthere6){
        $('.wd5').find('img').animate({'marginTop':'5px','opacity':1},500);
        $('.wd_title5').animate({'marginTop':0,'opacity':1},500);
        $('.wd_text5').animate({'marginTop':0,'opacity':1},500);
        $('.wdbutton5').animate({'opacity':1},200);
      }
      else if($(this).scrollTop() <= $wdthere5 || $(this).scrollTop() >= $wdthere6){
        $('.wd5').find('img').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wd_title5').stop(true).animate({'marginTop':'45px','opacity':0},250);
        $('.wd_text5').stop(true).animate({'marginTop':'55px','opacity':0},250);
        $('.wdbutton5').stop(true).animate({'opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere6-200 && $(this).scrollTop() <= $wdthere7+200){
        $('.swiper-container').animate({'marginTop':'0','opacity':1},1000);
        $('.here').removeClass('here');
        $('.bullet').find('li').eq(2).addClass('here');
      }
      else if($(this).scrollTop() <= $wdthere6-200 || $(this).scrollTop() >= $wdthere7+200){
        $('.swiper-container').stop(true).animate({'marginTop':'55px','opacity':0},250);
      }

      if($(this).scrollTop() >= $wdthere7-400){
        $('.c_text').animate({'marginTop':'0','opacity':1},1000);
        $('.c_img').animate({'marginTop':'0','opacity':1},1000);
        $('.c4_con').animate({'marginTop':'50px','opacity':1},1000);
        $('.qrcode').animate({'marginTop':'0','opacity':1},1000);
        $('.here').removeClass('here');
        $('.bullet').find('li').eq(3).addClass('here');
      }else{
        $('.c_text').stop(true).animate({'marginTop':'50px','opacity':0},1000);
        $('.c_img').stop(true).animate({'marginTop':'50px','opacity':0},1000);
        $('.c4_con').stop(true).animate({'marginTop':'150px','opacity':0},1000);
        $('.qrcode').stop(true).animate({'marginTop':'50px','opacity':0},1000);
      }

      if($(this).scrollTop()>=$wdthere && $(this).scrollTop() <= $wdthere6){
        $('.here').removeClass('here');
        $('.bullet').find('li').eq(1).addClass('here');
      }
      if($(this).scrollTop() >= $wdthere6-200 && $(this).scrollTop() <= $wdthere7-600){
        $('.here').removeClass('here');
        $('.bullet').find('li').eq(2).addClass('here');
      }
    })
  })

  $('.bullet').find('li').eq(0).on(
    'click',function(){
      $('html,body').animate({'scrollTop':0},1000)
    });
  $('.bullet').find('li').eq(1).on(
    'click',function(){
      $('html,body').animate({'scrollTop':$wdthere+200},1000)
    });
  $('.bullet').find('li').eq(2).on(
    'click',function(){
      $('html,body').animate({'scrollTop':$wdthere6+200},1000)
    });
  $('.bullet').find('li').eq(3).on(
    'click',function(){
      $('html,body').animate({'scrollTop':$wdthere7+200},1000)
    });

  $('.ps0').on(
    'mouseenter',function(){
      $(this).find('.ps1,.ps2').stop(true).animate({'top':'10%'},500);
      $(this).find('.ps3').stop(true).animate({'top':'15%'},500);
      $(this).find('.skillper').stop(true).animate({'top':'50%'},500);
    }).on(
      'mouseleave',function(){
        $(this).find('div').stop(true).animate({'top':'110%'},500);
        $(this).find('.skillper').stop(true).animate({'top':'110%'},500);
      });

  $('.ai0').on(
    'mouseenter',function(){
      $(this).find('.ai1,.ai2').stop(true).animate({'top':'10%'},500);
      $(this).find('.ai3').stop(true).animate({'top':'15%'},500);
      $(this).find('.skillper').stop(true).animate({'top':'50%'},500);
    }).on(
      'mouseleave',function(){
        $(this).find('div').stop(true).animate({'top':'110%'},500);
        $(this).find('.skillper').stop(true).animate({'top':'110%'},500);
      });

  $('.html0').on(
    'mouseenter',function(){
      $(this).find('.html1,.html2').stop(true).animate({'top':'0%'},500);
      $(this).find('.html3').stop(true).animate({'top':'5%'},500);
      $(this).find('.skillper').stop(true).animate({'top':'50%'},500);
    }).on(
      'mouseleave',function(){
        $(this).find('div').stop(true).animate({'top':'110%'},500);
        $(this).find('.skillper').stop(true).animate({'top':'110%'},500);
      });

  $('.css0').on(
    'mouseenter',function(){
      $(this).find('.css1,.css2').stop(true).animate({'top':'5%'},500);
      $(this).find('.css3').stop(true).animate({'top':'10%'},500);
      $(this).find('.skillper').stop(true).animate({'top':'50%'},500);
    }).on(
      'mouseleave',function(){
        $(this).find('div').stop(true).animate({'top':'110%'},500);
        $(this).find('.skillper').stop(true).animate({'top':'110%'},500);
      });

  $('.js0').on(
    'mouseenter',function(){
      $(this).find('.js1,.js2').stop(true).animate({'top':'35%'},500);
      $(this).find('.js3').stop(true).animate({'top':'40%'},500);
      $(this).find('.skillper').stop(true).animate({'top':'50%'},500);
    }).on(
      'mouseleave',function(){
        $(this).find('div').stop(true).animate({'top':'110%'},500);
        $(this).find('.skillper').stop(true).animate({'top':'110%'},500);
      });
});