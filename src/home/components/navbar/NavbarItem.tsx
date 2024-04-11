'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
  href: string
  title: string
  icon: React.ReactNode
}

export const NavbarItem = ( { href, title, icon }: IProps ) => {

  const pathname = usePathname()

  return (
    <Link
      href={ href }
      className={
        `px-3 py-4 flex items-center justify-center text-white gap-2
        ${ pathname === href ? 'text-emerald-500' : '' }
        hover:text-emerald-500 transition-colors duration-300 ease-in-out
        `
      }
    >
      <div>
        { icon }
      </div>
      <span className="font-semibold"> { title } </span>
    </Link>
  )
}
