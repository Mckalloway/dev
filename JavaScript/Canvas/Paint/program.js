var Program = function(canvas)
{

	this.pen          = new Pen();
	this.canvas       = new Slate(this.pen, canvas);
	this.colorPalette = new ColorPalette();

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

    var paletteButton = document.getElementById('tool-color-picker');
    paletteButton.addEventListener('click', this.onClickColorPicker.bind(this));
	
	/*document.addEventListener('magical-slate:pick-color', this.onPickColor.bind(this));*/

	$(document).on('magical-slate:pick-color',this.onPickColor.bind(this) );

}

Program.prototype.onPickColor = function()
{

	var color = this.colorPalette.getPickedColor();
	this.pen.color = 'rgb('+color.red+','+color.green+','+color.blue+')';
}

Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;
}


Program.prototype.onClickPenSize = function(event) {

	var size = event.currentTarget.dataset.size;

	this.pen.size = size;
}

Program.prototype.onClickColorPicker = function()
{
	var palette = document.getElementById('color-palette');
    
    palette.classList.toggle('hide');


}