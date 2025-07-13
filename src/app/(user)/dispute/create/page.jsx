"use client"

import Appbar from "@/components/Appbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

const CreateDisputePage = () => {
  const router = useRouter()

  // Dummy daftar order aktif
  const orders = [
    { id: "TRX123", title: "Pembuatan Logo" },
    { id: "TRX124", title: "Website Portfolio" },
  ]

  const [selectedOrder, setSelectedOrder] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [proof, setProof] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulasi submit
    console.log({
      selectedOrder,
      title,
      description,
      proof,
    })

    alert("Sengketa berhasil diajukan.")
    router.push("/dispute")
  }

  return (
    <main className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-4 space-y-4"
      >
        {/* Pilih Order */}
        <div>
          <label className="text-sm font-medium">Pilih Transaksi</label>
          <select
            required
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="">-- Pilih Order --</option>
            {orders.map((order) => (
              <option key={order.id} value={order.id}>
                {order.id} – {order.title}
              </option>
            ))}
          </select>
        </div>

        {/* Judul */}
        <div>
          <label className="text-sm font-medium">Judul Sengketa</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Barang tidak diterima"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="text-sm font-medium">Deskripsi Masalah</label>
          <textarea
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Jelaskan masalah yang terjadi secara detail..."
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* Upload Bukti */}
        <div>
          <label className="text-sm font-medium">Upload Bukti (opsional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProof(e.target.files[0])}
            className="mt-1 w-full text-sm"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded font-semibold hover:bg-violet-800"
        >
          Ajukan Sengketa
        </button>
      </form>
    </main>
  )
}

export default CreateDisputePage
