<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AJAX\AjaxKeyVerification;

Route::get('/', function (){


   return view('welcome');
});

//---------------[ AJAX]
Route::group(['prefix'=>'widget','as'=>'widget::'],function (){//---------------[ WIDJETS ]

    Route::post('/trade-in',function (Request $request){
        new App\Http\Controllers\Widgets\TradeIn\AjaxController($request);
    });//---[ TradeIn AJAX ]

});


Route::post('/admin-ajax',function (Request $request){
    new App\Http\Controllers\AjaxController($request);
});
