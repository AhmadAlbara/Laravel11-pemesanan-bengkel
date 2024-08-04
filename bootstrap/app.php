<?php

use App\Http\Middleware\CheckAdmin;
use App\Http\Middleware\RoleAccessMiddleware;
use App\Http\Middleware\UpdateCustomerStatus;
use App\Http\Middleware\UpdateCustomerStatusOnLogout;
use App\Http\Middleware\UpdateEmployeStatus;
use App\Http\Middleware\UpdateEmployeStatusOnLogout;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            UpdateEmployeStatus::class,
            UpdateEmployeStatusOnLogout::class,
            UpdateCustomerStatus::class,
            UpdateCustomerStatusOnLogout::class,


        ]);
        $middleware->alias([
            'role.access' => RoleAccessMiddleware::class,
        ]);


        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
