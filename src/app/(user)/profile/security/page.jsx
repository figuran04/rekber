"use client"

import Appbar from "@/components/Appbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SecurityPage = () => {
  const router = useRouter()

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [enable2FA, setEnable2FA] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert("Konfirmasi password tidak cocok.")
      return
    }

    // Simulasi proses ubah password
    console.log({ currentPassword, newPassword, enable2FA })
    alert("Keamanan akun diperbarui.")
    router.push("/profile")
  }

  return (
    <main className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-4 space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Password Saat Ini</label>
          <input
            required
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password Baru</label>
          <input
            required
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Konfirmasi Password Baru</label>
          <input
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="enable2fa"
            checked={enable2FA}
            onChange={() => setEnable2FA(!enable2FA)}
            className="h-4 w-4"
          />
          <label htmlFor="enable2fa" className="text-sm text-gray-700">
            Aktifkan autentikasi dua langkah (2FA)
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800"
        >
          Simpan Keamanan
        </button>
      </form>
    </main>
  )
}

export default SecurityPage
