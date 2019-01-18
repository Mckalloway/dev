var Program = function(canvas)
{

	this.pen          = new Pen();
    this.canvas       = new Slate(this.pen, canvas);

	this.start();
		
}


Program.prototype.start = function() {

	var penColor = document.querySelectorAll('.pen-color');
    
    for (var i = 0; i < penColor.length; i++) {
    
    	penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
    
    }

    var penSize = document.querySelectorAll('.pen-size');
    
    for (var i = 0; i < penSize.length; i++) {
    
    	penSize[i].addEventListener('click', this.onClickPenSize.bind(this));
    
    }
    
    
}

Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;
}


Program.prototype.onClickPenSize = function(event) {

	var size = event.currentTarget.dataset.size;

	this.pen.size = size;
}
