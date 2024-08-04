<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
    ];

    public function customer(): HasOne
    {
        return $this->hasOne(Customer::class, 'users_id');
    }
    public function employe(): HasOne
    {
        return $this->hasOne(Employe::class, 'users_id');
    }

   
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    public function getRoleAttribute()
    {
        if ($this->employe) {
            return 'employe';
        } elseif ($this->customer) {
            return 'customer';
        }
        return 'guest'; // Default role
    }

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
