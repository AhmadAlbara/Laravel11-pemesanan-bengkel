<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'supplier_name',
        'address',
        'phone_number',
    ];
    public function products(): HasMany
    {
        return $this->hasMany(Product::class, "suppliers_id");
    }
}
