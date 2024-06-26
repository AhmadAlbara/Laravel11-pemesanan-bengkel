<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kendaraan>
 */
class KendaraanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'no_pol' => fake()->randomNumber(),
            'no_mesin' => fake()->randomNumber(),
            'merek' => fake()->randomElement(['honda', 'yamaha', 'suzuki','kawasaki','lain']),
            'warna' => fake()->randomElement(['putih', 'hitam','hijau','biru','merah','lain']),
        ];
    }
}
