<?php 
$gender = $_POST['maleorfemale'];
$age = $_POST['age'];
$email = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];
$host ="localhost";
$username ="ayo";
$password ="ayosco2000";
$dbname ="luban";

$conns =mysqli_connect($host, $username, $password, $dbname) or die("cannot connect");

$query =mysqli_query($conns, "INSERT INTO e_exam_table(name, email,password,age) VALUES('$name','$email','$password','$age')");

header("Location: ./home.php?name=".$name."");


?>