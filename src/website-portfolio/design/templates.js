// Template Basic. Screenshot diambil dari project di ~/Desktop/jokoding/porto (2026-10-10).
// Isi demoUrl begitu template sudah di-host: klik gambar & tombol demo langsung membuka web aslinya.
const shots = import.meta.glob('../../assets/templates/*.jpg', { eager: true, import: 'default' });
const img = (slug, kind) => shots[`../../assets/templates/${slug}-${kind}.jpg`];

const make = ({ slug, ...rest }) => ({
  slug,
  ...rest,
  desktop: img(slug, 'desktop'),
  mobile: img(slug, 'mobile'),
  frames: ['s1', 's2', 's3'].map((k) => img(slug, k)),
});

export const TEMPLATES = [
  make({
    slug: 'biru-minimalis',
    name: 'Biru Minimalis',
    desc: 'Latar biru cerah, judul serif besar, dan foto berbingkai lengkung. Satu halaman panjang berisi about, pengalaman, karya, sertifikat, dan kontak.',
    demoUrl: '',
  }),
  make({
    slug: 'hijau-gelap',
    name: 'Hijau Gelap',
    desc: 'Hijau tua dengan tipografi besar dan kartu pengalaman yang bergeser ke samping saat discroll. Bagian home, about me, skills, dan kontak.',
    demoUrl: '',
  }),
  make({
    slug: 'sidebar-gelap',
    name: 'Sidebar Gelap',
    desc: 'Tampilan dashboard gelap dengan sidebar profil dan tombol unduh CV. Halaman terpisah untuk sertifikasi, fokus belajar, tech stack, project, dan kontak.',
    demoUrl: '',
  }),
  make({
    slug: 'editorial-hijau',
    name: 'Editorial Hijau',
    desc: 'Latar terang dengan judul serif miring dan aksen hijau. Kartu pengalaman berukuran besar dan halaman project tersendiri.',
    demoUrl: '',
  }),
];
