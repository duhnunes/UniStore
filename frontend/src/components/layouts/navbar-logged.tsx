'use client'

import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
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
        <div className="flex justify-between">
          <DropdownMenuItem className="text-red-500 cursor-pointer">
            <LogOut className="size-4 text-red-500" />
          </DropdownMenuItem>
          <DropdownMenuLabel className="text-xs text-zinc-400">
            DuHNunes
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <h2>Login</h2>
  )
}
