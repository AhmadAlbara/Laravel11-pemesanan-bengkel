<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
   
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'nama_customer' => 'required|string|max:150',
            'alamat' => 'required|string',
            'jenis_kelamin' => 'required|in:L,P',
        ]);

        $user = User::create([

            'email' => $request->email,
            'password' => Hash::make($request->password),

        ]);
        event(new Registered($user));
        
        Customer::create([
            'id' => (string) \Illuminate\Support\Str::uuid(),
            'nama_customer' => $request->nama_customer,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'users_id' => $user->id,
        ]);

     

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
