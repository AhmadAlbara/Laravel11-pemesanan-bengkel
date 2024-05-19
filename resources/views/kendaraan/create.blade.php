<x-app-layout>
    <x-slot:title>Tambah Pegawai</x-slot:title>
    <div class="w-full px-4 py-5 bg-white shadow-md">
        <a href="{{ route('keluhan.create') }}"
            class="text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-600 "><i
                class="fa-solid fa-arrow-left"></i> Kembali</a>

        <h1 class="text-2xl font-bold text-center text-gray-800">Tambah Kendaraan</h1>
        <form method="POST" action="{{ route('kendaraan.store') }}" class="mt-5 ">
            @csrf
            <div class="mb-4">
                <label for="no_pol" class="block mb-2 font-bold text-gray-700">
                    No KB
                </label>
                <input type="text" name="no_pol" id="no_pol"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-4">
                <label for="no_mesin" class="block mb-2 font-bold text-gray-700">
                    No Mesin
                </label>
                <input type="text" name="no_mesin" id="no_mesin"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-4">
                <label for="merek" class="block mb-2 font-bold text-gray-700">
                    Jenis Kelamin
                </label>
                <div class="relative">
                    <select name="merek" id="merek"
                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        <option value="honda">Honda</option>
                        <option value="yamaha">Yamaha</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="kawasaki">Kawasaki</option>
                        <option value="lain">Lain-Lain</option>
                    </select>
                </div>
            </div>
            <div class="mb-4">
                <label for="warna" class="block mb-2 font-bold text-gray-700">
                    Warna Kendaraan
                </label>
                <div class="relative">
                    <select name="warna" id="warna"
                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-600"
                        required>
                        <option value="putih">Putih</option>
                        <option value="hitam">Hitam</option>
                        <option value="hijau">Hijau</option>
                        <option value="biru">Biru</option>
                        <option value="merah">Merah</option>
                        <option value="lain">Lain-Lain</option>
                    </select>
                </div>
            </div>
            <button type="submit"
            class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Tambah Kendaraan
        </button>
        </form>
    </div>
</x-app-layout>
