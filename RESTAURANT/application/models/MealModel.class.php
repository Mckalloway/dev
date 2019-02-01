
<?php

class MealModel {



    public function listAll()
	{

        $data = new Database();

        $meal = $data->query('SELECT *
					
                    FROM Meal'
        );
        
        //var_dump($meal);
        return $meal;
        
    }

    public function listOne($id) {
        $data = new Database();

        $meal = $data->queryOne('SELECT *
					
                    FROM Meal
                    WHERE Id = ?',
                    [$id]
        );
        return $meal;
    }

}



?>