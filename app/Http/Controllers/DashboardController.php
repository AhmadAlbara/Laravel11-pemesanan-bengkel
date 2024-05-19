<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Keluhan;
use App\Models\Pegawai;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $pegawaiCount = Pegawai::count();
        $customerCount = Customer::count();
        $keluhanCount = Keluhan::count();

        // Initialize an array to hold the complaint counts per month
        $monthlyKeluhan = [
            'Jan' => 0,
            'Feb' => 0,
            'Mar' => 0,
            'Apr' => 0,
            'May' => 0,
            'Jun' => 0,
            'Jul' => 0,
            'Aug' => 0,
            'Sep' => 0,
            'Oct' => 0,
            'Nov' => 0,
            'Dec' => 0,
        ];

        // Get all complaints and group them by month
        $keluhanByMonth = Keluhan::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupBy('month')
            ->get();

        // Populate the monthlyKeluhan array with the counts
        foreach ($keluhanByMonth as $keluhan) {
            switch ($keluhan->month) {
                case 1:
                    $monthlyKeluhan['Jan'] = $keluhan->count;
                    break;
                case 2:
                    $monthlyKeluhan['Feb'] = $keluhan->count;
                    break;
                case 3:
                    $monthlyKeluhan['Mar'] = $keluhan->count;
                    break;
                case 4:
                    $monthlyKeluhan['Apr'] = $keluhan->count;
                    break;
                case 5:
                    $monthlyKeluhan['May'] = $keluhan->count;
                    break;
                case 6:
                    $monthlyKeluhan['Jun'] = $keluhan->count;
                    break;
                case 7:
                    $monthlyKeluhan['Jul'] = $keluhan->count;
                    break;
                case 8:
                    $monthlyKeluhan['Aug'] = $keluhan->count;
                    break;
                case 9:
                    $monthlyKeluhan['Sep'] = $keluhan->count;
                    break;
                case 10:
                    $monthlyKeluhan['Oct'] = $keluhan->count;
                    break;
                case 11:
                    $monthlyKeluhan['Nov'] = $keluhan->count;
                    break;
                case 12:
                    $monthlyKeluhan['Dec'] = $keluhan->count;
                    break;
            }
        }

        return view('dashboard', [
            'title' => 'Home Page',
            'pegawaiCount' => $pegawaiCount,
            'customerCount' => $customerCount,
            'keluhanCount' => $keluhanCount,
            'monthlyKeluhan' => $monthlyKeluhan,
        ]);
    }
}
