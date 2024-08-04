<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Employe;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $user1 = User::create([
            'email' => 'customer@gmail.com',
            'password' => Hash::make('password123'), // Replace with your desired password
        ]);

        // Create a customer
        Customer::create([
            'id' => (string) Str::uuid(),
            'nama_customer' => 'John Doe',
            'alamat' => '123 Main Street',
            'jenis_kelamin' => 'l',
            'users_id' => $user1->id,
            'status' => 'InActive',
        ]);
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
