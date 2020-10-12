<?php

 $name = $_POST["name"];
 $email = $_POST["email"];
 $subject = $_POST["subject"];
 $content = $_POST["message"];

 $toEmail = "info@anli-design.ie";
 $mailHeaders = "From: " . $name . "<". $email . ">\r\n";
 
 mail($toEmail, $subject, $content, $mailHeaders)

?>
