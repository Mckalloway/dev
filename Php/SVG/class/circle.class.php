<?php

//extend sert a faire hérité "shape"
class Circle extends Shape {

    
    private $rayon;

	
    
    public function __construct($x, $y, $rayon, $fill, $opacity)
	{
    	parent::__construct($x, $y, $fill, $opacity);
           
           $this->rayon = $rayon;

  
	}

    public function getSize() {

        
        return $this->rayon;
        
	}



}

?>