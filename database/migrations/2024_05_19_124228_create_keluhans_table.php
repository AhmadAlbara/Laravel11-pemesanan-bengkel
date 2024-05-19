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
        Schema::create('keluhans', function (Blueprint $table) {
            $table->id();
            $table->text('nama_keluhan')->nullable();
            $table->integer('ongkos')->nullable();
            $table->foreignUuid('no_pol')->references('no_pol')->on('kendaraans')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('customer_id')->references('id')->on('customers')->cascadeOnUpdate()->cascadeOnDelete();;
            $table->foreignId('pegawai_id')->references('id')->on('pegawais')->cascadeOnUpdate()->cascadeOnDelete();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keluhans');
    }
};
