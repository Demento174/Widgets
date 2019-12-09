<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Item;
use App\Body;
use App\CarGeneration;
use App\Engine;
use App\Marks;
use App\Models;
use App\WheelDriveCar;
use App\Year;
use App\Mileage;
use App\Price;
use function Psy\debug;

class ParseController extends Controller
{
    public function index()
    {
        try{
            DB::table('items')->orderBy('id')->chunk(100, function ($items) {
                foreach ($items as $item) {
                    if($this->fieldUniqueness('App\Marks',$item->mark,'mark'))
                    {
                        $newRow = new Marks();
                        $newRow->mark = $item->mark;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->mark.' Mark добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\Models',$item->model,'model'))
                    {
                        $newRow = new Models();
                        $newRow->model = $item->model;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->model.' Model добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\Year',$item->year,'year'))
                    {
                        $newYear = new Year();
                        $newYear->year = $item->year;
                        $newYear->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->year.' Year добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\CarGeneration',$item->car_generation,'carGeneration'))
                    {
                        $newRow = new CarGeneration();
                        $newRow->carGeneration = $item->car_generation;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->car_generation.' 	car_generation добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\Engine',$item->engine,'engine'))
                    {
                        $newRow = new Engine();
                        $newRow->engine = $item->engine;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->engine.' 	engine добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\WheelDriveCar',$item->wheel_drive_car,'wheelDriveCar'))
                    {
                        $newRow = new WheelDriveCar();
                        $newRow->wheelDriveCar = $item->wheel_drive_car;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->wheel_drive_car.' wheel_drive_car добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\Body',$item->body,'body'))
                    {
                        $newRow = new Body();
                        $newRow->body = $item->body;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->body.' body добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }

                    if($this->fieldUniqueness('App\Mileage',$item->mileage,'mileage'))
                    {
                        $newRow = new Mileage();
                        $newRow->mileage = $item->mileage;
                        $newRow->save();
                        /*----------------[ START ]----------------*/
                        echo "<pre>";
                        var_dump($item->mileage.' mileage добавлена в базу');
                        echo "</pre>";
                        /*----------------[ END ]----------------*/
                    }
                }
            });
            /*----------------[ START ]----------------*/
            echo "<pre>";
            var_dump('<h1>Закончено</h1>');
            echo "</pre>";
            /*----------------[ END ]----------------*/
        }catch (Exception $e)
        {
           dd(new \Exception($e));
        }

    }

    public function record()
    {



        $this->truncateTable('prices');
        try
        {
            DB::table('items')->orderBy('id')->chunk(100, function ($items) {
                foreach ($items as $item) {
                    $newRow = new Price();
                    $mark = Marks::where('mark',$item->mark)->first();
                    $model = Models::where('model',$item->model)->first();
                    $year = Year::where('year',$item->year)->first();
                    $carGeneration  = CarGeneration::where('carGeneration',$item->car_generation)->first();
                    $engine = Engine::where('engine',$item->engine)->first();
                    $wheelDriveCar = WheelDriveCar::where('wheelDriveCar',$item->wheel_drive_car)->first();
                    $body = Body::where('body',$item->body)->first();
                    $mileage = Mileage::where('mileage',$item->mileage)->first();

                    $newRow->mark = $mark->id;
                    $newRow->model = $model->id;
                    $newRow->year = $year->id;
                    $newRow->carGeneration = $carGeneration->id;
                    $newRow->engine = $engine->id;
                    $newRow->wheelDriveCar = $wheelDriveCar->id;
                    $newRow->body = $body->id;
                    $newRow->mileage = $mileage->id;
                    $newRow->price = $item->price;
                    $newRow->save();
                    /*----------------[ START ]----------------*/
                    echo "<pre>";
                    var_dump('item Id',$item->id);
                    var_dump('Mark',$mark->id);
                    var_dump('Model',$model->id);
                    var_dump('Year',$year->id);
                    var_dump('carGeneration',$carGeneration->id);
                    var_dump('Engine',$engine->id);
                    var_dump('wheelDriveCar',$wheelDriveCar->id);
                    var_dump('body',$body->id);
                    var_dump('mileage',$mileage->id);
                    echo "</pre>";
                    /*----------------[ END ]----------------*/
                }
            });
            /*----------------[ START ]----------------*/
            echo "<pre>";
            var_dump('<h1>Завершено</h1>');
            echo "</pre>";
            /*----------------[ END ]----------------*/

        }
            catch (\Exception $e)
            {
                echo "<pre>";
                echo $e;
            }


    }

    private function voidCheck($string)
    {
        if($string === '' ||$string === 'undefined' )
        {
            return false;
        }

        return true;
    }

    private function createColumn($model,$value,$column)
    {

        try{
            $newRow =  new $model();
            $newRow->$column = $value;
            $newRow->save();
        }catch (\Exception $e){
            echo $e;
        }


    }

    private function fieldUniqueness($model,$value,$column)
    {
        if($model::where($column,$value)->count() == 0)
        {
            return true;
        }
        return false;
    }

    function truncateTable($table)
    {
        DB::table($table)->truncate();
    }
}
