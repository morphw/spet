'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import SearchModal from './SearchModal'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
            <Image 
              src="/spetLogo.png"
              alt="Логотип СПЭТ" 
              width={60} 
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">ГБОУ СПО ЛНР "СПЭТ"</h1>
              <p className="text-sm text-gray-600">ЛНР, г.о. Стаханов, г. Стаханов, ул. Ленина, д. 20</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600">О нас</Link>
              <Link href="/specialties" className="text-gray-700 hover:text-blue-600">Специальности</Link>
              <Link href="/applicants" className="text-gray-700 hover:text-blue-600">Абитуриентам</Link>
              <Link href="/students" className="text-gray-700 hover:text-blue-600">Студентам</Link>
              <Link href="/newspaper" className="text-gray-700 hover:text-blue-600">Газета "Мой СПЭТ"</Link>
              {/* <Link href="/news" className="text-gray-700 hover:text-blue-600">Новости</Link> */}
            </nav>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
              aria-label="Поиск"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <MobileMenu />
        </div>
      </div>

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  )
}

export default Header 