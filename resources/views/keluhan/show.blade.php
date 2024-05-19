<x-app-layout>
    <x-slot:title>{{ $keluhan->nama_keluhan }}</x-slot:title>

    <div class="w-full px-4 py-5 bg-white shadow-md" >
        <div class="flex items-center justify-between">
            <a href="{{ route('keluhan.index') }}"
                class="text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-600 "><i
                    class="fa-solid fa-arrow-left"></i> Kembali</a>
            <button class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded hover:bg-blue-700" onclick="printPage()"><i class="fa-solid fa-file-pdf"></i> Cetak PDF</button>
        </div>
        <div id="print-area">
            <h1 class="mb-5 text-2xl font-bold">Detail Keluhan</h1>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="nama_keluhan">
                        Nama Keluhan
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $keluhan->nama_keluhan }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="ongkos">
                        Ongkos
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        Rp :    {{ number_format($keluhan->ongkos, 0, ',', '.') }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="no_pol">
                        No Polisi
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $kendaraan->no_pol }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="no_pol">
                        No Mesin
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $kendaraan->no_mesin }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="no_pol">
                        Nama Pabrik Kendaraan
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $kendaraan->merek }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="no_pol">
                        Warna Kendaraan
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $kendaraan->warna }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="no_pol">
                        Warna Kendaraan
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $kendaraan->warna }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="customer_id">
                        Customer
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $customer->nama_customer }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="customer_id">
                        Alamat Customer
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $customer->alamat }}
                    </p>
                </div>
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="pegawai_id">
                        Pegawai
                    </label>
                    <p class="p-2 border border-gray-300 rounded">
                        {{ $pegawai->nama_pegawai }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <script>
        function printPage() {
            var printArea = document.getElementById("print-area");
            var printContent = printArea.outerHTML;
            var originalContent = document.body.innerHTML;
            document.body.innerHTML = printContent;
            window.print();
            document.body.innerHTML = originalContent;
        }
    </script>
</x-app-layout>
