import Image from 'next/image'
import NewsCard from '@/components/NewsCard'
import Link from 'next/link'

const mockNews = [
  {
    id: 1,
    title: 'День открытых дверей',
    description: 'Приглашаем всех желающих познакомиться с нашим техникумом и узнать больше о специальностях.',
    imageUrl: 'https://placehold.co/800x400/blue/white?text=День+открытых+дверей',
    date: '15 мая 2024'
  },
  {
    id: 2,
    title: 'Победа в конкурсе профмастерства',
    description: 'Наши студенты заняли первое место в республиканском конкурсе профессионального мастерства.',
    imageUrl: 'https://placehold.co/800x400/blue/white?text=Конкурс+профмастерства',
    date: '10 мая 2024'
  },
  {
    id: 3,
    title: 'Начало приёма документов',
    description: 'Объявляем о начале приёма документов на 2024-2025 учебный год.',
    imageUrl: 'https://placehold.co/800x400/blue/white?text=Прием+документов',
    date: '1 мая 2024'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span className="block text-2xl mb-2">Государственное бюджетное образовательное учреждение</span>
                <span className="block text-2xl mb-2">среднего профессионального образования</span>
                <span className="block text-2xl mb-2">Луганской Народной Республики</span>
                <span className="block text-3xl font-extrabold">"Стахановский промышленно-экономический техникум"</span>
              </h1>
              <p className="text-xl mb-6">
                Качественное образование для успешного будущего
              </p>
              <Link 
                href="/newspaper"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Читать газету "Мой СПЭТ"
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/Screenshot_1-2-877x320.jpg"
                alt="Здание Стахановского промышленно-экономического техникума"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">О техникуме</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Качественное образование</h3>
              <p className="text-gray-600">Современные программы обучения и квалифицированные преподаватели</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные преподаватели</h3>
              <p className="text-gray-600">Профессиональный педагогический состав с богатым опытом работы</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Трудоустройство</h3>
              <p className="text-gray-600">Помощь в трудоустройстве и построении карьеры после обучения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контактная информация</h2>
          <div className="max-w-3xl mx-auto grid gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">294005, Луганская Народная Республика, г. о. Стаханов, город Стаханов, ул. Ленина, д. 20</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Контактный телефон</h3>
                <a href="tel:+79591340358" className="text-blue-600 hover:text-blue-800">+7 (959)-134-03-58</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Электронная почта</h3>
                <a href="mailto:spet1929@yandex.ru" className="text-blue-600 hover:text-blue-800">spet1929@yandex.ru</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
                <p className="text-gray-600">пн — пт: 08:00— 16:30</p>
                <p className="text-gray-600">сб — вс: выходные</p>
                <p className="text-gray-600">праздничные дни — выходные</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Последние новости</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 