import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('landing-page');

  // Data untuk setiap tab
  const pricingData = {
    'landing-page': {
      title: 'Landing Page',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 1.500.000',
          features: [
            'Free Domain (.com)',
            'Shared Hosting (6 Bulan)',
            'Desain Responsif (Mobile & Desktop)',
            '1 Halaman Landing Page (scroll panjang)',
            '1 Email Bisnis',
            '1 GB Disk Storage',
            'Free SSL',
            '1x Revisi Gratis',
            'Garansi Maintenance 15 Hari',
            'Video Panduan Akses Website'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 2.750.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Hosting 1 Tahun',
            'Desain Visual Lebih Kompleks (CTA, Form, Galeri)',
            'Direct WhatsApp Chat',
            '2 Email Bisnis',
            '10 GB Disk Storage',
            '3x Revisi Gratis',
            'Free SSL',
            'SEO On-Page Basic',
            'Garansi Maintenance 1 Bulan'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 3.750.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)',
            'Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)',
            'Desain Interaktif (Animated Scroll, Parallax, dll)',
            'Speed Optimization (Lazy Load + Caching Tools)',
            '5x Revisi Gratis',
            'Garansi Maintenance 1,5 Bulan'
          ],
          popular: false
        }
      ]
    },
    'company-profile': {
      title: 'Web Company Profile',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 2.500.000',
          features: [
            'Free Domain (.com)',
            'Shared Hosting (6 Bulan)',
            'Desain Responsif (Mobile & Desktop)',
            'Hingga 5 Halaman (Home, About, Services, Portfolio, Contact)',
            '2 Email Bisnis',
            '5 GB Disk Storage',
            'Free SSL',
            'Form Kontak',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 4.500.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Hosting 1 Tahun',
            'Hingga 8 Halaman',
            'Galeri / Portfolio Interaktif',
            'Blog Section (5 artikel)',
            '5 Email Bisnis',
            '20 GB Disk Storage',
            'WhatsApp Integration',
            'Google Maps Integration',
            'SEO On-Page',
            '3x Revisi Gratis',
            'Garansi Maintenance 2 Bulan'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 6.500.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'Unlimited Halaman',
            'CMS untuk Update Konten Sendiri',
            'Multi-language Support',
            'Advanced Animation & Interaction',
            '10 Email Bisnis',
            '50 GB Disk Storage',
            'Speed Optimization Premium',
            'Backup Otomatis',
            '5x Revisi Gratis',
            'Garansi Maintenance 3 Bulan'
          ],
          popular: false
        }
      ]
    },
    'web-app': {
      title: 'Web Application',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 5.000.000',
          features: [
            'Custom Domain',
            'VPS Hosting (3 Bulan)',
            'Desain Responsif',
            'User Authentication (Login/Register)',
            'CRUD Basic (3-5 Tabel)',
            'Database MySQL/PostgreSQL',
            'REST API',
            'Admin Dashboard Basic',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan',
            'Dokumentasi API'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 10.000.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'VPS Hosting (6 Bulan)',
            'Role Management (Admin, User, dll)',
            'CRUD Advanced (10+ Tabel)',
            'File Upload System',
            'Export Data (Excel, PDF)',
            'Email Notification',
            'Search & Filter Advanced',
            'Reporting Dashboard',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Training Penggunaan System'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 18.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'VPS Hosting (1 Tahun)',
            'Multi-tenant System',
            'Real-time Notification',
            'Payment Gateway Integration',
            'Advanced Security (2FA, Encryption)',
            'API Integration (Third-party)',
            'Mobile Responsive PWA',
            'Performance Optimization',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 6 Bulan',
            'Priority Support'
          ],
          popular: false
        }
      ]
    },
    'e-commerce': {
      title: 'Web Toko Online',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 4.000.000',
          features: [
            'Free Domain (.com)',
            'Shared Hosting (6 Bulan)',
            'Desain Responsif',
            'Hingga 50 Produk',
            'Keranjang Belanja',
            'Checkout System',
            'Payment Gateway (1 metode)',
            'Manajemen Produk',
            'Order Management Basic',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 7.500.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Hosting 1 Tahun',
            'Unlimited Produk',
            'Multi Payment Gateway',
            'Ongkir Otomatis (RajaOngkir)',
            'Sistem Kupon & Diskon',
            'Product Variants (Size, Color)',
            'Customer Review & Rating',
            'Email Notification',
            'Admin Dashboard',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Training Admin'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 12.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'VPS Hosting (1 Tahun)',
            'Multi-vendor Marketplace',
            'Member & Loyalty Point',
            'Wishlist & Compare',
            'Live Chat Support',
            'WhatsApp Order Integration',
            'Advanced Analytics',
            'SEO Optimization',
            'Mobile App (PWA)',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 4 Bulan',
            'Priority Support 24/7'
          ],
          popular: false
        }
      ]
    },
    'pos-kasir': {
      title: 'Web Kasir / POS',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 6.000.000',
          features: [
            'Custom Domain',
            'VPS Hosting (3 Bulan)',
            'Desain Responsif (Desktop & Tablet)',
            'Transaksi Penjualan (Kasir)',
            'Manajemen Produk & Stok',
            'Laporan Penjualan Harian/Bulanan',
            'Multi User (2 Kasir)',
            'Cetak Struk Thermal',
            'Database MySQL',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan',
            'Training Penggunaan System'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 10.000.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'VPS Hosting (6 Bulan)',
            'Multi User (5 Kasir)',
            'Manajemen Supplier',
            'Purchase Order & Pembelian',
            'Barcode Scanner Integration',
            'Diskon & Promo',
            'Member & Loyalty Point',
            'Laporan Laba Rugi',
            'Stok Opname',
            'Multi Payment Method',
            'Export Data (Excel/PDF)',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Priority Support'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 16.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'VPS Hosting (1 Tahun)',
            'Multi Outlet/Cabang',
            'Sinkronisasi Data Real-time',
            'Unlimited User',
            'Manajemen Hutang Piutang',
            'Shift & Kas Management',
            'Integrasi E-Commerce',
            'WhatsApp Notification',
            'Advanced Analytics & Dashboard',
            'Mobile App (Android)',
            'Backup Otomatis',
            'API Integration',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 6 Bulan',
            'Priority Support 24/7'
          ],
          popular: false
        }
      ]
    }
  };

  const tabs = [
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'company-profile', label: 'Web Company Profile' },
    { id: 'web-app', label: 'Web Application' },
    { id: 'e-commerce', label: 'Web Toko Online' },
    { id: 'pos-kasir', label: 'Web Kasir / POS' }
  ];

  const currentData = pricingData[activeTab];

  return (
    <section id="pricing" className="relative bg-[#f7f7f2] py-24 overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricelist <span className="text-emerald-600">Layanan</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Solusi lengkap untuk bantu bisnis anda eksis di dunia digital!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {currentData.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-emerald-600 shadow-lg shadow-emerald-600/10'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const phone = "6281333543975";
                  const text = encodeURIComponent(`Halo Jokoding, saya tertarik dengan paket ${plan.name} - ${currentData.title}`);
                  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
                }}
                className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Order Sekarang
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Butuh paket custom? <a href="#contact" className="text-emerald-600 font-semibold hover:underline">Hubungi kami</a> untuk penawaran khusus.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
