import { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { Check, Minus, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PACKAGES, FEATURES, ADD_ONS, waLink } from './packages';
import { focusRing, lift, ease, Reveal, navLinks, FOOTER_CTA, footerColumns } from './ui';

// Urutan masuk hero: judul dulu, lalu kolom alamat sebagai titik interaksi
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// "Budi Santoso" -> "budisantoso", aturan label domain: huruf, angka, strip
const toSlug = (name) =>
  name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .slice(0, 63);

const scrollTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
};

const DomainPreview = () => {
  const [name, setName] = useState('');
  const slug = toSlug(name);
  const domain = `${slug || 'namakamu'}.my.id`;

  return (
    <motion.div
      className="bg-[#f7f7f2] text-gray-900 rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, x: 32, rotate: 1.5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.45 }}
    >
      <label htmlFor="nama" className="block text-sm font-semibold mb-2">
        Coba lihat alamat websitemu
      </label>
      <input
        id="nama"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tulis nama kamu"
        autoComplete="name"
        className="w-full min-h-12 px-4 rounded-xl border border-gray-300 bg-white text-base placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-emerald-700 focus-visible:border-emerald-700"
      />

      <p className="mt-6 text-sm text-gray-600">Alamat yang nanti kamu taruh di CV dan LinkedIn:</p>
      <p
        className="mt-1 font-mono text-xl md:text-2xl font-semibold break-all"
        aria-live="polite"
      >
        <span className="text-gray-500">https://</span>
        {/* Alamat berganti dengan geser halus tiap kali nama diketik, tanda bahwa input terbaca */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={domain}
            className="inline-block text-emerald-700"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {domain}
          </motion.span>
        </AnimatePresence>
      </p>
      <p className="mt-3 text-xs text-gray-600">
        Ini contoh. Ketersediaan domain kami cek saat order.
      </p>

      <a
        href={waLink({ domain: slug ? domain : '' })}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 min-h-12 px-6 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 ${lift} ${focusRing}`}
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        {slug ? 'Pesan dengan alamat ini' : 'Pesan lewat WhatsApp'}
      </a>
    </motion.div>
  );
};

const Hero = () => (
  <section className="container mx-auto px-4 pt-28 md:pt-32">
    <div className="bg-gray-900 rounded-3xl px-6 py-10 md:p-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.p variants={heroItem} className="text-emerald-400 font-semibold mb-4">
          Website portfolio untuk fresh graduate
        </motion.p>
        <motion.h1 variants={heroItem} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Kirim lamaran pertamamu dengan website portfolio sendiri.
        </motion.h1>
        <motion.p variants={heroItem} className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
          Skripsi, project kuliah, magang, dan organisasi kamu tampil di satu alamat. HRD tinggal buka
          link dari CV atau LinkedIn untuk melihat hasil kerjamu.
        </motion.p>
        <motion.p variants={heroItem} className="mt-6 text-gray-300">
          Mulai <span className="text-white font-semibold">Rp149.000</span>, sudah termasuk domain
          .my.id selama 1 tahun.
        </motion.p>
        <motion.div variants={heroItem} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#paket"
            onClick={scrollTo('paket')}
            className={`inline-flex items-center justify-center min-h-12 px-7 rounded-xl bg-emerald-400 text-gray-900 font-semibold hover:bg-emerald-300 ${lift} ${focusRing}`}
          >
            Bandingkan paket
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center min-h-12 px-7 rounded-xl border border-gray-600 text-gray-100 font-semibold hover:bg-gray-800 ${lift} ${focusRing}`}
          >
            Tanya dulu via WhatsApp
          </a>
        </motion.div>
      </motion.div>
      <DomainPreview />
    </div>
  </section>
);

const Why = () => (
  <section id="kenapa" className="scroll-mt-20 container mx-auto px-4 py-20 md:py-28">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <Reveal as="h2" className="lg:col-span-5 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        CV cuma muat ringkasan. Portfolio menunjukkan hasil kerjanya.
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-7">
        <p className="text-lg text-gray-700 leading-relaxed">
          Fresh graduate jarang punya pengalaman kerja panjang, tapi hampir selalu punya hasil kerja:
          aplikasi dari tugas akhir, desain dari mata kuliah, laporan magang, acara yang kamu urus di
          organisasi. Di CV semua itu jadi satu baris. Di website portfolio, tiap project dapat
          halaman, gambar, dan penjelasan.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-8 border-t border-gray-300 pt-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Yang bisa kamu tampilkan</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Skripsi atau tugas akhir</li>
              <li>Project mata kuliah</li>
              <li>Pengalaman magang</li>
              <li>Organisasi dan kepanitiaan</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Tempat kamu menaruh linknya</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Bagian kontak di CV</li>
              <li>Profil LinkedIn</li>
              <li>Email dan form lamaran kerja</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Value = ({ value }) => {
  if (value === true)
    return (
      <>
        <Check className="w-5 h-5 text-emerald-700" aria-hidden="true" />
        <span className="sr-only">Termasuk</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <span className="sr-only">Tidak termasuk</span>
      </>
    );
  return <span className="font-semibold text-gray-900">{value}</span>;
};

const SoonLabel = () => (
  <span className="ml-2 inline-block align-middle text-xs font-semibold text-amber-900 bg-amber-100 rounded px-1.5 py-0.5">
    Segera hadir
  </span>
);

const OrderButton = ({ pkg, className = '' }) => (
  <a
    href={waLink({ paket: pkg.name })}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center min-h-11 px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 ${lift} ${focusRing} ${className}`}
  >
    Pesan {pkg.name}
  </a>
);

const Design = ({ pkg }) => (
  <>
    {pkg.design}
    {pkg.designLink && (
      <a
        href={pkg.designLink.href}
        className={`block w-fit mt-1 underline underline-offset-4 decoration-2 text-emerald-700 hover:text-emerald-800 rounded ${focusRing}`}
      >
        {pkg.designLink.label}
      </a>
    )}
  </>
);

// Latar selang-seling per paket: Basic & Premium netral, Pro (recommended) hijau muda
const colBg = (pkg) => (pkg.recommended ? 'bg-emerald-50' : 'bg-[#f7f7f2]');
const colLine = (pkg) => (pkg.recommended ? 'border-emerald-100' : 'border-gray-200');

// Label muncul terakhir setelah tabel tampil, menarik mata ke paket yang direkomendasikan
const RecommendedLabel = () => (
  <motion.span
    className="inline-block text-xs font-semibold text-white bg-emerald-700 rounded-md px-2 py-1"
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.5 }}
  >
    Recommended
  </motion.span>
);

const PackageTable = () => (
  <Reveal className="hidden lg:block">
    <table
      className="table-fixed text-left border-separate border-spacing-x-3 border-spacing-y-0 -mx-3"
      style={{ width: 'calc(100% + 1.5rem)' }}
    >
      <caption className="sr-only">Perbandingan paket website portfolio</caption>
      <thead>
        <tr className="align-top">
          <td className="w-[31%]" />
          {PACKAGES.map((pkg) => (
            <th key={pkg.id} scope="col" className={`${colBg(pkg)} rounded-t-2xl px-6 pt-7 pb-6 font-normal`}>
              <span className="flex items-center gap-2 min-h-7">
                <span className="text-lg font-bold text-gray-900">{pkg.name}</span>
                {pkg.recommended && <RecommendedLabel />}
              </span>
              <span className="block mt-1 text-3xl font-bold text-gray-900">{pkg.price}</span>
              <OrderButton pkg={pkg} className="mt-5 w-full" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="py-4 pr-6 font-medium text-gray-700 border-t border-gray-200">Desain</th>
          {PACKAGES.map((pkg) => (
            <td key={pkg.id} className={`${colBg(pkg)} px-6 py-4 font-semibold text-gray-900 border-t ${colLine(pkg)}`}>
              <Design pkg={pkg} />
            </td>
          ))}
        </tr>
        {FEATURES.map((f, row) => {
          const last = row === FEATURES.length - 1;
          return (
            <tr key={f.label}>
              <th scope="row" className="py-4 pr-6 font-medium text-gray-700 border-t border-gray-200">
                {f.label}
                {f.soon && <SoonLabel />}
              </th>
              {f.values.map((v, i) => (
                <td
                  key={PACKAGES[i].id}
                  className={`${colBg(PACKAGES[i])} px-6 py-4 border-t ${colLine(PACKAGES[i])} ${last ? 'rounded-b-2xl pb-7' : ''}`}
                >
                  <Value value={v} />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </Reveal>
);

const PackageList = () => (
  <div className="lg:hidden -mx-4">
    {PACKAGES.map((pkg, i) => (
      <Reveal as="article" key={pkg.id} className={`${colBg(pkg)} px-4 py-10`}>
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
          {pkg.recommended && <RecommendedLabel />}
        </div>
        <p className="mt-1 text-3xl font-bold text-gray-900">{pkg.price}</p>
        <p className="mt-2 text-gray-700">
          Desain: <span className="font-semibold text-gray-900"><Design pkg={pkg} /></span>
        </p>
        <ul className={`mt-5 divide-y border-t ${colLine(pkg)} ${pkg.recommended ? 'divide-emerald-100' : 'divide-gray-200'}`}>
          {FEATURES.map((f) => (
            <li key={f.label} className="flex items-center justify-between gap-4 py-3 text-sm">
              <span className={f.values[i] === false ? 'text-gray-600' : 'text-gray-700'}>
                {f.label}
                {f.soon && <SoonLabel />}
              </span>
              <span className="shrink-0"><Value value={f.values[i]} /></span>
            </li>
          ))}
        </ul>
        <OrderButton pkg={pkg} className="mt-5 w-full min-h-12" />
      </Reveal>
    ))}
  </div>
);

const Packages = () => (
  <section id="paket" className="scroll-mt-20 bg-white border-y border-gray-200 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Paket</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Bedanya ada di desain. Basic memakai template kami, Pro mengikuti desain PDF yang sudah kamu
          punya, Premium kami rancang dari nol khusus untukmu.
        </p>
      </Reveal>

      <PackageTable />
      <PackageList />

      <Reveal className="mt-12 grid md:grid-cols-2 gap-8 text-gray-700">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Add on</h3>
          <ul className="space-y-2">
            {ADD_ONS.map((a) => (
              <li key={a.label} className="flex justify-between gap-4 border-b border-gray-200 pb-2">
                <span>{a.label}</span>
                <span className="font-semibold text-gray-900 text-right">{a.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-relaxed space-y-2">
          <p>
            <span className="font-semibold text-gray-900">Revisi minor</span> untuk mengganti isi teks.{' '}
            <span className="font-semibold text-gray-900">Revisi mayor</span> untuk mengganti warna.
          </p>
          <p>
            Pengerjaan maksimal 2 hari setelah order, tergantung antrian.
          </p>
          <p>CV builder masih kami siapkan. Akses dikirim begitu siap dipakai.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

const STEPS = [
  'Chat kami di WhatsApp dan sebutkan paket yang kamu pilih.',
  'Isi form order yang kami kirim lewat WhatsApp: data diri, project, dan alamat domain.',
  'Kami kerjakan websitenya, maksimal 2 hari setelah order sesuai antrian.',
  'Cek hasilnya, minta revisi sesuai jatah paketmu, lalu website online di domainmu.',
];

const HowToOrder = () => (
  <section id="order" className="scroll-mt-20 container mx-auto px-4 py-20 md:py-28">
    <Reveal as="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Cara order</Reveal>
    <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
      {STEPS.map((step, i) => (
        <Reveal as="li" key={i} delay={i * 0.12} y={16}>
          {/* Garis tumbuh berurutan dari kiri, menegaskan urutan langkah */}
          <motion.span
            className="block h-0.5 bg-gray-900 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease, delay: i * 0.12 }}
          />
          <span className="block mt-4 text-4xl font-bold text-emerald-700" aria-hidden="true">{i + 1}</span>
          <p className="mt-3 text-gray-700 leading-relaxed">{step}</p>
        </Reveal>
      ))}
    </ol>
  </section>
);

const WebsitePortfolio = () => {
  // Datang dari halaman lain lewat /website-portfolio#paket: section baru ada setelah React render, jadi scroll manual
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const el = id && document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80 });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#f7f7f2] min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Navbar links={navLinks()} waHref={waLink()} />
        <main>
          <Hero />
          <Why />
          <Packages />
          <HowToOrder />
        </main>
        <Footer cta={FOOTER_CTA} columns={footerColumns()} />
      </div>
    </MotionConfig>
  );
};

export default WebsitePortfolio;
