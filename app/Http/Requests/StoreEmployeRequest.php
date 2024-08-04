<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeRequest extends FormRequest
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
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'nama_pegawai' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:L,P',
            'jabatan' => 'required|string|max:255',
            'status' => 'required|in:Active,Inactive',
        ];
    }
}
