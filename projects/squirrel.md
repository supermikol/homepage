---
layout: content
title: Squirrel Game
categories:
- blog
---
<link rel="stylesheet" type="text/css" href="/css/game.css">
<script src="/projects/squirrel.js"></script>
<div id="demo"></div>
<div id="screen">
  <p>
    <div class="box"><img id="box_01" /></div>
    <div class="box"><img id="box_11" /></div>
    <div class="box"><img id="box_21" /></div>
  </p>
  <p>
    <div class="box"><img id="box_00" /></div>
    <div class="box"><img id="box_10" /></div>
    <div class="box"><img id="box_20" /></div>
  </p>
</div>
<div id="gametext">
  <div id="game_counter"></div>
  <div id="game_message"></div>
</div>
<div id="controls">
  <span id="row1">
    <div class="invisible"></div>
    <div class="button" onClick="move('up')" value="Up" >Up</div>
    <div class="button" onClick="reset_game()" value="Reset">Reset</div>
  </span>
  <span id="row2">
    <div class="button" onClick="move('left')" value="Left">Left</div>
    <div class="button" onClick="move('down')" value="Down">Down</div>
    <div class="button" onClick="move('right')" value="Right">Right</div>
  </span>
</div>
<div id="scoretable">
  Recent Scores
  <div id="highscore"></div>
</div>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript Code";

document.getElementById("game_counter").innerHTML = "Turns remaining: " + squirrel.turns + " // Acorns collected: " + squirrel.acorns;
update_acorn();
update_squirrel();

$(document).ready(function(){
  $(document).keydown(function(key){
    switch(parseInt(key.which,10)) {
      // Left Arrow Pressed
      case 37:
        move('left');
        break;
      // Up Arrow Pressed
      case 38:
        move('up');
        break;
      // Right Arrow Pressed
      case 39:
        move('right');
        break;
      // Down Arrow Pressed
      case 40:
        move('down');
        break;
    }
  });
});
</script>