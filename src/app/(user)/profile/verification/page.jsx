"use client"

import Appbar from "@/components/Appbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

const VerificationPage = () => {
  const router = useRouter()

  // Simulasi status (bisa: "belum", "diproses", "disetujui", "ditolak")
  const [status, setStatus] = useState("belum")
  const [ktpFile, setKtpFile] = useState(null)
  const [selfieFile, setSelfieFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulasi submit ke backend
    console.log("KTP:", ktpFile)
    console.log("Selfie:", selfieFile)

    alert("Verifikasi dikirim, silakan tunggu proses pemeriksaan.")
    setStatus("diproses")
    router.push("/profile")
  }

  return (
    <main className="p-4 space-y-4">
      {/* Status */}
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm font-medium">Status Verifikasi:</p>
        <span
          className={`inline-block mt-1 text-xs px-3 py-1 rounded-full capitalize ${status === "disetujui"
            ? "bg-green-100 text-green-700"
            : status === "diproses"
              ? "bg-yellow-100 text-yellow-700"
              : status === "ditolak"
                ? "bg-red-100 text-red-600"
                : "bg-gray-200 text-gray-600"
            }`}
        >
          {status === "belum" ? "Belum diverifikasi" : status}
        </span>
      </div>

      {/* Form Upload jika belum/disetujui ulang */}
      {status !== "disetujui" && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-4 space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Unggah Foto KTP/SIM</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setKtpFile(e.target.files[0])}
              className="w-full mt-1 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Unggah Foto Selfie</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setSelfieFile(e.target.files[0])}
              className="w-full mt-1 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800"
          >
            Kirim Verifikasi
          </button>
        </form>
      )}
    </main>
  )
}

export default VerificationPage
