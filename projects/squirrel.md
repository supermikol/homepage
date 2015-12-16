---
layout: post
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
  <p>
    <div id="game_counter"></div>
    <div id="game_message"></div>
  </p>
</div>
<div id="controls">
  <span id="row1">
    <div id="invisible"> </div>
    <input type="button" onClick="move('up')" value="Up" />
  </span>
  <input type="button" value="Left" onClick="move('left')" />
  <input type="button" onClick="move('down')" value="Down" />
  <input type="button" onClick="move('right')" value="Right" />
  <input type="button" onClick="reset_game()" value="Reset" />
</div>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript Code";

document.getElementById("game_counter").innerHTML = "Number of turns remaining: " + squirrel.turns + "<br> Number of acorns collected: " + squirrel.acorns;
update_acorn();
update_squirrel();
</script>