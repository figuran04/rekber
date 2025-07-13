"use client"

import Appbar from "@/components/Appbar"
import { useParams, useRouter } from "next/navigation"

const DisputeDetailPage = () => {
  const { id } = useParams()
  const router = useRouter()

  // Dummy data untuk sengketa
  const dispute = {
    id,
    orderId: "TRX123",
    title: "Barang tidak dikirim",
    status: "Diproses", // "Diproses", "Selesai", "Ditolak"
    createdAt: "2025-07-08",
    description: "Sudah transfer, tapi barang belum dikirim selama 3 hari.",
    proofImage: "/bukti-transfer.jpg", // null jika tidak ada
    result: null, // jika sudah selesai, isi seperti "Dana dikembalikan"
  }

  const handleCancel = () => {
    const confirmCancel = confirm("Yakin ingin membatalkan sengketa ini?")
    if (confirmCancel) {
      alert("Sengketa dibatalkan.") // Simulasi
      router.push("/dispute")
    }
  }

  return (
    <main className="p-4 space-y-6">
      <div className="bg-white rounded-xl shadow p-4 space-y-2">
        <h2 className="text-xl font-semibold">{dispute.title}</h2>
        <p className="text-sm text-gray-500">ID Order: {dispute.orderId}</p>
        <p className="text-sm text-gray-500">Dibuat: {dispute.createdAt}</p>
        <span
          className={`inline-block text-xs px-3 py-1 rounded-full capitalize ${dispute.status === "Selesai"
            ? "bg-green-100 text-green-700"
            : dispute.status === "Ditolak"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {dispute.status}
        </span>
      </div>

      {/* Deskripsi */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-medium mb-1">Deskripsi Masalah</h3>
        <p className="text-sm text-gray-700">{dispute.description}</p>
      </div>

      {/* Bukti Transfer (jika ada) */}
      {dispute.proofImage && (
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-medium mb-1">Bukti Terlampir</h3>
          <img
            src={dispute.proofImage}
            alt="Bukti"
            className="w-full rounded-lg"
          />
        </div>
      )}

      {/* Hasil Sengketa */}
      {dispute.status === "Selesai" && dispute.result && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl shadow">
          <p className="text-sm font-medium">Hasil:</p>
          <p className="text-sm">{dispute.result}</p>
        </div>
      )}

      {/* Tombol Batalkan jika masih diproses */}
      {dispute.status === "Diproses" && (
        <button
          onClick={handleCancel}
          className="w-full bg-white border border-red-500 text-red-600 py-2 rounded-xl hover:bg-red-50"
        >
          Batalkan Sengketa
        </button>
      )}
    </main>
  )
}

export default DisputeDetailPage
