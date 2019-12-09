<?php

namespace App\Http\Controllers\Key;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VerificationKeyGenerate extends Controller
{
    static $lengthStr= [10,12,15,20,25];

    public function generateKeyVerification()
    {
        $string = self::strRandom();
        return substr(encrypt($string),0,self::$lengthStr[array_rand(self::$lengthStr, 1)]);
    }





    private static function strRandom($length=1)
    {
        $string = '';

        while (($len = strlen($string)) < $length) {
            $size = $length - $len;

            $bytes = random_bytes($size);

            $string .= substr(str_replace(['/', '+', '='], '', base64_encode($bytes)), 0, $size);
        }

        return $string;
    }
}
