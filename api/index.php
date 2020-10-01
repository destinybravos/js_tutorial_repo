<?php

    if(isset($_POST['_token'])){

        $token = $_POST['_token'];

        if($token === 'asd123qwe456zxc'){
             $userKey = $_POST['crit'];


            echo getUser($userKey);
            
        }else{

            $response = [
                'status' => 'Unathorized Request',
                'status_code' => 0
            ];
    
            echo json_encode($response);

        }
       
    }else{

        $response = [
            'status' => 'Invalid Request',
            'status_code' => 0
        ];

        echo json_encode($response);

    }


    function getUser($key){
        $neededUser = '';

        $users = [
            [
                'name' => 'Destiny Brotobor',
                'phone' => '09023423524352',
                'email' => 'db4program@hotmail.com'
             ],
             [
                'name' => 'Pretty Splash',
                'phone' => '070864532345',
                'email' => 'splashp@hotmail.com'
             ],
             [
                'name' => 'Broda Chibros',
                'phone' => '080243423234',
                'email' => 'chibros@gmail.com'
             ],
             [
                'name' => 'Lixa Isora',
                'phone' => '09034235235245',
                'email' => 'smkoedetector@yahoo.com'
             ]

        ];

        if($key === 'all'){
            $neededUser = $users;
        }else{
            foreach ($users as $user) {
                if($user['name'] == $key){
                    $neededUser = $user;
                }
            }
        }

        return json_encode($neededUser);
    }


?>