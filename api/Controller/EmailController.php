<?php
namespace Api\Controller;

use Api\Enums\HttpStatus;
use Api\Service\EmailService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Api\Utils\ResponseUtils;
use ReCaptcha\ReCaptcha;


class EmailController
{
    private $emailService;

    public function __construct()
    {
        $this->emailService = new EmailService();
    }

    public function sendEmail(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $name = htmlspecialchars($data['name'] ?? '');
        $email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
        $phone = htmlspecialchars($data['phone'] ?? '');
        $message = htmlspecialchars($data['message'] ?? '');
        $recaptchaCode = htmlspecialchars($data['token'] ?? '');
        $recaptchaSecret = $_ENV["RECAPTCHA_TOKEN"];
        $userIp = $request->getAttribute("ip_address");

        $recaptcha = new ReCaptcha($recaptchaSecret);
        $resp = $recaptcha->setExpectedAction("contactForm")->setScoreThreshold(0.5)->verify($recaptchaCode, $userIp);

        if ($resp->isSuccess()) {

            if ($email && $message && $name && $phone) {
                $result = $this->emailService->send($name, $email, $phone, $message);

                if ($result) {
                    $resData = ['message' => 'Enviado com sucesso'];
                    return ResponseUtils::json($response, $resData);
                }
                $resData = ['message' => 'Erro ao enviar o e-mail'];
                return ResponseUtils::json($response, $resData, HttpStatus::SERVICE_UNAVAILABLE);
            }
            $resData = ['message' => 'Dados inválidos'];
            return ResponseUtils::json($response, $resData, HttpStatus::BAD_REQUEST);
        } else {
            $resData = ["codes" => $resp->getErrorCodes(), "recaptcha" => $recaptchaCode, "secret" => $recaptchaSecret, "data" => $data];
            return ResponseUtils::json($response, $resData, HttpStatus::BAD_REQUEST);
        }
    }
}