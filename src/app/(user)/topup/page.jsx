"use client"

import Appbar from "@/components/Appbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

const TopupPage = () => {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("bca")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Top Up sebesar Rp${amount} melalui ${method.toUpperCase()} berhasil diajukan`)
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
            placeholder="Contoh: 100000"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Metode Pembayaran</label>
          <select
            required
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="bca">Transfer BCA</option>
            <option value="gopay">GoPay</option>
            <option value="qris">QRIS</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800"
        >
          Ajukan Top Up
        </button>
      </form>
    </main>
  )
}

export default TopupPage
