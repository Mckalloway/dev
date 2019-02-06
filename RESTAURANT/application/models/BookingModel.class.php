
<?php

class BookingModel {



    public function addBooking($POST)
	{

        $data = new Database();

        $data -> executeSql('INSERT INTO Booking 
                            (BookingDate, BookingTime, NumberOfSeats, User_Id, CreationTimestamp)
                            VALUES (?,?,?,?,NOW())',
                            [
                                $POST['bookingYear'].'-'.$POST['bookingMonth'].'-'.$POST['bookingDay'],
                                $POST['bookingHour'].':'.$POST['bookingMinute'],
                                $POST['numberOfSeats'],
                                $_SESSION['Id']

                            ]);

                            /*$http = new Http();
                            $http->redirectTo('/');*/
                            
                            var_dump($_POST); 
    }

                

   

}



?>