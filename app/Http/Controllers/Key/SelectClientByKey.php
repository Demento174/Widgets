<?php

namespace App\Http\Controllers\Key;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Client;

class SelectClientByKey extends Controller
{
    private $key;
    public $client;

    public function __construct($key)
    {
       $this->key = $key;
       $this->setClient();
    }

   function setClient()
   {
        $this->client = Client::where('key',$this->key)->count()<1?false:Client::where('key',$this->key)->first();
   }

   function getClient()
   {
       return $this->client;
   }
}
