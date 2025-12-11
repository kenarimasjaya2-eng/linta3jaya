'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Droplets, 
  Shield, 
  Award, 
  Users,
  ChevronRight,
  CheckCircle,
  Building2,
  Truck,
  Factory
} from 'lucide-react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-900" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">CV LINTA 3 JAYA</h1>
                <p className="text-xs text-gray-600">Water Management Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 hover:bg-blue-800 text-white"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900">Home</a>
                <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900">About Us</a>
                <a href="#services" onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900">Services</a>
                <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-900">Portfolio</a>
                <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900">Contact</a>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-900 hover:bg-blue-800 text-white w-full"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Water wave effect background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent transform skew-y-3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-animate">
            <Badge className="mb-6 bg-yellow-500 text-blue-900 px-4 py-2 text-sm font-semibold">
              Trusted Water Management Since 2020
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Solusi Terpercaya
              <span className="block text-yellow-400">Pengelolaan Air Bersih</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Perusahaan profesional yang bergerak di bidang penampungan dan penyaluran air baku 
              dengan infrastruktur modern dan sistem distribusi yang andal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 text-lg font-semibold btn-hover"
              >
                Hubungi Kami
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold btn-hover"
              >
                Pelajari Layanan
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-100">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-blue-100">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 scroll-animate fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Tentang CV LINTA 3 JAYA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mitra terpercaya dalam penyediaan dan pengelolaan air bersih untuk kebutuhan rumah tangga, industri, dan publik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-900 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Visi & Misi</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-yellow-400" />
                    Visi
                  </h4>
                  <p className="text-blue-100">
                    Menjadi perusahaan terdepan dalam penyediaan solusi air bersih yang berkelanjutan 
                    dan berkontribusi pada kesejahteraan masyarakat
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-yellow-400" />
                    Misi
                  </h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                      Menyediakan air baku berkualitas dengan sistem distribusi yang andal
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                      Mengimplementasikan teknologi modern dalam pengelolaan air
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                      Memberikan layanan terbaik dengan standar internasional
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-yellow-500">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-lg mb-3 text-blue-900">Pengalaman & Keahlian</h4>
                  <p className="text-gray-600 mb-4">
                    Dengan pengalaman lebih dari 5 tahun, kami telah melayani berbagai klien 
                    dari sektor rumah tangga, industri, hingga fasilitas publik dengan standar kualitas tertinggi.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-blue-900" />
                      <span className="text-sm text-gray-700">Infrastruktur Modern</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-900" />
                      <span className="text-sm text-gray-700">Tim Profesional</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-blue-900" />
                      <span className="text-sm text-gray-700">Sertifikasi Resmi</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-blue-900" />
                      <span className="text-sm text-gray-700">Standar Internasional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-lg mb-3 text-blue-900">Legalitas & Sertifikasi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span>Badan Usaha Terdaftar</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span>SIUP (Surat Izin Usaha Perdagangan)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span>Sertifikasi Kualitas Air</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span>ISO 9001:2015</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white scroll-animate fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Perusahaan kami bergerak dalam penyediaan layanan penampungan dan penyaluran air baku 
              melalui sistem pengumpulan, penyimpanan, serta distribusi yang terstandarisasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift card-hover border-t-4 border-blue-900">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Penampungan Air Baku</h3>
                <p className="text-gray-600 mb-4">
                  Sistem penampungan air baku dengan kapasitas besar menggunakan reservoir modern 
                  yang dilengkapi teknologi monitoring kualitas secara real-time.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Reservoir berkapasitas besar</li>
                  <li>• Sistem filtrasi awal</li>
                  <li>• Monitoring kualitas 24/7</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift card-hover border-t-4 border-yellow-500">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Distribusi Air Bersih</h3>
                <p className="text-gray-600 mb-4">
                  Jaringan distribusi air bersih dengan sistem perpipaan bertekanan dan pompa 
                  efisiensi tinggi untuk menjamin pasokan yang konsisten.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sistem perpipaan bertekanan</li>
                  <li>• Pompa efisiensi tinggi</li>
                  <li>• Jaringan distribusi luas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift card-hover border-t-4 border-green-600">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Pengelolaan Kualitas</h3>
                <p className="text-gray-600 mb-4">
                  Pengendalian kualitas air secara berkala melalui monitoring fisik, kimia, 
                  dan biologis dengan teknologi pengendalian otomatis.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Monitoring fisik, kimia, biologis</li>
                  <li>• Teknologi pengendalian otomatis</li>
                  <li>• Sertifikasi kualitas terstandar</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dukungan Infrastruktur Modern
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Dengan dukungan infrastruktur modern, jaringan distribusi yang andal, serta teknologi 
              pengendalian otomatis, kami mampu menjamin kualitas air melalui monitoring fisik, 
              kimia, dan biologis secara berkala.
            </p>
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 scroll-animate fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Project Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Proyek-proyek yang telah kami selesaikan dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Reservoir Kota Pontianak</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Pembangunan reservoir air baku kapasitas 5.000 m³ dengan sistem monitoring otomatis
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Pontianak, Kalimantan Barat
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Jaringan Distribusi Industri</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Instalasi sistem perpipaan bertekanan untuk kawasan industri seluas 50 hektar
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Singkawang, Kalimantan Barat
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Water Treatment Plant</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Pengembangan instalasi pengolahan air kapasitas 10.000 liter/hari
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Putussibau, Kalimantan Barat
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Sistem PDAM Terpadu</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Integrasi sistem penyediaan air bersih untuk 10.000 rumah tangga
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Ketapang, Kalimantan Barat
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Hydroponic Water Supply</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sistem suplai air khusus untuk pertanian hidroponik skala besar
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Kubu Raya, Kalimantan Barat
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift card-hover">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Emergency Water System</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sistem suplai air darurat untuk fasilitas kesehatan dan sekolah
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Kapuas Hulu, Kalimantan Barat
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white scroll-animate fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap membantu kebutuhan air bersih Anda dengan solusi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-6 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Informasi Kontak</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building2 className="h-5 w-5 mr-3 text-blue-900 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">CV LINTA 3 JAYA</p>
                        <p className="text-gray-600 text-sm">
                          JALAN LINTA3 SELATAN, Kel. Kedamin Hulu, Kec. Putussibau Selatan,
                          <br />
                          Kab. Kapuas Hulu, Prov. Kalimantan Barat, Kode Pos: 4023
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-blue-900" />
                      <div>
                        <p className="font-semibold text-gray-900">Telepon</p>
                        <p className="text-gray-600">0823-1204-4644</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-blue-900" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@linta3jaya.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-blue-900 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Jam Operasional</p>
                        <p className="text-gray-600 text-sm">
                          Senin - Jumat: 08:00 - 17:00<br />
                          Sabtu: 08:00 - 12:00<br />
                          Minggu: Tutup
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Lokasi Kami</h3>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Google Maps Integration</p>
                      <p className="text-sm text-gray-500">Putussibau Selatan, Kapuas Hulu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Kirim Pesan</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telepon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subjek
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                        <option>Pilih Layanan</option>
                        <option>Konsultasi Air Bersih</option>
                        <option>Penampungan Air Baku</option>
                        <option>Distribusi Air</option>
                        <option>Kerjasama Bisnis</option>
                        <option>Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Jelaskan kebutuhan Anda..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3"
                    >
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8 text-yellow-400" />
                <h3 className="text-xl font-bold">CV LINTA 3 JAYA</h3>
              </div>
              <p className="text-blue-200 text-sm">
                Solusi terpercaya untuk penyediaan dan pengelolaan air bersih dengan standar internasional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Layanan</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>Penampungan Air Baku</li>
                <li>Distribusi Air Bersih</li>
                <li>Pengelolaan Kualitas Air</li>
                <li>Konsultasi Teknis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Perusahaan</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                <li>Tentang Kami</li>
                <li>Karir</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Kontak</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0823-1204-4644
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@linta3jaya.com
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  Putussibau Selatan, Kapuas Hulu
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2024 CV LINTA 3 JAYA. All rights reserved. | Water Management Solutions</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}