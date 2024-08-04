<?php

namespace App\Listeners;

use App\Livewire\Actions\Logout;
use Illuminate\Auth\Events\Logout as EventsLogout;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateCustomerStatusOnLogOut
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(EventsLogout $event): void
    {
        $user = $event->user;

        if ($user->customer) {
            $user->customer->update(['status' => 'Inactive']);
        }
    }
}
