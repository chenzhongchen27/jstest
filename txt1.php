<?php
header('Content-Type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
echo "这是一个php文件的应答";
print_r($_GET);
print_r($_POST);

?>