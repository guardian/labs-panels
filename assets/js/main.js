$(document).ready(function() {
    checkDeviceType();

    $(window).on('scroll', function() {
        setActivePanel();
        pauseHeaderVideo();
        autoPlayVideoOnDesktop();
        toggleTag();
    });

    $(".button").click(function() {
        scrollToPanel($(this).parent().next());
    });

    $(".button-sub--play").click(function() {
        $(this).siblings("video").prop("muted", false);
        playVideo($(this).siblings(".video").get(0));
    });

    $(".button-sub--sound").click(function(e) {
        toggleSound($(this));
    });

    $(".button-sub--share").click(function(e) {
        toggleShareButtons($(this).parent());
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
        };

        if (!$(this).hasClass("is-active")) {
            $(this).find(".is-expanded").removeClass("is-expanded");
        };
    });
}

function toggleShareButtons(e) {
    if (e.hasClass("is-expanded")) {
        e.removeClass("is-expanded");
    } else {
        e.addClass("is-expanded");
    }
}

// Video Functions
function autoPlayVideoOnDesktop() {
    if ($("body").hasClass("is-desktop")) {
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

function closeWhenDone(e) {
    console.log(e);
    $(e).one("ended", function() {
        console.log("ended");
        e.webkitExitFullscreen();
    });
}

function pauseHeaderVideo() {
    if($(".is-active").hasClass("panel--header")) {
        playVideo($(".header__video").get(0));
    } else {
        pauseVideo($(".header__video").get(0));
    }
}

function showDescription(show) {
    if (show) {
        $(".is-active").addClass("has-description");
    } else {
        $(".is-active").removeClass("has-description");
    }
}

function toggleSound(e) {
    var video = e.siblings(".video");
    if (video.get(0).muted) {
        video.prop('muted', false);
        e.parents(".panel").addClass("is-muted");
        showDescription(true);
    } else {
        video.prop('muted', true);
        e.parents(".panel").removeClass("is-muted");
        showDescription(false);
    }
}

function togglePlayState(e) {
    if (e.paused) {
        playVideo(e);
        showDescription(true);
    } else {
        pauseVideo(e);
        showDescription(false);
    }
}

function pauseVideo(e) {
    e.pause();
}

function playVideo(e) {
    e.play();
    closeWhenDone(e);
}
