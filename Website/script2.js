var canvas = document.getElementById('array');
var c = canvas.getContext('2d');

var cols = 30;
var rows = 30;

for (var i = 0; i < cols; i++) {
	for (var j = 0; j < rows; j++) {
		var x = i * 30;
		var y = j * 30;
		c.beginPath();
		c.rect(x,y,30,30);
		c.fillStyle = "lightgreen";
		c.fill();
		c.stroke();
		c.closePath();
	}
}