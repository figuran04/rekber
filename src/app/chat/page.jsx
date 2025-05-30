"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const ChatPage = () => {
  return (
    <div className="min-h-screen">
      <Appbar value="Chat" />
      <p>Chat Page</p>
      <BottomNav />
    </div>
  )
}

export default ChatPage
