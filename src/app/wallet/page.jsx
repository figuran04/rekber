"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const WalletPage = () => {
  return (
    <div className="min-h-screen">
      <Appbar value="Wallet" />
      <p>Wallet Page</p>
      <BottomNav />
    </div>
  )
}

export default WalletPage
