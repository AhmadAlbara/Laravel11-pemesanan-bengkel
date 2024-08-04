<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use App\Models\Problem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // In your DashboardController
    public function index()
    {
        $user = Auth::user();

        // Initialize default values
        $problemsCount = ['completed' => 0, 'pending' => 0, 'on_process' => 0];
        $activeEmployeesCount = 0;
        $productCount = 0;
        $employeeProblemsCount = 0;
        $customerProblems = [];

        if ($user->customer) {
            $problemsCount['completed'] = Problem::where('status', 'Completed')->count();
            $problemsCount['pending'] = Problem::where('status', 'Pending')->count();
            $problemsCount['on_proccess'] = Problem::where('status', 'On Proccess')->count();
            $activeEmployeesCount = Employe::where('status', 'active')->count();
            $customerProblems = Problem::where('customers_id', $user->customer->id)->get();
        }

        if ($user->employe) {
            $productCount = Product::count();
            $employeeProblemsCount = Problem::where('employes_id', $user->employe->id)->count();
        }

        return Inertia::render('Dashboard', [
            'problemsCount' => $problemsCount,
            'activeEmployeesCount' => $activeEmployeesCount,
            'productCount' => $productCount,
            'employeeProblemsCount' => $employeeProblemsCount,
            'customerProblems' => $customerProblems,
        ]);
    }

}
