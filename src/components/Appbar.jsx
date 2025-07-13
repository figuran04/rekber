"use client"

import { List as ListIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Appbar = ({ value }) => {
  const router = useRouter()

  return (
    <div className="flex w-full items-center bg-violet-700 text-white gap-4 p-4 sticky top-0">
      <button onClick={() => console.log("Open menu")} className="cursor-pointer">
        <ListIcon size={24} weight="bold" />
      </button>
      <p className="font-semibold text-xl">
        <a href="/">Rekber</a>
      </p>
      <p className="font-semibold text-xl">{value}</p>
    </div>
  )
}

export default Appbar
