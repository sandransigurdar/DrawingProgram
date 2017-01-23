var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 5; // pensize

var minRad = 1,
    maxRad = 80;
    radiusSpan = document.getElementById('radiuschoice'),
    increRad = document.getElementById('increase'),
    decreRad = document.getElementById('decrease');
var mouseDown = false;
context.lineWidth = radius*2;

var setRad = function(newRad)
{
    if(newRad < minRad)
    {
        newRad = minRad;
    }
    else if(newRad > maxRad)
    {
        newRad = maxRad
    }
    radius = newRad;
    radiusSpan.innerHTML = radius;
    context.lineWidth = radius*2; // Laga, endurtekning
}

decreRad.addEventListener('mousedown', function()
{
    setRad(radius-5);
})

increRad.addEventListener('mousedown', function()
{
    setRad(radius+5);
})

setRad(radius);

class Shape
{
    constructor()
    {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
    }
};

class Pen extends Shape
{
    constructor(x, y, color, radius)
    {
        super(x, y, color, radius);
    }

    //makeLine();
};

function makeLine(e)
{
    if(mouseDown)
    {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }
}

function mouseBttnHeld(e)
{
    mouseDown = true;
    makeLine(e);
}

function mouseBttnNotHeld()
{
    mouseDown = false;
    context.beginPath();
}

canvas.addEventListener('mousemove', makeLine);
canvas.addEventListener('mousedown', mouseBttnHeld);
canvas.addEventListener('mouseup', mouseBttnNotHeld);



/* class Rectangle extends Shape
{
    constructor(x, y, color)
    {
        super(x, y, color);
    }

    //beginPath();

}*/
