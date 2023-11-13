$('#formKategori').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"/dummy/input_kategori.php",
        data: formData,
        cache: false, contentType: false, processData: false,
        success: (result) => {
            console.log(result);
            window.location.replace(host+"/kategori.html");
        },
        error: (a) => {
            //if error
        }
    });
})