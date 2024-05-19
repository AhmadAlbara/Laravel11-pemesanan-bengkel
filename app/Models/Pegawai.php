<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_pegawai',
        'alamat',
        'jenis_kelamin',
        'jabatan',
        'status',
    ];
    public function Keluhan(){
        return $this->hasMany(Keluhan::class);
    }
}
