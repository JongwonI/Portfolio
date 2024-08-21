$(document).ready(function(){
    var slide1 = 0;
    var fade1 = 0;
    var mslide = 0;
    var mreslide = 0;
    var m_fade1 = 0;
    var $slidelist = $('.slide').find('li');
    var $m_slidelist = $('.m_slide').find('li');
    var $slidelength = $slidelist.length;
    var $m_slidelength = $m_slidelist.length;
    var $bullet = $('.slide_bullet').find('li');
    var $m_bullet = $('.m_slide_bullet').find('li');
    var m_s_here = 0;
    var s_here = 0;
    $slidelist.each(function(index){
        $(this).attr('data-index',index)
    });
    $m_slidelist.each(function(index){
        $(this).attr('data-index',index)
    });
    function left_move(){
        $('.slide').stop(true).animate({'left':'0'},300,function(){
            $('.slide').find('li:last-child').prependTo('.slide')
            $('.slide').css({'left':'-100%'})
            s_here--;
            if(s_here<0){s_here=3}
            $bullet.removeClass('s_here')
            $bullet.eq(s_here).addClass('s_here')
        })
    };
    function right_move(){
        $('.slide').stop(true).animate({'left':'-200%'},300,function(){
            $('.slide').find('li:first-child').appendTo('.slide')
            $('.slide').css({'left':'-100%'})
            s_here++;
            if(s_here==4){s_here=0}
            $bullet.removeClass('s_here')
            $bullet.eq(s_here).addClass('s_here')
        })
    };
    function run_slide(){
        slide1 = window.setInterval(right_move,3000)
    };
    function fades(){
        $('.slide2').find('li:last-child').fadeIn(300);
        $('.slide2').find('li:first-child').fadeOut(300,function(){
            
            $('.slide2').find('li:last-child').prependTo('.slide2')
        });
    };
    function run_fade(){
        fade1 = window.setInterval(fades,3000)
    };
    function m_left(){
        $('.m_slide').stop(true).animate({'left':'-768px'},300,function(){
            $('.m_slide').find('li:last-child').prependTo('.m_slide');
            $('.m_slide').css({'left':'-1536px'})
            m_s_here--;
            if(m_s_here<0){m_s_here=3}
            $m_bullet.removeClass('m_s_here')
            $m_bullet.eq(m_s_here).addClass('m_s_here')
        })
    }
    function m_right(){
        $('.m_slide').stop(true).animate({'left':'-2304px'},300,function(){
            $('.m_slide').find('li:first-child').appendTo('.m_slide');
            $('.m_slide').css({'left':'-1536px'})
            m_s_here++;
            if(m_s_here==4){m_s_here=0}
            $m_bullet.removeClass('m_s_here')
            $m_bullet.eq(m_s_here).addClass('m_s_here')
        })
    }
    function m_fades(){
        $('.m_slide2').find('li:last-child').fadeIn(300);
        $('.m_slide2').find('li:first-child').fadeOut(300,function(){
            
            $('.m_slide2').find('li:last-child').prependTo('.m_slide2')
        });
    };
    function run_fade(){
        fade1 = window.setInterval(fades,3000)
    };
    function m_run_fade(){
        m_fade1 = window.setInterval(m_fades,3000)
    };
    function run_mslide(){
        mslide = window.setInterval(m_right,3000)
    }
    function mre_left(){
        $('.m_recommend').find('li:last-child').prependTo('.m_recommend')
    }
    function mre_right(){
        $('.m_recommend').find('li:first-child').appendTo('.m_recommend')
    }
    function run_mreslide(){
        mreslide = window.setInterval(mre_right,2000)
    }
    $('.top_header_content>button').on(
        'click',function(){
            $('#top_header').slideUp(200);
        });
    $('.sns_wrap>li').on(
        'mouseenter',function(){
            $(this).find('a').find('img:nth-child(2)').stop(true).fadeOut(100);
    }).on(
        'mouseleave',function(){
        $(this).find('a').stop(true).find('img:nth-child(2)').fadeIn(100);
    });
    $('.gnb>li:nth-child(1)').on(
        'mouseenter',function(){
        $(this).find('a').find('p:nth-child(1)').find('img:nth-child(2)').fadeOut(200);
    }).on(
        'mouseleave',function(){
            $(this).find('a').find('p:nth-child(1)').find('img:nth-child(2)').fadeIn(200);
        });
    $('.gnb>li').on(
        'mouseenter',function(){
            $(this).find('ul').stop(true).slideDown(200);
        }).on('mouseleave',function(){
            $(this).find('ul').stop(true).slideUp(200);
        });
    $('.recommend').find('li').on(
        'mouseenter',function(){
            $(this).find('.hovertxt').stop(true).fadeIn(200);
        }).on(
            'mouseleave',function(){
                $(this).find('.hovertxt').stop(true).fadeOut(200);  
            });
    $('.cha_menu').find('li').on(
        'mouseenter',function(){
            $(this).find('a').find('p').stop(true).animate({
                'marginLeft':'0'
            },200);
        }).on(
            'mouseleave',function(){
                $(this).find('a').find('p').stop(true).animate({
                    'marginLeft':'-30px'
                },200);
            });
    $('.arcodian').on(
        'click',function(){
            $(this).toggleClass('open1')
            if($(this).hasClass('open1')){
                $('.arcodian_wrap').slideDown(200);
            }else{
                $('.arcodian_wrap').slideUp(200);
            }
        });
    $('.arcodian_title').find('li').on(
        'click',function(){
            $('.mcategory').fadeOut(0);
            $('.'+$(this).attr('data-tab')).fadeIn(0);
            $('.arcodian_title').find('li').removeClass('mhere');
            $(this).addClass('mhere');
        })
    $('.user_wrap').find('button').eq(0).on(
        'click',function(){
           $(this).toggleClass('searchopen')
           if($(this).hasClass('searchopen')){
            $('.msearch_wrap').fadeIn(100);
            $('.msearch_wrap').animate({'left':'6%'},300)
            $(this).find('img').attr('src','img/icon/mxbutton.png').animate({'marginTop':'60px'})
           }else{
               $('.msearch_wrap').fadeOut(0);
               $('.msearch_wrap').animate({'left':'18%'},300)
                $(this).find('img').attr('src','img/icon/searchmedia.png').animate({'marginTop':'0'})
           }
        });
    run_slide();
    $('.s_l_b').on(
        'click',function(){
            left_move();
        })
    $('.s_r_b').on(
        'click',function(){
            right_move();
        })
    $('.slide_wrap').on(
        'mouseenter',function(){
            window.clearInterval(slide1);
        }).on(
            'mouseleave',function(){
                run_slide();
            })
    $bullet.each(function(index){
        $(this).on(
            'click',function(){
                for(var i=0; i < $slidelength; i++){
                    var $item = $('.slide').find('li:first-child');
                    if($item.attr('data-index')==index){
                        break;
                    }else{
                        $item.appendTo('.slide');
                        s_here++;
                        if(s_here>=4){s_here=0;}
                        $bullet.removeClass('s_here');
                        $bullet.eq(s_here).addClass('s_here');
                    }
                }
            });
    });
    $m_bullet.each(function(index){
        $(this).on(
            'click',function(){
                for(var i=0; i < $m_slidelength; i++){
                    var $m_item = $('.m_slide').find('li:first-child');
                    if($m_item.attr('data-index')==index){
                        break;
                    }else{
                        $m_item.appendTo('.m_slide');
                        m_s_here++;
                        if(m_s_here>=4){m_s_here=0;}
                        $m_bullet.removeClass('m_s_here');
                        $m_bullet.eq(m_s_here).addClass('m_s_here');
                    }
                }
            });
    });
    run_fade();
    $('.refresh').on(
        'click',function(){
            fades();
        }).on(
            'mouseenter',function(){
                $(this).stop(true).animate({
                    'opacity':'1'
                },200);
            }).on(
                'mouseleave',function(){
                    $(this).stop(true).animate({
                        'opacity':'0.5'
                    },200);
                });
    $('.slide_wrap2').on(
        'mouseenter',function(){
            window.clearInterval(fade1)
        }).on(
            'mouseleave',function(){
                run_fade();
            });
    run_mslide();
    $('.m_s_l_b').on(
        'click',function(){
            m_left();
        });
    $('.m_s_r_b').on(
        'click',function(){
            m_right();
        });
    $('.m_slide_wrap').on(
        'mouseenter',function(){
            window.clearInterval(mslide);
        }).on(
            'mouseleave',function(){
                run_mslide();
            });
    run_mreslide();
    $('.m_re_left').on(
        'click',function(){
            mre_left();
        });
    $('.m_re_right').on(
        'click',function(){
            mre_right();
        });
    $('.m_recommend').on(
        'mouseenter',function(){
            window.clearInterval(mreslide);
        }).on(
            'mouseleave',function(){
                run_mreslide();
            });
    $('.m_recommend_wrap').find('button').on(
        'mouseenter',function(){
            window.clearInterval(mreslide);
        }).on(
            'mouseleave',function(){
                run_mreslide();
            });
    m_run_fade();
    $('.m_refresh').on(
        'click',function(){
            m_fades();
        });
    $('.m_slide_wrap2').on(
        'mouseenter',function(){
            window.clearInterval(m_fade1)
        }).on(
            'mouseleave',function(){
                m_run_fade();
            });
    $('#popup').on(
        'click',function(){
            $(this).fadeOut(300);
        });
});