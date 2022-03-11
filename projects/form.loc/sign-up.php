<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    /* Кладём в переменую значения из HMTL */
    $login = $_POST['login'];
    $password = $_POST['password'];

    /* Выводим значения переменных */
    echo $login.'<br>'; /* Vahe */
    echo $password; /* Grigoryan */
}
?>