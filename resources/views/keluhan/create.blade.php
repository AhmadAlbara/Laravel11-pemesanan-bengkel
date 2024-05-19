<x-app-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    <div class="w-full px-4 py-5 bg-white shadow-md">
        <a href="{{ route('keluhan.index') }}"
            class="text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-600 "><i
                class="fa-solid fa-arrow-left"></i> Kembali</a>

        <h1 class="text-2xl font-bold text-center text-gray-800">Tambah Keluhan</h1>
        <form method="POST" action="{{ route('keluhan.store') }}" class="mt-5 ">
            @csrf

            <div class="mb-4">
                <label for="nama_keluhan" class="block mb-2 font-bold text-gray-700">
                    Nama Keluhan
                </label>
                <input type="text" name="nama_keluhan" id="nama_keluhan"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required>
            </div>

            <div class="mb-4">
                <label for="ongkos" class="block mb-2 font-bold text-gray-700">
                    Onkos
                </label>
                <input type="number" name="ongkos" id="ongkos"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required>
            </div>

            <div class="mb-4">
                <label for="no_pol" class="block mb-2 font-bold text-gray-700">
                    Pilih No kendaraan
                </label>
                <div class="relative">
                    <select name="no_pol" id="no_pol"
                        class="block w-full px-4 py-3 pr-8 mb-5 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        @foreach ($kendaraan as $data)
                            <option value="{{ $data->no_pol }}">{{ $data->no_pol }}</option>
                        @endforeach
                    </select>
                    <a href="{{ route('kendaraan.create') }}"
                        class="text-blue-600 underline underline-offset-8">Tambahkan Kendaraan jika tidak
                        tersedia di list</a>
                </div>
            </div>

            <div class="mb-4">
                <label for="customer_id" class="block mb-2 font-bold text-gray-700">
                    Customer
                </label>
                <div class="relative">
                    <select name="customer_id" id="customer_id"
                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        @foreach ($customer as $data)
                            <option value="{{ $data->id }}">{{ $data->nama_customer }}</option>
                        @endforeach
                    </select>

                </div>
            </div>
            <div class="mb-4">
                <label for="pegawai_id" class="block mb-2 font-bold text-gray-700">
                    Pegawai {{ '(Tersedia)' }}
                </label>
                <div class="relative">
                    <select name="pegawai_id" id="pegawai_id"
                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        @foreach ($pegawai as $data)
                            <option value="{{ $data->id }}">{{ $data->nama_pegawai }}</option>
                        @endforeach

                    </select>

                </div>
            </div>


            <button type="submit"
                class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Tambah Keluhan
            </button>

        </form>
    </div>
</x-app-layout>
