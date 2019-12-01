$( document ).ready(function() {

    /*var sec  = 0;
    setInterval( function(){
        sec += 1
        $('#seconds').html(sec);
    }, 1000);*/

    function takeover_timing() {

        //sec=0;

        // ZONE 1 TAKEOVER
        setTimeout(function() {
            $('#screen-1-takeover-video').addClass('active');
            $('#screen-1-takeover-video').trigger('play');
        }, 10000); // 10 seconds 10000

        setTimeout(function() {
            $('#screen-1-image-2').addClass('active');
        }, 15000); // 15 seconds - load in early so cross fade works pretty

        setTimeout(function() {
            $('#screen-1-takeover-video').removeClass('active');
            $('#screen-1-takeover-video').trigger('stop');
        }, 20000); // 20 seconds 20000


        setTimeout(function() {
            $('#screen-1-image-2').removeClass('active');
        }, 30000); // 30 seconds


        // ZONE 2 TAKEOVER
        setTimeout(function() {
            $('#screen-2-image-1').addClass('active');
        }, 30000); // 30 seconds

        setTimeout(function() {
            $('#screen-2-image-1').removeClass('active');
        }, 40000); // 40 seconds


        // ZONE 3 TAKEOVER
        setTimeout(function() {
            $('#screen-3-takeover-video').addClass('active');
            $('#screen-3-takeover-video').trigger('play');
        }, 40000); // 40 seconds

        setTimeout(function() {
            $('#screen-3-image-2').addClass('active');
        }, 45000); // 45 seconds - load in early so cross fade works pretty

        setTimeout(function() {
            $('#screen-3-takeover-video').removeClass('active');
            $('#screen-3-takeover-video').trigger('stop');
        }, 50000); // 50 seconds

        setTimeout(function() {
            $('#screen-3-image-2').removeClass('active');
        }, 60000); // 60 seconds


        // ZONE 4 TAKEOVER
        setTimeout(function() {
            $('#screen-4-image-1').addClass('active');
        }, 60000); // 60 seconds

        setTimeout(function() {
            $('#screen-4-image-2').addClass('active');
        }, 65000); // 65 seconds - load in early so cross fade works pretty

        setTimeout(function() {
            $('#screen-4-image-1').removeClass('active');
        }, 70000); // 70 seconds

        setTimeout(function() {
            $('#screen-4-image-2').removeClass('active');
        }, 80000); // 80 seconds


        // ALL ZONE TAKEOVER
        setTimeout(function() {
            $('#full-screen-takeover-video').velocity('fadeIn', {duration: 500});
            $('#full-screen-takeover-video').trigger('play');
        }, 85000); // 90 seconds

        setTimeout(function() {
            $('#full-screen-takeover-video').velocity('fadeOut', {duration: 500});
            $('#full-screen-takeover-video').trigger('stop');
        }, 90000); // 55 seconds

        // total time: 95 seconds
        // don't repeat this function until we're done with everything above
        setTimeout(takeover_timing, 90000);
    }

    // init the functions for the first time.
    takeover_timing();

});