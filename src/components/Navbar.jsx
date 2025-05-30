import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-6 py-4">
      <Link href="/" className="text-indigo-500 font-bold text-3xl">Rekber.</Link>
      <ul className="flex gap-6 text-right">
        <li><Link href="/wallet">Wallet</Link></li>
        <li><Link href="/feature">Feature</Link></li>
        <li><Link href="/support">Support</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/download">Download</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
