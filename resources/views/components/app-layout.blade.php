<!DOCTYPE html>
<html lang="en" class="bg-gray-200">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Laravel Garage | {{ $title }}</title>
  <script src="https://kit.fontawesome.com/3d6dc94dfa.js" crossorigin="anonymous"></script>
  @vite('resources/css/app.css',)
</head>
<body>
  <div class="flex h-screen">
    <x-sidebar ></x-sidebar>
    <div class="flex flex-col flex-1 ">
      <x-navbar></x-navbar>
      <main class="p-5 overflow-y-auto inset-10">
        {{ $slot }}
      </main>
    </div>
  </div>

</body>
</html>
