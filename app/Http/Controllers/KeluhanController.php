<?php

namespace App\Http\Controllers;

use App\Models\Keluhan;
use App\Http\Requests\StoreKeluhanRequest;
use App\Http\Requests\UpdateKeluhanRequest;
use App\Models\Customer;
use App\Models\Kendaraan;
use App\Models\Pegawai;

class KeluhanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = Keluhan::with(['Kendaraan', 'Customer', 'Pegawai'])->orderBy('created_at', 'desc')->get();

        return view('keluhan.index', compact('datas'), ['title' => 'Keluhan Page']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kendaraan = Kendaraan::all();
        $customer = Customer::all();
        $pegawai = Pegawai::where('status', 'aktif')->get();
        return view('keluhan.create', ['title' => 'Keluhan Create', 'kendaraan' => $kendaraan, 'customer' => $customer, 'pegawai' => $pegawai]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKeluhanRequest $request)
    {

        Keluhan::create($request->validated());
        return redirect()->route('keluhan.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Keluhan $keluhan)
    {
        $kendaraan = $keluhan->Kendaraan;
        $customer = $keluhan->Customer;
        $pegawai = $keluhan->Pegawai;
        return view('keluhan.show', compact('keluhan', 'kendaraan', 'customer', 'pegawai'), ['title' => 'Keluhan Detail']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Keluhan $keluhan)
    {
        $kendaraan = $keluhan->Kendaraan;
        $customer = $keluhan->Customer;
        $pegawai = $keluhan->Pegawai;
        return view('keluhan.edit', compact('keluhan', 'kendaraan', 'customer', 'pegawai'), ['title' => "Keluhan Edit"]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKeluhanRequest $request, Keluhan $keluhan)
    {
        $keluhan->update($request->validated());
        return redirect()->route('keluhan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Keluhan $keluhan)
    {
        $keluhan->delete();
        return redirect()->route('keluhan.index');
    }
}
