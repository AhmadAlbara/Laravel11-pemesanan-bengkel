<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::latest()->get();
        return Inertia("Supplier/Suppliers", [
            "supplier" => $suppliers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia('Supplier/SupplierAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request)
    {
        Supplier::create($request->all());
        return redirect()->route('suppliers.index')->with('success', 'Supplier created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {

        $supplier = Supplier::with('products')->findOrFail($supplier->id);

        return Inertia('Supplier/SupplierShow', [
            'supplier' => $supplier,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        

        return Inertia('Supplier/SupplierEdit', [
           'supplier' => $supplier,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        $supplier->update($request->all());
        return redirect()->route('suppliers.index')->with('success', 'Supplier updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        try {
            $supplier->delete();
            return redirect()->route('suppliers.index')->with('success', 'Supplier deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('suppliers.index')->with('error', 'Failed to delete Supplier.');
        }
    }
}
