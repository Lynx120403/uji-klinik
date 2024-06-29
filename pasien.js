// pasien.js

$(document).ready(function() {
    // Mengatur variabel untuk nomor urut pasien
    let counter = 1;

    // Fungsi untuk menambahkan data pasien ke dalam tabel
    function addPasien(nama, umur) {
        let newRow = `<tr>
                        <th scope="row">${counter}</th>
                        <td>${nama}</td>
                        <td>${umur}</td>
                        <td>
                            <button type="button" class="btn btn-danger btn-sm delete">Hapus</button>
                        </td>
                    </tr>`;
        $('#tableBody').append(newRow);
        counter++;
    }

    // Menangani submit form tambah pasien
    $('#formPasien').submit(function(event) {
        event.preventDefault();
        let nama = $('#nama').val();
        let umur = $('#umur').val();
        
        // Validasi input (misalnya pastikan nama dan umur tidak kosong)

        // Tambahkan data pasien ke dalam tabel
        addPasien(nama, umur);

        // Kosongkan form setelah data ditambahkan
        $('#nama').val('');
        $('#umur').val('');

        // Tutup modal setelah data disimpan
        $('#exampleModal').modal('hide');
    });

    // Menangani klik tombol Hapus pada setiap baris data
    $('#tableBody').on('click', '.delete', function() {
        $(this).closest('tr').remove();
        // Mengatur ulang nomor urut setelah menghapus baris
        counter--;
        $('#tableBody tr').each(function(index) {
            $(this).find('th:first').text(index + 1);
        });
    });
});
