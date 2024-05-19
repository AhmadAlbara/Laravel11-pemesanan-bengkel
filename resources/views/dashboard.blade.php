<x-app-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center">
                <div class="text-3xl font-bold text-gray-800">Jumlah Pegawai</div>
                <div class="ml-auto text-xl font-bold text-gray-500"><i class="fa-solid fa-address-book"></i></div>
            </div>
            <div class="mt-4 text-2xl font-bold text-gray-600">
                <i class="text-xs fa-solid fa-plus"></i> {{ $pegawaiCount }}
            </div>
            <div class="mt-5 text-gray-500">
                Anda dapat melihat detail mengenai setiap pegawai, termasuk informasi alamat, jabatan, dan status aktif.
            </div>
            <div class="mt-5">
                <a href="{{ route('pegawai.index') }}"
                    class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-700">
                    Lihat Semua Pegawai
                </a>
            </div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center">
                <div class="text-3xl font-bold text-gray-800">Jumlah Customer</div>
                <div class="ml-auto text-xl font-bold text-gray-500"><i class="fa-solid fa-address-book"></i></div>
            </div>
            <div class="mt-4 text-2xl font-bold text-gray-600">
                <i class="text-xs fa-solid fa-plus"></i> {{ $customerCount }}
            </div>
            <div class="mt-5 text-gray-500">
                Anda dapat melihat detail mengenai setiap Customer, termasuk informasi alamat, dan status aktif.
            </div>
            <div class="mt-5">
                <a href="{{ route('customer.index') }}"
                    class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-700">
                    Lihat Semua Customer
                </a>
            </div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center">
                <div class="text-3xl font-bold text-gray-800">Jumlah Keluhan</div>
                <div class="ml-auto text-xl font-bold text-gray-500"><i class="fa-solid fa-book-skull"></i></div>
            </div>
            <div class="mt-4 text-2xl font-bold text-gray-600">
                <i class="text-xs fa-solid fa-plus"></i> {{ $keluhanCount }}
            </div>
            <div class="mt-4 text-gray-600">Anda dapat melihat detail mengenai setiap keluhan, termasuk informasi
                kendaran</div>
            <div class="mt-5">
                <a href="{{ route('keluhan.index') }}"
                    class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-700">
                    Lihat Semua Keluhan
                </a>
            </div>
        </div>
    </div>
    <div class="container p-6 mt-10 bg-white rounded-lg shadow-md">
        <div class="flex items-center mb-4">
            <div class="text-lg font-semibold ">Statistik Keluhan</div>
            <div class="ml-auto text-xl font-bold text-gray-500">
                <i class="fa-solid fa-chart-line"></i>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 " style="height: 300px;">
            @foreach ($monthlyKeluhan as $month => $count)
                @php
                    $percentage = $count * 10;
                @endphp
                <div class="flex flex-col items-center justify-end " style="height: 100%;">
                    <div class="bg-blue-600 rounded-lg" style="height: {{ $percentage }}%; width: 50%;"></div>
                    <div class="mt-2 text-sm percentage">{{ $percentage }}%</div>
                    <div class="mt-1 text-sm text-gray-600 label">{{ $month }}</div>
                </div>
            @endforeach
        </div>
    </div>
</x-app-layout>
