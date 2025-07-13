import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <Link href="/" className="text-3xl font-bold text-indigo-500">Rekber.</Link>
      <ul className="flex gap-6 text-right">
        <li><Link href="/signin">Signin</Link></li>
        <li><Link href="/signup">Signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
