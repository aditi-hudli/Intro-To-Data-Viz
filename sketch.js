var circles = [];
var squares = [];
var triangles = [];

function setup() {
    createCanvas(640, 480);

    for(var i=0; i<60; i++) {
        var circle = {
            x: random(5,630),
            y: random(5,460),
            r: random(7,12)
        };
        circles.push(circle);
    }
    for(i=0; i<60; i++)
    {
        var square = {
            x: random(5,630),
            y: random(5,460),
            w: random(20,40)
        };
        squares.push(square);
    }

    for(i = 0; i<25; i++)
    {
        var triangle = {
            x: random(5,620),
            y: random(10,480)
        }
        triangles.push(triangle);
    }
}

function draw() {
    
    clear();
    
    push();
    for(var i=1; i<second()+1; i++) 
    { 
        if(i >= 59){
            i = 0;
        }
        fill(255,0,150,100);
        noStroke();
        ellipse(circles[i].x, circles[i].y ,circles[i].r*2, circles[i].r*2);
    }
    pop();

    push();
    for(var i=1; i<minute()+1; i++) 
    { 
        if(i >= 59){
            i = 0;
        }
        fill(15,150,150,100);
        noStroke();
        rect(squares[i].x, squares[i].y , squares[i].w, squares[i].w);
    }
    pop();

    push();
    for(var i=1; i<hour()+1; i++) 
    { 
        if(i >= 24){
            i = 0;
        }
        fill(15,250,50,150);
        noStroke();
        triangle(triangles[i].x, triangles[i].y, triangles[i].x+60, triangles[i].y, triangles[i].x+30, triangles[i].y-60);
    }
    pop();    
}
