<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$name = htmlspecialchars($_POST['name'] ?? '');
$email = htmlspecialchars($_POST['email'] ?? '');
$mobile = htmlspecialchars($_POST['mobile'] ?? '');
$age = $_POST['age'] ?? '';
$height = $_POST['height'] ?? '';
$weight = $_POST['weight'] ?? '';
$education = $_POST['education'] ?? '';
$message = htmlspecialchars($_POST['message'] ?? '');

$form_type = $_POST['form_type'] ?? 'contact';
$mail = new PHPMailer(true);

try {

$mail->SMTPDebug = SMTP::DEBUG_OFF;
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->SMTPAuth = true;
$mail->Username = 'test@sobujfilms.com';
$mail->Password = 'Sobuj_DG@2026';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->setFrom('test@sobujfilms.com', 'Mailer');
$mail->addAddress('Sobujfilmsandtelevisionstudio@gmail.com');
$mail->addReplyTo($email, $name);

$mail->isHTML(true);



if ($form_type === "modal") {

$mail->Subject = "New Application From Modal Form";

$mail->Body = "
Name: $name <br>
Email: $email <br>
Phone: $mobile <br>
Age: $age <br>
Height: $height <br>
Weight: $weight <br>
Education: $education <br><br>
Message:<br>$message
";

} else {

$mail->Subject = "New Contact Message From Website";

$mail->Body = "
Name: $name <br>
Email: $email <br>
Phone: $mobile <br><br>
Message:<br>$message
";

}

if (isset($_FILES['cv']) && $_FILES['cv']['error'] === 0) {

$allowed = ['pdf','doc','docx'];
$filename = $_FILES['cv']['name'];
$file_ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

if (in_array($file_ext, $allowed)) {
$mail->addAttachment($_FILES['cv']['tmp_name'], $filename);
}

}

$mail->send();

echo 'Thank you for your message! We have received it and will get back to you soon.';

} catch (Exception $e) {

echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}

} else {

echo "Invalid request.";

}

?>