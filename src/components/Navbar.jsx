import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-6 py-4">
      <Link href="/" className="text-indigo-500 font-bold text-3xl">Rekber.</Link>
      <ul className="flex gap-6 text-right">
        <li>
          <Link href="/wallet">Wallet</Link>
        </li>
        <li>Feature</li>
        <li>Support</li>
        <li><Link href="/about">About</Link></li>
        <li>Download</li>
      </ul>
    </div>
  )
}

export default Navbar
