<?php

namespace Database\Seeders;

use App\Models\Keluhan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KeluhanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          Keluhan::factory()->count(20)->create();
    }
}
