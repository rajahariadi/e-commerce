
$('button').on('click', function() {
    var kategori = $('input[name="nama_kategori"]').val();

    $.ajax({
        type: 'POST',
        url: "http://localhost/e-commerce/dummy/input_kategori.php",
        data: {
            nama_kategori: kategori
        },
        dataType: 'json',
        async: false,
        success: function(result){
           console.log(result);
        }
    });

})

