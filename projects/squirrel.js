var squirrel = {
  posX: 1,
  posY: 0,
  acorns: 0,
  turns: 15
}
var acorn = {
  posY: Math.round(Math.random()),
  posX: Math.floor(Math.random()*3)
}

function move(direction) {
  if (squirrel.turns > 0) {
    switch (direction) {
      case 'up':
        if (squirrel.posY === 0) squirrel.posY += 1;
        break;
      case 'down':
        if (squirrel.posY === 1) squirrel.posY -= 1;
        break;
      case 'left':
        if (squirrel.posX != 0) squirrel.posX -= 1;
        break;
      case 'right':
        if (squirrel.posX != 2) squirrel.posX += 1;
        break;
    }
    if (squirrel.posX === acorn.posX && squirrel.posY === acorn.posY) {
      squirrel.acorns += 1;
      acorn.posY = Math.round(Math.random());
      acorn.posX = Math.floor(Math.random()*3);
      if (squirrel.posX === acorn.posX && squirrel.posY === acorn.posY) {
        acorn.posY = Math.round(Math.random());
      acorn.posX = Math.floor(Math.random()*3);
      }

    }
    squirrel.turns -= 1;
    var turn_message = "Turns remaining: " + squirrel.turns + " // Acorns collected: " + squirrel.acorns;
    document.getElementById("game_counter").innerHTML = turn_message;
    clear_boxes();
    update_acorn();
    update_squirrel();
  }
  else {
    $(document).ready(function(){
      $('#game_counter').html("You are out of turns! You collected a grand total of " + squirrel.acorns + " acorns!");
    });
    reset_game();

  }
}

function clear_boxes() {
  document.getElementById("box_00").src = "";
  document.getElementById("box_10").src = "";
  document.getElementById("box_20").src = "";
  document.getElementById("box_01").src = "";
  document.getElementById("box_11").src = "";
  document.getElementById("box_21").src = "";
}
function update_acorn() {
   if (acorn.posY === 0) {
    switch (acorn.posX) {
      case 0:
        document.getElementById("box_00").src = "../imgs/acorn_pixel.png";
        break;
      case 1:
        document.getElementById("box_10").src = "../imgs/acorn_pixel.png";
        break;
      case 2:
        document.getElementById("box_20").src = "../imgs/acorn_pixel.png";
        break;
    }
   }
    else {
      switch (acorn.posX) {
      case 0:
        document.getElementById("box_01").src = "../imgs/acorn_pixel.png";
        break;
      case 1:
        document.getElementById("box_11").src = "../imgs/acorn_pixel.png";
        break;
      case 2:
        document.getElementById("box_21").src = "../imgs/acorn_pixel.png";
        break;
      }

    }
}

function update_squirrel() {
   if (squirrel.posY === 0) {
    switch (squirrel.posX) {
      case 0:
        document.getElementById("box_00").src = "../imgs/squirrel_pixel.jpg";
        break;
      case 1:
        document.getElementById("box_10").src = "../imgs/squirrel_pixel.jpg";
        break;
      case 2:
        document.getElementById("box_20").src = "../imgs/squirrel_pixel.jpg";
        break;
    }
   }
    else {
      switch (squirrel.posX) {
      case 0:
        document.getElementById("box_01").src = "../imgs/squirrel_pixel.jpg";
        break;
      case 1:
        document.getElementById("box_11").src = "../imgs/squirrel_pixel.jpg";
        break;
      case 2:
        document.getElementById("box_21").src = "../imgs/squirrel_pixel.jpg";
        break;
      }

    }
}

function reset_game() {
  clear_boxes();
  update_acorn();
  update_squirrel();
  $('#highscore').prepend('<p>' + squirrel.acorns + '</p>')
  squirrel = {
    posX: 1,
    posY: 0,
    acorns: 0,
    turns: 15
}
  acorn = {
    posY: Math.round(Math.random()),
    posX: Math.floor(Math.random()*3)
};
}