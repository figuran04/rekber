"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"
import { usePathname } from "next/navigation"

export default function UserLayout({ children }) {
  const pathname = usePathname()

  // Tentukan judul berdasarkan pathname (atau bisa dari metadata di tiap page)
  const getPageTitle = () => {
    if (pathname.startsWith("/home")) return "Home"
    if (pathname.startsWith("/chat")) return "Chat"
    if (pathname.startsWith("/wallet")) return "Wallet"
    if (pathname.startsWith("/activity")) return "Activity"
    if (pathname.startsWith("/profile")) return "Profile"
    if (pathname.startsWith("/orders")) return "Pesanan Saya"
    if (pathname.startsWith("/order/")) return "Detail Pesanan"
    if (pathname.startsWith("/dispute")) return "Sengketa"
    return "Rekber"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Appbar value={getPageTitle()} />
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  )
}
