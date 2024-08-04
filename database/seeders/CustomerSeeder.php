<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a user
        $user = User::create([
            'email' => 'customer@gmail.com',
            'password' => Hash::make('password123'), // Replace with your desired password
        ]);

        // Create a customer
        Customer::create([
            'id' => (string) Str::uuid(),
            'nama_customer' => 'John Doe',
            'alamat' => '123 Main Street',
            'jenis_kelamin' => 'l',
            'users_id' => $user->id,
            'status' => 'InActive',
        ]);
    }
}
