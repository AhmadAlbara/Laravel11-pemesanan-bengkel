<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProblemRequest extends FormRequest
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
            'nama_keluhan' => 'sometimes|required|string|max:255',
            'ongkos' => 'sometimes|required|numeric|min:0',
            'status' => 'sometimes|required|string|in:Pending,On Progress,Completed',
            'no_pol' => 'sometimes|required|string|max:50',
            'customers_id' => 'sometimes|nullable|exists:customers,id',
            'employes_id' => 'sometimes|nullable|exists:employes,id',
        ];
    }
}
