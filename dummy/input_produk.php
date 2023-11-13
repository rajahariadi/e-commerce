<?php
$res['status']  =200;
$res['msg'] = "Data berhasil diinsert";
$res['body']['data']['nama_brg'] = "Laptop Gaming";
$res['body']['data']['harga_brg'] = "35.000.000";

echo json_encode($res);
?>