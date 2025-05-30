import { ChatCircleIcon, HouseIcon, ReceiptIcon, UserCircleIcon, WalletIcon } from "@phosphor-icons/react"
import Link from "next/link"

const BottomNav = () => {
  return (
    <div className="flex justify-around items-center fixed bottom-0 w-full py-4 bg-gray-200">
      <Link href="/">
        <HouseIcon size={32} />
      </Link>
      <Link href="/chat">
        <ChatCircleIcon size={32} />
      </Link>
      <Link href="/activity">
        <ReceiptIcon size={32} />
      </Link>
      <Link href="/wallet">
        <WalletIcon size={32} />
      </Link>
      <Link href="/profile">
        <UserCircleIcon size={32} />
      </Link>
    </div>
  )
}

export default BottomNav
