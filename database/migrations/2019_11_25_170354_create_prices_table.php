<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mark',100)->default(null);
            $table->string('model',100)->default(null);
            $table->date('year')->default(null);
            $table->string('carGeneration',100)->default(null);
            $table->string('engine',200)->default(null);
            $table->string('wheelDriveCar',200)->default(null);
            $table->string('body',200)->default(null);
            $table->integer('mileage')->default(null);
            $table->bigInteger('price')->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prices');
    }
}
