<?php

use Illuminate\Database\Seeder;
use App\Http\Controllers\AJAX\AjaxKeyVerification;

class ClientTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $key = new AjaxKeyVerification();
        $data =
            [
                [
                    'site'=>'localhost',
                    'key'=>$key->generateKeyVerification()
                ],
                [
                    'site'=>'demento174',
                    'key'=>$key->generateKeyVerification()
                ],
            ];
        foreach ($data as $item)
        {
            $client = new \App\Client();
            $client->site = $item['site'];
            $client->key = $item['key'];
            $client->save();
        }
    }
}
