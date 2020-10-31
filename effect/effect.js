$('document').ready(function() {
    $('.container').fadeIn('slow').delay(500);
    $('#begin').click(function() {
        var song = document.getElementById("song");
        song.play();
        song.volume = 0.5;
        $('body').addClass('background_add');
        $(this).fadeOut('slow');
        $('.Banner').fadeIn('slow');
        setTimeout(function() {
            $('.message').fadeIn('slow');
            var i;

            function msgLoop(i) {
                $(".message p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function() {
                    i = i + 1;
                    $(".message p:nth-child(" + i + ")").fadeIn('slow').delay(1200);
                    if (i == 9) {
                        $(".message p:nth-child(" + i + ")").fadeOut('slow').delay(800);
                        return;

                    } else {
                        msgLoop(i);
                    }

                });

            }
            msgLoop(0);
        }, 5000);

        setTimeout(function() {
            song.pause();
            $('.Banner').addClass('bannerAnimation');
            $('.balloons').fadeIn('slow').delay(500);
            randomPosition('balloon1');
            randomPosition('balloon2');
            randomPosition('balloon3');
            randomPosition('balloon4');
            randomPosition('balloon5');
            song = document.getElementById("song2");
            song.play();
            song.volume = 0.5;
            $('.balloons').addClass('balloons-rotate');
            $('.flip-card').fadeIn('slow').delay(1000);
            $('.card ').fadeIn('slow').delay(1500);
        }, 34000);

        function randomPosition(id) {
            var width = $(window).width();
            var height = $(window).height();
            var Hor = (8000 * Math.random()) % (width - 100);
            var Ver = (10000 * Math.random()) % (height * 50 / 100);
            var balloon = document.getElementById(id);
            $(balloon).animate({ left: Hor, top: Ver }, 8000, function() {
                randomPosition(id);
            });
        };
    });
});