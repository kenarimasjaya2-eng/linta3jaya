'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Lock, User, Database, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Kebijakan Privasi CV LINTA 3 JAYA - Perlindungan Data Pengguna sesuai Standar Internasional
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
              CV LINTA 3 JAYA ("kami," "perusahaan," atau "CV LINTA 3 JAYA") berkomitmen untuk melindungi privasi dan keamanan data pribadi pengguna website kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda sesuai dengan Peraturan Perlindungan Data Pribadi Indonesia dan standar internasional General Data Protection Regulation (GDPR).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan mengakses atau menggunakan website kami, Anda menyatakan telah membaca, memahami, dan menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Data yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data yang Anda Berikan Secara Aktif</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat lengkap</li>
                  <li>Informasi perusahaan (jika berlaku)</li>
                  <li>Pesan atau permintaan melalui form kontak</li>
                  <li>Dokumen yang Anda unggah (jika ada)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data yang Dikumpulkan Secara Otomatis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Alamat IP dan informasi lokasi geografis</li>
                  <li>Jenis browser dan sistem operasi</li>
                  <li>Informasi perangkat (jenis, model, sistem operasi)</li>
                  <li>Data penggunaan website (halaman yang dikunjungi, waktu kunjungan)</li>
                  <li>Cookies dan data tracking lainnya</li>
                  <li>Informasi tentang interaksi Anda dengan website kami</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Penggunaan Data</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Tujuan Operasional</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Merespons pertanyaan dan permintaan Anda</li>
                  <li>• Memberikan layanan konsultasi</li>
                  <li>• Memproses transaksi bisnis</li>
                  <li>• Mengirim informasi layanan</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Tujuan Peningkatan Layanan</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Menganalisis penggunaan website</li>
                  <li>• Meningkatkan pengalaman pengguna</li>
                  <li>• Mengembangkan produk dan layanan</li>
                  <li>• Penelitian dan pengembangan</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Tujuan Komunikasi</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Mengirim newsletter (dengan persetujuan)</li>
                  <li>• Informasi promosi dan penawaran</li>
                  <li>• Update layanan dan produk</li>
                  <li>• Undangan acara perusahaan</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Tujuan Legal dan Keamanan</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Mematuhi kewajiban hukum</li>
                  <li>• Melindungi hak-hak perusahaan</li>
                  <li>• Mencegah aktivitas ilegal</li>
                  <li>• Keamanan sistem dan data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Keamanan Data</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                CV LINTA 3 JAYA mengimplementasikan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Teknologi Keamanan yang Kami Gunakan:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Enkripsi SSL/TLS:</strong> Semua transmisi data dienkripsi dengan protokol keamanan standar industri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Firewall dan Security Systems:</strong> Sistem keamanan berlapis untuk mencegah akses tidak sah</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Access Control:</strong> Akses data terbatas untuk personel yang berwenang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Regular Security Audits:</strong> Audit keamanan berkala untuk identifikasi vulnerability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Data Backup:</strong> Sistem backup dan recovery yang aman</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Perhatian:</strong> Meskipun kami telah mengimplementasikan langkah-langkah keamanan yang komprehensif, 
                  tidak ada sistem yang 100% aman dari serangan cyber. Kami berkomitmen untuk terus meningkatkan 
                  sistem keamanan kami sesuai dengan perkembangan teknologi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Hak Anda sebagai Pengguna</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Sesuai dengan GDPR dan regulasi perlindungan data Indonesia, Anda memiliki hak-hak berikut:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Akses</h3>
                <p className="text-gray-700">Anda berhak mengetahui data pribadi apa yang kami simpan tentang Anda.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Koreksi</h3>
                <p className="text-gray-700">Anda berhak memperbaiki data pribadi yang tidak akurat atau tidak lengkap.</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Penghapusan</h3>
                <p className="text-gray-700">Anda berhak meminta penghapusan data pribadi Anda dalam kondisi tertentu.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Pembatasan Pengolahan</h3>
                <p className="text-gray-700">Anda berhak membatasi pengolahan data pribadi Anda dalam kondisi tertentu.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Portabilitas Data</h3>
                <p className="text-gray-700">Anda berhak menerima data pribadi Anda dalam format terstruktur dan machine-readable.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hak Menolak</h3>
                <p className="text-gray-700">Anda berhak menolak pengolahan data pribadi Anda untuk tujuan pemasaran langsung.</p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Untuk menggunakan hak-hak Anda:</strong> Silakan hubungi kami melalui email 
                <a href="mailto:privacy@linta3jaya.com" className="underline"> privacy@linta3jaya.com</a> 
                atau telepon 0823-1204-4644. Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Pembagian Data</h2>
            
            <p className="text-gray-700 mb-4">
              Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. 
              Data Anda hanya akan dibagikan dalam kondisi berikut:
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Dengan persetujuan Anda:</strong> Kami hanya akan membagikan data jika Anda memberikan persetujuan eksplisit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Penyedia layanan:</strong> Kami berbagi data dengan penyedia layanan pihak ketiga yang membantu operasional website kami (hosting, analytics, email marketing).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Kewajiban hukum:</strong> Kami dapat membagikan data jika diwajibkan oleh hukum atau untuk melindungi hak-hak kami.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Transfer bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* International Data Transfers */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Transfer Data Internasional</h2>
            
            <p className="text-gray-700 mb-4">
              Data pribadi Anda akan disimpan dan diproses di Indonesia. Kami tidak akan mentransfer data pribadi 
              Anda ke luar Indonesia tanpa persetujuan Anda dan kecuali transfer tersebut memenuhi persyaratan hukum yang berlaku.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Perhatian:</strong> Jika transfer data internasional diperlukan, kami akan memastikan bahwa 
                penerima data memiliki tingkat perlindungan data yang setara dengan yang ditetapkan oleh hukum Indonesia.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Kebijakan Cookies</h2>
            
            <p className="text-gray-700 mb-4">
              Website kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman pengguna:
            </p>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">Jenis Cookies yang Kami Gunakan:</h3>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Analytics Cookies:</strong> Membantu kami memahami cara pengguna menggunakan website</li>
                  <li><strong>Functional Cookies:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Marketing Cookies:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda. 
                  Menonaktifkan cookies tertentu dapat memengaruhi fungsionalitas website.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Penyimpanan Data</h2>
            
            <p className="text-gray-700 mb-4">
              Kami hanya akan menyimpan data pribadi Anda selama diperlukan untuk tujuan pengumpulan data tersebut:
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Data kontak: Selama Anda menjadi pelanggan atau mitra bisnis kami</li>
              <li>• Data transaksi: Minimal 5 tahun untuk keperluan akuntansi dan pajak</li>
              <li>• Data website: Sesuai kebijakan retensi masing-masing jenis data</li>
              <li>• Data yang tidak lagi diperlukan akan dihapus secara aman</li>
            </ul>
          </CardContent>
        </Card>

        {/* Children Privacy */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Privasi Anak</h2>
            
            <p className="text-gray-700">
              Website kami tidak ditujukan untuk anak-anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan 
              data pribadi dari anak-anak. Jika kami mengetahui telah mengumpulkan data dari anak di bawah 18 tahun, 
              kami akan mengambil langkah-langkah untuk menghapus data tersebut segera.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Perubahan Kebijakan</h2>
            
            <p className="text-gray-700 mb-4">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
              dalam praktik kami atau perubahan hukum yang berlaku. Perubahan signifikan akan diberitahukan 
              melalui website atau email Anda.
            </p>
            
            <p className="text-gray-700">
              Versi terbaru dari Kebijakan Privasi selalu tersedia di halaman ini dengan tanggal pembaruan terakhir.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 border-l-4 border-yellow-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
            
            <p className="text-gray-700 mb-6">
              Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini atau 
              perlindungan data pribadi Anda, silakan hubungi kami:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@linta3jaya.com</p>
                  <p><strong>Telepon:</strong> 0823-1204-4644</p>
                  <p><strong>Alamat:</strong> JALAN LINTA3 SELATAN, Kel. Kedamin Hulu, Kec. Putussibau Selatan, Kab. Kapuas Hulu, Prov. Kalimantan Barat, Kode Pos: 4023</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Waktu Respons</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• Permintaan akses data: 14 hari kerja</p>
                  <p>• Keluhan privasi: 7 hari kerja</p>
                  <p>• Permintaan koreksi: 7 hari kerja</p>
                  <p>• Pertanyaan umum: 3 hari kerja</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal References */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Referensi Hukum</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Kebijakan Privasi ini disusun berdasarkan peraturan perundang-undangan berikut:
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi</li>
              <li>• General Data Protection Regulation (GDPR) Uni Europe</li>
              <li>• Peraturan Pemerintah tentang Perlindungan Data Elektronik</li>
              <li>• Standar ISO/IEC 27001 tentang Manajemen Keamanan Informasi</li>
            </ul>
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