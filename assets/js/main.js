$(document).ready(function() {
    $(".button").click(function() {
        var target = $(this).parent().next();
        scrollToAnchor(target);

        if ($(this).siblings("video").length) {
            $(this).siblings("video").get(0).pause();
        }
    });

    $(window).on('scroll', function() {
        $('.panel').each(function() {
           if($(this).visible(true)) {
                if ($(this).offset().top - ($(this).height() / 2) < $(window).scrollTop()) {
                    $(".is-active").removeClass("is-active");
                    $(this).addClass("is-active");
                }
           } else {
               $(this).removeClass("is-active");
           } 
        });

        if(!$('.nav').visible(true)) {
            $(".paid-content-tag").addClass("is-fixed");
        } else {
            $(".paid-content-tag").removeClass("is-fixed");
        }

        if($(".panel--cover").hasClass("is-active")) {
            $(".paid-content-tag").removeClass("is-shorter");
        } else {
            $(".paid-content-tag").addClass("is-shorter");
        }
    });

    $(".button-sub--play").click(function() {
        $(this).siblings("video").get(0).play();
    });
});

function scrollToAnchor(e) {
    var scrollTo = Math.ceil($(e).offset().top);

    $("html, body").animate({
        scrollTop: scrollTo
    }, 'slow');
}
