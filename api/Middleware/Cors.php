<?php

namespace Api\Middleware;

use Tuupola\Middleware\CorsMiddleware;

class Cors
{
    public static function create(): CorsMiddleware
    {
        $env = $_ENV["APP_ENV"];
        $isDevEnv = $env === "development";
        $origins = $isDevEnv ? ["http://localhost"] : ["https://agenciawule.com.br"];

        return new CorsMiddleware([
            "origin" => $origins,
            "methods" => ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "headers.allow" => ["Content-Type", "Authorization"],
            "headers.expose" => [],
            "credentials" => true,
            "cache" => 0,
        ]);
    }
}