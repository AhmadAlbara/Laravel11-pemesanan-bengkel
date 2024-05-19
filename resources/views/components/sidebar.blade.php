<aside class="p-5 overflow-hidden bg-white shadow w-52 ">
    <div class="space-y-10 text-center">
        <a href="/" class="text-2xl font-bold tracking-tighter">Laravel <span class="text-blue-600">Garage</span>
        </a>
        <div class="flex flex-col gap-2">

            <x-side-link href="/" :active="request()->is('/')">
                <i class="fa-solid fa-gauge"></i> Dashboard
            </x-side-link>

            <x-side-link href="/pegawai" :active="request()->is('pegawai', 'pegawai/*')">
                <i class="fa-solid fa-user"></i> Pegawai
            </x-side-link>
            <x-side-link href="/customer" :active="request()->is('customer', 'customer/*')">
                <i class="fa-solid fa-universal-access"></i> Customer
            </x-side-link>
            <x-side-link href="/keluhan" :active="request()->is('keluhan', 'keluhan/*')">
                <i class="fa-solid fa-exclamation"></i> Keluhan
            </x-side-link>

        </div>
    </div>
</aside>
