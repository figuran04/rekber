"use client"

import Link from "next/link"
import { useState } from "react"

const OrdersPage = () => {
  const [status, setStatus] = useState("dipesan")

  const allOrders = [
    {
      id: "TRX123",
      title: "Jasa Pembuatan Logo",
      buyer: "Andi",
      amount: 150000,
      status: "dipesan",
      date: "2025-07-09",
    },
    {
      id: "TRX124",
      title: "Website Portfolio",
      buyer: "Putri",
      amount: 500000,
      status: "dikirim",
      date: "2025-07-08",
    },
    {
      id: "TRX125",
      title: "Ilustrasi Karakter",
      buyer: "Bayu",
      amount: 200000,
      status: "selesai",
      date: "2025-07-06",
    },
    {
      id: "TRX126",
      title: "Desain Feed IG",
      buyer: "Lina",
      amount: 100000,
      status: "dibatalkan",
      date: "2025-07-05",
    },
  ]

  const filtered = allOrders.filter((o) => o.status === status)

  const formatRupiah = (num) =>
    "Rp" + num.toLocaleString("id-ID", { minimumFractionDigits: 0 })

  return (
    <main className="p-4 flex-1 space-y-4 bg-gray-50">
      {/* Tab Status */}
      <div className="flex gap-2 overflow-x-auto text-sm no-scrollbar">
        {["dipesan", "dikirim", "selesai", "dibatalkan"].map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`px-4 py-1 rounded-full border transition whitespace-nowrap ${status === s
              ? "bg-violet-700 text-white border-violet-700"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Daftar Pesanan */}
      <section className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            Tidak ada pesanan dengan status "{status}"
          </p>
        ) : (
          filtered.map((order) => (
            <Link
              key={order.id}
              href={`/order/${order.id}`}
              className="block bg-white rounded-xl shadow p-4 hover:bg-violet-50 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.title}</p>
                  <p className="text-xs text-gray-500">
                    {order.date} • {order.buyer}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-violet-700">
                    {formatRupiah(order.amount)}
                  </p>
                  <p className="text-xs capitalize text-gray-500">
                    {order.status}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </main>
  )
}

export default OrdersPage
