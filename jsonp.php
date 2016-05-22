<?php
$type = isset($_GET['type']) ? $_GET['type'] : '';
$callback = isset($_GET['callback']) ? $_GET['callback'] : '';
$json = '';
if ($type == 'json') {
   $json = '{
   "Image": {
   "Width": 800,
   "Height": 600,
   "Title": "View from 15th Floor",
   "Thumbnail": {
   "Url": "http://www.example.com/image/481989943",
   "Height": 125,
   "Width": "100"
   },
   "IDs": [116, 943, 234, 38793]
   }
   }';
} else {
   $json = '"Hello, everyone!"';
}
if (!empty($callback)) {
   $json = $callback . '(' . $json . ')'; //等号后面的四个部分都是字符串。
}
echo $json;