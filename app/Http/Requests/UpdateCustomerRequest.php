<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCustomerRequest extends FormRequest
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
            'email' => [
                'required',
                'email',
                'max:255',
                // Ensuring that the email is unique, but ignoring the current user's email
                Rule::unique('users')->ignore($this->customer->users_id),
            ],
            'password' => 'nullable|confirmed|min:8',  // Password is optional
            'nama_customer' => 'required|string|max:150',
            'alamat' => 'required|string',
            'jenis_kelamin' => 'required|in:L,P',
            'status' => 'required|in:Active,Inactive',   
        ];
    }
}
