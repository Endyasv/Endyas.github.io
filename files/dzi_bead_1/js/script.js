$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    var $d = $(document);
    var $w = $(window);
    var $w_width = $w.width();
    var $w_height = $w.height();

    //модальное окно окно
    $('[data-fancybox]').fancybox({
        touch: false
    });

    //слайдер
    $('#reviews-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    });

    //переключение табов
    $d.on('click', '.tab:not(.active)', function() {
        $(this)
            .addClass('active')
            .siblings().removeClass('active')
            .closest('.tab-wrap')
            .find('.tab-content')
            .removeClass('active').eq($(this).index()).addClass('active');
    });

    //скрываем/открываем меню
    $d.on('click', '#menu-btn-js', function() {
        $('#nav-js, #menu-btn-js').toggleClass('active');
    });

    //скрываем блок по клику вне рабочего поля
    $d.on('click touchstart', function(e) {
        var work_item = $('#nav-js, #menu-btn-js');
        if (!work_item.is(e.target) && work_item.has(e.target).length === 0) {
            work_item.removeClass('active');
        }
    });

    //вкл./выкд. видео
    var video = $("#video");
    $d.on('click', '#where-video-js', function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            video.get(0).play();
        }
    });

    video.on('pause', function() {
        $('#where-video-js').removeClass('active');
        return false;
    });

    //плавный перехлд по меню
    $d.on('click', '#menu-js a, [data-get-bead]', function(e) {
        e.preventDefault();
        $('#nav-js, #menu-btn-js').removeClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
    });

    //события при скролле окна
    function scrollWindow() {
        //прикрепляем шапку при скролле
        /*
        if($w_width < 992 && $d.scrollTop() > $('#header-wrap-js').outerHeight()) {
          $('#header-mobile-menu-js').addClass('active');
        } else {
          $('#header-mobile-menu-js').removeClass('active');
        }
        */
    }
    scrollWindow();

    $(window).scroll(function() {
        scrollWindow();
    });

});