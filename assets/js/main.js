$(document).ready(function() {
    checkDeviceType();

    $(window).on('scroll', function() {
        setActivePanel();
        autoPlayVideoOnDesktop();
        toggleTag();
    });

    $(".button").click(function() {
        scrollToPanel($(this).parent().next());
    });

    $(".button-sub--play").click(function() {
        playVideo($(this).siblings(".video").get(0));
    });

    $(".button-sub--sound").click(function(e) {
        toggleSound($(this));
    });

    $(".video").click(function() {
        togglePlayState($(this)[0]);
    });
});

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

function checkDeviceType() {
    if (isMobile.any()) {
        $("body").addClass("is-mobile");
    } else {
        $("body").addClass("is-desktop");
    }
}

function scrollToPanel(e) {
    var scrollTo = Math.ceil($(e).offset().top);

    $("html, body").animate({
        scrollTop: scrollTo
    }, 'slow');

    if ($(this).siblings(".video").length) {
        pauseVideo($(this).siblings(".video").get(0));
    };
}

function toggleTag() {
    if($(".panel--header").hasClass("is-active") || $(".panel--last").hasClass("is-active")) {
        $(".sponsor-tag").removeClass("is-shorter");
    } else {
        $(".sponsor-tag").addClass("is-shorter");
    }
}

function setActivePanel() {
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
}

// Video Functions
function autoPlayVideoOnDesktop() {
    if (isMobile.any() == false) {
        $(".panel--video").each(function() {
            var video = $(this).find(".video")[0];

            if($(this).hasClass("is-active")) {
                playVideo(video);
            } else if (!$(this).hasClass("is-active")) {
                pauseVideo(video);
            }
        });
    }
}

function toggleSound(e) {
    var video = e.siblings(".video");
    if (video.get(0).muted) {
        video.prop('muted', false);
        e.addClass("is-muted");
    } else {
        video.prop('muted', true);
        e.removeClass("is-muted");
    }
}

function togglePlayState(e) {
    if (e.paused) {
        playVideo(e);
    } else {
        pauseVideo(e);
    }
}

function pauseVideo(e) {
    e.pause();
}

function playVideo(e) {
    e.play();
}
