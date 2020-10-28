$('document').ready(function() {
    $('.container').fadeIn('slow').delay(500);
    $('#begin').click(function() {
        $("#song").get(0).play();
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
            var x = document.getElementById("song");
            x.pause();
            $('.Banner').addClass('bannerAnimation');
            $('.balloons').fadeIn('slow').delay(500);
            randomPosition('balloon1');
            randomPosition('balloon2');
            randomPosition('balloon3');
            randomPosition('balloon4');
            randomPosition('balloon5');
            $('#song2').get(0).play();
            $('.balloons').addClass('balloons-rotate');
            $('.flip-card').fadeIn('slow').delay(1000);
            $('#card ').fadeIn('slow').delay(1500);
        }, 34000);

        function randomPosition(id) {
            var width = $(window).width();
            var height = $(window).height();
            var Hor = (8000 * Math.random()) % width;
            var Ver = (10000 * Math.random()) % height;
            var balloon = document.getElementById(id);
            $(balloon).animate({ left: Hor, bottom: Ver }, 8000, function() {
                randomPosition(id);
            });
        };
    });

    (function() {
        function $(id) {
            return document.getElementById(id);
        }
        var card = $('card'),
            open = $('open'),
            close = $('close'),
            timer = null;
        console.log(card);
        open.addEventListener('click', function() {
            card.setAttribute('class', 'open-half');
            if (timer) clearTimeout(timer);
            timer = setTimeout(function() {
                card.setAttribute('class', 'open-fully');
                timer = null;
            }, 1000);
        });

        close.addEventListener('click', function() {
            card.setAttribute('class', 'close-half');
            if (timer) clearTimerout(timer);
            timer = setTimeout(function() {
                card.setAttribute('class', '');
                timer = null;
            }, 1000);
        });
    }());
});