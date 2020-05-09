var index = 0;
var turn = 0;
var data = [
  "Thank you for being the best.",
  "You are awesome.",
  "Thank you for always being there.",
];
var speed = 100;

setTimeout(typeWriter, speed);
function typeWriter() {
  if (index < data[turn].length) {
    document.getElementById("content").innerHTML += data[turn].charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed + 500);
  }
}

function erase() {
  if (index >= 0) {
    var str = data[turn].toString().substring(0, index);
    document.getElementById("content").innerHTML = str;
    index--;
    setTimeout(erase, speed - 10);
  } else {
    turn++;
    if (turn >= data.length) turn = 0;
    setTimeout(typeWriter, speed);
  }
}
