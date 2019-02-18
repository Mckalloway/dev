<?php

class AdminController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
		if(array_key_exists('firstName', $_SESSION) == false) {
            $http->redirectTo('/login');
		}
		$adminModel = new AdminModel();
		$userInfo = $adminModel->listMessage();
		return [
			'userInfo' =>$userInfo
		];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
		$adminModels = new AdminModel();
		$removeInfo = $adminModels->removeMessage();
    }
}

?>

