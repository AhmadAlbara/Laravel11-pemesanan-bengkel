<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::with('user')->get();
        return Inertia('Customer/Customers', [
            'customers' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Customer/CustomerAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Customer::create([
            'id' => (string) \Illuminate\Support\Str::uuid(),
            'nama_customer' => $request->nama_customer,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'users_id' => $user->id,
            'status' => $request->status
        ]);

        return redirect()->route('customers.index')->with('success', 'Customer added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
      
        $customer = $customer->load('user');

        return Inertia('Customer/CustomerEdit', [
            'customer' => $customer,
            'user' => $customer->user, 
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $user = $customer->user;

        $user->email = $request->email;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        $customer->update([
            'nama_customer' => $request->nama_customer,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'status' => $request->status
        ]);

        return redirect()->route('customers.index')->with('success', 'Customer updated successfully.');
    }


    public function destroy(Customer $customer)
    {
        // Check if the customer being deleted is the currently authenticated user
        if (Auth::id() === $customer->users_id) {
            // Optionally, delete the associated user record
            $user = $customer->user; // Assuming `user` is the relationship defined in the Customer model
            if ($user) {
                $user->delete();
            }

            // Delete the customer record
            $customer->delete();

            // Log out the user
            Auth::logout();

            // Redirect to the home or login page
            return redirect()->route('login')->with('success', 'Your account has been deleted and you have been logged out.');
        }

        $customer->user()->delete();
        $customer->delete();

        return redirect()->route('customers.index')->with('success', 'Customer deleted successfully.');
    }

}
