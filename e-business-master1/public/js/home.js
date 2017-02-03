var $wrapper = $(".wrapper"),
    $loading = $("#loading"),
    $window = $(window),
    $header = $(".header-fixed .header-sticky"),
    $banner = $(".tp-banner"),
    $thumbnails = $(".thumbnails"),
    $subcate = $("#sub-cate");
$wrapper.jpreLoader({
    loaderVPos: "50%",
    autoClose: !0
}, function() {
    handleFastClick(), handleHeader(), handleSlider(), handleAnimation(), TweenMax.to($wrapper, .7, {
        opacity: 1
    }), $loading.fadeOut("fast", startAnimation)
});
var handleFastClick = function() {
        FastClick.attach(document.body)
    },
    handleHeader = function() {
        $window.scroll(function() {
            $window.scrollTop() > 100 ? $header.addClass("header-fixed-shrink") : $header.removeClass("header-fixed-shrink")
        })
    },
    handleSlider = function() {
        $banner.revolution({
            delay: 9e3,
            startwidth: 870,
            startheight: 400,
            hideThumbs: 10,
            navigationStyle: "preview4"
        })
    },
    handleAnimation = function() {
        TweenMax.set($subcate, {
            perspective: 800
        }), TweenMax.set($thumbnails, {
            transformPerspective: 800,
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            rotationY: 90,
            autoAlpha: 0
        })
    },
    startAnimation = function() {
        $subcate.waypoint(function() {
            TweenMax.staggerTo($thumbnails, 1, {
                rotationY: 0,
                autoAlpha: 1
            }, .3)
        }, {
            offset: "100%",
            triggerOnce: !0
        })
    };
