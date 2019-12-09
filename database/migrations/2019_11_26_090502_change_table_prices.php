<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeTablePrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('prices', function (Blueprint $table) {
            $table->bigInteger('mark')->default(null)->unsigned()->change();
            $table->foreign('mark')->references('id')->on('marks');

            $table->bigInteger('model')->default(null)->unsigned()->change();
            $table->foreign('model')->references('id')->on('models');

            $table->bigInteger('carGeneration')->default(null)->unsigned()->change();
            $table->foreign('carGeneration')->references('id')->on('car_generations');

            $table->bigInteger('engine')->default(null)->unsigned()->change();
            $table->foreign('engine')->references('id')->on('engines');

            $table->bigInteger('wheelDriveCar')->default(null)->unsigned()->change();
            $table->foreign('wheelDriveCar')->references('id')->on('wheel_drive_cars');

            $table->bigInteger('body')->default(null)->unsigned()->change();
            $table->foreign('body')->references('id')->on('bodies');

            $table->bigInteger('mileage')->default(null)->unsigned()->change();
            $table->foreign('mileage')->references('id')->on('mileages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prices', function (Blueprint $table) {
            //
        });
    }
}
