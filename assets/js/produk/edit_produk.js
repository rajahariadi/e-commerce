$('#formProduk').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"/dummy/update_produk.php",
        data: formData,
        cache: false, contentType: false, processData: false,
        success: (result) => {
            console.log(result);
            window.location.replace(host+"/produk_anda.html");
        },
        error: (a) => {
            //if error
        }
    });
})