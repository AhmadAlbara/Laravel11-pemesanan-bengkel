<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Kendaraan;
use App\Models\Pegawai;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Keluhan>
 */
class KeluhanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $customers = Customer::pluck('id')->toArray();
        $pegawais = Pegawai::pluck('id')->toArray();
        $no_pol = Kendaraan::pluck('no_pol')->toArray();
        return [
            'nama_keluhan' => $this->faker->word,
            'ongkos' => $this->faker->randomNumber,
            'no_pol' => $this->faker->randomElement($no_pol),
            'customer_id' => $this->faker->randomElement($customers),
            'pegawai_id' => $this->faker->randomElement($pegawais),
            'created_at' => $this->faker->dateTimeBetween($startDate = 'first day of January', $endDate = 'now'),
            'updated_at' => $this->faker->dateTimeBetween($startDate = 'first day of January', $endDate = 'now'),

        ];
    }
}
