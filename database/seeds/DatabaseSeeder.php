<?php

use App\Http\Controllers\AJAX\AjaxKeyVerification;
use Illuminate\Database\Seeder;
use App\Client;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

         $this->call(CLientsSeeder::class);
    }
}
