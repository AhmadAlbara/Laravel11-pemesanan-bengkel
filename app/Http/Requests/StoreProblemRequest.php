<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProblemRequest extends FormRequest
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
            'nama_keluhan' => 'required|string|max:255',
            'ongkos' => 'required|numeric|min:0',
            'status' => 'required|string|in:Pending,On Proccess,Completed',
            'no_pol' => 'required|string|max:255|exists:vehicles,no_pol', 
            'customers_id' => 'required|exists:customers,id',
        ];
    }
}
