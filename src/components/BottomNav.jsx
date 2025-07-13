"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChatCircleIcon,
  HouseIcon,
  ReceiptIcon,
  UserCircleIcon,
  WalletIcon,
} from "@phosphor-icons/react"

const BottomNav = () => {
  const pathname = usePathname()

  const navItems = [
    // { href: "/home", icon: HouseIcon },
    { href: "/chat", icon: ChatCircleIcon },
    { href: "/activity", icon: ReceiptIcon },
    { href: "/wallet", icon: WalletIcon },
    { href: "/profile", icon: UserCircleIcon },
  ]

  return (
    <div className="fixed bottom-0 flex items-center justify-around w-full py-4 bg-gray-200">
      {navItems.map(({ href, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link key={href} href={href}>
            <Icon
              size={32}
              weight={isActive ? "fill" : "regular"}
              className={isActive ? "text-violet-700" : "text-gray-500"}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default BottomNav
