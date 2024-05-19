<a {{ $attributes }} class="{{ $active ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-blue-600 hover:text-white' }} w-full py-3 rounded-lg transition-all ease-in-out duration-150"
    aria-current="page">
    {{ $slot }}
</a>
