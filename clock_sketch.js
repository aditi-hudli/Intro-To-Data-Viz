var centers = []; 
function setup() {
    createCanvas(640, 480);

    for(var i=0; i<59; i++)
    {
        var point = {
            x: random(90,640),
            y: random(90,460)
        };
        centers.push(point);
    }
}

function draw() {
    
    clear();
    noStroke();
    background('black');

    push();
    fill(255,69,0);
    
    pop();

    push();
    fill(255,255,0,200);
    scale(0.25);
    for(var i=0; i<minute(); i++)
    {
         star(centers[i].x*4, centers[i].y*4, 30, 70, 5);
    } 
    pop();
    
		push();
		fill(255,255,255,200);
    var h_angle = map(hour(), 0, 24, 0, 2*PI);
    arc(65, 65, 120, 120, 0, h_angle, PIE);
    pop();   
	
		push();
    fill(25,255,255,200);
    var s_angle = map(second(), 0, 60, 0, 2*PI);
		arc(65,65, 50, 50, 0, s_angle, PIE);
		rotate(s_angle);
		pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
