<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keluhan extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_keluhan',
        'ongkos',
        'no_pol',
        'customer_id',
        'pegawai_id',
    ];

    public function Kendaraan(){
        return $this->belongsTo(Kendaraan::class,'no_pol');
    }
    public function Customer(){
        return $this->belongsTo(Customer::class);
    }
    public function Pegawai(){
        return $this->belongsTo(Pegawai::class);
    }
}
