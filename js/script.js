$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100 ) {
        $('.button').fadeIn();
    } else {
        $('.button').fadeOut();
    }
});