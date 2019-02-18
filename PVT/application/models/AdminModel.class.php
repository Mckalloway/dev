<?php


class AdminModel {


    public function listMessage()
	{

        $data = new Database();

        $userInfo = $data->query('SELECT *
					
                    FROM posts'
        );
        
        //var_dump($userInfo);
        return $userInfo;
        
    }

    public function removeMessage($id) 
    {

        $data = new Database();
        $removeInfo = $data->query('DELETE 
                                    FROM posts
                                    WHERE Id = ?',
                [
                    $id
                ]);

    }








}

?>