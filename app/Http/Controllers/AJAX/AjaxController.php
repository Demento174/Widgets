<?php

namespace App\Http\Controllers\Ajax;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use mysql_xdevapi\Exception;
use App\Http\Controllers\Key\SelectClientByKey;

class AjaxController extends Controller
{
    private $request;
    protected $data;
    private $action;
    static private $errors =
        [
            'This Get request',
            'method not found',
            'The method is not passed',
            'Verification key undefined',
            'User not found'
        ];


    public function __construct($request,$verification = false)
    {
        $this->setRequest($request);

        $this->setData();

        if($verification && !$this->verification())
        {
            return;
        }

        $this->setAction();


        if(!method_exists($this,$this->action))
        {
            throw new \Exception(self::$errors[1].' '.$this->action);
        }

        $action = $this->action;
        return $this->$action();
    }

    protected function setRequest($request)
    {
        if(!$request->isMethod('post'))
        {
            throw new \Exception(self::$errors[0]);
        }

        $this->request = $request;
    }

    protected function setData()
    {
        $this->data = $this->request->all();

        if(gettype($this->data) === 'string')
        {
            $this->data = json_decode($this->data, true);
        }
    }

    protected function setAction()
    {
        if(!isset($this->data['action']))
        {
            throw new \Exception(self::$errors[2]);
        }

        $this->action =$this->data['action'];

        unset($this->data['action']);
    }

    protected function verification()
    {
        if(!$this->data['key'])
        {
            echo self::$errors[3];
            return false;
        }

        $selectClientByKey = new SelectClientByKey($this->data['key']);

        if(!$client = $selectClientByKey->getClient())
        {
            echo self::$errors[4];
            return false;
        }
        $this->data['data']['client_id']=$client->id;

        unset($this->data['key']);

        return true;
    }

}
