<x-app-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    <div class="w-full px-4 py-5 bg-white shadow-md">
        <div class="flex items-center justify-between">
            <a href="{{ route('customer.index') }}"
                class="text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-600 "><i
                    class="fa-solid fa-arrow-left"></i> Kembali</a>
            <button class="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded hover:bg-blue-700" onclick="printPage()"><i class="fa-solid fa-file-pdf"></i> Cetak PDF</button>
        </div>
        <div id="print-area" class="mt-4">
            <h1 class="my-4 text-2xl font-bold">{{ $customer->nama_customer }}</h1>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <p><strong>Alamat:</strong> {{ $customer->alamat }}</p>
                    <p><strong>Jenis Kelamin:</strong> {{ $customer->jenis_kelamin }}</p>

                </div>
                <div>

                    <p><strong>Tanggal Masuk:</strong> {{ $customer->created_at }}</p>
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
