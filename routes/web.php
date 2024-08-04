<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\ProblemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Auth/Login');
});


Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('/dashboard', [DashboardController::class, 'index'])->name("dashboard");
});
Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


  Route::resource('vehicles', VehicleController::class);


  Route::resource('problems', ProblemController::class);
});
Route::middleware(['auth', 'role.access:employe'])->group(function () {
  Route::resource('suppliers', SupplierController::class);
  Route::resource('products', ProductController::class);
  Route::resource('customers', CustomerController::class);
  Route::resource('employes', EmployeController::class);
  Route::post('/problems/{problem}/take-job', [ProblemController::class, 'takeJob']);
  Route::post('/problems/{id}/complete/{cost}', [ProblemController::class, 'completeJob']);
});



require __DIR__ . '/auth.php';
