'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

const searchData: SearchResult[] = [
  // Специальности
  {
    title: 'Монтаж и эксплуатация оборудования и систем газоснабжения',
    description: 'Специальность 08.02.08 - подготовка специалистов в области газоснабжения. Срок обучения: 3 года 10 месяцев/2 года 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },
  {
    title: 'Компьютерные системы и комплексы',
    description: 'Специальность 09.02.01 - подготовка специалистов в области компьютерных систем. Срок обучения: 3 года 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },
  {
    title: 'Монтаж, наладка и эксплуатация электрооборудования',
    description: 'Специальность 08.02.09 - подготовка специалистов в области электрооборудования. Срок обучения: 2 года 10 месяцев/1 год 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },
  {
    title: 'Техническое обслуживание и ремонт автотранспорта',
    description: 'Специальность 23.02.07 - подготовка специалистов по ремонту автотранспорта. Срок обучения: 3 года 10 месяцев/2 года 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },
  {
    title: 'Финансы',
    description: 'Специальность 38.02.06 - подготовка специалистов в области финансов. Срок обучения: 2 года 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },
  {
    title: 'Юриспруденция',
    description: 'Специальность 40.02.04 - подготовка специалистов в области права. Срок обучения: 2 года 10 месяцев/1 год 10 месяцев',
    url: '/specialties',
    category: 'Специальности'
  },

  // Абитуриентам
  {
    title: 'Документы для поступления',
    description: 'Полный список необходимых документов для поступления на очную и заочную формы обучения',
    url: '/applicants',
    category: 'Абитуриентам'
  },
  {
    title: 'Сроки приема документов',
    description: 'Информация о сроках приема документов на все формы обучения. Прием начинается с 20 июня',
    url: '/applicants',
    category: 'Абитуриентам'
  },
  {
    title: 'Общежитие',
    description: 'Информация о предоставлении общежития. Количество мест - 100',
    url: '/applicants',
    category: 'Абитуриентам'
  },
  {
    title: 'Медицинский осмотр',
    description: 'Требования к медицинскому осмотру и справке формы 086-У',
    url: '/applicants',
    category: 'Абитуриентам'
  },

  // О нас
  {
    title: 'История техникума',
    description: 'История создания и развития СПЭТ с 1929 года',
    url: '/about',
    category: 'О нас'
  },
  {
    title: 'Руководство техникума',
    description: 'Информация о директоре и руководящем составе техникума',
    url: '/about',
    category: 'О нас'
  },
  {
    title: 'Материально-техническая база',
    description: 'Информация об учебных корпусах, лабораториях и оборудовании',
    url: '/about',
    category: 'О нас'
  },

  // Студентам
  {
    title: 'Расписание занятий',
    description: 'Актуальное расписание занятий для всех групп',
    url: '/students',
    category: 'Студентам'
  },
  {
    title: 'Электронная библиотека',
    description: 'Доступ к учебным материалам и методическим пособиям',
    url: '/students',
    category: 'Студентам'
  },
  {
    title: 'Практика и стажировки',
    description: 'Информация о местах практики и стажировках',
    url: '/students',
    category: 'Студентам'
  },

  // Новости
  {
    title: 'Новости техникума',
    description: 'Актуальные новости и события из жизни техникума',
    url: '/news',
    category: 'Новости'
  },
  {
    title: 'Мероприятия и конкурсы',
    description: 'Информация о предстоящих и прошедших мероприятиях',
    url: '/news',
    category: 'Новости'
  },

  // Газета
  {
    title: 'Газета "Мой СПЭТ"',
    description: 'Студенческая газета техникума с новостями и статьями',
    url: '/newspaper',
    category: 'Газета'
  },

  // Контакты
  {
    title: 'Контакты приемной комиссии',
    description: 'Телефон: 8-857-444-27-12, Email: spet1929@yandex.ru',
    url: '/applicants',
    category: 'Контакты'
  },
  {
    title: 'Адрес техникума',
    description: 'ЛНР, г.о. Стаханов, г. Стаханов, ул. Ленина, д. 20',
    url: '/about',
    category: 'Контакты'
  },
  {
    title: 'Режим работы',
    description: 'Пн-Пт: 8:00-16:00, Сб-Вс: выходной',
    url: '/applicants',
    category: 'Контакты'
  }
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchTerms = query.toLowerCase().split(' ')
    const filtered = searchData.filter(item => {
      const titleMatch = searchTerms.some(term =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      )
      return titleMatch
    })

    // Сортировка результатов: сначала точные совпадения в заголовке
    filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase()
      const bTitle = b.title.toLowerCase()
      const query = searchQuery.toLowerCase()
      
      if (aTitle.includes(query) && !bTitle.includes(query)) return -1
      if (!aTitle.includes(query) && bTitle.includes(query)) return 1
      return 0
    })

    setResults(filtered)
  }, [searchQuery])

  useEffect(() => {
    handleSearch(searchQuery)
  }, [searchQuery, handleSearch])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleResultClick = (url: string) => {
    router.push(url)
    onClose()
    setSearchQuery('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl mx-4">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Поиск по сайту..."
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="mb-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => handleResultClick(result.url)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">{result.title}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {result.category}
                  </span>
                </div>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        )}

        {searchQuery && results.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            Ничего не найдено
          </div>
        )}
      </div>
    </div>
  )
} 