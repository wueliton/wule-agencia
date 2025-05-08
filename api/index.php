<?php
require __DIR__ . '/vendor/autoload.php';

use Api\Controller\EmailController;
use Api\Controller\HealthController;
use Api\Middleware\Cors;
use Dotenv\Dotenv;
use Slim\Factory\AppFactory;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$app = AppFactory::create();

$app->add(Cors::create());

$app->setBasePath("/api");

$app->addBodyParsingMiddleware();

$app->addRoutingMiddleware();

$app->addErrorMiddleware(true, true, true);

// Rota para envio de e-mail
$app->post('/contact', [new EmailController(), 'sendEmail']);

$app->get('/health', [new HealthController(), 'checkHealth']);

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($request, $response) {
    $data = array('response' => 'Not Found', 'statusCode' => 404);
    $payload = json_encode($data);

    $response->getBody()->write($payload);
    return $response->withHeader('Content-Type', 'application/json')
        ->withStatus(404);
});

// Rodar a aplicação
$app->run();
