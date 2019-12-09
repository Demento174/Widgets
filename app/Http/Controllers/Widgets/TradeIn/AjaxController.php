<?php

namespace App\Http\Controllers\Widgets\TradeIn;

use App\Mileage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Marks;
use App\Price;
use App\tradeInParserCars;

class AjaxController extends \App\Http\Controllers\Ajax\AjaxController
{
    public function __construct($request)
    {
        parent::__construct($request,true);
    }

    protected function getMarks()
    {

        $marks = Marks::all();

        echo json_encode($marks->toArray());
    }

    protected function getModels()
    {
        $price = new Price();

        echo json_encode($price->getModels($this->data['data']['mark']));
    }

    protected function getYear()
    {
        $price = new Price();

        echo json_encode($price->getYear($this->data['data']['mark'],$this->data['data']['model']));
    }

    protected function getCarGeneration()
    {
        $price = new Price();

        echo json_encode($price->getCarGeneration($this->data['data']['mark'],$this->data['data']['model'],$this->data['data']['year']));
    }

    protected function getEngine()
    {
        $price = new Price();

        echo json_encode($price->getEngine(
            $this->data['data']['mark'],
            $this->data['data']['model'],
            $this->data['data']['year'],
            $this->data['data']['carGeneration']
        ));
    }

    protected function getWheelDriveCar()
    {
        $price = new Price();

        echo json_encode($price->getWheelDriveCar(
            $this->data['data']['mark'],
            $this->data['data']['model'],
            $this->data['data']['year'],
            $this->data['data']['carGeneration'],
            $this->data['data']['engine']
        ));
    }

    protected function getBody()
    {
        $price = new Price();

        echo json_encode($price->getBody(
            $this->data['data']['mark'],
            $this->data['data']['model'],
            $this->data['data']['year'],
            $this->data['data']['carGeneration'],
            $this->data['data']['engine'],
            $this->data['data']['wheelDriveCar']
        ));
    }

    protected function getMileage()
    {
        $mileages = Mileage::all();
        $data = [];
        foreach ($mileages as $item)
        {
            $data[] =
                [
                    'id'=>$item->id,
                    'value'=>$item->mileage
                ];
        }

        echo json_encode($data);
    }

    protected function getPrice()
    {
        $price = new Price();

        echo json_encode(['price'=>$price->getPrice(
            $this->data['data']['mark'],
            $this->data['data']['model'],
            $this->data['data']['year'],
            $this->data['data']['carGeneration'],
            $this->data['data']['engine'],
            $this->data['data']['wheelDriveCar'],
            $this->data['data']['mileage']
        )]);
    }

    protected function getParserCars()
    {

        echo json_encode(tradeInParserCars::all()->toArray());
    }

    protected function sendMail()
    {
        echo '1111';
    }
}
