
<?php

class UserModel {



    public function addUser($POST)
	{

        $hashPwd = $this->hashPassword($POST['Password']);
        $data = new Database ();
        $data ->executeSql(
            'INSERT INTO User 
            (FirstName, LastName, Email, Password, BirthDate, Address, City, ZipCode, Phone)
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)',

            [
                
                $POST['FirstName'],
                $POST['LastName'],
                $POST['Email'],
                $hashPwd,
                $POST['birthYear'].'-'.$POST['birthMonth'].'-'.$POST['BirthDay'],
                $POST['Address'],
                $POST['City'],
                $POST['ZipCode'],
                $POST['Phone']
            ]

            );
            $http = new Http();
            $http->redirectTo('/');
            var_dump($_POST);
    }

    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
    }
    





    public function connectUser($POST) {
        
        
        $data = new Database();


        $user = $data->queryOne('SELECT * 
                        FROM User 
                        WHERE Email= ?',
                        [
                            $POST['Email']
                        ]);

        $verify = $this->verifyPassword($_POST['Password'], $user['Password']);

        //var_dump($user);

        if ( $verify == true ){

            var_dump('Connecté');
            $_SESSION['Id'] = $user['Id'];
            $_SESSION['Email'] = $user['Email'];
            $_SESSION['Password'] = $user['Password'];
            $_SESSION['FirstName'] = $user['FirstName'];
            $_SESSION['LastName'] = $user['LastName'];
            $_SESSION['Address'] = $user['Address'];
            $_SESSION['ZipCode'] = $user['ZipCode'];
            $_SESSION['City'] = $user['City'];
            

            //var_dump($_SESSION);
            $http = new Http();
            $http->redirectTo('/');
        }
        else {
            var_dump('l adresse mail ou le mot de passe est incorrect');
        }
    }

}



?>