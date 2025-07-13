"use client"

import Image from "next/image"
import Link from "next/link"

const ProfilePage = () => {
  // Dummy user data
  const user = {
    name: "Full Name",
    email: "example@example.com",
    phone: "+628123456789",
    avatar: "/avatar1.png",
    verified: true,
  }

  return (
    <main className="flex-1 p-4 space-y-6">
      {/* Informasi Pengguna */}
      <div className="p-6 text-center bg-white shadow rounded-xl">
        <Image
          src={user.avatar}
          alt={user.name}
          width={80}
          height={80}
          className="object-cover mx-auto rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-500">{user.phone}</p>
        {user.verified ? (
          <span className="inline-block px-3 py-1 mt-2 text-xs text-green-600 bg-green-100 rounded-full">
            Akun Terverifikasi
          </span>
        ) : (
          <span className="inline-block px-3 py-1 mt-2 text-xs text-yellow-600 bg-yellow-100 rounded-full">
            Belum Terverifikasi
          </span>
        )}
        <div className="mt-4">
          <Link
            href="/profile/edit"
            className="text-sm font-medium text-violet-700 hover:underline"
          >
            Edit Profil
          </Link>
        </div>
      </div>

      {/* Menu Tambahan */}
      <div className="p-4 space-y-4 bg-white shadow rounded-xl">
        <Link href="/profile/security" className="block text-sm text-gray-700 hover:text-violet-700">
          🔒 Keamanan & Sandi
        </Link>
        <Link href="/profile/verification" className="block text-sm text-gray-700 hover:text-violet-700">
          📄 Verifikasi Identitas
        </Link>
        <Link href="/help" className="block text-sm text-gray-700 hover:text-violet-700">
          ❓ Bantuan & FAQ
        </Link>
        <button className="w-full text-sm text-left text-red-600 hover:underline">
          🚪 Keluar
        </button>
      </div>
    </main>

  )
}

export default ProfilePage
