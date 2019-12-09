<?php

use App\Http\Controllers\AJAX\AjaxKeyVerification;
use Illuminate\Database\Seeder;

class CLientsSeeder extends Seeder
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
            DB::table('clients')->insert([
                'site' => $item['site'],
                'key' => $item['key'],
            ]);
//            $client = new \App\Client();
//            $client->site = $item['site'];
//            $client->key = $item['key'];
//            $client->save();
        }
    }
}
