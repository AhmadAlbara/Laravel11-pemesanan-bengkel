<x-app-layout>
    <x-slot:title>Tambah Pegawai</x-slot:title>
    <div class="w-full px-4 py-5 bg-white shadow-md">
        <a href="{{ route('customer.index') }}"
            class="text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-600 "><i
                class="fa-solid fa-arrow-left"></i> Kembali</a>

        <h1 class="text-2xl font-bold text-center text-gray-800">Tambah Customer</h1>
        <form method="POST" action="{{ route('customer.store') }}" class="mt-5 ">
            @csrf

            <div class="mb-4">
                <label for="nama_customer" class="block mb-2 font-bold text-gray-700">
                    Nama Customer
                </label>
                <input type="text" name="nama_customer" id="nama_customer"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-4">
                <label for="alamat" class="block mb-2 font-bold text-gray-700">
                    Alamat
                </label>
                <textarea name="alamat" id="alamat"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required></textarea>
            </div>
            <div class="mb-4">
                <label for="jenis_kelamin" class="block mb-2 font-bold text-gray-700">
                    Jenis Kelamin
                </label>
                <div class="relative">
                    <select name="jenis_kelamin" id="jenis_kelamin"
                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                </div>
            </div>
            <button type="submit"
                class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Tambah Customer
            </button>
        </form>
    </div>
</x-app-layout>
