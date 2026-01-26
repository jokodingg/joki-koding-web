import { useState } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  
  const testimonialsData = [
    { 
      text: 'Awalnya ragu karena deadline tinggal 3 hari. Ternyata tim Jokoding gercep banget, revisi cuma sekali langsung ACC dosen. Codingannya juga rapi ada komennya, jadi enak pas belajar buat sidang.', 
      name: 'Rian Saputra', 
      role: 'Mahasiswa Teknik Informatika', 
      initials: 'RS' 
    },
    { 
      text: 'Request fitur IoT custom pake ESP32 + Web Dashboard. Sempet bingung nyari vendor lain pada gak sanggup, disini malah dikasih solusi yang lebih efisien. Recommended parah!', 
      name: 'Dimas Anggara', 
      role: 'Developer IoT', 
      initials: 'DA' 
    },
    { 
      text: 'Website Company Profile kantor saya jadi jauh lebih profesional. Load speed cepet, SEO juga naik. Tim supportnya sabar banget ngadepin revisi dari atasan saya. Thanks Jokoding!', 
      name: 'Sarah Wijaya', 
      role: 'Manager Marketing', 
      initials: 'SW' 
    },
    { 
      text: 'Buat skripsi simulasi jaringan pake Cisco Packet Tracer + Laporan. Hasilnya detail banget, topologinya rapi. Ngebantu banget buat saya yang kerja sambil kuliah.', 
      name: 'Budi Santoso', 
      role: 'Mahasiswa Sistem Komputer', 
      initials: 'BS' 
    },
    { 
      text: 'Jasa joki paling amanah yang pernah gw temuin. Privasi aman, harga masuk akal buat kantong mahasiswa, kualitasnya "daging" semua bukan copas asal-asalan.', 
      name: 'Putri Amelia', 
      role: 'Mahasiswa Sistem Informasi', 
      initials: 'PA' 
    },
    { 
      text: 'Backend API-nya stabil banget. Saya pesen buat integrasi ke aplikasi mobile Flutter saya, dokumentasinya lengkap (Swagger), endpoint-nya kenceng.', 
      name: 'Kevin Pratama', 
      role: 'Mobile Dev Freelancer', 
      initials: 'KP' 
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-900 py-16 border-t border-gray-800 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kata Mereka <span className="text-emerald-400">Tentang Kami</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jangan percaya janji kami, tapi percayalah pada pengalaman mereka yang sudah membuktikannya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <div 
              key={i} 
              className={`group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/10 flex flex-col h-full ${
                !showAll && i >= 3 ? 'hidden md:flex' : ''
              }`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-700/20 group-hover:text-emerald-500/10 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 grow italic relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-700 pt-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold text-lg shadow-inner shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    {t.name}
                    <CheckCircle className="w-3 h-3 text-blue-400" /> 
                  </h4>
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {t.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Show More Button - Mobile Only */}
        {!showAll && (
          <div className="text-center mt-10 md:hidden">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
            >
              Testimoni Lainnya
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;