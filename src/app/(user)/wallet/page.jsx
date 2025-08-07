"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const WalletPage = () => {
  const transactions = [
    { id: 1, type: "Top Up", amount: 250000, date: "2025-07-08", status: "Berhasil" },
    { id: 2, type: "Tarik Dana", amount: -100000, date: "2025-07-07", status: "Diproses" },
    { id: 3, type: "Pembayaran", amount: -50000, date: "2025-07-06", status: "Berhasil" },
  ]

  const formatRupiah = (num) =>
    "Rp" + num.toLocaleString("id-ID", { minimumFractionDigits: 0 })

  return (
    <main className="flex-1">
      {/* Ringkasan Saldo */}
      <div className="bg-white p-6 shadow text-center bg-indigo-500">
        <h2 className="text-sm text-white">Saldo Rekber</h2>
        <p className="text-3xl font-bold text-white">Rp1.500.000</p>
        <div className="mt-4 flex justify-center gap-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col text-white items-center">
              <div className="bg-white w-10 aspect-square rounded-lg"></div>
              <p>Send</p>
            </div>
            <div className="flex flex-col text-white items-center">
              <div className="bg-white w-10 aspect-square rounded-lg"></div>
              <p>Recieve</p>
            </div>
            <div className="flex flex-col text-white items-center">
              <div className="bg-white w-10 aspect-square rounded-lg"></div>
              <p>Withdraw</p>
            </div>
          </div>
        </div>
      </div>

      {/* Riwayat Transaksi */}
      <div className="bg-white p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Riwayat Transaksi</h3>
        <ul className="space-y-3 text-sm">
          {transactions.map((tx) => (
            <li key={tx.id} className="flex items-center gap-3">
              <div className="border w-8 border-black aspect-square rounded-full"></div>
              <div className="flex justify-between w-full">
                <div>
                  <p className="font-medium">{tx.type}</p>
                  <p className="text-gray-500 text-xs">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className={tx.amount < 0 ? "text-red-600" : "text-green-600"}>
                    {tx.amount < 0 ? "-" : "+"} {formatRupiah(Math.abs(tx.amount))}
                  </p>
                  <p className="text-xs text-gray-500">{tx.status}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default WalletPage
