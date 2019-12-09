<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Price;

class Models extends Model
{
    public function price()
    {
        return $this->belongsTo('App\Price', 'id', 'model');
    }
}
