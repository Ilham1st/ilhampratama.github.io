
  const circleType = new CircleType(
    document.getElementById("rotated")
  ).radius(80);

  const circleTypeAuto = new CircleType(
    document.getElementById("rotated-auto")
  ).radius(20);

  $(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".circular-text").css({
      "-moz-transform" : "rotate(" + offset + "deg)",
      "-webkit-transform" : "rotate(" + offset + "deg)",
      "-0-transform" : "rotate(" + offset + "deg)",
      "-ms-transform" : "rotate(" + offset + "deg)",
      "transform" : "rotate(" + offset + "deg)",
    });
  });
  
  $("#menu").click(function() {
    onMenuButton();  
  });

  $("#close").click(function() {
    onCloseButton();  
  });

  function onMenuButton() {
    $(".wrapper").fadeOut(500);
    setTimeout(function (){
      window.scrollTo(top);
      $(".navigation-wrapper").fadeIn(1000);
    }, 500); 
  }

  function onCloseButton() {
      $(".navigation-wrapper").fadeOut(500);
      setTimeout(function (){
        $(".wrapper").fadeIn(2000);
      }, 500);    
  }
 
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });