<?php
$res['status'] = 200;
$res['msg'] = "Data berhasil diinsert";
$res['body']['data']['nama_kategori'] = "Kategori_1";

echo json_encode($res);

?>