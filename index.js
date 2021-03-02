var started = false;
var colors = ["red", "green", "blue", "yellow"];
var gameOrder = [];
var userOrder = [];
var level = 0;

document.addEventListener("keydown", function(){
  if(started == false){
    started = true;
    gameSequence();
  }
});

$(".btn").click(function(){
  var id = this.id;
  userOrder.push(id);
  //button animations
  $("#" + id).addClass("pressed");
  setTimeout(function(){
    $("#" + id).removeClass("pressed");
  }, 80);
  compareArray(userOrder.length-1);
});

function gameSequence(){
  userOrder = [];
  level++;
  $("#level-title").text("Level " + level);
  var randNum = Math.floor(Math.random()*4);
  gameOrder.push(colors[randNum]);
  $("." + colors[randNum]).fadeOut(200).fadeIn(200);
}

function compareArray(currentLevel){
  if(gameOrder[currentLevel] === userOrder[currentLevel]){
    console.log("success");
    if(gameOrder.length === userOrder.length){
      setTimeout(function(){
        gameSequence();
      }, 1000);
    }
  }
  else{
    console.log("fail");
    $("#level-title").text("Game Over, Press any key to try again");
    startOver();
  }
}

function startOver(){
  level=0;
  userOrder = [];
  gameOrder = [];
  started = false;
}
