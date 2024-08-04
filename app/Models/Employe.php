<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employe extends Model
{
    use HasFactory,HasUuids;

    protected $fillable = [
        'nama_pegawai', 'alamat', 'jenis_kelamin', 'jabatan', 'status', 'users_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "users_id");
    }
    public function problem(): HasMany
    {
        return $this->hasMany(Problem::class, 'employes_id', 'id');
    }

}
