<?php

class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
        if(array_key_exists('Address', $_SESSION) == false) {
            $http->redirectTo('/user/login');
        }
        
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
        
        $orders = json_decode($_POST['totalOrder']);
        //var_dump($orders);
        $orderModel = new OrderModel();
        $orderId = $orderModel->saveOrder($_SESSION['Id']);
        $totaleAmount = 0;
        $tax = 0.2;
        

        //listOne

        $mealModel =new MealModel();
        

        foreach ($orders as $order) {
            $meal = $mealModel->listOne($order->basketId);
            $order->safeSalePrice = $meal['SalePrice'];

            var_dump($order);

            $totaleAmount += $meal['SalePrice'] * $order ->basketNumber;

            
            

            $orderModel ->addOrderLine($order ->basketNumber, $order ->basketId, $orderId, $order ->basketSalePrice);

        }
        var_dump($totaleAmount);
        var_dump($orderId);
        $totalTaxAmount = $totaleAmount*$tax;
        //var_dump($totalTaxAmount);
        //var_dump($orders);

       $orderModel ->updateOrder($totaleAmount,$tax,$totalTaxAmount,$orderId);

       return [
        'orderId'=>$orderId
    ];
       
        
    }
}
