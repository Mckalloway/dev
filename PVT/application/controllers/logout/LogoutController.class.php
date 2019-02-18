<?php 

class LogoutController {

public function httpGetMethod(Http $http, array $queryFields)
    {
    	
         session_destroy();

        $http = new Http();
        $http->redirectTo('/');
    }


}






?>