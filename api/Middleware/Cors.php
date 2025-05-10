<?php

namespace Api\Middleware;

use Tuupola\Middleware\CorsMiddleware;

class Cors
{
    public static function create(): CorsMiddleware
    {
        $env = $_ENV["APP_ENV"];
        $isDevEnv = $env === "development";
        $origins = $isDevEnv ? ["*"] : ["*"];

        return new CorsMiddleware([
            "origin" => $origins,
            "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            "headers.allow" => ["Content-Type", "Authorization", "Host"],
            "headers.expose" => [],
            "credentials" => true,
            "cache" => 0,
        ]);
    }
}