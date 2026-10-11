import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { X } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { waLink } from '../packages';
import { focusRing, lift, ease, Reveal, navLinks, FOOTER_CTA, footerColumns } from '../ui';
import { TEMPLATES } from './templates';

const BASE = '/website-portfolio';

// Pratinjau besar selama template belum di-host. <dialog> bawaan browser: Escape menutup, fokus terkunci di dalam.
const PreviewDialog = ({ template, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (template) {
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [template]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="preview-title"
      className="m-auto w-[min(1200px,calc(100%-2rem))] max-h-[calc(100dvh-2rem)] rounded-2xl bg-[#f7f7f2] p-0 backdrop:bg-gray-900/80"
    >
      {template && (
        <div className="flex flex-col max-h-[calc(100dvh-2rem)]">
          <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-200 bg-white">
            <div>
              <h2 id="preview-title" className="font-bold text-gray-900">{template.name}</h2>
              <p className="text-xs text-gray-600">Pratinjau. Demo online segera hadir.</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau"
              className={`w-11 h-11 shrink-0 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 ${focusRing}`}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="overflow-y-auto p-4 md:p-6 grid md:grid-cols-[1fr_220px] gap-6 items-start">
            <div className="space-y-4">
              {[template.desktop, ...template.frames].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${template.name}, tampilan desktop bagian ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-lg border border-gray-200"
                />
              ))}
            </div>
            <figure className="md:sticky md:top-0">
              <img
                src={template.mobile}
                alt={`${template.name}, tampilan HP`}
                loading="lazy"
                className="w-full max-w-[220px] mx-auto rounded-2xl border-4 border-gray-900"
              />
              <figcaption className="mt-2 text-center text-xs text-gray-600">Tampilan HP</figcaption>
            </figure>
          </div>
        </div>
      )}
    </dialog>
  );
};

const TemplateRow = ({ template, index, onPreview }) => {
  const flip = index % 2 === 1;
  const hasDemo = Boolean(template.demoUrl);
  const demoProps = hasDemo
    ? { href: template.demoUrl, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '#', onClick: (e) => { e.preventDefault(); onPreview(template); } };

  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* Gambar: desktop besar, HP menumpuk di pojok. Klik membuka demo, atau pratinjau kalau belum di-host. */}
      <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <a
          {...demoProps}
          aria-label={hasDemo ? `Buka demo ${template.name}` : `Lihat pratinjau ${template.name}`}
          className={`group relative block pb-10 pr-8 sm:pr-12 rounded-2xl ${focusRing}`}
        >
          <img
            src={template.desktop}
            alt=""
            loading="lazy"
            className="w-full rounded-xl border border-gray-200 shadow-[0_12px_40px_rgba(17,24,39,0.12)] transition-transform duration-500 group-hover:-translate-y-1"
          />
          <motion.img
            src={template.mobile}
            alt=""
            loading="lazy"
            className="absolute right-0 bottom-0 w-[24%] rounded-xl border-4 border-gray-900"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
          />
        </a>
      </Reveal>

      <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <span className="block text-5xl font-bold text-emerald-700" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{template.name}</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">{template.desc}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={waLink({ paket: 'Basic', template: template.name })}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center min-h-12 px-6 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 ${lift} ${focusRing}`}
          >
            Pakai template ini
          </a>
          <a
            {...demoProps}
            className={`inline-flex items-center justify-center min-h-12 px-6 rounded-xl border border-gray-300 text-gray-900 font-semibold hover:bg-white ${lift} ${focusRing}`}
          >
            {hasDemo ? 'Buka demo' : 'Lihat pratinjau'}
          </a>
        </div>
        {!hasDemo && <p className="mt-3 text-sm text-gray-600">Demo online segera hadir.</p>}
      </Reveal>
    </article>
  );
};

const TemplateGallery = () => {
  const [preview, setPreview] = useState(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#f7f7f2] min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Navbar links={navLinks(BASE)} waHref={waLink({ paket: 'Basic' })} />
        <main>
          <section className="container mx-auto px-4 pt-32 md:pt-40 pb-16 md:pb-20">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-emerald-700 font-semibold mb-4">Template paket Basic</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Pilih satu dari {TEMPLATES.length} template, isinya kami ganti dengan datamu.
              </h1>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Nama, foto, pengalaman, dan project di contoh ini cuma pengisi. Setelah order, semuanya
                kami ganti dengan isi form ordermu. Butuh desain sendiri? Paket Pro mengikuti desain PDF
                portfoliomu, Premium kami rancang dari nol.
              </p>
              <a
                href={`${BASE}#paket`}
                className={`mt-8 inline-flex items-center justify-center min-h-12 px-6 rounded-xl border border-gray-300 text-gray-900 font-semibold hover:bg-white ${lift} ${focusRing}`}
              >
                Bandingkan paket
              </a>
            </motion.div>
          </section>

          <section aria-label="Daftar template" className="container mx-auto px-4 pb-20 md:pb-28 space-y-20 md:space-y-28">
            {TEMPLATES.map((t, i) => (
              <TemplateRow key={t.slug} template={t} index={i} onPreview={setPreview} />
            ))}
          </section>
        </main>
        <Footer cta={FOOTER_CTA} columns={footerColumns(BASE)} />
        <PreviewDialog template={preview} onClose={() => setPreview(null)} />
      </div>
    </MotionConfig>
  );
};

export default TemplateGallery;
