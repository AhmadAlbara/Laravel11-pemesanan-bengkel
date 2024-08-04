<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a user
        $user = User::create([
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password123'), // Replace with your desired password
        ]);

        // Create an employe
        Employe::create([
            'id' => (string) Str::uuid(),
            'nama_pegawai' => 'Admin',
            'alamat' => '456 Another Street',
            'jenis_kelamin' => 'L', 
            'jabatan' => 'Admin', 
            'status' => 'InActive', 
            'users_id' => $user->id,
        ]);
    }
}
