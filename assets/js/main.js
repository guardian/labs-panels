$(document).ready(function() {
    $(".button").click(function() {
        var target = $(this).parent().next();
        scrollToAnchor(target);

        if ($(this).siblings("video").length) {
            $(this).siblings("video").get(0).pause();
        }
    });

    if (isMobile.any() == true) {
        $("body").addClass("is-mobile");
    }

    $(window).on('scroll', function() {
        $('.panel').each(function() {
           if($(this).visible(true)) {
                if ($(this).offset().top - $(this).outerHeight() / 2 < $(window).scrollTop()) {
                    $(".is-active").removeClass("is-active");
                    $(this).addClass("is-active");
                }
           } else {
               $(this).removeClass("is-active");
           } 
        });

        if($(".panel--header").hasClass("is-active")) {
            $(".sponsor-tag").removeClass("is-shorter");
        } else {
            $(".sponsor-tag").addClass("is-shorter");
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

var isMobile = {
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
