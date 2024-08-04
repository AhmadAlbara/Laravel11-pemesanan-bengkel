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
        Schema::create('employes', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("nama_pegawai", length: 150);
            $table->text("alamat");
            $table->enum("jenis_kelamin", ['L', 'P']);
            $table->enum("jabatan", ['Engginer', 'SPV','Admin']);
            $table->enum("status", ['Active',"Inactive"]);
            $table->foreignId("users_id")->constrained()->onUpdate("cascade")->onDelete("cascade");
            $table->timestamps();
        });
    
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
