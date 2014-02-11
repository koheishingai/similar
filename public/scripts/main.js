$(function () {
    var swflg = 0;
    var timer = false;
    var clflg = 0;
    init();
    timeline();
    adslide();
    adads();
    $('.btn-join').click(function () {
      if($(window).innerWidth < 701){
        if (clflg == 0) {
            $('#updates').css('width', '100%').css('height', 260).css('border-top', '1px solid rgb(228, 228, 228)').css('border-bottom', '1px solid rgb(228, 228, 228)').css('margin-bottom', -36).css('margin-top', -4);
            $('.btn-join').css('margin-bottom', -30).text('Close');
            $('#updates2').fadeIn();
            clflg=1;
        }else{
            $('#updates2').fadeOut(function () {
                $('#updates').css('width', 0).css('height', 0).css('border-top', 'none').css('border-bottom', 'none').css('margin-bottom', 0).css('margin-top', 0);
                $('.btn-join').css('margin-bottom', 0).text('New Updates');
            });
            clflg=0;
        }
      }else{
        if (clflg == 0) {
          $('#updates').css('width', '100%').css('height', 70).css('margin-top',26).css('padding',0);
          $('.btn-join').text('Close');
          $('.upright').css('float','none');
          $('#updates2').fadeIn();
          clflg=1;
        }else{
           $('#updates2').fadeOut(function () {
            $('#updates').css('width', 0).css('height', 0).css('margin-top',0).css('padding',20);
            $('.upright').css('float','left');
            $('.btn-join').text('New Updates');
            });
          clflg=0;
        }
      }
    });

    function init() {
        $('#phone').hide();
        $('#remote').css('height', '111px');
        if ($("window").innerWidth() > 700) {
            $('#tit1').fitText(1.7);
            $('#txt2').fitText(5);
            $('#titlep').fitText(3.8);
            $('.btn-blue.btn-join').fitText(0.9)
        }
    };

    function adslide() {
        var visw = $(".visual").innerWidth();
        var vish = $(".visual").innerWidth() / 940;
        vish = vish * 430;
        if ($("window").innerWidth() < 701) {
            vish = vish + 100
        }
        $(".visual").css('padding', vish + 'px 0px 0px');
        $(".slide-item").css('width', visw).css('height', vish).css('background-size', visw + 'px ' + vish + 'px')
    }

    function timeline() {
        var timewidth = $('#dates').innerWidth();
        timewidth = timewidth - 52;
        timewidth = timewidth / 3 - 1;
        $('.nt').css('margin-left', timewidth)
    };

    function adnav() {
        $('body,html').animate({
            scrollTop: 0
        }, 0);
        var mskh = $("body").innerHeight();
        mskh = mskh - 42;
        mskh = mskh / 2;
        mskh = mskh - 158;
        $("#msktxt").css("top", mskh);
        if (mskh < 75) {
            $(".msktxts").css("font-size", "21px").css("line-height", "33px")
        } else {
            $(".msktxts").css("font-size", "25px").css("line-height", "40px")
        }
    };

    function adads() {
        var adsw = $("#addsimg").innerWidth();
        adsw = adsw / 600;
        adsw = adsw * 500;
        $("#addsimg").css("height", adsw);
        $("#addsimg2").css("height", adsw)
    }
    $(window).resize(function () {
        if (timer !== false) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            console.log('resized');
            adslide();
            timeline();
            adads();
            if ($("window").innerWidth() > 700) {
                $('#tit1').fitText(1.5);
                $('#txt2').fitText(5);
                $('#titlep').fitText(3.8);
                $('.btn-blue.btn-join').fitText(0.9)
            } else {
                adnav()
            }
        }, 200)
    });

    function getlang() {
        try {
            return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2)
        } catch (e) {
            return undefined
        }
    }
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false
    });
    $('.close2').click(function () {
        $('#wrap3').fadeOut(function () {
            $('#wrap2').fadeIn();
            timeline();
            adads()
        })
    });
    $('#search').click(function () {
        $('#swrap').show()
    });
    $('#swrap').skOuterClick(function () {
        if ($('#swrap').css('display') == 'block') {
            $(this).hide()
        }
    });
    $('#search').click(function (event) {
        event.stopPropagation();
        var offset = $(this).offset();
        $('#swrap').show()
    });
    $('#swrap').skOuterClick(function () {
        $(this).hide()
    });
    $("#topmenu").click(function () {
        $("body").attr("ontouchmove", "event.preventDefault()").css("overflow-y", "hidden");
        $("#menumsk").show();
        adnav()
    })
});