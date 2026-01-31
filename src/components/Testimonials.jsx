import { useState } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  
  const testimonialsData = [
    { 
      text: 'Awalnya ragu karena deadline tinggal beberapa jam lagi, ternyata tim Jokoding gercep banget. Baru order langsung digarap, udah gitu 1 jam kelar lagi. Jadi bisa ngumpulin sesuai deadline', 
      name: 'Rian S*****a', 
      role: 'Mahasiswa Teknik Informatika', 
      initials: 'RS' 
    },
    { 
      text: 'Request fitur IoT custom pake ESP32 + Web Dashboard. Sempet bingung nyari tempat joki lain pada gak sanggup, di sini malah dikasih solusi yang lebih efisien. Recommended parah!', 
      name: 'Dimas A****s', 
      role: 'Mahasiswa Elektro', 
      initials: 'DA' 
    },
    { 
      text: 'Pesen website Company Profile ke tempat joki ternyata bisa dan hasilnya mantep. Load speed cepet, SEO juga naik. Tim supportnya sabar banget ngadepin revisi dari saya wkwkw. Thanks Jokoding!', 
      name: 'Angga W****a', 
      role: 'Pengusaha UMKM', 
      initials: 'AW' 
    },
    { 
      text: 'Buat skripsi simulasi jaringan pake Cisco Packet Tracer + Laporan. Hasilnya detail banget, topologinya rapi. Jarang banget nemu tempat joki yg bisa handle task ini', 
      name: 'Anton S*****o', 
      role: 'Mahasiswa Sistem Komputer', 
      initials: 'AS' 
    },
    { 
      text: 'jasa joki paling amanah yang pernah gw temuin. privasi aman, harga masuk akal buat kantong mahasiswa, kualitasnya "daging" semua bukan copas GPT doang.', 
      name: 'Putri A****a', 
      role: 'Mahasiswa Ilmu Komputer', 
      initials: 'PA' 
    },
    { 
      text: 'Order website CRUD di sini dan hasilnya gacor banget. Udah gitu dikasih diskon tambahan buat saya pelajar SMK. Pokoknya mantep deh', 
      name: 'Dafa A*****n', 
      role: 'Pelajar SMK', 
      initials: 'DA' 
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-950 py-16 border-t border-amber-900/20 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kata Mereka <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Tentang Kami</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Testimoni langsung dari client yang pernah order ke Jokoding. No tipu-tipu ya!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <div 
              key={i} 
              className={`group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-900/10 flex flex-col h-full ${
                !showAll && i >= 3 ? 'hidden md:flex' : ''
              }`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 grow italic relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-amber-900/30 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-gray-900 font-bold text-lg shadow-inner shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    {t.name}
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> 
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
              className="px-8 py-3 rounded-full border border-amber-600/50 text-amber-400 font-semibold hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-gray-900 hover:border-transparent transition-all duration-300"
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
