'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, Shield, Users, AlertTriangle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Syarat dan Ketentuan Penggunaan Website CV LINTA 3 JAYA
          </p>
          <p className="text-blue-200 text-sm mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-8 border-l-4 border-blue-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selamat datang di website CV LINTA 3 JAYA. Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan 
              website kami, layanan yang tersedia, dan hak serta kewajiban antara Anda sebagai pengguna dan CV LINTA 3 JAYA.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan mengakses, browsing, atau menggunakan website kami, Anda menyatakan telah membaca, memahami, 
              dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini serta Kebijakan Privasi kami.
            </p>
          </CardContent>
        </Card>

        {/* Definitions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Definisi</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900">"Website"</p>
                <p className="text-gray-700">Merujuk pada situs web CV LINTA 3 JAYA yang dapat diakses melalui www.linta3jaya.com</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-gray-900">"Perusahaan"</p>
                <p className="text-gray-700">Merujuk pada CV LINTA 3 JAYA, penyedia layanan pengelolaan air bersih</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-gray-900">"Pengguna"</p>
                <p className="text-gray-700">Merujuk pada individu atau entitas yang mengakses atau menggunakan Website kami</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900">"Layanan"</p>
                <p className="text-gray-700">Merujuk pada semua layanan yang disediakan oleh Perusahaan melalui Website</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-900">"Konten"</p>
                <p className="text-gray-700">Merujuk pada semua informasi, teks, gambar, video, dan materi lain yang tersedia di Website</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Penerimaan Syarat</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Dengan menggunakan Website kami, Anda menyatakan bahwa:
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Anda telah membaca dan menyetujui Kebijakan Privasi kami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Anda memiliki kapasitas hukum untuk terikat oleh perjanjian ini</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Anda akan mematuhi semua hukum dan peraturan yang berlaku</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Perhatian:</strong> Jika Anda tidak menyetujui Syarat dan Ketentuan ini, 
                  jangan gunakan Website kami. Perusahaan berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights and Responsibilities */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Hak dan Kewajiban Pengguna</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Hak Pengguna</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mengakses informasi layanan yang tersedia</li>
                  <li>• Menghubungi kami untuk konsultasi</li>
                  <li>• Meminta informasi tentang layanan kami</li>
                  <li>• Melaporkan masalah atau keluhan</li>
                  <li>• Meminta perbaikan data pribadi</li>
                  <li>• Menarik persetujuan penggunaan data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kewajiban Pengguna</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Memberikan informasi yang akurat dan lengkap</li>
                  <li>• Mematuhi hukum dan peraturan yang berlaku</li>
                  <li>• Tidak menggunakan website untuk tujuan ilegal</li>
                  <li>• Menghormati hak kekayaan intelektual</li>
                  <li>• Tidak mencoba merusak sistem keamanan</li>
                  <li>• Bertanggung jawab atas keamanan akun</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Rights and Responsibilities */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Hak dan Kewajiban Perusahaan</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Hak Perusahaan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menyediakan layanan sesuai kemampuan</li>
                  <li>• Mengubah atau menghentikan layanan</li>
                  <li>• Memverifikasi informasi pengguna</li>
                  <li>• Menolak layanan kepada pihak tertentu</li>
                  <li>• Memperbarui Syarat dan Ketentuan</li>
                  <li>• Melindungi hak kekayaan intelektual</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kewajiban Perusahaan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menyediakan informasi yang akurat</li>
                  <li>• Melindungi data pribadi pengguna</li>
                  <li>• Memberikan layanan yang profesional</li>
                  <li>• Merespons pertanyaan dan keluhan</li>
                  <li>• Memelihara keamanan website</li>
                  <li>• Mematuhi hukum yang berlaku</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prohibited Activities */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Aktivitas yang Dilarang</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Pengguna dilarang melakukan aktivitas berikut saat menggunakan Website kami:
            </p>
            
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">Aktivitas Ilegal dan Tidak Etis</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Penipuan, phishing, atau aktivitas penipuan lainnya</li>
                  <li>• Penyebaran malware, virus, atau kode berbahaya</li>
                  <li>• Pelanggaran hak kekayaan intelektual</li>
                  <li>• Pencurian identitas atau data pribadi</li>
                  <li>• Aktivitas yang melanggar hukum Indonesia</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Aktivitas Teknis yang Dilarang</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Hacking atau mencoba membobol sistem keamanan</li>
                  <li>• Overloading atau mengganggu kinerja server</li>
                  <li>• Scraping atau data mining tanpa izin</li>
                  <li>• Menggunakan bot atau automated scripts</li>
                  <li>• Reverse engineering atau decompiling</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Konten yang Dilarang</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Konten yang melanggar hukum atau peraturan</li>
                  <li>• Konten yang mengandung SARA atau ujaran kebencian</li>
                  <li>• Konten pornografi atau tidak senonoh</li>
                  <li>• Konten yang memfitnah atau mencemarkan nama baik</li>
                  <li>• Konten yang melanggar hak pihak ketiga</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Kekayaan Intelektual</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Semua konten, materi, dan elemen visual yang tersedia di Website ini dilindungi oleh 
                hukum kekayaan intelektual Indonesia dan hukum internasional.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Hak Cipta dan Merek</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nama "CV LINTA 3 JAYA" adalah merek dagang terdaftar</li>
                  <li>• Logo, desain, dan tampilan website adalah hak milik eksklusif</li>
                  <li>• Konten teks, gambar, dan video dilindungi hak cipta</li>
                  <li>• Kode sumber dan teknologi backend adalah rahasia dagang</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Penggunaan yang Diizinkan</h3>
                <p className="text-gray-700 mb-2">
                  Anda diperbolehkan untuk:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Melihat dan mengunduh konten untuk penggunaan pribadi</li>
                  <li>• Mencetak halaman untuk referensi non-komersial</li>
                  <li>• Membagikan tautan ke halaman website kami</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Anda tidak diperbolehkan mereproduksi, mendistribusikan, atau menggunakan konten kami 
                  untuk tujuan komersial tanpa izin tertulis dari Perusahaan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Pembatasan Tanggung Jawab</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Sejauh diizinkan oleh hukum, Perusahaan tidak bertanggung jawab atas:
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Kerugian langsung atau tidak langsung</strong> yang timbul dari penggunaan Website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Kehilangan data atau informasi</strong> akibat masalah teknis atau force majeure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Ketersediaan layanan</strong> yang terganggu karena maintenance atau masalah teknis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Akurasi informasi</strong> dari pihak ketiga yang terhubung dengan Website kami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Kerusakan sistem</strong> akibat aktivitas ilegal pengguna</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Batasan Tanggung Jawab Maksimal:</strong> Total tanggung jawab Perusahaan terhadap 
                  kerugian yang timbul dari penggunaan Website tidak akan melebihi jumlah yang telah Anda bayar 
                  kepada Perusahaan dalam 6 (enam) bulan terakhir.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indemnification */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ganti Rugi</h2>
            
            <p className="text-gray-700 mb-4">
              Anda setuju untuk mengganti rugi, membela, dan membebaskan Perusahaan dari:
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Semua klaim, tuntutan, atau gugatan dari pihak ketiga</li>
              <li>• Kerugian, biaya, dan pengeluaran hukum yang timbul</li>
              <li>• Pelanggaran Syarat dan Ketentuan oleh Anda</li>
              <li>• Pelanggaran hukum atau hak pihak ketiga oleh Anda</li>
              <li>• Aktivitas ilegal atau tidak sah yang Anda lakukan</li>
            </ul>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Pengakhiran</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Pengguna</h3>
                <p className="text-gray-700">
                  Anda dapat menghentikan penggunaan Website kapan saja dengan:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Berhenti mengakses Website</li>
                  <li>• Menghapus akun (jika ada)</li>
                  <li>• Menghubungi kami untuk menonaktifkan layanan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Perusahaan</h3>
                <p className="text-gray-700">
                  Perusahaan berhak menghentikan akses Anda jika:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Anda melanggar Syarat dan Ketentuan</li>
                  <li>• Anda melakukan aktivitas ilegal</li>
                  <li>• Kami diwajibkan oleh hukum</li>
                  <li>• Keputusan bisnis Perusahaan</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Akibat Pengakhiran:</strong> Setelah pengakhiran, hak akses Anda akan dibatalkan 
                  dan kami dapat menghapus data Anda sesuai dengan Kebijakan Privasi kami.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Penyelesaian Sengketa</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Sengketa yang timbul dari penggunaan Website akan diselesaikan melalui:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">1. Negosiasi</h3>
                  <p className="text-gray-700">Para pihak akan melakukan negosiasi baik hati untuk mencapai kesepakatan</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">2. Mediasi</h3>
                  <p className="text-gray-700">Jika negosiasi gagal, sengketa akan diselesaikan melalui mediasi</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">3. Arbitrase</h3>
                  <p className="text-gray-700">Sengketa akhir akan diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI)</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Yurisdiksi:</strong> Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan di Pengadilan Negeri Pontianak.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Provisions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ketentuan Umum</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
                <p className="text-gray-700">
                  Perusahaan tidak bertanggung jawab atas kegagalan pemenuhan kewajiban yang disebabkan oleh 
                  kejadian di luar kendali kami (bencana alam, perang, pemogokan, dll).
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pemisahan Kewajiban</h3>
                <p className="text-gray-700">
                  Jika bagian dari Syarat dan Ketentuan ini dinyatakan tidak sah atau tidak dapat dilaksanakan, 
                  bagian lainnya tetap berlaku penuh.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Waiver</h3>
                <p className="text-gray-700">
                  Kegagalan Perusahaan menegakkan hak atau ketentuan tidak berarti waiver terhadap hak tersebut.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Keseluruhan Perjanjian</h3>
                <p className="text-gray-700">
                  Syarat dan Ketentuan ini merupakan keseluruhan perjanjian antara Anda dan Perusahaan 
                  dan menggantikan semua perjanjian sebelumnya.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 border-l-4 border-yellow-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
            
            <p className="text-gray-700 mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Kontak</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@linta3jaya.com</p>
                  <p><strong>Telepon:</strong> 0823-1204-4644</p>
                  <p><strong>Alamat:</strong> JALAN LINTA3 SELATAN, Kel. Kedamin Hulu, Kec. Putussibau Selatan, Kab. Kapuas Hulu, Prov. Kalimantan Barat, Kode Pos: 4023</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p>• Sabtu: 08:00 - 12:00 WIB</p>
                  <p>• Minggu: Tutup</p>
                  <p>• Respon email: 1-2 hari kerja</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}