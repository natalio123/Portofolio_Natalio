// Data blog statis.
// Sebelumnya data ini diambil dari database MySQL (tabel `artikel_lengkap`)
// lewat index_blog.php & blog_detail.php. Karena Astro membangun situs statis,
// data dipindahkan ke sini (isinya disesuaikan dari blog.html).
// Kalau nanti butuh CMS/DB sungguhan, array ini tinggal diganti dengan hasil
// fetch dari API/DB pada saat build (getStaticPaths tetap bisa dipakai).

export const posts = [
  {
    id: 1,
    judul: 'Astronomi VS Astrologi',
    gambar: '/gambar/astrology.jpg',
    konten1:
      'Astrologi dan astronomi memang seringkali disamakan atau dipersepsikan sebagai satu kesatuan, padahal keduanya memiliki perbedaan yang cukup signifikan. Meskipun keduanya berkaitan dengan bintang-bintang dan planet-planet di langit, fokus dan metode yang digunakan dalam kajian keduanya sangatlah berbeda. Astronomi adalah ilmu yang mempelajari objek-objek langit, seperti bintang, planet, galaksi, nebula, dan lainnya, serta sifat-sifat fisik, gerak, dan asal-usulnya. Astronomi menggunakan metode ilmiah yang teruji untuk mengamati, mengukur, dan memahami alam semesta. Penelitian dalam bidang ini bertujuan untuk mengungkapkan hukum-hukum alam yang mengatur pergerakan dan sifat-sifat objek langit.',
    konten2:
      'Di sisi lain, astrologi adalah sistem kepercayaan yang menyatakan bahwa posisi dan gerakan bintang dan planet memiliki pengaruh langsung terhadap kehidupan dan kepribadian manusia. Dalam astrologi, posisi relatif bintang-bintang dan planet-planet di langit pada saat kelahiran seseorang dianggap mempengaruhi karakter, keberuntungan, dan nasib individu. Astrologi didasarkan pada prinsip-prinsip metafisika dan kepercayaan spiritual, bukan metode ilmiah yang dapat diuji. Meskipun keduanya berkaitan dengan bintang dan planet, astrologi tidak memanfaatkan ilmu pengetahuan yang telah dikembangkan dalam astronomi. Dalam astronomi, zodiak merujuk pada sekelompok constellations atau rasi bintang yang dilewati oleh matahari, bulan, dan planet-planet di langit. Namun, dalam astrologi, zodiak mengacu pada 12 bagian fiktif dari langit yang dihubungkan dengan tanggal-tanggal dalam tahun. Perbedaan inilah yang seringkali menimbulkan kebingungan di kalangan masyarakat. Oleh karena itu, penting untuk memahami bahwa astronomi adalah ilmu pengetahuan yang didasarkan pada bukti dan pengamatan objektif, sementara astrologi adalah sistem kepercayaan yang bersifat subyektif dan tidak dapat diuji secara ilmiah.',
  },
  {
    id: 2,
    judul: 'Fisika siapa takut?',
    gambar: '/gambar/physics.jpg',
    konten1:
      'Fisika memang sering dianggap sebagai salah satu mata pelajaran yang menantang bagi banyak siswa dan mahasiswa. Persepsi ini mungkin timbul karena fisika melibatkan konsep-konsep yang abstrak dan rumit serta pemahaman matematika yang cukup mendalam. Namun, sebenarnya, fisika dapat dipelajari dengan baik jika dilakukan dengan metode yang tepat dan pendekatan yang benar.',
    konten2:
      'Salah satu alasan utama mengapa banyak siswa dan mahasiswa merasa sulit memahami fisika adalah karena kurangnya pemahaman tentang konsep dasar. Fisika membangun konsep-konsep yang saling terkait, dan jika pemahaman terhadap konsep dasar tidak kuat, siswa akan kesulitan mengerti konsep yang lebih kompleks. Oleh karena itu, penting bagi guru dan dosen untuk memastikan bahwa siswa memahami konsep dasar sebelum melangkah ke materi yang lebih lanjut. Metode belajar yang salah juga dapat menjadi penyebab siswa dan mahasiswa menganggap fisika sulit. Kadang-kadang, pendekatan pengajaran yang terlalu teoritis atau kurangnya aplikasi praktis dalam pembelajaran fisika dapat membuat siswa kehilangan minat. Padahal, fisika sangat relevan dalam kehidupan sehari-hari dan banyak konsep fisika yang dapat diilustrasikan dengan eksperimen atau aplikasi nyata, yang dapat membuat pembelajaran menjadi lebih menarik dan mudah dipahami.',
  },
  {
    id: 3,
    judul: 'Data Scientist pekerjaan dengan gaji tertinggi ?',
    gambar: '/gambar/datascientist.jpg',
    konten1:
      'Tidak dapat dipungkiri bahwa profesi sebagai data scientist atau ilmuwan data telah menjadi salah satu pekerjaan yang paling diminati di era digital ini. Perkembangan teknologi informasi dan komunikasi serta pertumbuhan besar-besaran data dalam berbagai industri telah menciptakan permintaan yang tinggi akan profesional yang memiliki kemampuan untuk menganalisis, menginterpretasi, dan mengambil keputusan berdasarkan data.',
    konten2:
      'Banyak calon mahasiswa tertarik untuk memasuki jurusan yang berkaitan dengan data science karena melihat peluang karir yang cerah dan potensi penghasilan yang menarik. Jurusan seperti statistika, ilmu komputer, matematika terapan, dan teknik informatika menjadi pilihan populer bagi mereka yang tertarik dalam mempelajari data science. Salah satu alasan mengapa data science begitu diminati adalah karena perannya yang krusial dalam berbagai industri dan sektor, mulai dari teknologi, keuangan, kesehatan, hingga manufaktur. Dengan menggunakan teknik-teknik analisis data seperti machine learning, data mining, dan visualisasi data, ilmuwan data dapat membantu perusahaan dan organisasi dalam mengidentifikasi tren, memahami perilaku pelanggan, meningkatkan efisiensi operasional, dan mengoptimalkan pengambilan keputusan.',
  },
];

export function getPostById(id) {
  return posts.find((p) => p.id === Number(id));
}
