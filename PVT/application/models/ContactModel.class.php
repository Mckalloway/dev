<?php


class ContactModel {


public function addPost($POST) {
    
    
    $data = new Database();


    $form = $data->executeSql('INSERT INTO posts 
                    (LastName, FirstName, Email, Phone, Adresse, City, ZipCode, Why, Message)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                
                        $POST['LastName'],
                        $POST['FirstName'],
                        $POST['Email'],
                        $POST['Phone'],
                        $POST['Adresse'],
                        $POST['City'],
                        $POST['ZipCode'],
                        $POST['Why'],
                        $POST['Message']
                    ]);

                    $http = new Http();
                    $http->redirectTo('/');
        }

   
}


?>