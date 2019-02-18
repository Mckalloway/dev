<?php

class UserModel {


public function connectUser($POST) {
    
    
    $data = new Database();


    $user = $data->queryOne('SELECT * 
                    FROM users
                    WHERE email= ?',
                    [
                        $POST['email']
                    ]);

    
        if ($POST['password'] = $user['password']) {

            var_dump('Connecté');

            $_SESSION['Id'] = $user['Id'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['lastName'] = $user['lastName'];
            $_SESSION['firstName'] = $user['firstName'];
            
           
            $http = new Http();
            $http->redirectTo('/admin');

        }
    
   
    }

}