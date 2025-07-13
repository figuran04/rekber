"use client"

import Appbar from "@/components/Appbar"
import { useRouter } from "next/navigation"
import { useState } from "react"

const EditProfilePage = () => {
  const router = useRouter()

  // Dummy data awal user
  const [name, setName] = useState("Dika Elsaputra")
  const [email, setEmail] = useState("dika@example.com")
  const [phone, setPhone] = useState("+628123456789")
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulasi update profil
    console.log({ name, email, phone, avatar })
    alert("Profil berhasil diperbarui.")
    router.push("/profile")
  }

  return (
    <main className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-4 space-y-4"
      >
        {/* Upload Avatar */}
        <div>
          <label className="text-sm font-medium">Foto Profil</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="w-full mt-1 text-sm"
          />
        </div>

        {/* Nama */}
        <div>
          <label className="text-sm font-medium">Nama Lengkap</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* Nomor HP */}
        <div>
          <label className="text-sm font-medium">No. HP</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* Tombol Simpan */}
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800"
        >
          Simpan Perubahan
        </button>
      </form>
    </main>
  )
}

export default EditProfilePage
