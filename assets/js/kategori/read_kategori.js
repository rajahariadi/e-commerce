$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: host + "/dummy/read_kategori.php",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                console.log(data);
                var kategori = data.body.data;

                // Clear existing rows
                $('#kategori tbody').empty();

                // Populate the table with new data
                for (var i = 0; i < kategori.length; i++) {
                    $('#kategori tbody').append(
                        '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + kategori[i].nama_kategori + '</td>' +
                        '<td>' +
                        '<a href="editkategori.html" title="Ubah" class="btn btn-success btn-sm">' +
                        '<i class="fa fa-edit"></i>' +
                        '</a>' +
                        '<a href="#" title="Hapus" class="btn btn-danger btn-sm">' +
                        '<i class="fa fa-trash"></i>' +
                        '</a>' +
                        '</td>' +
                        '</tr>'
                    );
                }

                // Initialize DataTable
                $("#kategori").dataTable();
            } else {
                console.log('Failed to fetch data');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
});