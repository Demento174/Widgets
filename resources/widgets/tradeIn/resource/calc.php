<?php
header('Content-Type: *');
header('Access-Control-Allow-Origin:hyundai-planeta-avto.ru/');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
function logs($txt = "")
{
    try{
        $fp = fopen(__DIR__ . "/log_new.txt", "a"); // Открываем файл в режиме записи
        if(is_array($txt)){

            fwrite($fp,"\n". date("d-m-Y_H:i:s")." -- > ".print_r($txt,TRUE));

        }else{
            fwrite($fp,"\n". date("d-m-Y_H:i:s")." -- > ".$txt);
        }


        fclose($fp); //Закрытие файла
    }catch (Exception $e) { return false; }

    return true;
}

    $serv['HTTP_HOST'] = 'dont get out';
    $serv['HTTP_CONNECTION'] = 'keep-alive';
    $serv['HTTP_CACHE_CONTROL'] = 'max-age=0';
    $serv['HTTP_UPGRADE_INSECURE_REQUESTS'] = 1;
    $serv['HTTP_USER_AGENT'] = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36';
    $serv['HTTP_ACCEPT'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
    $serv['HTTP_ACCEPT_ENCODING'] = 'gzip, deflate';
    $serv["HTTP_ACCEPT_LANGUAGE"] = 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7';
    $serv['HTTP_COOKIE'] = 'wordpress_test_cookie=WP+Cookie+check; wordpress_logged_in_70886676968569aa77096a55f797bc7d=Demento%7C1550675744%7COXFD8NtYSJThkWfkWErLv3eUXoJnQAXFURXtBL01bKr%7Cf97b94d96780b2fb87bbdafcf573fb7dab01c1bfde2c77c854603fc2da06fc3b; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dtinymce; wp-settings-time-1=1550574617; has_js=1; _ym_uid=1549545797404397641; _ym_d=1549545797; ctools-collapsible-state=views-ui-advanced-column-test%3A1; SESSf4e88387f63567dae502f35e4ce1d90b=Ep3gTeLTboh2Od0wzAVuX-iBa28o7jS856v0RkvupNk; SESS3ea94370fff94c3f6a8d78c09079a6d3=x0XOHxNkr-TgDQrO2Xndm399LVB7ushTZITF1tXcI30; dccalcsid=pn9pu2c61';
    $serv['PATH'] = 'c:\ospanel\modules\php\PHP-7.1\ext;c:\ospanel\modules\php\PHP-7.1\pear;c:\ospanel\modules\php\PHP-7.1\pear\bin;c:\ospanel\modules\php\PHP-7.1;c:\ospanel\modules\imagemagick;c:\ospanel\modules\wget\bin;c:\ospanel\modules\git;c:\ospanel\modules\git\bin;c:\ospanel\modules\git\mingw\bin;c:\ospanel\modules\git\cmd;c:\ospanel\modules\database\MySQL-5.7\bin;c:\ospanel\modules\http\Apache-PHP-7\bin;c:\ospanel\modules\http\Apache-PHP-7;C:\Windows\system32;C:\Windows;C:\Windows\system32\Wbem;C:\Windows\SysWOW64';
    $serv['SystemRoot'] = 'C:\Windows';
    $serv['COMSPEC'] = 'C:\Windows\system32\cmd.exe';
    $serv['PATHEXT'] = '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC';
    $serv['WINDIR'] = 'C:\Windows';
    $serv['SERVER_SIGNATURE'] =null;
    $serv['SERVER_SOFTWARE'] = 'Apache';
    $serv['SERVER_NAME'] = 'volt';
    $serv['SERVER_ADDR'] = '127.0.0.1';
    $serv['SERVER_PORT'] = '80';
    $serv['REMOTE_ADDR'] = '127.0.0.1';
    $serv['DOCUMENT_ROOT'] = 'D:/YandexDisk/Work/localhost/Volt';
    $serv['REQUEST_SCHEME'] = 'http';
    $serv['CONTEXT_PREFIX'] =null;
    $serv['CONTEXT_DOCUMENT_ROOT'] = 'D:/YandexDisk/Work/localhost/Volt';
    $serv['SERVER_ADMIN'] = '[no address given]';
    $serv['SCRIPT_FILENAME'] = 'D:/YandexDisk/Work/localhost/Volt/volt/index.php';
    $serv['REMOTE_PORT'] = 39947;
    $serv['GATEWAY_INTERFACE'] = 'CGI/1.1';
    $serv['SERVER_PROTOCOL'] = 'HTTP/1.1';
    $serv['REQUEST_METHOD'] = 'GET';
    $serv['QUERY_STRING'] =null;
    $serv['REQUEST_URI'] = '/volt/';
    $serv['SCRIPT_NAME'] = '/volt/index.php';
    $serv['PHP_SELF'] = '/volt/index.php';
    $serv['REQUEST_TIME_FLOAT'] = 1551255488.851;
    $serv['REQUEST_TIME'] = 1551255488;
    $serv['argv'] = [];
    $serv['argc'] = 0;

$curl=curl_init();
curl_setopt($curl,CURLOPT_URL,'https://dealerconnect.ru/hyundai_planeta_11VR4LN1X0/calc.php');
curl_setopt($curl,CURLOPT_POSTFIELDS,array_merge($serv,$_POST,["DCCALCVER"=>2.2]));
curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
$res=json_decode(curl_exec($curl),true);
if ($res=="") die('{"error":1}');
if ($res["error"]>0) die('{"error":'.$res["error"].'}');
SetCookie("dccalcsid",$res["sid"],1.8934452e+9,"/",$_SERVER["HTTP_HOST"]);
unset($res["sid"]);
echo json_encode($res);

?>