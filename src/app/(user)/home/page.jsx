import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const HomePage = () => {
  return (
    <main className="p-4 space-y-6">
      {/* Ringkasan Saldo */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Saldo Anda</h2>
        <p className="text-2xl font-bold text-violet-700">Rp1.500.000</p>
        <div className="mt-4 flex gap-4">
          <button className="bg-violet-700 text-white px-4 py-2 rounded-full text-sm">Top Up</button>
          <button className="bg-white border border-violet-700 text-violet-700 px-4 py-2 rounded-full text-sm">Tarik Dana</button>
        </div>
      </div>

      {/* Transaksi Terakhir */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Transaksi Terakhir</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-sm">
            <span>Beli Jasa Desain</span>
            <span className="text-green-600">Selesai</span>
          </li>
          <li className="flex justify-between text-sm">
            <span>Order Website</span>
            <span className="text-yellow-500">Menunggu</span>
          </li>
          <li className="flex justify-between text-sm">
            <span>Bayar Hosting</span>
            <span className="text-red-500">Dibatalkan</span>
          </li>
        </ul>
      </div>

      {/* Tombol Aksi Cepat */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-violet-700 text-white py-3 rounded-xl shadow text-center text-sm font-medium">
          Kirim Dana
        </button>
        <button className="bg-violet-700 text-white py-3 rounded-xl shadow text-center text-sm font-medium">
          Minta Dana
        </button>
      </div>
    </main>
  )
}

export default HomePage
