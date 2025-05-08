<?php

namespace Api\Controller;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Api\Utils\ResponseUtils;

class HealthController
{
    public function checkHealth(Request $request, Response $response)
    {
        $data = array('response' => 'ok');
        return ResponseUtils::json($response, $data);
    }
}