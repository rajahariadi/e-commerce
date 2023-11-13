    $('button').on('click'), function() {
        var produk = $('input[name="nama_brg"]').val();

        $.ajax({
            type: 'POST',
            url: "http://localhost/www/e-commerce/dummy/input_produk.php",
            data: {nama_brg: produk},
            dataType: 'JSON',
            async: false,
            success: function(result){
                console.log(result.body.nama_brg);
            }
        });

    }

