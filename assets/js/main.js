$(document).ready(function() {
    $(".button").click(function() {
        var target = $(this).parent().next();
        scrollToAnchor(target);

        if ($(this).siblings("video").length) {
            $(this).siblings("video").get(0).pause();
        }
    });

    if (isMobile.any()) {
        $("body").addClass("is-mobile");
    } else {
        $("body").addClass("is-desktop");
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

        if (isMobile.any() == false) {
            $(".panel--video").each(function() {
                autoPlayVideoOnDesktop(this);
            });
        }

        if($(".panel--header").hasClass("is-active") || $(".panel--last").hasClass("is-active")) {
            $(".sponsor-tag").removeClass("is-shorter");
        } else {
            $(".sponsor-tag").addClass("is-shorter");
        }
    });

    $(".button-sub--play").click(function() {
        $(this).siblings("video").get(0).play();
    });

    $(".button-sub--sound").click(function() {
        var video = $(this).siblings("video");

        if (video.get(0).muted) {
            video.prop('muted', false);
            $(this).addClass("is-muted");
        } else {
            video.prop('muted', true);
            $(this).removeClass("is-muted");
        }
    });

    $(".panel__video").click(function() {
        console.log(this)
    });
});

function scrollToAnchor(e) {
    var scrollTo = Math.ceil($(e).offset().top);

    $("html, body").animate({
        scrollTop: scrollTo
    }, 'slow');
}

function autoPlayVideoOnDesktop(e) {
    var video = $(e).find("video")[0];

    if($(e).hasClass("is-active")) {
        video.play();
    } else if (!$(e).hasClass("is-active")) {
        video.pause();
    }
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
