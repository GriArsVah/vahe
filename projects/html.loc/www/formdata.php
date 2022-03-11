<?php

//echo $_POST['name'];
//echo $_POST['password'];
//echo $_POST['sleep'];

$result = mail("@mail.ru","Анкета с сайта","С сайта была получена анкета с такими данными: \nИмя: $_POST[name] \nПароль: $_POST[password] \nСколько времени спит: $_POST[sleep] ");

if ($result) {
	echo "<p>Сообщение отправленно успешно</p>";
}
else {
	echo "<p>Сообщение НЕ отправленно</p>";
}

?>