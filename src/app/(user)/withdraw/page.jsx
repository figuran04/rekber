"use client"

import Appbar from "@/components/Appbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

const WithdrawPage = () => {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [bank, setBank] = useState("bca")
  const [accountNumber, setAccountNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Penarikan sebesar Rp${amount} ke rekening ${accountNumber} berhasil diajukan`)
    router.push("/wallet")
  }

  return (
    <main className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-4 space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Jumlah</label>
          <input
            type="number"
            required
            min={10000}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Minimal Rp10.000"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Bank Tujuan</label>
          <select
            required
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="bca">BCA</option>
            <option value="bni">BNI</option>
            <option value="bri">BRI</option>
            <option value="mandiri">Mandiri</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">No. Rekening</label>
          <input
            type="text"
            required
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Masukkan nomor rekening"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800"
        >
          Ajukan Penarikan
        </button>
      </form>
    </main>
  )
}

export default WithdrawPage
