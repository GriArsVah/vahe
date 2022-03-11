<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    /* Кладём в переменую значения из HMTL */
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Birthday = $_POST['Birthday'];
    $Gender = $_POST['gender'];

    /* Выводим значения переменных */
    //echo $FirstName.'<br>'; /* Vahe */
    //echo $LastName.'<br>'; /* Grigoryan */
    //echo $Birthday.'<br>'; /* 1990-01-02 */
    //echo $Email.'<br>'; /* grigoryanvahe@inbox.ru */
    //echo $Gender.'<br>'; /* grigoryanvahe@inbox.ru */

    /* FirstName */
    if (empty($_POST["FirstName"])) {
        $nameErr = "Имя обязательно";
    } else {
        $name = test_input($_POST["FirstName"]);
    }

    function test_input($data) {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
}
