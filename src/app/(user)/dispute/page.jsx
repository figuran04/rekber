"use client"

import Appbar from "@/components/Appbar"
import Link from "next/link"

const DisputePage = () => {
  // Dummy list sengketa
  const disputes = [
    {
      id: "DSP001",
      orderId: "TRX123",
      title: "Pembayaran tidak sesuai",
      status: "Diproses",
      createdAt: "2025-07-08",
    },
    {
      id: "DSP002",
      orderId: "TRX124",
      title: "Barang tidak dikirim",
      status: "Selesai",
      createdAt: "2025-07-05",
    },
  ]

  return (
    <main className="p-4 space-y-6">
      {/* Tombol Ajukan */}
      <div className="flex justify-end">
        <Link
          href="/dispute/create"
          className="bg-violet-700 text-white px-4 py-2 rounded-full text-sm shadow"
        >
          + Ajukan Sengketa
        </Link>
      </div>

      {/* Daftar Sengketa */}
      <div className="space-y-3">
        {disputes.length === 0 ? (
          <p className="text-center text-sm text-gray-500">Belum ada sengketa yang diajukan.</p>
        ) : (
          disputes.map((dsp) => (
            <Link
              key={dsp.id}
              href={`/dispute/${dsp.id}`}
              className="block bg-white rounded-xl shadow p-4 hover:bg-violet-50 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{dsp.title}</p>
                  <p className="text-xs text-gray-500">
                    Order: {dsp.orderId} • {dsp.createdAt}
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full capitalize ${dsp.status === "Selesai"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {dsp.status}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  )
}

export default DisputePage
