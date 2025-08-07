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
    <main className="flex-1 space-y-6">
      {/* Informasi Pengguna */}
      {/* <div className="p-6 text-center bg-white shadow rounded-xl">
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
      </div> */}
      <div className="bg-indigo-500 p-4 flex flex-col gap-2 relative">
        <div className="flex items-center gap-2">
          <div className="icon w-20 aspect-square bg-white rounded-full">
          </div>
          <div className="right text-white">
            <p className="text-xl font-semibold">Full Name</p>
            <p>username</p>
          </div>
        </div>
        <div className="flex justify-between text-white items-center">
          <p>Address</p>
          <button className="rounded-full text-indigo-500 bg-white px-4 py-1">Edit</button>
        </div>
        <div className="w-full bg-white shadow rounded-xl z-10">
          <div className="flex py-4">
            <div className="flex gap-2 w-full px-4">
              <div className="rounded-full bg-indigo-500 w-10 aspect-square"></div>
              <div>
                <p className="text-sm">Income</p>
                <p className="text-sm">Rp 200.000</p>
              </div>
            </div>
            <div className="flex gap-2 w-full px-4 border-l border-black border-l-2">
              <div className="rounded-full bg-indigo-500 w-10 aspect-square"></div>
              <div>
                <p className="text-sm">Cash Out</p>
                <p className="text-sm">Rp 200.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 absolute bottom-0 h-12 left-0 w-full"></div>
      </div>

      {/* Menu Tambahan */}
      <div className="p-4 space-y-4 m-4 bg-white shadow rounded-xl">
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
