<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTradeInParserCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trade_in_parser_cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mark',150)->default(null);
            $table->string('model',150)->default(null);
            $table->string('equipment',150)->default(null);
            $table->string('img',150)->default(null);
            $table->bigInteger('price');
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
        Schema::dropIfExists('trade_in_parser_cars');
    }
}
