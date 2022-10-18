import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="h-20 px-4 shadow-md">
      <nav className="h-full mx-auto max-w-screen-lg flex items-center px-4 justify-between">
        <Link href="/">
          <a className="text-3xl font-cursive capitalize">GastroBudget</a>
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
