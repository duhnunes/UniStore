import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full p-2.5 px-4 bg-amber-600 shadow-md shadow-zinc-700">
      <Link href="/">
        <h1 className="font-medium text-2xl hover:brightness-90 transition">
          UniStore
        </h1>
      </Link>
      <section className="">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="rounded-full size-10 cursor-pointer hover:brightness-75 transition"
          >
            <Avatar>
              <AvatarImage src="https://github.com/duhnunes.png" />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-medium" align="end">
            <div className="flex justify-end">
              <DropdownMenuLabel className="text-xs text-zinc-400">
                DuHNunes
              </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </nav>
  )
}
