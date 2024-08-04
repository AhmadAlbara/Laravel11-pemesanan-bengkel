<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'no_pol' => [
                'required',
                Rule::unique('vehicles')->ignore($this->vehicle->no_pol, 'no_pol'),
            ],
            'no_mesin' => [
                'required',
                Rule::unique('vehicles')->ignore($this->vehicle->no_mesin, 'no_mesin'),
            ],
            'merek' => 'required|in:Honda,Yamaha,Suzuki,Kawasaki,Other',
            'warna' => 'required|in:White,Black,Green,Blue,Red,Other',
        ];
           
    }
}
