Hello, Students Purwadhika! 👋☺️😉

📃 CSS Position

    Position dalam CSS adalah properti yang digunakan untuk menentukan bagaimana elemen HTML diposisikan di dalam halaman.
    Properti ini bekerja bersama dengan properti lain seperti top, right, bottom, dan left
    untuk menentukan posisi elemen relatif terhadap elemen lain atau terhadap viewport (layar).

        ✔️ Static (Default)
            ▪️Elemen diposisikan secara normal sesuai urutan dokumen.
            ▪️Tidak bisa digunakan bersamaan dengan props top, right, bottom, left.

        ✔️ Relative
            ▪️Elemen diposisikan relatif terhadap posisinya semula.
            ▪️Ketika elemen relative berpindah, maka akan meninggalkan ruang kosong.
            ▪️Bisa menggunakan props top, right, bottom, left.

        ✔️ Absolute
            ▪️Elemen diposisikan relatif terhadap elemen induk terdekat yang memiliki position selain static.
            ▪️Jika tidak ada, maka relatif terhadap body atau html.
            ▪️Ketika elemen absolute berpindah, maka ruang dari elemen absolute akan dianggap tidak ada oleh elemen lain atau akan meninggalkan ruang kosong.

        ✔️ Fixed
            ▪️Elemen diposisikan relatif terhadap viewport (layar).
            ▪️Tidak bergeser saat halaman di-scroll.

        ✔️ Sticky
            ▪️Elemen berperilaku seperti relative sampai titik tertentu, lalu menjadi seperti fixed.
            ▪️Biasanya digunakan untuk navbar/header yang menempel saat scroll.

📃 Media Query

    Media query memungkinkan desain web menjadi responsif, yaitu menyesuaikan tampilan halaman agar tetap optimal di berbagai ukuran dan jenis device (misalnya: handphone, tablet, laptop).

    Pada pengembangan aplikasi berbasis web, mobile-first approach merupakan sebuah metode yang sering dilakukan. Mobile-first approach adalah pendekatan dalam desain dan pengembangan web di mana tampilan untuk device mobile (layar kecil) dibuat terlebih dahulu, lalu ditingkatkan untuk device yang lebih besar seperti tablet dan desktop. Alasan mengapa menggunakan metode mobile-first approach:
        ▪️Umumnya desain UI untuk mobile lebih sederhana dan mudah. Setelahnya baru bisa ditambahkan fitur dan styling seiring bertambahnya ukuran layar.

📃 Grid

    Grid CSS adalah fitur dari CSS (Cascading Style Sheets) yang memungkinkan kita untuk membuat layout halaman web menggunakan sistem baris dan kolom. Ini sangat membantu untuk menyusun elemen secara rapi, fleksibel, dan responsif.

    Konsep dasar dari grid:
        ▪️Grid Container : Elemen parent yang memiliki display `grid`.
        ▪️Grid Items     : Elemen childs didalam `grid container`.

    👉 Properti pada Grid
        ▪️display: grid;
        ▪️grid-template-columns          /* Menentukan jumlah kolom */
        ▪️grid-template-rows             /* Menentukan jumlah baris */
        ▪️gap                            /* Mengatur jarak antar item */
        ▪️grid-column                    /* Mengatur posisi dan rentang kolom */
        ▪️grid-row                       /* Mengatur posisi dan rentang baris */

📃 Flexbox (Flexible Box)

    Flexbox CSS (singkatan dari Flexible Box Layout) adalah sistem layout satu dimensi di CSS yang digunakan untuk mengatur elemen dalam satu baris atau satu kolom, secara fleksibel dan responsif.
    Fungsi utama dari Flexbox:
        ▪️Menyusun elemen secara horizontal (baris) atau vertikal (kolom).
        ▪️Menyejajarkan elemen secara otomatis (tengah, kanan, bawah, dst.).
        ▪️Mengatur jarak antar elemen secara dinamis.
        ▪️Membuat elemen responsif terhadap ukuran layar.

    👉 Properti pada Container (Parent)
        ▪️display: flex;           /* Merubah display element menjadi display flex */
        ▪️flex-direction: row;     /* Digunakan untuk mengatur direction menjadi row/column. Direction yg ada di flex: row, row-reverse, column, column-reverse */
        ▪️justify-content: center; /* Mengatur elemen secara horizontal */
        ▪️align-items: center;     /* Mengatur elemen secara vertikal */
        ▪️flex-wrap: wrap;         /* Elemen akan pindah ke baris baru jika tidak cukup ruang pada */
        ▪️gap: 16px;               /* Memberikan jarak antar elemen */
        ▪️flex-grow: 0             /* Mengatur agar item tidak membesar apabila terdapat ruang kosong didalam container */
        ▪️flex-shrink: 0           /* Mengatur agar item tidak mengecil apabila ruang didalam container menyempit */
        ▪️flex-basis: 25%          /* Artinya tiap item akan memiliki lebar tetap yaitu 25% terhadap ukuran parent nya */
