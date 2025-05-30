"use client"

import { ArrowLeftIcon } from "@phosphor-icons/react"
import { useRouter } from 'next/navigation';

const Appbar = ({ value }) => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center bg-violet-700 text-white gap-4 p-4 sticky top-0">
      <button onClick={() => router.back()} className="cursor-pointer">
        <ArrowLeftIcon size={24} weight="bold" />
      </button>
      <p className="font-semibold text-xl">{value}</p>
    </div>
  )
}

export default Appbar
