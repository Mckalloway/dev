<?php

class User {

	public function addUser($post) {

        $hashPwd = $this->hashPassword($post['psw']);
    
    	$data = new Database();
        
        $data->executeSql('INSERT INTO 
								users(email, psw, firstName, lastName, age) 
							   VALUES 
							   (?, ?, ?, ?, ?)',
                               
                               [
                               	$post['email'],
                               	$hashPwd,
                               	$post['firstName'], 
								$post['lastName'], 
								$post['age'] 
                               ]
         
                          	);
    
    }

    public function connectUser($post) {
        
        
        $data = new Database();


        $user = $data->queryOne('SELECT * 
                        FROM users 
                        WHERE email= ?',
                        [
                            $post['email']
                        ]);

        $verify = $this->verifyPassword($_POST['psw'], $user['psw']);

        var_dump($user);

        /*if ($ver) {

            var_dump('FAUXXX');

        } else*/ if ( $verify == true ){

            var_dump('Connecté');
            $_SESSION['email'] = $user['email'];
            $_SESSION['psw'] = $user['psw'];
            $_SESSION['firstName'] = $user['firstName'];
            $_SESSION['lastName'] = $user['lastName'];
            $_SESSION['age'] = $user['age'];
            

            var_dump($_SESSION);
        }
    }

    public function sendMailToChangePassword($post) {
        $data = new Database();
        $user = $data->queryOne('SELECT email, 
        FROM users 
        WHERE email= ?',
        [
            $post['email']
        ]);

        if ($user != false) {
            $message = 'Cliquez sur le lien :<a href=changePassword.php?id="'.$user['psw'].'&mail='.$user['email'].'">cliquez ici</a>';
            mail('thibaut.monesma@gmail.com', 'change password', $message);
            header('Location: changePassword.php?id='.$user['psw']);

        } else {
            $message = "Votre adresse mail n'existe pas...";
            var_dump($message);
        }
    }
    public function modifyPassword($password, $id) {
    
    	$hashPwd = $this->hashPassword($password);
        
    	$database = new Database();

		$database->executeSql('UPDATE users SET psw = ? WHERE psw = ?', [ $hashPwd, $id ]);
    
    
    }


    /*public function changePassword($post){
        $data = new Database();
        $user = 
    }*/

    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
	}

}


?>
