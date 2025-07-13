"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

const HomePage = () => {
  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-violet-700 text-white px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Aman Bertransaksi dengan Rekber</h1>
        <p className="text-lg mb-6">Jembatan terpercaya antara pembeli dan penjual di dunia digital</p>
        <Link
          href="/home"
          className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
        >
          Mulai Sekarang
        </Link>
      </section>

      {/* Fitur Utama */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-8">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Rekening Bersama</h3>
            <p className="text-sm text-gray-600">Dana ditahan sementara dan dilepas saat transaksi selesai.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Obrolan Langsung</h3>
            <p className="text-sm text-gray-600">Chat langsung dengan lawan transaksi tanpa keluar platform.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Tracking Transaksi</h3>
            <p className="text-sm text-gray-600">Lihat status transaksi secara real-time dan transparan.</p>
          </div>
        </div>
      </section>

      {/* CTA Daftar */}
      <section className="py-16 px-6 bg-violet-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Siap Bertransaksi Lebih Aman?</h2>
        <p className="mb-6 text-gray-600">Gabung dan rasakan kemudahan Rekber untuk bisnis Anda.</p>
        <Link
          href="/register"
          className="bg-violet-700 text-white px-6 py-3 rounded-full shadow hover:bg-violet-800"
        >
          Daftar Gratis
        </Link>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
