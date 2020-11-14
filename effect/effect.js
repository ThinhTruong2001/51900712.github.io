$('document').ready(function() {
    $('.container').fadeIn('slow').delay(500);
    const pages = Array.from(document.querySelectorAll(".card-container .card"));
    let leftStack = [];
    let rightStack = Array.from(pages).reverse();
    updatePagesDepth(rightStack);
    for (const page of pages) {
        page.addEventListener("click", function(e) {
            if (e.currentTarget.classList.contains("canFlip")) {
                const page = leftStack.pop();
                rightStack.push(page);
                page.classList.remove("canFlip");
                updatePagesDepth(rightStack);
            } else {
                const page = rightStack.pop();
                leftStack.push(page);
                page.classList.add("canFlip");
                updatePagesDepth(leftStack);
            };
        });
    };

    function updatePagesDepth(stack) {
        for (const [i, page] of stack.entries()) {
            if (stack == leftStack) {
                page.style.transform = `rotateY(-180deg) translateZ(${-i}px)`;
            } else {
                page.style.transform = `rotateY(0) translateZ(${i}px)`;
            }
        }
    };
    $('.ballloons').mouseover(function() {
        var balloon = document.getElementById(this);
        randomPosition(balloon);
    });
    var currentDeg = 0;
    $('.carousel').click(function() {
        currentDeg = currentDeg - 60;
        $('.carousel').css({
            "transform": "rotateY(" + currentDeg + "deg)"
        })
    });
    $('.closeBtn').click(function() {
        $('.container-carousel').fadeOut('slow').promise().done(function() {
            $('.card-container').fadeIn('slow').delay(1500);
            $('.closeBtn').slideUp('slow').delay(2000);
        });
    });
    $('.image').click(function() {
        $('.card-container').fadeOut('slow').promise().done(function() {
            $('.container-carousel').fadeIn('slow').delay(1500);
            $('.closeBtn').slideDown('slow').delay(2000);
        })
    });
    $('#begin').click(function() {
        var song = document.getElementById("song");
        song.play();
        song.volume = 0.5;
        $(this).fadeOut('slow');
        $('.Banner').fadeIn('slow');
        $('.border-left').fadeIn('slow');
        $('.border-right').fadeIn('slow');
        setTimeout(function() {
            $('.message').fadeIn('slow');
            var i;

            function msgLoop(i) {
                $(".message p:nth-child(" + i + ")").fadeOut('slow').delay(1000).promise().done(function() {
                    i = i + 1;
                    if (i == 2) {
                        $(".message p:nth-child(" + i + ")").fadeIn('slow').delay(1500);
                    } else {
                        $(".message p:nth-child(" + i + ")").fadeIn('slow').delay(10000);
                    }
                    if (i == 3) {
                        $(".message p:nth-child(" + i + ")").fadeOut('slow').delay(1000);
                        return;
                    } else {
                        msgLoop(i);
                    }
                });
            };
            msgLoop(0);
        }, 3000);

        setTimeout(function() {
            $('.Banner').addClass('bannerAnimation');
            $('.balloons').fadeIn('slow').delay(500);
            randomPosition('balloon1');
            randomPosition('balloon2');
            randomPosition('balloon3');
            randomPosition('balloon4');
            randomPosition('balloon5');
            $('.balloons').addClass('balloons-rotate');
            $('.card-container').fadeIn('slow').delay(1500);
        }, 30000);

        function randomPosition(id) {
            var width = $(window).width();
            var height = $(window).height();
            var Hor = (8000 * Math.random()) % (width * 80 / 100);
            var Ver = (10000 * Math.random()) % (height * 50 / 100);
            var balloon = document.getElementById(id);
            $(balloon).animate({ left: 10 + Hor, top: 10 + Ver }, 8000, function() {
                randomPosition(id);
            });
        };
    });
});