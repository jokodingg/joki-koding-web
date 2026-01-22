import { useState, useEffect } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" style={{ 
        background: scrolled ? 'rgba(247, 247, 242, 0.98)' : 'rgba(247, 247, 242, 0.95)',
        boxShadow: scrolled ? '0 2px 30px rgba(0, 0, 0, 0.1)' : '0 2px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <div className="container">
          <div className="nav-brand">
            <img src="/logo-jokoding-only.png" alt="Jokoding Logo" className="logo" />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollTo('home')}>Beranda</a></li>
            <li><a onClick={() => scrollTo('services')}>Layanan</a></li>
            <li><a onClick={() => scrollTo('portfolio')}>Portfolio</a></li>
            <li><a onClick={() => scrollTo('testimonials')}>Testimoni</a></li>
            <li><a onClick={() => scrollTo('contact')}>Kontak</a></li>
          </ul>
          <button className="btn btn-primary">Konsultasi Gratis</button>
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-mobile">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <pre><code><span className="keyword">function</span> <span className="function">belajarCoding</span>() {'{\n'}
  <span className="keyword">const</span> semangat = <span className="string">"100%"</span>;{'\n'}
  <span className="keyword">return</span> <span className="string">"Sukses!"</span>;{'\n}'}
</code></pre>
              </div>
            </div>
            <h1>Wujudkan <span className="highlight">Website</span> Impian Bisnis Anda</h1>
            <p>Jokoding hadir untuk membantu bisnis Anda tampil profesional di dunia digital. Website modern, responsif, dan sesuai kebutuhan Anda.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg">Konsultasi Gratis</button>
              <button className="btn btn-outline btn-lg">Lihat Portfolio</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Project Selesai</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Klien Puas</span>
              </div>
              <div className="stat">
                <span className="stat-number">5.0</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre><code><span className="keyword">function</span> <span className="function">belajarCoding</span>() {'{\n'}
  <span className="keyword">const</span> semangat = <span className="string">"100%"</span>;{'\n'}
  <span className="keyword">return</span> <span className="string">"Sukses!"</span>;{'\n}'}
</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="tech-stack">
        <div className="marquee">
          <div className="marquee-content">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          </div>
          <div className="marquee-content">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Layanan <span className="highlight">Kami</span></h2>
            <p>Solusi digital lengkap untuk kebutuhan Anda</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '🌐', title: 'Website Development', desc: 'Website company profile, e-commerce, landing page, dan web application' },
              { icon: '📱', title: 'Mobile Development', desc: 'Aplikasi Android & iOS native maupun cross-platform (Flutter, React Native)' },
              { icon: '🤖', title: 'AI & Machine Learning', desc: 'Solusi AI, chatbot, computer vision, dan model machine learning custom' },
              { icon: '📡', title: 'IoT Solutions', desc: 'Sistem IoT untuk smart home, monitoring, dan otomasi industri' },
              { icon: '🔌', title: 'Jaringan Komputer', desc: 'Setup, konfigurasi, dan troubleshooting jaringan untuk bisnis Anda' },
              { icon: '📝', title: 'Tugas & Project Kecil', desc: 'Bantuan tugas programming, debugging, dan project kecil lainnya' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="courses">
        <div className="container">
          <div className="section-header">
            <h2>Portfolio <span className="highlight">Terbaru</span></h2>
            <p>Beberapa project yang telah kami kerjakan</p>
          </div>
          <div className="courses-grid">
            {[
              { icon: '🏢', title: 'PT Maju Bersama', desc: 'Website Company Profile', type: 'Company Profile', tech: 'React, Node.js' },
              { icon: '🛍️', title: 'TokoSehat.id', desc: 'E-Commerce Produk Kesehatan', type: 'E-Commerce', tech: 'Next.js, PostgreSQL' },
              { icon: '🍽️', title: 'Resto Nusantara', desc: 'Website Restoran + Reservasi', type: 'Web App', tech: 'Vue.js, Firebase' },
            ].map((c, i) => (
              <div className="course-card" key={i}>
                <div className="course-badge">{c.type}</div>
                <div className="course-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-meta">
                  <span>🛠️ {c.tech}</span>
                </div>
                <button className="btn btn-primary btn-block">Lihat Detail</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Apa Kata <span className="highlight">Klien</span>?</h2>
            <p>Testimoni dari klien yang telah bekerja sama dengan kami</p>
          </div>
          <div className="testimonials-grid">
            {[
              { text: 'Website yang dibuat sangat profesional dan sesuai dengan kebutuhan bisnis kami. Tim Jokoding sangat responsif dan helpful!', name: 'Budi Santoso', role: 'Owner PT Maju Bersama', initials: 'BS' },
              { text: 'Proses pengerjaan cepat dan hasilnya memuaskan. Omset toko online kami meningkat 200% setelah pakai website dari Jokoding.', name: 'Siti Rahayu', role: 'Founder TokoSehat.id', initials: 'SR' },
              { text: 'Desainnya modern dan website-nya sangat mudah dikelola. Recommended banget untuk yang butuh jasa pembuatan website!', name: 'Ahmad Wijaya', role: 'Manager Resto Nusantara', initials: 'AW' },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-content">
                  <p>"{t.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Siap Membuat Website untuk Bisnis Anda?</h2>
          <p>Konsultasikan kebutuhan website Anda secara gratis bersama tim kami!</p>
          <button className="btn btn-white btn-lg">Hubungi Kami Sekarang</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo-jokoding-only.png" alt="Jokoding Logo" className="logo" />
              <p>Jasa pembuatan website profesional untuk bisnis Anda. Desain modern, responsif, dan SEO friendly.</p>
              <div className="social-links">
                <a href="#">📘</a>
                <a href="#">📸</a>
                <a href="#">💬</a>
                <a href="#">💼</a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Layanan</h4>
              <ul>
                <li><a href="#">Company Profile</a></li>
                <li><a href="#">E-Commerce</a></li>
                <li><a href="#">Landing Page</a></li>
                <li><a href="#">Web Application</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Perusahaan</h4>
              <ul>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Karir</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Kontak</h4>
              <ul>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Jokoding. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App