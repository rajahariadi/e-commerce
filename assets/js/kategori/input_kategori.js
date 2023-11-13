$('button').on('click', function() {
    var kategori = $('input[name="kategori"]').val();

    $.ajax({
        type:'POST',
        url:host+"/dummy/input_kategori.php",
        data: {
            nama_kategori: kategori
        },
        dataType: 'json',
        async: true,
        success: function(result){
            console.log(result);
            window.location.replace(host+"/kategori.html");
        }
    }); 
});
