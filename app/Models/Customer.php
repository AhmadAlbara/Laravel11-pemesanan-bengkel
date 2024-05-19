<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_customer',
        'alamat',
        'jenis_kelamin',

    ];
    public function Keluhan(){
        return $this->hasMany(Keluhan::class);
    }
}
