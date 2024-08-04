<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Customer extends Model
{
    use HasFactory,HasUuids;

    protected $fillable = [
        'nama_customer',
        'alamat',
        'jenis_kelamin',
        'users_id',
        'status'
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "users_id");
    }
    public function problem(): HasMany
    {
        return $this->hasMany(Problem::class, 'customers_id', 'id');
    }

}
