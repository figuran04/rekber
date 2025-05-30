"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      <Appbar value="Profile" />
      <p>Profile Page</p>
      <BottomNav />
    </div>
  )
}

export default ProfilePage
