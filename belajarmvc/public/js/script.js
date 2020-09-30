$(function () {

    $('.tombolTambahData').on('click', function () {
        $('#modalLabel').html('Insert Data User');
        $('.modal-footer button[type=submit]').html('Insert Data');
    })

    $('.tampilModalEdit').on('click', function () {
        $('#modalLabel').html('Edit Data User');
        $('.modal-footer button[type=submit]').html('Edit Data');
        $('.modal-body form').attr('action', 'http://localhost/belajarmvc/public/mahasiswa/edit');


        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/belajarmvc/public/mahasiswa/getubah',
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#nik').val(data.nik);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });
});