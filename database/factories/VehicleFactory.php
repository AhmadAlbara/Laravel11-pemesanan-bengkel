<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'no_pol' => strtoupper($this->faker->unique()->bothify('?? #### ??')),
            'no_mesin' => strtoupper($this->faker->unique()->bothify('##########')),
            'merek' => $this->faker->randomElement(['Honda ', 'Yamaha', 'Suzuki', 'Kawasaki', 'Other']),
            'warna' => $this->faker->randomElement(['White ', 'Black', 'Green', 'Blue', 'Red', 'Other']),
        ];
    }
}
