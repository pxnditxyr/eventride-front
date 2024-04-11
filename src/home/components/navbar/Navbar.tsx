import { IoBulb, IoHome, IoPaw } from 'react-icons/io5'
import { NavbarItem } from './NavbarItem'
import { IoIosBus } from 'react-icons/io'

const navbarItems = [
  {
    href: '/home',
    title: 'Inicio',
    icon: <IoHome size={ 30 } />
  },
  {
    href: '/about',
    title: 'Sobre Nosotros',
    icon: <IoPaw size={ 30 } />
  },
  {
    href: '/contact',
    title: 'Contacto',
    icon: <IoBulb size={ 30 } />
  },
  {
    href: '/services',
    title: 'Servicios',
    icon: <IoIosBus size={ 30 } />
  }
]


export const Navbar = () => {
  return (
    <nav
      className="w-full flex items-center justify-between bg-gray-800 text-white dark:bg-white/5 dark:text-black"
    >
      <div className="flex items-center justify-center gap-2 w-full">
        {
          navbarItems.map( ( item, index ) => (
            <NavbarItem key={ index } { ...item } />
          ) )
        }
      </div>
    </nav>
  )
}
