<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
      public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        // Check if user is logged in and has one of the required roles
        if ($user && in_array($user->role, $roles)) {
            return $next($request);
        }

        // Redirect to home or another page if access is denied
        return redirect('dashboard');
    }
}