import React from 'react';
import RotatingText from './reactbits/RotatingText';

const Hero = () => {
  
  const handleWhatsApp = () => {
    const phoneNumber = "6281779592283"; 
    const message = "Halo Jokoding, saya mau konsultasi tugas coding dong. Bisa bantu?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // UBAH 1: Background pake warna request temenmu [#f7f7f2]
    <section id="home" className="min-h-screen relative bg-[#f7f7f2] overflow-hidden flex items-center justify-center pt-20 md:pt-0">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size[24px_24px] pointer-events-none"></div>
      
      {/* Opsional: Tambah Vignette putih di pinggir biar gridnya alus */}
      <div className="absolute inset-0 bg-linear-to-t from-[#f7f7f2] via-transparent to-[#f7f7f2]/50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* UBAH 3: Shadow dipertegas (shadow-2xl) biar kartunya 'pop-up' dari background terang */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-800 relative overflow-hidden">
          
          {/* Background Gradient Hijau di dalam kartu tetap ada biar Cyberpunk */}
          <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center relative z-10">
            
            {/* KOLOM KIRI (TEKS) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-4 md:px-10 lg:px-0">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Bikin Tugasmu
                <span className="mt-5 block w-full">
                  <RotatingText
                    texts={['Auto Kelar', 'Langsung ACC', 'Bebas Error', 'Dapet Nilai A']}
                    // Pastikan background RotatingText nyambung (pake transparent atau gray-900)
                    mainClassName="px-3 sm:px-4 md:px-5 bg-emerald-500 text-gray-900 overflow-hidden py-1 sm:py-2 md:py-3 justify-center lg:justify-center rounded-xl font-mono md:text-3xl lg:text-5xl font-bold"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                Stuck sama kodingan? Deadline mepet? Serahkan pada Jokoding. 
                Full support sampai program jalan, privasi aman, siap bimbingan sampai paham.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                
                <button 
                  onClick={handleWhatsApp}
                  className="cursor-pointer px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] transition-all transform hover:-translate-y-1"
                >
                  Joki Sekarang
                </button>
                
                <button 
                  onClick={() => handleScroll('portfolio')}
                  className="cursor-pointer px-8 py-4 rounded-full border border-gray-700 text-gray-300 font-bold text-sm tracking-wide uppercase hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all"
                >
                  Lihat Portofolio
                </button>

              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 w-full max-w-md divide-x divide-gray-700 border-t border-gray-800 pt-8">
                <StatItem number="500+" label="Tugas Kelar" />
                <StatItem number="100%" label="Amanah" />
                <StatItem number="24/7" label="Support" />
              </div>
            </div>

            {/* KOLOM KANAN (CODE WINDOW) */}
            <div className="hidden lg:flex justify-center order-1 lg:order-2 relative">
              <CodeWindow />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ... CodeWindow dan StatItem SAMA PERSIS ...
const CodeWindow = () => (
  <div className="bg-[#0f172a] rounded-xl p-6 w-full max-w-md shadow-2xl border border-gray-700 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
    <div className="flex gap-2 mb-4 border-b border-gray-800 pb-4">
      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
    </div>
    <pre className="text-sm font-mono text-gray-300 overflow-x-auto custom-scrollbar">
      <code>
        <span className="text-purple-400">const</span> <span className="text-blue-400">Skripsi</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> {'{\n'}
        <span className="pl-4 text-gray-500 italic">// Don't panic, call Jokoding.</span>{'\n'}
        <span className="pl-4 text-purple-400">return</span> <span className="text-purple-400">{'{'}</span>{'\n'}
        <span className="pl-8 text-blue-300">status:</span> <span className="text-emerald-400">"Lulus"</span>,{'\n'}
        <span className="pl-8 text-blue-300">revisi:</span> <span className="text-orange-400">"Minor"</span>,{'\n'}
        <span className="pl-8 text-blue-300">ipk:</span> <span className="text-yellow-300">"Aman"</span>{'\n'}
        <span className="pl-4 text-purple-400">{'}'}</span>;{'\n}'}
      </code>
    </pre>
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="text-center px-2">
    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

export default Hero;