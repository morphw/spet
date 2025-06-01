'use client'

import { useState } from 'react'
import Link from 'next/link'
import SearchModal from './SearchModal'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
          aria-label="Поиск"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              О нас
            </Link>
            <Link href="/specialties" className="text-gray-700 hover:text-blue-600">
              Специальности
            </Link>
            <Link href="/applicants" className="text-gray-700 hover:text-blue-600">
              Абитуриентам
            </Link>
            <Link href="/students" className="text-gray-700 hover:text-blue-600">
              Студентам
            </Link>
            <Link href="/newspaper" className="text-gray-700 hover:text-blue-600">
              Газета "Мой СПЭТ"
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600">
              Новости
            </Link>
          </nav>
        </div>
      )}

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  )
}

export default MobileMenu 