<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use App\Http\Requests\StoreEmployeRequest;
use App\Http\Requests\UpdateEmployeRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employes = Employe::with('user')->get();

        return Inertia::render('Employe/Employes', [
            'employes' => $employes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Employe/EmployeAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeRequest $request)
    {
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Employe::create([
            'id' => (string) \Illuminate\Support\Str::uuid(),
            'nama_pegawai' => $request->nama_pegawai,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'jabatan' => $request->jabatan,
            'status' => $request->status,
            'users_id' => $user->id,
        ]);

        return redirect()->route('employes.index')->with('success', 'Employe added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employe $employe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employe $employe)
    {
        $employe = $employe->load('user');

        return Inertia('Employe/EmployeEdit', [
            'employe' => $employe,
            'user' => $employe->user,
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeRequest $request, Employe $employe)
    {
        $user = User::find($employe->users_id);

        if ($user) {
            $user->update([
                'email' => $request->email,
                'password' => $request->password ? Hash::make($request->password) : $user->password,
            ]);
        }

        $employe->update([
            'nama_pegawai' => $request->nama_pegawai,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'jabatan' => $request->jabatan,
            'status' => $request->status,
        ]);

        return redirect()->route('employes.index')->with('success', 'Employe updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employe $employe)
    {
        if (Auth::id() === $employe->users_id) {
     
            $user = $employe->user; 
            if ($user) {
                $user->delete();
            }

   
            $employe->delete();


            Auth::logout();


            return redirect()->route('login')->with('success', 'Your account has been deleted and you have been logged out.');
        }

        $employe->user()->delete();
        $employe->delete();

        return redirect()->route('employes.index')->with('success', 'Employe deleted successfully.');
    }
}
