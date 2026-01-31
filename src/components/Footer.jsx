import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/6281333543975?text=Halo%20kak%20%F0%9F%91%8B%0ASaya%20mau%20order%20joki%20koding.%0A%0AJenis%20Project%3A%0APenjelasan%20Project%3A%0A%0AMohon%20informasinya%2C%20terima%20kasih%20%F0%9F%99%8F";

  return (
    <footer id="contact" className="bg-gray-950 pt-20 pb-10 border-t border-amber-900/20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-amber-950/30 to-gray-900 border border-amber-900/30 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl">
          
          {/* Efek Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/30 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Siap Wujudkan <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Project Impianmu?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Konsultasikan ide kreatifmu sekarang. Gratis, tanpa komitmen.
            </p>
          </div>
          
          <div className="relative z-10">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/25 flex items-center gap-2 cursor-pointer"
            >
              Hubungi Kami <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>


        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COL 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="/logo-jokoding-only.png" 
                 alt="Logo Jokoding" 
                 className="h-10 w-auto opacity-90" 
               />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Software House berbasis di Semarang. Dari mahasiswa untuk mahasiswa.
            </p>
            
            <div className="flex gap-3 pt-2">
              <SocialLink href="https://www.instagram.com/jokodingg/" icon={<Instagram size={18} />} />
              <SocialLink href="https://wa.me/6281333543975" icon={<MessageCircle size={18} />} />
              <SocialLink href="mailto:jokoding@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>

          {/* COL 2-4: Links */}
          <FooterLinks 
            title="Layanan" 
            items={[
              { label: 'Web Development', href: '#services' },
              { label: 'IoT & Embedded', href: '#services' },
              { label: 'AI & Machine Learning', href: '#services' },
              { label: 'Mobile Apps', href: '#services' },
            ]} 
          />

          <FooterLinks 
            title="Perusahaan" 
            items={[
              { label: 'Tentang Kami', href: '#' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Karir', href: '#' }, 
              { label: 'Blog', href: '#' },
            ]} 
          />

          <FooterLinks 
            title="Dukungan" 
            items={[
              { label: 'FAQ', href: '#' },
              { label: 'Syarat & Ketentuan', href: '#' },
              { label: 'Kebijakan Privasi', href: '#' },
              { label: 'Kontak Support', href: '#' },
            ]} 
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-900/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Jokoding. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

const FooterLinks = ({ title, items }) => (
  <div>
    <h4 className="text-white font-bold text-lg mb-6">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx}>
          <a 
            href={item.href} 
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-1 group w-fit text-sm"
          >
            <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 flex items-center opacity-0 group-hover:opacity-100">
              <ArrowRight size={14} className="mr-1 text-amber-400" />
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-gray-900 border border-amber-900/30 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-gray-900 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;
