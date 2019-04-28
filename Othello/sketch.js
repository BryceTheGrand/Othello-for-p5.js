var resetbutton, undobutton;
var lastmove = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

var txt;

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

let turn = 1;


function setup() {

  let canvas = createCanvas(800, 800);
  canvas.position(20, 20);

  resetbutton = createButton('Reset Game');
  resetbutton.position(821, 20);
  resetbutton.mousePressed(reset);

  undobutton = createButton('Undo last move');
  undobutton.position(821, 40);
  undobutton.mousePressed(undo);

  strokeWeight(2);

}


function undo() {

  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

      grid[row][col] = lastmove[row][col]

    }

  }

  if (turn == 1) turn = 2;
  else turn = 1;

}


function reset() {

  grid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  turn = 1;

}


function draw() {

  background(0, 100, 40);

  drawGridlines();
  drawPieces();

  fill(map(turn, 1, 2, 255, 0), 120);

  let row = floor(mouseY / height * 8);
  let col = floor(mouseX / width * 8);

  if (row < 8 && row >= 0 && col < 8 && col >= 0)
    if (grid[row][col] == 0)
      circle(col * width / 8 + width / 16, row * height / 8 + height / 16, width / 18)

  gameState();

}


function gameState() {

  let finished = false;
  let count = 0;


  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {


      if (grid[row][col] != 0) count++;


    }

  }


  if (count > 63) finished = true;

  if (finished) {

    textSize(64);
    textAlign(CENTER);

    let pieceNum = 0;

    for (let row = 0; row < 8; row++) {

      for (let col = 0; col < 8; col++) {


        if (grid[row][col] == 1) pieceNum++;


      }

    }

    txt = createDiv(pieceNum > 32 ? " Player one wins!" : (pieceNum == 32 ? " It's a tie!" : " Player two wins!"));

    txt.position(20, 850);

    noLoop();

  }

}


function drawPieces() {

  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

      if (grid[row][col] != 0) {
        fill(map(grid[row][col], 1, 2, 255, 0));
        circle(col * width / 8 + width / 16, row * height / 8 + height / 16, width / 18);
      }

    }

  }

}


function drawGridlines() {

  for (let i = 0; i < width / 8; i++) {

    line(i * width / 8, 0, i * width / 8, height);

  }

  for (let j = 0; j < height / 8; j++) {

    line(0, j * height / 8, width, j * height / 8);

  }

  line(width - 1, 0, width - 1, height);
  line(0, height - 1, width, height - 1);

}


function logLastMove() {

  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

      lastmove[row][col] = grid[row][col]

    }

  }

}


function mouseClicked() {

  if (turn == 1) {

    let col = floor(mouseX / width * 8);
    let row = floor(mouseY / height * 8);
    if (grid[row][col] == 0) {
      logLastMove();
      grid[row][col] = 1;
      checkCapture(row, col, 1);
      turn = 2;
    }

  } else if (turn == 2) {

    let col = floor(mouseX / width * 8);
    let row = floor(mouseY / height * 8);
    if (grid[row][col] == 0) {
      logLastMove();
      grid[row][col] = 2;
      checkCapture(row, col, 2);
      turn = 1;
    }

  }

}