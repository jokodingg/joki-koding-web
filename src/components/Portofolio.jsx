import React, { useRef, useState } from "react";

// 1. Spotlight Card (Kembali ke versi Dark Mode karena di dalam wrapper gelap)
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      // STYLE DARK MODE (Biar kontras di dalam wrapper hitam)
      // bg-gray-800: Lebih terang dikit dari background wrapper
      // border-gray-700: Garis pemisah halus
      className={`relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

// 2. Main Component
const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      title: "Corporate Dashboard",
      type: "Web App",
      desc: "Sistem manajemen data internal dengan analitik real-time dan reporting otomatis.",
      tech: ["React", "Laravel", "MySQL"]
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
      title: "TokoSehat.id",
      type: "E-Commerce",
      desc: "Marketplace kesehatan terintegrasi dengan payment gateway Midtrans dan RajaOngkir.",
      tech: ["Next.js", "PostgreSQL", "Prisma"]
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      title: "Smart Garden IoT",
      type: "Internet of Things",
      desc: "Sistem monitoring kelembaban tanah dan penyiraman otomatis berbasis ESP32.",
      tech: ["C++", "Blynk", "ESP32"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      title: "Fregie AI",
      type: "Computer Vision",
      desc: "Deteksi kualitas buah dan sayur menggunakan Convolutional Neural Network (CNN).",
      tech: ["Python", "TensorFlow", "FastAPI"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", 
      title: "Sistem Skripsi",
      type: "Information System",
      desc: "Platform bimbingan skripsi online, logbook, dan penjadwalan sidang otomatis.",
      tech: ["PHP Native", "Bootstrap", "MySQL"]
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      title: "Security Pentest",
      type: "Cyber Security",
      desc: "Analisis celah keamanan jaringan lokal menggunakan Kali Linux dan Metasploit.",
      tech: ["Linux", "Wireshark", "Python"]
    }
  ];

  return (
    // BAGIAN LUAR: Background Terang (#f7f7f2) biar nyambung sama atasnya
    <section id="portfolio" className="bg-[#f7f7f2] py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WRAPPER DALAM (Hero Style): Gelap, Rounded, Shadow */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-800 relative overflow-hidden">
          
          {/* Background Blob Decoration (Mirip Hero) */}
          <div className="absolute top-0 left-0 w-125 h-125 bg-emerald-900/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Selected <span className="text-emerald-400">Works</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Proyek-proyek yang telah kami selesaikan dengan standar industri tertinggi.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((item, i) => (
                <SpotlightCard key={i} className="h-full flex flex-col group">
                  
                  {/* Image Section */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-800 border-b border-gray-700">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.type}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Tech Stack Pills (Dark Mode) */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium text-gray-400 bg-gray-900 px-2 py-1 rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <button className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300">
                Lihat Project Lainnya
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;