<?php

namespace App;

use App\Models;
use App\Year;
use App\CarGeneration;
use App\Engine;
use App\WheelDriveCar;
use App\Body;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Price extends Model
{


    public function getModels($idMark)
    {
        $data = [];

        $modelsId =array_unique(DB::table('prices')->where('mark', (int)$idMark)->pluck('model')->toArray());

        foreach ($modelsId as $item)
        {
            $model = Models::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->model
                ];
        }
        return $data;

    }

    public function getYear($markId,$modelId)
    {
        $data = [];

        $yearsId =array_unique(DB::table('prices')->whereMark( $markId)->whereModel($modelId)->pluck('year')->toArray());

        foreach ($yearsId as $item)
        {
            $model = Year::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->year
                ];
        }
        return $data;
    }

    public function getCarGeneration($markId,$modelId,$yearId)
    {
        $data = [];

        $CarGenerationsId =array_unique(DB::table('prices')
            ->where('mark',$markId)
            ->where('model',$modelId)
            ->where('year',$yearId)
            ->pluck('carGeneration')->toArray());

        foreach ($CarGenerationsId as $item)
        {
            $model = CarGeneration::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->carGeneration
                ];
        }
        return $data;
    }

    public function getEngine($markId,$modelId,$yearId,$carGenerationId)
    {
        $data = [];

        $enginesId =array_unique(DB::table('prices')
            ->where('mark',$markId)
            ->where('model',$modelId)
            ->where('year',$yearId)
            ->where('carGeneration',$carGenerationId)
            ->pluck('engine')->toArray());

        foreach ($enginesId as $item)
        {
            $model = Engine::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->engine
                ];
        }
        return $data;
    }

    public function getWheelDriveCar($markId,$modelId,$yearId,$carGenerationId,$engineId)
    {
        $data = [];

        $wheelDriveCarId =array_unique(DB::table('prices')
            ->where('mark',$markId)
            ->where('model',$modelId)
            ->where('year',$yearId)
            ->where('carGeneration',$carGenerationId)
            ->where('engine',$engineId)
            ->pluck('wheelDriveCar')->toArray());

        foreach ($wheelDriveCarId as $item)
        {
            $model = WheelDriveCar::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->wheelDriveCar
                ];
        }
        return $data;
    }

    public function getBody($markId,$modelId,$yearId,$carGenerationId,$engineId,$wheelDriveCarId)
    {
        $data = [];

        $bodiesId =array_unique(DB::table('prices')
            ->where('mark',$markId)
            ->where('model',$modelId)
            ->where('year',$yearId)
            ->where('carGeneration',$carGenerationId)
            ->where('engine',$engineId)
            ->where('wheelDriveCar',$wheelDriveCarId)
            ->pluck('body')->toArray());

        foreach ($bodiesId as $item)
        {
            $model = Body::where('id',$item)->first();
            $data[] =
                [
                    'id'=>$model->id,
                    'value'=>$model->body
                ];
        }
        return $data;
    }

    public function getPrice($markId,$modelId,$yearId,$carGenerationId,$engineId,$wheelDriveCarId,$milleageId)
    {
        $data = [];

        $price =DB::table('prices')
            ->where('mark',$markId)
            ->where('model',$modelId)
            ->where('year',$yearId)
            ->where('carGeneration',$carGenerationId)
            ->where('engine',$engineId)
            ->where('wheelDriveCar',$wheelDriveCarId)
            ->where('mileage',$milleageId)
            ->pluck('price')->first();


        return $price;
    }

    public  function models()
    {
        return $this->hasOne('App\Models','id','model');
    }


}
