"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"
import { useState } from "react"

const ActivityPage = () => {
  const [filter, setFilter] = useState("semua")

  const activities = [
    {
      id: 1,
      title: "Pembelian Jasa Logo",
      date: "2025-07-09",
      status: "Selesai",
      amount: -200000,
    },
    {
      id: 2,
      title: "Top Up Saldo",
      date: "2025-07-08",
      status: "Berhasil",
      amount: 500000,
    },
    {
      id: 3,
      title: "Tarik Dana ke Bank BCA",
      date: "2025-07-07",
      status: "Diproses",
      amount: -150000,
    },
  ]

  const filtered = activities.filter((a) =>
    filter === "semua" ? true : a.status.toLowerCase() === filter
  )

  const formatRupiah = (num) =>
    "Rp" + num.toLocaleString("id-ID", { minimumFractionDigits: 0 })

  return (
    <main className="p-4 space-y-6 flex-1">
      {/* Filter */}
      <div className="flex gap-2 text-sm overflow-x-auto">
        {["semua", "selesai", "berhasil", "diproses"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded-full border ${filter === status
              ? "bg-violet-700 text-white border-violet-700"
              : "text-gray-600 border-gray-300"
              }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Daftar Aktivitas */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">Tidak ada aktivitas ditemukan.</p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <div className="text-right">
                <p
                  className={
                    item.amount < 0 ? "text-red-600" : "text-green-600"
                  }
                >
                  {item.amount < 0 ? "-" : "+"} {formatRupiah(Math.abs(item.amount))}
                </p>
                <p className="text-xs text-gray-500">{item.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default ActivityPage
