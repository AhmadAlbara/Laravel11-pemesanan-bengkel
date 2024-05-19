<x-app-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    <div class="mb-4">
        <a href="{{ route('keluhan.create') }}"
            class="px-4 py-2 text-white transition-all duration-200 ease-in-out bg-blue-600 hover:bg-blue-700">Buat
            Keluhan</a>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        @foreach ($datas as $data)
            <div class="p-4 bg-white rounded shadow-md">
                <h2 class="mb-2 text-xl font-bold">{{ $data->nama_keluhan }}</h2>
                <p class="mb-2">Ongkos: {{ number_format($data->ongkos, 0, ',', '.') }} Rp</p>
                <p class="mb-2">Kendaraan: {{ $data->Kendaraan->no_pol }} | {{ $data->Kendaraan->no_mesin }}</p>
                <p class="mb-2">Customer: {{ $data->Customer->nama_customer }}</p>
                <p class="mb-2">Pegawai: {{ $data->Pegawai->nama_pegawai }}</p>
                <p class="mb-2">Tanggal Masuk: {{ $data->created_at }}</p>
                <div class="flex float-right gap-5 mt-4 text-gray-500">
                    <a href="{{ route('keluhan.show', $data) }}"
                        class="transition-all duration-200 ease-in-out hover:text-blue-600"><i
                            class="fa-solid fa-eye"></i></a>
                    <a href="{{ route('keluhan.edit',$data) }}" class="transition-all duration-200 ease-in-out hover:text-green-600"><i
                            class="fa-solid fa-pen-to-square"></i></a>
                    <form action="{{ route('keluhan.destroy',$data) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="transition-all duration-200 ease-in-out hover:text-red-600"><i
                                class="fa-solid fa-trash"></i></button>
                    </form>
                </div>
            </div>
        @endforeach
    </div>

</x-app-layout>
