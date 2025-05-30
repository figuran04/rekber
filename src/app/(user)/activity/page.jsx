"use client"

import Appbar from "@/components/Appbar"
import BottomNav from "@/components/BottomNav"

const ActivityPage = () => {
  return (
    <div className="min-h-screen">
      <Appbar value="Activity" />
      <p>Activity Page</p>
      <BottomNav />
    </div>
  )
}

export default ActivityPage
