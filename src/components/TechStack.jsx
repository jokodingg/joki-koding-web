import React from "react";
import Marquee from "react-fast-marquee";

export default function TechStack() {
  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  const frontend = [
    { name: "React", url: `${baseUrl}react/react-original.svg` },
    { name: "Next.js", url: `${baseUrl}nextjs/nextjs-original.svg` },
    { name: "Vue.js", url: `${baseUrl}vuejs/vuejs-original.svg` },
    { name: "Flutter", url: `${baseUrl}flutter/flutter-original.svg` },
    { name: "Kotlin", url: `${baseUrl}kotlin/kotlin-original.svg` },
    { name: "Swift", url: `${baseUrl}swift/swift-original.svg` },
  ];

  const backend = [
    { name: "Node.js", url: `${baseUrl}nodejs/nodejs-original.svg` },
    { name: "Python", url: `${baseUrl}python/python-original.svg` },
    { name: "PostgreSQL", url: `${baseUrl}postgresql/postgresql-original.svg` },
    { name: "MongoDB", url: `${baseUrl}mongodb/mongodb-original.svg` },
    { name: "Firebase", url: `${baseUrl}firebase/firebase-plain.svg` },
    { name: "TensorFlow", url: `${baseUrl}tensorflow/tensorflow-original.svg` },
    { name: "PyTorch", url: `${baseUrl}pytorch/pytorch-original.svg` },
  ];

  const infrastructure = [
    { name: "Docker", url: `${baseUrl}docker/docker-original.svg` },
    { name: "Arduino", url: `${baseUrl}arduino/arduino-original.svg` },
    { name: "Raspberry Pi", url: `${baseUrl}raspberrypi/raspberrypi-original.svg` },
    { name: "Linux", url: `${baseUrl}linux/linux-original.svg` },
    { name: "Ubuntu", url: `${baseUrl}ubuntu/ubuntu-plain.svg` },
  ];

  const renderMarquee = (items, direction) => (
    <Marquee
      autoFill
      direction={direction}
      speed={40}
      gradient={true}
      // PENTING: Warna gradient harus SAMA PERSIS dengan background section (#f7f7f2)
      gradientColor="#f7f7f2" 
      gradientWidth={100}
      className="py-4 overflow-hidden! [&_.rfm-marquee]:items-center h-30"
    >
      {items.map((item, index) => (
        <div
          key={index}
          // STYLE LIGHT MODE:
          // bg-white: Kartu putih bersih
          // border-gray-200: Garis tipis halus
          // shadow-sm: Bayangan tipis biar timbul dikit
          className="group mx-3 flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
          style={{ minWidth: '100px', minHeight: '80px' }} 
        >
          <img
            src={item.url}
            alt={item.name}
            className="h-10 w-10 object-contain transition-all duration-300"
            // FILTER LIGHT MODE:
            // brightness(0): Bikin jadi hitam pekat (siluet) pas diem
            // opacity-40: Biar ga terlalu nonjok itemnya (abu-abu jadinya)
            // Pas hover: Balik ke warna asli
            style={{ filter: 'grayscale(100%) opacity(0.5)', transition: '0.3s' }}
            
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
              e.currentTarget.style.transform = 'scale(1.1)'; // Efek zoom dikit
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      ))}
    </Marquee>
  );

  return (
    // Background disamakan dengan Hero (#f7f7f2)
    <section className="bg-[#f7f7f2] py-20 overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size[24px_24px] pointer-events-none"></div>
      <div className="container mx-auto px-4 mb-12 text-center">
        {/* Teks jadi Hitam (gray-900) */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tech <span className="text-emerald-600">Stack</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Tools modern standar industri yang kami gunakan untuk performa maksimal.
        </p>
      </div>

      <div className="space-y-4">
        {renderMarquee(frontend, "right")}
        {renderMarquee(backend, "left")}
        {renderMarquee(infrastructure, "right")}
      </div>
    </section>
  );
}