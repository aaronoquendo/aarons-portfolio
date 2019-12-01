$( document ).ready(function() {

    /*var sec  = 0;
    setInterval( function(){
        sec += 1
        $('#seconds').html(sec);
    }, 1000);*/

    function takeover_timing () {

        //sec=0;

        // ZONE 5 TAKEOVER

        setTimeout(function() {
            $('#screen-5-image-1').addClass('active');
        }, 0); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-1').removeClass('active');
        }, 10000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-2').addClass('active');
        }, 10000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-2').removeClass('active');
        }, 20000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-3').addClass('active');
        }, 20000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-3').removeClass('active');
        }, 30000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-4').addClass('active');
        }, 30000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-4').removeClass('active');
        }, 40000); // 40 seconds
        setTimeout(function() {
            $('#screen-5-image-5').addClass('active');
        }, 40000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-5').removeClass('active');
        }, 50000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-6').addClass('active');
        }, 50000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-6').removeClass('active');
        }, 60000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-7').addClass('active');
        }, 60000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-7').removeClass('active');
        }, 70000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-8').addClass('active');
        }, 70000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-8').removeClass('active');
        }, 80000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-9').addClass('active');
        }, 80000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-9').removeClass('active');
        }, 90000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-image-10').addClass('active');
        }, 90000); // 30 seconds

        setTimeout(function() {
            $('#screen-5-image-10').removeClass('active');
        }, 100000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-1').addClass('active');
            $('#screen-5-takeover-video-1').trigger('play');
        }, 100000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-1').removeClass('active');
            $('#screen-5-takeover-video-1').trigger('stop');
        }, 110000); // 50 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-2').addClass('active');
            $('#screen-5-takeover-video-2').trigger('play');
        }, 110000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-2').removeClass('active');
            $('#screen-5-takeover-video-2').trigger('stop');
        }, 120000); // 50 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-3').addClass('active');
            $('#screen-5-takeover-video-3').trigger('play');
        }, 120000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-3').removeClass('active');
            $('#screen-5-takeover-video-3').trigger('stop');
        }, 130000); // 50 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-4').addClass('active');
            $('#screen-5-takeover-video-4').trigger('play');
        }, 130000); // 40 seconds

        setTimeout(function() {
            $('#screen-5-takeover-video-4').removeClass('active');
            $('#screen-5-takeover-video-4').trigger('stop');
        }, 140000); // 50 seconds

        // ALL ZONE TAKEOVER
        setTimeout(function() {
            $('#full-screen-takeover-video').velocity('fadeIn', {duration: 500});
            $('#full-screen-takeover-video').trigger('play');
        }, 140000); // 110 seconds

        setTimeout(function() {
            $('#full-screen-takeover-video').velocity('fadeOut', {duration: 500});
            $('#full-screen-takeover-video').trigger('stop');
        }, 145000); // 55 seconds

        // total time: 115 seconds
        // don't repeat this function until we're done with everything above
        setTimeout(takeover_timing, 145000);
    }

    // init the functions for the first time.
    takeover_timing();
});
