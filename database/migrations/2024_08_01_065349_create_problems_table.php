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
        Schema::create('problems', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("nama_keluhan", length: 150);
            $table->integer("ongkos");
            $table->enum("status", ['Pending', 'On Proccess', 'Completed']);
            $table->foreignUuid('no_pol')->references('no_pol')->on('vehicles')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignUuid("customers_id")->constrained()->onUpdate("cascade")->onDelete("cascade");
            $table->foreignUuid("employes_id")->nullable()->constrained()->onUpdate("cascade")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('problems');
    }
};
