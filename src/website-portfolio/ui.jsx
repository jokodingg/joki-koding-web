import { motion } from 'motion/react';
import { waLink } from './packages';

// Fokus keyboard yang kelihatan di atas latar terang maupun gelap
export const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';

// Tombol sedikit naik saat hover, menandai elemen yang bisa diklik
export const lift = 'transition-[background-color,transform] duration-200 hover:-translate-y-0.5';

export const ease = [0.22, 1, 0.36, 1];

// Blok muncul sekali saat masuk layar, supaya mata mengikuti urutan baca per section
export const Reveal = ({ as = 'div', delay = 0, y = 24, className = '', children }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </Tag>
  );
};

// Isi navbar & footer (komponen jokoding.id) untuk halaman /website-portfolio dan /website-portfolio/design.
// base = '' di halaman utama portfolio (anchor di halaman yang sama), '/website-portfolio' dari halaman lain.
export const navLinks = (base = '') => [
  { id: 'kenapa', label: 'Kenapa portfolio', href: base && `${base}#kenapa` },
  { id: 'paket', label: 'Paket', href: base && `${base}#paket` },
  { id: 'order', label: 'Cara order', href: base && `${base}#order` },
];

export const FOOTER_CTA = {
  title: 'Siap Punya',
  highlight: 'Website Portfolio Sendiri?',
  subtitle: 'Belum yakin pilih paket mana? Tanya dulu, gratis.',
  buttonLabel: 'Pesan via WhatsApp',
  href: waLink(),
};

export const footerColumns = (base = '') => [
  {
    title: 'Website Portfolio',
    items: [
      { label: 'Kenapa portfolio', href: `${base}#kenapa` },
      { label: 'Paket', href: `${base}#paket` },
      { label: 'Template Basic', href: '/website-portfolio/design' },
      { label: 'Cara order', href: `${base}#order` },
    ],
  },
  {
    title: 'Layanan Jokoding',
    items: [
      { label: 'Web Development', href: '/#services' },
      { label: 'IoT & Embedded', href: '/#services' },
      { label: 'AI & Machine Learning', href: '/#services' },
      { label: 'Mobile Apps', href: '/#services' },
    ],
  },
  {
    title: 'Dukungan',
    items: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Syarat & Ketentuan', href: '/peraturan' },
      { label: 'Kontak WhatsApp', href: waLink(), external: true },
    ],
  },
];
