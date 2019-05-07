$(document).ready(function(){

  //randomPosition
  function randomPosition(){

    var h = $(window).height() - 100;
    var w = $(window).width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }


  $("#fish2Id").on("mouseenter", function(){
    $("#fish2Id").stop(true);
    [randomHeight, randomWidth] = randomPosition();
    $('#fish2Id').animate({top: randomHeight, left: randomWidth});
    animateDiv("#fish2Id", 5000);
  });

  $(document).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({left: event.pageX - 100, top: event.pageY - 100}, 700);
    animateDiv("#fish1Id", 5000);
  });


    $("#fish1Id").on('dblclick', function(){
      $(this).stop(true);
      $("#fish1Id").animate({"height": "500px","width": "500px"})
        .delay(2000)
        .animate({"height": "250px", "width": "250px"}, function() {
            animateDiv("#fish1Id", 5000);
          });
    });

//randomStartPossition
function getRandomStartPosBottom(itemId){
    var offsetW = $(itemId).innerWidth();
    var w = $(window).width() - offsetW;
    var nw = Math.floor(Math.random() * w);
    return nw;
}

//bubbleAnimation
function animateBubbles(itemId, time){
    var sw = getRandomStartPosBottom(itemId);
    var sh = $(window).height();
    $(itemId).offset({top: sh, left: sw})
    $(itemId).animate({ top: -100}, time, function(){
        animateBubbles(itemId, time);
    }).click(function(event){
        event.stopPropagation()
        $(itemId).stop();
        $(itemId).fadeOut(400, function(){
            $(itemId).stop(true);
            $(itemId).fadeIn(1);
            animateBubbles(itemId, time);
        });
    });
}

// divingmanAnimation
var divingman = '<img id="divingman" src="images/divingman.png" />';
$('body').append(divingman);
$("#divingman").css({"height": "300px", "width": "300px"})

var animatingDiver = false;
$(document).keydown(function(e){
  if(animatingDiver)
    return;
  animatingDiver = true;
  console.log(e.which);
  switch (e.which){
    case 37:
    $("#divingman").css({"transform": "rotate(0deg)"})
      $("#divingman").animate({left: "-=100px"}, 400, 'linear', () => {animatingDiver = false});
      break;
    case 39:
    $("#divingman").css({"-webkit-transform": "scaleY(-1)", "transform": "scaleX(-1)"})
      $('#divingman').animate({left: "+=100px"}, 400, 'linear', () => {animatingDiver = false});
      break;
    case 38:
    $("#divingman").css({"transform": "rotate(90deg)"})
    $('#divingman').animate({top: "-=100px"}, 400, 'linear', () => {animatingDiver = false});
      break;
    case 40:
    $("#divingman").css({"transform": "rotate(-90deg)"})
    $('#divingman').animate({top: "+=100px"}, 400, 'linear', () => {animatingDiver = false});
      break;
  }
})


//randomAnimateFish
function animateDiv(id, speed){
  var newq = randomPosition();

  var dir = $(id).offset().left < newq[1] ? 1 : -1;
  $(id).css({transform: `scaleX(${dir})`})
      .animate({
          top: newq[0],
          left: newq[1],
        }, speed, function() {
    animateDiv(id, speed);
  });
}

//randomAnimateTurtle

var turtle = '<img id="turtle" src="images/turtle.png" />';
$('body').append(turtle);
$("#turtle").css({"height": "300px", "width": "300px"})


  animateDiv("#fish1Id", 2000);
  animateDiv("#fish2Id", 2000);
  animateDiv("#turtle", 5000);
  animateBubbles("#bubble1Id", 2000);
  animateBubbles("#bubble2Id", 5000);
  animateBubbles("#bubble3Id", 3000);

})
