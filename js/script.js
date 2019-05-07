$(document).ready(function(){

  animateDiv("#fish1Id");
  animateDiv("#fish2Id");
  animateDiv("#divingman");
  animateTurtle("#turtle");
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
      console.log('suka');
      $("#fish1Id").css({"height": "500px","width": "500px"})
        settimeout(function(){
          $("#fish1Id").css({"height": "250px", "width": "250px"}, )
        }, 3000)
        animateDiv("#fish1Id");

    });

//randomStartPossition
    function getRandomStartPosBottom(itemId){
    var offsetW = $(itemId).innerWidth();
    var w = $(window).width() - offsetW;
    var nw = Math.floor(Math.random() * w);
    return nw;
}

//bubbleAnimation
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


// divingmanAnimation

var divingman = '<img id="divingman" src="images/divingman.png" />';
$('body').append(divingman);


$(document).keydown(function(e){
  console.log(e.which);
  switch (e.which){
    case 37:
    $("#divingman").css({"transform": "rotate(0deg)"})
      $("#divingman").animate({left: "-=100px"});
      break;
    case 39:
    $("#divingman").css({"-webkit-transform": "scaleY(-1)", "transform": "scaleX(-1)"})
      $('#divingman').animate({left: "+=100px"});
      break;
    case 38:
    $("#divingman").css({"transform": "rotate(90deg)"})
    $('#divingman').animate({top: "-=100px"});
      break;
    case 40:
    $("#divingman").css({"transform": "rotate(-90deg)"})
    $('#divingman').animate({top: "+=100px"});
      break;
  }
})

// CSS

$("#divingman").css({"height": "300px", "width": "300px"})
$("#turtle").css({"height": "300px", "width": "300px"})

//randomPositon
function randomPosition(){

  var h = $(window).height() - 20;
  var w = $(window).width() - 20;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

//randomAnimateFish
function animateDiv(myClass){
  var newq = randomPosition();
  $(myClass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
    animateDiv(myClass);
  });
}

//randomAnimateTurtle

var turtle = '<img id="turtle" src="images/turtle.png" />';
$('body').append(turtle);

function animateTurtle(myClass2){
  var newq = randomPosition();
  $(myClass2).animate({ top: newq[0], left: newq[1] }, 5000,   function(){
    animateTurtle(myClass2);
  });
}


})
