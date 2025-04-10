import Link from 'next/link'

import { NavbarLogged } from './navbar-logged'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-16 p-2.5 px-4 bg-amber-600 shadow-md shadow-zinc-700">
      <Link href="/">
        <h1 className="font-medium text-2xl hover:brightness-90 transition">
          UniStore
        </h1>
      </Link>

      <NavbarLogged />
    </nav>
  )
}
