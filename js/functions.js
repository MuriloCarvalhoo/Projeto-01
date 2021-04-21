$(function(){

    //MENU MOBILE
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();        
    });

    //SCROLL DINÂMINO NOS MENUS (page single)    
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html.body').animate({'scrollTop':offSetTop});
    });

    // Slider JQuerry

    var delay = 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.text2').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt; 
        $('.text2').css('width',sizeBoxSingle + '%');
        $('.scroll-wraper').css('width',sizeContainer + '%');

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color: rgb(170,170,170);"></span>');
            else
                $('.slider-bullets').append('<span></span>');
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay)
    }

        function goToSlider(curIndex){
            var offSetX = $('.text2').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
            $('.slider-bullets span').css('background-color','rgb(200,200,200)'); // Voltar cor do span padrão
            $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)'); // Mudar a cor do span atual
            $('.scrollEquipe').stop().animate({'scrollLeft':offSetX + 'px'});
        }
        $(window).resize(function(){
            $('.scrollEquipe').stop().animate({'scrollLeft':0});  //tirar quebra do slider
        })

});