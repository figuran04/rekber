"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"
import Image from "next/image"

const ChatPage = () => {
  // Dummy data untuk chat list
  const chats = [
    {
      id: 1,
      name: "Andi (Pembeli)",
      lastMessage: "Oke, saya tunggu ya gan",
      time: "13:40",
      unread: 2,
      avatar: "/avatar1.png",
    },
    {
      id: 2,
      name: "Toko Baju Muslim",
      lastMessage: "Barang sudah dikirim kak",
      time: "10:12",
      unread: 0,
      avatar: "/avatar2.png",
    },
    {
      id: 3,
      name: "Putri (Penjual)",
      lastMessage: "Transfernya sudah masuk ya?",
      time: "Kemarin",
      unread: 1,
      avatar: "/avatar3.png",
    },
  ]

  return (
    <main className="p-4 space-y-4 flex-1">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center hover:bg-violet-50 transition"
        >
          <div className="flex items-center gap-4">
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500 line-clamp-1">{chat.lastMessage}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{chat.time}</p>
            {chat.unread > 0 && (
              <span className="bg-violet-700 text-white text-xs px-2 py-1 rounded-full inline-block mt-1">
                {chat.unread}
              </span>
            )}
          </div>
        </div>
      ))}
    </main>
  )
}

export default ChatPage
