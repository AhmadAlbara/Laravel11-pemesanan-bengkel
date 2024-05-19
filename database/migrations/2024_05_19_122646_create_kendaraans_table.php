<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kendaraans', function (Blueprint $table) {

            $table->string('no_pol', length: 10)->primary();
            $table->string('no_mesin', length: 15)->nullable();
            $table->enum('merek',['honda','yamaha','suzuki','kawasaki','lain'])->nullable();
            $table->enum('warna',['putih','hitam','hijau','biru','merah','lain'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kendaraans');
    }
};
