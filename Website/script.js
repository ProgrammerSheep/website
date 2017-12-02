// Script made by Ian Ott.

var canvas = document.getElementById('can');
var c = canvas.getContext('2d');

// var x = 0;
// var y = 0;

c.beginPath();
c.lineWidth = 1;


for (x = 0; x < 400; x += 50) {
	c.rect(x,0,50,50);
}

for (y = 0; y < 400; y += 50) {
	c.rect(0,y,50,50);
}




/** while(x < 400 && y < 400) {
    c.rect(x,0,50,50);
    x += 50;
    c.rect(0,y,50,50);
    y += 50;
} **/

c.fillStyle = "lightblue";
c.fill();
c.stroke();
c.closePath();
