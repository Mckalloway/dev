


/*****pen.js******/

var Pen = function() {
    this.color = 'black';
    this.size = 1;
};

Pen.prototype.configure = function(context) 
{
    context.strokeStyle = this.color;
    context.lineWidth = this.size;
};

/**********slate.js*********/

var Slate = function(canvas) {

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.currentLocation = null;
    this.isDrawing       = false;
    this.pen             = new Pen();

    this.canvas.addEventListener('mousedown', this.onClickMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onClickMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onClickMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', this.onClickMouseUp.bind(this));
    
};

Slate.prototype.getMouseLocation = function(event){
    var offset = this.canvas.getBoundingClientRect();
    var location = { x:event.clientX - offset.left, y:event.clientY - offset.top};
    console.log(location);
    return location;
    
}



Slate.prototype.onClickMouseDown = function(event) {
    //console.log('hello');
    this.currentLocation = this.getMouseLocation(event);
    this.isDrawing = true;
    
}


Slate.prototype.onClickMouseMove = function(event) {
    var location = this.getMouseLocation(event);

    if (this.isDrawing == true) {
        this.pen.configure(this.context);
        this.context.beginPath();
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);
        this.context.stroke();
        this.currentLocation = location;
    }
}

Slate.prototype.onClickMouseUp = function(event) {
    //console.log('hello');
    this.isDrawing = false;
}


/********main.js */

var canvas = document.getElementById('slate');

var slate = new Slate(canvas);
