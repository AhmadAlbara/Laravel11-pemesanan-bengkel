<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'product_name',
        'brand',
        'price',
        'stock',
        'unit',
        'suppliers_id',
    ];

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class, "suppliers_id");
    }
}
