$( document ).ready(function() {

    var sec  = 0;
    setInterval( function(){
        sec += 1
        $('#seconds').html(sec);
    }, 1000);

    function taco_timing () {

        sec=0;

        // ZONE 1 TAKEOVER
        setTimeout(function() {
            //console.log('Show Screen 1, Video 1');
            $('#screen-1-takeover-video').velocity('fadeIn', {duration: 500});
            $('#screen-1-takeover-video').trigger('play');
        }, 10000); // 10 seconds

        setTimeout(function() {
            $('#screen-1-takeover-video').velocity('fadeOut', {duration: 500});
            $('#screen-1-takeover-video').trigger('stop');
        }, 20000); // 20 seconds


        // ZONE 2 TAKEOVER
        setTimeout(function() {
            $('#screen-2-image-1').velocity('fadeIn', {duration: 500});
        }, 20000); // 20 seconds

        setTimeout(function() {
            $('#screen-2-image-1').velocity('fadeOut', {duration: 500});
        }, 30000); // 30 seconds


        // ZONE 3 TAKEOVER
        setTimeout(function() {
            $('#screen-3-image-1').addClass('active');
        }, 30000); // 30 seconds

        setTimeout(function() {
            $('#screen-3-image-2').addClass('active');
        }, 33000); // 33 seconds

        setTimeout(function() {
            $('#screen-3-image-3').addClass('active');
        }, 36000); // 36 seconds

        setTimeout(function() {
            $('#screen-3-image-1').removeClass('active');
            $('#screen-3-image-2').removeClass('active');
        }, 37000); // 40 seconds

        setTimeout(function() {
            $('#screen-3-image-3').removeClass('active');
        }, 40000); // 40 seconds


        // ZONE 4 TAKEOVER
        setTimeout(function() {
            //$('#screen-4-image-1').velocity('fadeIn', {duration: 500});
            $('#screen-4-image-1').addClass('active');
        }, 40000); // 40 seconds

        setTimeout(function() {
            $('#screen-4-image-1').removeClass('active');
            $('#screen-4-image-2').addClass('active');
        }, 50000); // 50 seconds

        setTimeout(function() {
            //$('#screen-4-image-2').velocity('fadeOut', {duration: 500});
            $('#screen-4-image-2').removeClass('active');
        }, 60000); // 60 seconds


        // ALL ZONE TAKEOVER
        setTimeout(function() {
            //console.log('Show Screen 1, Video 1');
            $('#full-screen-takeover-video').velocity('fadeIn', {duration: 500});
            $('#full-screen-takeover-video').trigger('play');
        }, 60000); // 60 seconds

        setTimeout(function() {
            $('#full-screen-takeover-video').velocity('fadeOut', {duration: 500});
            $('#full-screen-takeover-video').trigger('stop');
        }, 65000); // 65 seconds


        // BACK TO SCREEN 1, TAKE OVER VIDEO 2
        setTimeout(function() {
            //console.log('Show Screen 1, Video 1');
            $('#screen-1-takeover-video-2').velocity('fadeIn', {duration: 500});
            $('#screen-1-takeover-video-2').trigger('play');
        }, 70000); // 70 seconds

        setTimeout(function() {
            $('#screen-1-takeover-video-2').velocity('fadeOut', {duration: 500});
            $('#screen-1-takeover-video-2').trigger('stop');
        }, 80000); // 80 seconds


        // OVER TO SCREEN 4, TAKE OVER VIDEO 1
        setTimeout(function() {
            //console.log('Show Screen 1, Video 1');
            $('#screen-4-takeover-video').velocity('fadeIn', {duration: 500});
            $('#screen-4-takeover-video').trigger('play');
        }, 80000); // 80 seconds

        setTimeout(function() {
            $('#screen-4-takeover-video').velocity('fadeOut', {duration: 500});
            $('#screen-4-takeover-video').trigger('stop');
        }, 90000); // 90 seconds


        // total time: 90 seconds
        // don't repeat this function until we're done with everything above
        setTimeout(taco_timing, 90000);
    }

    // init the function the first time.
    taco_timing();
});