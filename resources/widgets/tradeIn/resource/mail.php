<?
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
logs($_POST);

if (isset($_POST['form_text_230']) && $_POST['form_text_230']!="") {
        $to = 'info@vold74.ru,akrukov@planeta-avto.ru,nsennikova@fordcv.ru,okuksova@fordcv.ru,tkartunkova@hyundai-planeta-avto.ru,mesipov@fordcv.ru,yasokolov@planeta-avto.ru,abulatova@fordcv.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка на TRADE-IN';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
						<p>Телефон: '.$_POST['form_text_230'].'</p>
						<p>Выбранная модель: '.$_POST['form_hidden_246'].'</p> 
						<p>Марка: '.$_POST['form_hidden_238'].'</p>   
						<p>Модель: '.$_POST['form_hidden_234'].'</p>   
						<p>Год: '.$_POST['form_hidden_239'].'</p>  
						<p>Поколение: '.$_POST['form_hidden_240'].'</p>  
						<p>Двигатель: '.$_POST['form_hidden_241'].'</p>  
						<p>Привод: '.$_POST['form_hidden_242'].'</p>  
						<p>Кузов: '.$_POST['form_hidden_243'].'</p>   
						<p>Пробег: '.$_POST['form_hidden_244'].'</p>   
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <hyundai-planeta-avto@ratio.timeweb.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}

echo 'true';
?>