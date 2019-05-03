$(document).ready(function(){

  animateDiv("#fish1Id");
  animateDiv("#fish2Id");
  animateBubbles("#bubble1Id");
  animateBubbles("#bubble2Id");
  animateBubbles("#bubble3Id");


  $("#fish2Id").on("mouseenter", function(){
    $("#fish2Id").stop(true);
    var randomHeight = Math.max(0, Math.floor(Math.random() * $(window).height()) - $(this).height());
    var randomWidth = Math.max(0, Math.floor(Math.random() * $(window).width()) - $(this).width());
    $('#fish2Id').animate({top: randomHeight, left: randomWidth});
    animateDiv("#fish2Id");
  });

  $(document).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({left: event.pageX - 100, top: event.pageY - 100}, 700);
    animateDiv("#fish1Id");
  });

    $("#fish1Id").on('dblclick', function(){
      $("#fish1Id").stop(true);
      console.log('suka');
      $("#fish1Id").css({"height": "500px","width": "500px"}).delay(3000)

    });

    function getRandomStartPosBottom(itemId){
    var offsetW = $(itemId).innerWidth();
    var w = $(window).width() - offsetW;
    var nw = Math.floor(Math.random() * w);
    return nw;
}


    var bubbleAnimationTime = 13000;
function animateBubbles(itemId){
    var sw = getRandomStartPosBottom(itemId);
    var sh = $(window).height();
    $(itemId).offset({top: sh, left: sw})
    $(itemId).animate({ top: -100}, bubbleAnimationTime,   function(){
        animateBubbles(itemId);
    }).click(function(event){
        event.stopPropagation()
        $(itemId).stop();
        $(itemId).fadeOut(400, function(){
            $(itemId).stop(true);
            $(itemId).fadeIn(1);
            animateBubbles(itemId);
        });
    });
}

})


  function randomPosition(){

    var h = $(window).height() - 20;
    var w = $(window).width() - 20;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animateDiv(myClass){
    var newq = randomPosition();
    $(myClass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
      animateDiv(myClass);
    });
  }
