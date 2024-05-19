<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KeluhanController;
use App\Http\Controllers\KendaraanController;
use App\Http\Controllers\PegawaiController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index']);
Route::resource('pegawai', PegawaiController::class);
Route::resource('customer', CustomerController::class);
Route::resource('keluhan', KeluhanController::class);
Route::resource('kendaraan', KendaraanController::class);
