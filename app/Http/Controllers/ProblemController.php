<?php

namespace App\Http\Controllers;

use App\Models\Problem;
use App\Http\Requests\StoreProblemRequest;
use App\Http\Requests\UpdateProblemRequest;

use App\Models\Vehicle;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class ProblemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        if ($user->customer) {
            $problems = Problem::where('customers_id', $user->customer->id)->get();
        } elseif ($user->employe) {
       
            $problems = Problem::all();
        } else {
          
            $problems = collect(); 
        }

        return Inertia("Problem/Problems", [
            'problems' => $problems,
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vehicles = Vehicle::all();
        return Inertia("Problem/ProblemAdd", compact("vehicles"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProblemRequest $request)
    {
        $validated = $request->validated();


       Problem::create([
            'nama_keluhan' => $validated['nama_keluhan'],
            'ongkos' => $validated['ongkos'],
            'status' => $validated['status'], 
            'no_pol' => $validated['no_pol'],
            'customers_id' => $validated['customers_id'],
            'employes_id' => null, 
        ]);
        return redirect()->route('problems.index')->with('success', 'Problem added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Problem $problem)
    {
        //
    }

    public function takeJob($id)
    {
        $problem = Problem::findOrFail($id);
        $user = Auth::user();

        if ($user->employe && $problem->status === 'Pending') {
            $problem->update([
                'employes_id' => $user->employe->id,
                'status' => 'On Proccess',
            ]);

        
            return redirect()->route('problems.index')->with('success', 'Problem added successfully!');
        }

        return redirect()->route('problems.index')->with('success', 'Problem added successfully!');
    }

    public function completeJob($id, $cost)
    {
        $problem = Problem::findOrFail($id);
        $user = Auth::user();

        if ($user->employe && $problem->status === 'On Proccess') {
            $problem->update([
                'status' => 'Completed',
                'ongkos' => $cost,  
            ]);

            return redirect()->route('problems.index')->with('success', 'Problem  successfully!');
        }

        return redirect()->route('problems.index')->with('fail', 'Problem  fail!');
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Problem $problem)
    {
        $vehicles = Vehicle::all(); // To provide a list of vehicles in the edit form
        return Inertia("Problem/ProblemEdit", [
            'problem' => $problem,
            'vehicles' => $vehicles
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProblemRequest $request, Problem $problem)
    {
        $validated = $request->validated();

        $problem->update([
            'nama_keluhan' => $validated['nama_keluhan'],
            'ongkos' => $validated['ongkos'],
            'status' => $validated['status'],
            'no_pol' => $validated['no_pol'],
            'customers_id' => $validated['customers_id'],
        ]);

        return redirect()->route('problems.index')->with('success', 'Problem updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Problem $problem)
    {
        $problem->delete();

        return redirect()->route('problems.index')->with('success', 'Problem deleted successfully!');
    }

}
