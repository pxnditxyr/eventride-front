import { Navbar } from '@/home'

interface IProps {
  children: React.ReactNode
}

export default function HomeLayout ( { children }: IProps ) {
  return (
    <main className="flex flex-col items-center gap-8 w-full min-h-screen bg-[url('/images/background.jpeg')] bg-cover bg-center">
      <Navbar />
      { children }
    </main>
  )
}
