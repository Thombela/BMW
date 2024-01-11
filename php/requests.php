<?php

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    include('./functions.php');
    $data = json_decode(file_get_contents("php://input"), true);

    if(isset($data["GetAllCars"])){
        $cars = select('cars');
        $array = [];
        foreach($cars as $car){
            unset($car["engine"]);
            array_push($array, $car);
        }
        echo json_encode($array);
    }
    elseif(isset($data["addCars"])){
        $cars = $data["cars"];
        foreach($cars as $car){
            insert('cars', $car);
        }
    }
    elseif(isset($data["AddUsers"])){
        $users = $data["users"];
        foreach($users as $user){
            insert('users', $user);
        }
    }
    elseif(isset($data["LoginUser"])){
        $check = [
            'email' => $data['email']
        ];
        $users = select('users', $check);
        $count = 0;
        foreach($users as $user){
            if($count == 0){
                $user['message'] = 'Success';
                echo json_encode($user);
            }
            $count++;
        }
        /*else{
            echo json_encode(['message' => 'error']);
        }*/
    }