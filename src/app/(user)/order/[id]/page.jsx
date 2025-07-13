"use client"

import Appbar from "@/components/Appbar"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import Link from "next/link"

const OrderDetailPage = () => {
  const { id } = useParams()
  const router = useRouter()

  // Dummy data untuk satu transaksi
  const order = {
    id,
    title: "Jasa Pembuatan Logo",
    buyer: "Andi",
    seller: "Kamu",
    amount: 150000,
    status: "dipesan", // bisa: dipesan, dikirim, selesai, dibatalkan
    date: "2025-07-09",
    description: "Logo untuk brand fashion premium",
    proofImage: null, // "/proof.jpg" jika tersedia
  }

  const formatRupiah = (num) =>
    "Rp" + num.toLocaleString("id-ID", { minimumFractionDigits: 0 })

  // Simulasi aksi
  const handleAction = (action) => {
    alert(`Aksi: ${action} untuk Order #${id}`)
  }

  return (
    <main className="p-4 space-y-6">
      {/* Info Utama */}
      <div className="bg-white rounded-xl shadow p-4 space-y-2">
        <h2 className="text-xl font-semibold">{order.title}</h2>
        <p className="text-sm text-gray-500">{order.date}</p>
        <p className="text-sm text-gray-500">Pembeli: {order.buyer}</p>
        <p className="text-sm text-gray-500">Penjual: {order.seller}</p>
        <p className="text-lg font-bold text-violet-700">
          {formatRupiah(order.amount)}
        </p>
        <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 capitalize">
          {order.status}
        </span>
      </div>

      {/* Deskripsi */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-medium mb-1">Deskripsi</h3>
        <p className="text-sm text-gray-600">{order.description}</p>
      </div>

      {/* Bukti Transfer (opsional) */}
      {order.proofImage && (
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-medium mb-1">Bukti Transfer</h3>
          <img src={order.proofImage} alt="Bukti transfer" className="w-full rounded-lg" />
        </div>
      )}

      {/* Aksi (berdasarkan status) */}
      {order.status === "dipesan" && (
        <div className="flex gap-4">
          <button
            onClick={() => handleAction("Kirim")}
            className="flex-1 bg-violet-700 text-white py-2 rounded-xl"
          >
            Kirim
          </button>
          <button
            onClick={() => handleAction("Batalkan")}
            className="flex-1 bg-white border border-red-500 text-red-500 py-2 rounded-xl"
          >
            Batalkan
          </button>
        </div>
      )}

      {order.status === "dikirim" && (
        <button
          onClick={() => handleAction("Selesaikan")}
          className="w-full bg-green-600 text-white py-2 rounded-xl"
        >
          Tandai Selesai
        </button>
      )}

      {/* Ajukan Sengketa (opsional) */}
      <div className="mt-6 text-center">
        <Link href="/dispute" className="text-sm text-red-500 underline">
          Ajukan Sengketa
        </Link>
      </div>
    </main>
  )
}

export default OrderDetailPage
