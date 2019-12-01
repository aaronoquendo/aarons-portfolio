$( document ).ready(function() {

    function three_food_timing() {

        const   imageDur = 500,
            imageEase = "easeInOutSine",
            textFadeOut = "fadeOut",
            textFadeIn = "fadeIn",
            textDur = 250,
            s1i1INL = 485,
            s1i1INT = 67,
            s1i1OUTL = 813,
            s1i1OUTT = 60,

            s1i2INL = 376,
            s1i2INT = 310,
            s1i2OUTL = 768,
            s1i2OUTT = 284,

            s2i1INL = 562,
            s2i1INT = 433,
            s2i1OUTL = 993,
            s2i1OUTT = 400,
            s2i2INL = 57,
            s2i2INT = 952,
            s2i2OUTL = -400,
            s2i2OUTT = 910,
            s4i1INL = 550,
            s4i1INT = 675,
            s4i1OUTL = 980,
            s4i1OUTT = 575;

        // ********************* IMAGE A -> B ****************************************
        // FADE OUT ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-A-text').velocity(textFadeOut, {duration: textDur})
            $('#screen-1-image-2-A-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-1-A-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-2-A-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-4-image-1-A-text').velocity(textFadeOut, {duration: textDur});

        }, 4700);

        // MOVE OUT ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-A').velocity({ left: s1i1OUTL, top: s1i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-1-image-2-A').velocity({ left: s1i2OUTL, top: s1i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-A').velocity({ left: s2i1OUTL, top: s2i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-A').velocity({ left: s2i2OUTL, top: s2i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-A').velocity({ left: s4i1OUTL, top: s4i1OUTT }, {duration: imageDur, easing: imageEase});

        }, 5000);

        // MOVE IN ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-B').velocity({ left: s1i1INL, top: s1i1INT }, {duration: imageDur, easing: imageEase})
            $('#screen-1-image-2-B').velocity({ left: s1i2INL, top: s1i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-B').velocity({ left: s2i1INL, top: s2i1INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-B').velocity({ left: s2i2INL, top: s2i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-B').velocity({ left: s4i1INL, top: s4i1INT }, {duration: imageDur, easing: imageEase});

        }, 5000);

        // FADE IN ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-1-image-2-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-1-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-2-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-4-image-1-B-text').velocity(textFadeIn, {duration: textDur});

        }, 5400);


        // ********************* IMAGE B -> C ****************************************
        // FADE OUT ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-B-text').velocity(textFadeOut, {duration: textDur})
            $('#screen-1-image-2-B-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-1-B-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-2-B-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-4-image-1-B-text').velocity(textFadeOut, {duration: textDur});

        }, 14700);

        // MOVE OUT ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-B').velocity({ left: s1i1OUTL, top: s1i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-1-image-2-B').velocity({ left: s1i2OUTL, top: s1i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-B').velocity({ left: s2i1OUTL, top: s2i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-B').velocity({ left: s2i2OUTL, top: s2i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-B').velocity({ left: s4i1OUTL, top: s4i1OUTT }, {duration: imageDur, easing: imageEase});

        }, 15000);

        // MOVE IN ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-C').velocity({ left: s1i1INL, top: s1i1INT }, {duration: imageDur, easing: imageEase})
            $('#screen-1-image-2-C').velocity({ left: s1i2INL, top: s1i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-C').velocity({ left: s2i1INL, top: s2i1INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-C').velocity({ left: s2i2INL, top: s2i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-C').velocity({ left: s4i1INL, top: s4i1INT }, {duration: imageDur, easing: imageEase});

        }, 15000);

        // FADE IN ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-C-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-1-image-2-C-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-1-C-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-2-C-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-4-image-1-C-text').velocity(textFadeIn, {duration: textDur});

        }, 15400);


        // ********************* IMAGE C -> A ****************************************
        // FADE OUT ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-C-text').velocity(textFadeOut, {duration: textDur})
            $('#screen-1-image-2-C-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-1-C-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-2-image-2-C-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-4-image-1-C-text').velocity(textFadeOut, {duration: textDur});

        }, 24700);

        // MOVE OUT ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-C').velocity({ left: s1i1OUTL, top: s1i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-1-image-2-C').velocity({ left: s1i2OUTL, top: s1i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-C').velocity({ left: s2i1OUTL, top: s2i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-C').velocity({ left: s2i2OUTL, top: s2i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-C').velocity({ left: s4i1OUTL, top: s4i1OUTT }, {duration: imageDur, easing: imageEase});

        }, 25000);

        // MOVE IN ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-A').velocity({ left: s1i1INL, top: s1i1INT }, {duration: imageDur, easing: imageEase})
            $('#screen-1-image-2-A').velocity({ left: s1i2INL, top: s1i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-1-A').velocity({ left: s2i1INL, top: s2i1INT }, {duration: imageDur, easing: imageEase});
            $('#screen-2-image-2-A').velocity({ left: s2i2INL, top: s2i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-4-image-1-A').velocity({ left: s4i1INL, top: s4i1INT }, {duration: imageDur, easing: imageEase});

        }, 25000);

        // FADE IN ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-1-image-1-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-1-image-2-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-1-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-2-image-2-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-4-image-1-A-text').velocity(textFadeIn, {duration: textDur});

        }, 25400);

        // total time: 30 seconds
        // don't repeat this function until we're done with everything above
        setTimeout(three_food_timing, 30000);
    }

    function two_food_timing() {

        const   imageDur = 500,
            imageEase = "easeInOutSine",
            textFadeOut = "fadeOut",
            textFadeIn = "fadeIn",
            textDur = 250,

            s3i1INL = 666,
            s3i1INT = 50,
            s3i1OUTL = 995,
            s3i1OUTT = 30,

            s3i2INL = -25,
            s3i2INT = 460,
            s3i2OUTL = -357,
            s3i2OUTT = 440,

            s3i3INL = 668,
            s3i3INT = 794,
            s3i3OUTL = 992,
            s3i3OUTT = 774,

            s3i4INL = -8,
            s3i4INT = 1139,
            s3i4OUTL = -335,
            s3i4OUTT = 1119;

        // ********************* IMAGE A -> B ****************************************
        // FADE OUT ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-A-text').velocity(textFadeOut, {duration: textDur})
            $('#screen-3-image-2-A-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-3-image-3-A-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-3-image-4-A-text').velocity(textFadeOut, {duration: textDur});

        }, 4700);

        // MOVE OUT ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-A').velocity({ left: s3i1OUTL, top: s3i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-2-A').velocity({ left: s3i2OUTL, top: s3i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-3-A').velocity({ left: s3i3OUTL, top: s3i3OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-4-A').velocity({ left: s3i4OUTL, top: s3i4OUTT }, {duration: imageDur, easing: imageEase});

        }, 5000);

        // MOVE IN ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-B').velocity({ left: s3i1INL, top: s3i1INT }, {duration: imageDur, easing: imageEase})
            $('#screen-3-image-2-B').velocity({ left: s3i2INL, top: s3i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-3-B').velocity({ left: s3i3INL, top: s3i3INT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-4-B').velocity({ left: s3i4INL, top: s3i4INT }, {duration: imageDur, easing: imageEase});

        }, 5000);

        // FADE IN ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-2-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-3-B-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-4-B-text').velocity(textFadeIn, {duration: textDur});

        }, 5400);

        // ********************* IMAGE B -> A ****************************************
        // FADE OUT ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-B-text').velocity(textFadeOut, {duration: textDur})
            $('#screen-3-image-2-B-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-3-image-3-B-text').velocity(textFadeOut, {duration: textDur});
            $('#screen-3-image-4-B-text').velocity(textFadeOut, {duration: textDur});

        }, 14700);

        // MOVE OUT ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-B').velocity({ left: s3i1OUTL, top: s3i1OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-2-B').velocity({ left: s3i2OUTL, top: s3i2OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-3-B').velocity({ left: s3i3OUTL, top: s3i3OUTT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-4-B').velocity({ left: s3i4OUTL, top: s3i4OUTT }, {duration: imageDur, easing: imageEase});

        }, 15000);

        // MOVE IN ALL THE FOOD AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-A').velocity({ left: s3i1INL, top: s3i1INT }, {duration: imageDur, easing: imageEase})
            $('#screen-3-image-2-A').velocity({ left: s3i2INL, top: s3i2INT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-3-A').velocity({ left: s3i3INL, top: s3i3INT }, {duration: imageDur, easing: imageEase});
            $('#screen-3-image-4-A').velocity({ left: s3i4INL, top: s3i4INT }, {duration: imageDur, easing: imageEase});

        }, 15000);

        // FADE IN ALL THE TEXT OUT AT THE SAME TIME
        setTimeout(function() {
            $('#screen-3-image-1-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-2-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-3-A-text').velocity(textFadeIn, {duration: textDur});
            $('#screen-3-image-4-A-text').velocity(textFadeIn, {duration: textDur});

        }, 15400);

        // total time: 20 seconds
        // don't repeat this function until we're done with everything above
        setTimeout(two_food_timing, 20000);
    }

    // init the functions for the first time.
    two_food_timing();
    three_food_timing();

});
