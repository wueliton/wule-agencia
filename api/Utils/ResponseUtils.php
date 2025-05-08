<?php

namespace Api\Utils;

use Api\Enums\HttpStatus;
use Psr\Http\Message\ResponseInterface;

class ResponseUtils
{
    public static function json(ResponseInterface $response, array $data, HttpStatus $status = HttpStatus::OK)
    {
        $response = $response->withHeader('Content-Type', 'application/json')->withStatus($status->value);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

        return $response;
    }
}