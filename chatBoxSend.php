<?php

include('connect.php'); // Open connection the DB

$name = $_POST['username_data'];                // How to collect data supplied by the user via Ajax to PHP
$password = $_POST['password_data'];            // How to collect data supplied by the user via Ajax to PHP
$chat_box_data = $_POST['chatbox1Value_data'];  // How to collect data supplied by the user via Ajax to PHP

//SQL query to select all the books with the letter supplied by the user.
$sql = "SELECT chat_content FROM `chat_table` WHERE name = '$name' AND password = '$password'";
    //"SELECT chat_content FROM `chat_table` WHERE name = 'Cristen' AND password = 'PFdhX$2A'";

$result = mysqli_query($dbc, $sql);

if (mysqli_num_rows($result) > 0) {
    // Then the user and password match. We can update the DB chat_content row for this user.
    //echo '<script>alert("Client Already Has an Account")</script>';
    $updateChat = "UPDATE `mkc4`.`chat_table` SET `chat_content` = '$chat_box_data' WHERE `chat_table`.`name` = '$name'";
    mysqli_query($dbc, $updateChat);

    echo '';

    //echo $chat_box_data;

} else {
    // Not in the DB. Output that it was an error.
    //echo $name . $password . $chat_box_data;
    echo '"Username or Password is incorrect."';
}
?>