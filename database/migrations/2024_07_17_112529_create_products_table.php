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
        Schema::create('products', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("product_name",length:150);
            $table->string("brand",length:100);
            $table->integer("price");
            $table->integer("stock");
            $table->foreignUuid("suppliers_id")->constrained()->onUpdate("cascade")->onDelete("cascade");
            $table->string("unit",length:10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
