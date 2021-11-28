$(document).ready(function(){
    //GOTOTOP
    $(window).scroll(function(){
        var posTopBt = $(this).scrollTop();
        if (posTopBt >= 850)
            $('.bttop').show('slow');
        else
            $('.bttop').hide('slow');

        if(posTopBt >= 650)
            $('.nav2').css({
                "background-color": "#007bff",
                "position": "fixed",
                "top": 0,
                "left": 0,
                "right": 0,
                "z-index": 1000,
                "opacity": 0.8
            });
        else
            $('.nav2').css({
                "position": "relative",
                "opacity": 1
            });

        if(posTopBt >= 1000 && posTopBt <=2850) {
            $("#category-holder").css({
                "position": "fixed",
                "top": "35px",
                "left": 0,
                "width": "15%",
                "z-index": "200"
            }).show("slow");
        }
        else
            $("#category-holder").css({
                "position": "unset",
                "z-index": 0,
                "top": "35px",
                "left": 0,
                "width": "100%"
            });
    })
    $(window).scroll(function(){
		const leftFadeIn = $('.scroll-left')
		const rightFadeIn = $('.scroll-right')
		const window_height = $(window).height()// chiều cao mà hình
		const window_top_position = $(window).scrollTop()// vị trí scroll top
		const plusHeight = window_height - 60// giảm chiều cao màn hình
		const window_bottom_position = window_top_position + plusHeight;
		
		//article
		var article_top_position = $('.home-news').offset().top
		$(leftFadeIn).each(function() {
			if (article_top_position <= window_bottom_position) {
				$(this).addClass('leftFadeIn');
			} else {
				$(this).removeClass('leftFadeIn');
			}
		})
		$(rightFadeIn).each(function() {
			if (article_top_position <= window_bottom_position) {
				$(this).addClass('rightFadeIn');
			} else {
				$(this).removeClass('rightFadeIn');
			}
		})		
	})

    $(".bttop").click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 750)
    })
    $("#phoneBt").click(function() {   
        $('html, body').animate({
            scrollTop: $('#phone').offset().top - 30
        }, 500)
    })

    $("#tabletBt").click(function() {   
        $('html, body').animate({
            scrollTop: $('#tablet').offset().top - 30
        }, 500)
    })

    $("#laptopBt").click(function() {   
        $('html, body').animate({
            scrollTop: $('#laptop').offset().top - 30
        }, 500)
    })
    var remainingTime = setInterval(function() {
        var date = new Date();
        var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0);
        var distance = tomorrow - date;
        var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((distance % (1000 * 60)) / 1000);
        if(hour < 10) hour = '0' + hour;
        if(minute < 10) minute = '0' + minute;
        if(second < 10) second = '0' + second;
        if(document.getElementById("hour") === null) clearInterval(remainingTime);
        document.getElementById("hour").innerText = `${hour}h`;
        document.getElementById("minute").innerText = `${minute}m`;
        document.getElementById("second").innerText = `${second}s`;
        if(distance == 0) clearInterval(remainingTime);
    }, 1000)
})