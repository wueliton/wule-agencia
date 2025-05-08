<?php
namespace Api\Service;

use Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class EmailService
{
    private $twig;

    public function __construct()
    {
        $loader = new FilesystemLoader(__DIR__ . '/../templates');
        $this->twig = new Environment($loader);
    }

    public function send(string $name, string $email, string $phone, string $message)
    {
        $mail = new PHPMailer(true);
        $env = $_ENV["APP_ENV"];
        $debug = $env === "development" ? 1 : 0;

        try {
            $mail->isSMTP();
            $mail->SMTPDebug = $debug;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'tls';
            $mail->Host = $_ENV["SMTP_HOST"];
            $mail->Port = $_ENV["SMTP_PORT"];
            $mail->Username = $_ENV["SMTP_USERNAME"];
            $mail->Password = $_ENV["SMTP_PASSWORD"];
            $mail->SetFrom($_ENV["SMTP_FROM"]);
            $mail->addAddress($_ENV["SMTP_FROM"]);
            $mail->addReplyTo($email);
            $mail->IsHTML(true);

            $emailContent = $this->twig->render("contact_email.html", [
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'message' => nl2br(htmlspecialchars($message))
            ]);

            $mail->Subject = "Novo contato no site";
            $mail->Body = $emailContent;
            $mail->send();
            return true;
        } catch (Exception $e) {
            error_log("Erro ao enviar o e-mail: {$mail->ErrorInfo}");
            return false;
        }
    }
}