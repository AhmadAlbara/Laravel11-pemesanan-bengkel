<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{
    use HasFactory;

    protected $primaryKey = 'no_pol';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'no_pol',
        'no_mesin',
        'merek',
        'warna',
    ];

    public function problem(): HasMany
    {
        return $this->hasMany(Problem::class, 'no_pol', 'no_pol');
    }
}
