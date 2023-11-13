$('button').on('click', function() {
    var gbr_brg = $('input[name="gambar"]').val();
    var  kd_brg = $('input[name="kode"]').val();
    var nm_brg = $('input[name="nama"]').val();
    var hrg_brg = $('input[name="harga"]').val();
    var id_ktg = $('input[name="id_ktg"]').val();
    var stok = $('input[name="stok"]').val();
    var deskripsi = $('input[name="deskripsi"]').val();

    $.ajax({
        type:'POST',
        url:host+"/dummy/input_produk.php",
        data: {
            gambar_brg: gbr_brg,
            kode_brg: kd_brg,
            nama_brg: nm_brg,
            harga_brg: hrg_brg,
            id_kategori: id_ktg,
            stok_brg: stok,
            deskripsi_brg: deskripsi
        },
        dataType: 'json',
        async: true,
        success: function(result){
            console.log(result);
            window.location.replace(host+"/produk_anda.html");
        }
    }); 
});
