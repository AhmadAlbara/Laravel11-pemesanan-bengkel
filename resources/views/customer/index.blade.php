<x-app-layout>
    <x-slot:title>{{ $title }}</x-slot:title>
    <div class="w-full px-4 py-5 bg-white shadow-md">
        <a href="{{ route('customer.create') }}"
            class="px-4 py-3 text-white transition-all duration-200 ease-in-out bg-blue-600 hover:font-medium">Tambah
            Customer</a>
        <table class="w-full mt-5 text-sm text-left text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-blue-600">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nama Customer
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Alamat
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        Aksi
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr class="bg-white border-b">
                        <td class="px-6 py-4">
                            {{ $data->nama_customer }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $data->alamat }}
                        </td>
                        <td >
                            <div class="flex float-right gap-10">
                                <a href="{{ route('customer.show',$data) }}" class="transition-all duration-200 ease-in-out hover:text-blue-600"><i class="fa-solid fa-eye"></i></a>
                                <a href="{{ route('customer.edit',$data) }}" class="transition-all duration-200 ease-in-out hover:text-green-600"><i class="fa-solid fa-pen-to-square"></i></a>
                                <form action="{{ route('customer.destroy',$data) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="transition-all duration-200 ease-in-out hover:text-red-600"><i class="fa-solid fa-trash"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="mt-4">
            {{ $datas->onEachSide(1)->links('vendor.pagination.tailwind') }}
        </div>
    </div>
</x-app-layout>
