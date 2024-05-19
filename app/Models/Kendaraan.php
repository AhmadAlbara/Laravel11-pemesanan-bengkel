<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kendaraan extends Model
{
    use HasFactory;
    protected $primaryKey = 'no_pol';
    protected $keyType = 'string';
    protected $fillable = [
        'no_pol',
        'no_mesin',
        'merek',
        'warna',
    ];

    public function Keluhan(){
        return $this->hasMany(Keluhan::class);
    }
}
