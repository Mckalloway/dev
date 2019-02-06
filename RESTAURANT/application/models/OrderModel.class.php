<?php


class OrderModel {



    public function saveOrder(){

        $database = new Database() ;

        $orderId = $database->executeSql(
            'INSERT INTO `Order` (`User_Id`)
            VALUE (?)',
            [$_SESSION['Id']]
        );
        return $orderId;
    }


    public function addOrderLine($quantityOrdered, $meal_Id, $order_Id, $priceEach) {
        $database = new Database();
        $database -> executeSql('INSERT INTO OrderLine (QuantityOrdered, Meal_Id, Order_Id, PriceEach)
                                VALUE (?,?,?,?)',
                                [
                                    $quantityOrdered,
                                    $meal_Id,
                                    $order_Id,
                                    $priceEach
                                ]);

    }


    public function updateOrder($totaleAmount,$tax,$totalTaxAmount,$order_Id) {

        $database = new Database();
        $database -> executeSql('UPDATE `Order`
                                SET TotalAmount=?,TaxRate=?,TaxAmount=?,CreationTimestamp=NOW(),CompleteTimestamp=NOW(),Status="not paid"
                                WHERE Id= ?',

                                [
                                    $totaleAmount,
                                    $tax,
                                    $totalTaxAmount,
                                    $order_Id
                                    
                                ]);
                                

    }




    /**/
    /*$tax,
                                    $totalTaxAmount,
                                    */











}







?>