<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Problem extends Model
{
    use HasFactory,HasUuids;

    protected $fillable = [
        'nama_keluhan',
        'ongkos',
        'status',
        'no_pol',
        'customers_id',
        'employes_id',
    ];
    /**
     * Get the vehicle associated with the problem.
     */
    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class, 'no_pol', 'no_pol');
    }

    /**
     * Get the customer associated with the problem.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customers_id', 'id');
    }

    /**
     * Get the employe associated with the problem.
     */
    public function employe(): BelongsTo
    {
        return $this->belongsTo(Employe::class, 'employes_id', 'id');
    }
}
