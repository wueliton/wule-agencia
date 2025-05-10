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

// Rota para envio de e-mail
$app->post('/contact', [new EmailController(), 'sendEmail']);

$app->get('/health', [new HealthController(), 'checkHealth']);

$app->addErrorMiddleware(true, true, true);

// Rodar a aplicação
$app->run();
