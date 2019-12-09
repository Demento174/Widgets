<?php

if($_POST):

require_once 'Parser.php';
require_once 'vendor/autoload.php';

$url=$_POST['url'];
$element=$_POST['element'];

$params=[
    "url" => $url,
    "cookie"=>[
        "file"=> "cookie.txt"
    ],
    "timeout" => 20
];

$html=Parser::getPage($params);

if(!empty($html["data"])){

    $content = $html["data"]["content"];

    $document=phpQuery::newDocument($content);

    $items = $document->find($element);

    $tmp = [];

    foreach($items as $key => $item){

        $item = pq($item);

        $tmp[$key] = [
            "title"    => trim($item->find('.showroom__cat-item-name')->text()),
            "subTitle" => trim($item->find('.showroom__cat-item-subname')->text()),
            'price'    => trim($item->find('.showroom__cat-item-price')->text()),
            'img'    => trim($item->find('img')->attr('src')),
        ];

    }

    phpQuery::unloadDocuments();
}


?>

    <?php foreach($tmp as $value): ?>
    <div class="step_2_item" style="display: flex; flex-direction: column; width: 30%;margin-bottom: 40px">
        <a class="showroom__cat-item" title="<?=$value['title']?>" style="padding: 0;
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 130px;">
            <span class="showroom__cat-item-name" style="font-size: 16px;"><?=$value['title']?></span>
            <span class="showroom__cat-item-subname" style="font-size: 16px;"><?=$value['subTitle']?></span>
            <span class="showroom__cat-item-price" style="text-decoration: line-through;"><?=$value['price']?></span>
            <img src="<?=$url.trim($value['img'],'/')?>" class="showroom__cat-item-image" alt="New Tucson" style="max-width: 100%">
        </a>
        <div class="newPrice" style="font-size: 20px;
                                     font-weight: bold;
                                     color: #1132bf;">
            от 0 Р
        </div>
        <div class="ButtonNextStep" style="padding: 10px 40px;
                     border-radius: 5px;
                     color: rgb(255, 255, 255);
                     text-transform: uppercase;
                     margin-top: 10px;
                     cursor: pointer;
                     background-color: rgb(17, 50, 191);
                     text-align: center;">
            Подробнее
        </div>
    </div>
    <?php endforeach; ?>

<?endif;?>